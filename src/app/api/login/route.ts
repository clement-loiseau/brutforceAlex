import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  if (data?.["password"] !== "admin") {
    return NextResponse.json(
      { error: "Invalid password, please try again." },
      { status: 401 }
    );
  }
  cookies().set("admin", "true");
  return NextResponse.json({ success: "You are successfully logged in" });
}
