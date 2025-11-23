import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import nodemailer from 'nodemailer';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'a-fallback-secret-for-development',
);

async function verifyAuth(req: NextRequest) {
    const token = cookies().get('auth-token')?.value;

    if (!token) {
        return false;
    }

    try {
        await jwtVerify(token, secret);
        return true;
    } catch (error) {
        return false;
    }
}

async function sendEmails(subject: string, body: string, recipients: { email: string; companyName: string }[]) {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    for (const recipient of recipients) {
        const personalizedBody = body.replace(/{{companyName}}/g, recipient.companyName || '');

        try {
            await transporter.sendMail({
                from: `"<${process.env.EMAIL_USER}>`,
                to: recipient.email,
                subject: subject,
                html: personalizedBody,
            });
            console.log(`Email sent to ${recipient.email}`);
        } catch (error) {
            console.error(`Failed to send email to ${recipient.email}:`, error);
        }
    }
}

export async function POST(req: NextRequest) {
  const isAuthenticated = await verifyAuth(req);
  if (!isAuthenticated) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { subject, body, recipients } = await req.json();

    if (!subject || !body || !recipients || !Array.isArray(recipients) || recipients.length === 0) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Fire and forget
    sendEmails(subject, body, recipients);

    return NextResponse.json({ message: 'Broadcast initiated' });
  } catch (error) {
    console.error('Broadcast error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
