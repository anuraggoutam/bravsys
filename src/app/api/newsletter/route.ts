import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// simple in-memory rate limit per IP (best-effort; resets on server restart)
const rateLimit = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQS = 10; // a bit higher for newsletter

export async function POST(req: NextRequest) {
  const { email, hp } = await req.json();

  try {
    if (hp) {
      return NextResponse.json({ message: 'OK' });
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // rate limit by IP
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const curr = rateLimit.get(ip);
    if (!curr || now - curr.ts > WINDOW_MS) {
      rateLimit.set(ip, { count: 1, ts: now });
    } else {
      curr.count += 1;
      if (curr.count > MAX_REQS) {
        return NextResponse.json(
          { message: 'Too many requests' },
          { status: 429 }
        );
      }
      rateLimit.set(ip, curr);
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { message: 'Email service not configured. Missing RESEND_API_KEY.' },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    // Send a confirmation email to subscriber
    const response = await resend.emails.send({
      from: `${process.env.RESEND_FROM || 'Bravsys <onboarding@resend.dev>'}`,
      to: email,
      subject: 'Welcome to Bravsys Newsletter!',
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
               <h2 style="background-color: #111827; color: white; padding: 10px; border-radius: 10px 10px 0 0; text-align: center;">Welcome to Bravsys Newsletter!</h2>
               <div style="padding: 20px; background-color: #fff; border-radius: 0 0 10px 10px;">
                 <p style="font-size: 16px; color: #333;">Thanks for subscribing. You'll receive our latest insights, case studies, and updates.</p>
               </div>
             </div>`,
    });

    // Notify internal team
    await resend.emails.send({
      from: `${process.env.RESEND_FROM || 'Bravsys <onboarding@resend.dev>'}`,
      to: 'info@bravsys.com',
      subject: 'New Newsletter Subscription',
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    });

    console.log('Email sent successfully!', response);
    return NextResponse.json({ message: 'Email sent successfully!', response });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Email failed to send', error },
      { status: 500 }
    );
  }
}
