"use server";

import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

export async function verifyPassword(data: FormData) {
  const password = data.get("password");

  if (password !== "admin") {
    return false;
  }
  cookies().set("admin", "true");
  redirect("/admin", RedirectType.replace);
}
