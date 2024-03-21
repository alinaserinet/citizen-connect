import type { NextRequest } from 'next/server';

/**
 * A middleware function that checks if the current user is authenticated and
 * redirects them to the dashboard if they are not.
 *
 * @param request - The incoming request object.
 * @returns A response object if a redirect is required, or null if no redirect is necessary.
 */
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value;

  if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/dashboard', request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith('/auth')) {
    return Response.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
