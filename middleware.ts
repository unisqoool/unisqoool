import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path is a protected route
  const isProtectedRoute = pathname.startsWith("/dashboard");

  // Check if the user is authenticated
  const token = await getToken({ req: request });
  const isAuthenticated = !!token;

  // Redirect logic
  if (isProtectedRoute && !isAuthenticated) {
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  // If user is already logged in and tries to access login/signup pages
  if (
    isAuthenticated &&
    (pathname === "/auth/login" || pathname === "/auth/signup")
  ) {
    return NextResponse.redirect(new URL("/dashboard/bookings", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/login", "/auth/signup"],
};
