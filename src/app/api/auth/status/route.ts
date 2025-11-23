
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'a-fallback-secret-for-development',
);

export async function GET(req: NextRequest) {
  const token = cookies().get('auth-token')?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 200 });
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.json({ authenticated: true });
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 200 });
  }
}
