import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  if (token && request.nextUrl.pathname.startsWith('/auth')) {
    return Response.redirect(new URL('/', request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
