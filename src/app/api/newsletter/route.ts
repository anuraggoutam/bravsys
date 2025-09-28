import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// simple in-memory rate limit per IP (best-effort; resets on server restart)
const rateLimit = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQS = 10; // a bit higher for newsletter

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, hp } = body;

    // Honeypot check
    if (hp) {
      return NextResponse.json({ message: 'OK' });
    }

    // Validate email presence and type
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { 
          message: 'Email address is required',
          field: 'email'
        },
        { status: 400 }
      );
    }

    // Trim and validate email format
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      return NextResponse.json(
        { 
          message: 'Email address cannot be empty',
          field: 'email'
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { 
          message: 'Please enter a valid email address',
          field: 'email'
        },
        { status: 400 }
      );
    }

    // Check email length
    if (trimmedEmail.length > 254) {
      return NextResponse.json(
        { 
          message: 'Email address is too long',
          field: 'email'
        },
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
      to: trimmedEmail,
      subject: 'Welcome to Bravsys Newsletter!',
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
               <h2 style="background-color: #111827; color: white; padding: 10px; border-radius: 10px 10px 0 0; text-align: center;">Welcome to Bravsys Newsletter!</h2>
               <div style="padding: 20px; background-color: #fff; border-radius: 0 0 10px 10px;">
                 <p style="font-size: 16px; color: #333;">Thanks for subscribing to our newsletter! You'll receive our latest insights, case studies, and updates about web development, digital marketing, and business growth.</p>
                 <p style="font-size: 14px; color: #666; margin-top: 15px;">If you have any questions, feel free to reach out to us at info@bravsys.com</p>
               </div>
             </div>`,
    });

    // Notify internal team
    await resend.emails.send({
      from: `${process.env.RESEND_FROM || 'Bravsys <onboarding@resend.dev>'}`,
      to: 'info@bravsys.com',
      subject: 'New Newsletter Subscription',
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
               <h2 style="color: #111827;">New Newsletter Subscription</h2>
               <p><strong>Email:</strong> ${trimmedEmail}</p>
               <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
               <p><strong>IP:</strong> ${req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'}</p>
             </div>`,
    });

    console.log('Email sent successfully!', response);
    return NextResponse.json({ message: 'Email sent successfully!', response });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('rate limit')) {
        return NextResponse.json(
          { message: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      
      if (error.message.includes('invalid email')) {
        return NextResponse.json(
          { 
            message: 'Invalid email address format',
            field: 'email'
          },
          { status: 400 }
        );
      }
    }
    
    return NextResponse.json(
      { 
        message: 'Unable to process subscription. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? (error as Error)?.message : undefined
      },
      { status: 500 }
    );
  }
}
