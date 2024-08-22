import { NextResponse, NextRequest } from "next/server";
import { verifyAuth } from "./lib/utilities/auth";

export async function middleware(request: NextRequest) {
  const jwt_token = request.cookies.get("jwt")?.value;
  const protectedPaths = ["/profile", "/carts", "/orders"];

  const verifiedToken = jwt_token && (await verifyAuth(jwt_token));

  if (!verifiedToken) {
    if (protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }

  if (verifiedToken) {
    if (request.nextUrl.pathname === "/auth" || request.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: ["/profile", "/carts", "/orders/:path*", "/auth"],
};
