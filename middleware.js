import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';

export function middleware(req) {
  const token = getCookie('laurusToken', { req });

  const url = req.nextUrl.clone();

  if (!token) {
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};


