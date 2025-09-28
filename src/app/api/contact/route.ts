import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// simple in-memory rate limit per IP (best-effort; resets on server restart)
const rateLimit = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQS = 5; // 5 requests per minute

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = (body?.name || '').toString().trim();
    const email = (body?.email || '').toString().trim();
    const message = (body?.message || '').toString().trim();
    const hp = (body?.hp || '').toString().trim();

    // honeypot
    if (hp) {
      return NextResponse.json({ message: 'OK' });
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

    // Validate required fields
    if (!name || !email || !message) {
      const missingFields = [];
      if (!name) missingFields.push('name');
      if (!email) missingFields.push('email');
      if (!message) missingFields.push('message');
      
      return NextResponse.json(
        { 
          message: `Missing required fields: ${missingFields.join(', ')}`,
          fields: missingFields
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          message: 'Please enter a valid email address',
          field: 'email'
        },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100) {
      return NextResponse.json(
        { 
          message: 'Name is too long (maximum 100 characters)',
          field: 'name'
        },
        { status: 400 }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        { 
          message: 'Email address is too long',
          field: 'email'
        },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { 
          message: 'Message is too long (maximum 2000 characters)',
          field: 'message'
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { message: 'Email service not configured. Missing RESEND_API_KEY.' },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const response = await resend.emails.send({
      from: `${process.env.RESEND_FROM || 'Bravsys <onboarding@resend.dev>'}`,
      to: 'info@bravsys.com',
      replyTo: email,
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
          <h2 style="background-color: #111827; color: white; padding: 10px; border-radius: 10px 10px 0 0; text-align: center;">New Contact Form Submission</h2>
          <div style="padding: 20px; background-color: #fff; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #333; margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #333; margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; color: #333; margin-bottom: 10px;"><strong>Message:</strong></p>
            <p style="font-size: 14px; color: #555; padding: 10px; background-color: #f1f1f1; border: 1px solid #ddd; border-radius: 5px;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully!', response });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Email failed to send',
        error: (error as Error)?.message || error,
      },
      { status: 500 }
    );
  }
}
