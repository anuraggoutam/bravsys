import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  // FIX: Await the cookies() promise first
  const cookieStore = await cookies();

  cookieStore.delete('auth-token');

  return NextResponse.json({ message: 'Logout successful' });
}
