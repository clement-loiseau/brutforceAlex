"use server";

import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

export async function verifyPassword(state: any, data: FormData) {
  const password = data.get("password");

  if (password !== "admin") {
    return { error: "Invalid password, please try again." };
  }
  cookies().set("admin", "true");
  redirect("/admin", RedirectType.replace);
}
