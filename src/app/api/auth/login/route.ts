
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';


const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'a-fallback-secret-for-development',
);

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const authFilePath = path.join(process.cwd(), 'auth.json');
    const authData = await fs.readFile(authFilePath, 'utf-8');
    const { username: storedUsername, password: storedPassword } = JSON.parse(authData);

    if (username === storedUsername && password === storedPassword) {
      const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60; // 1 hour
      const token = await new SignJWT({ username })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime(expirationTime)
        .setIssuedAt()
        .sign(secret);

const cookieStore = await cookies();

cookieStore.set('auth-token', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV !== 'development',
  sameSite: 'strict',
  path: '/',
  maxAge: 60 * 60, // 1 hour
});

      return NextResponse.json({ message: 'Login successful' });
    } else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
