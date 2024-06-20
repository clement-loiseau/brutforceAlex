import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAdmin = cookies().get("admin");

  if (!isAdmin || isAdmin.value !== "true") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/admin",
};
