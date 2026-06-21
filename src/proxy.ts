import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  if (pathname === "/" && searchParams.get("enter") !== "1") {
    return NextResponse.redirect(new URL("/welcome", req.url));
  }

  return NextResponse.next();
}
