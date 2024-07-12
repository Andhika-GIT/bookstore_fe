import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Logic middleware Anda di sini
  return NextResponse.next();
}

export const config = {
  matcher: "/some-path/:path*",
};
