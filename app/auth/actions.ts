"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/server";
import { resolvePostAuthPath } from "@/lib/onboarding";

export interface AuthState {
  error?: string;
}

export async function login(
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Please enter your email and password." };
  }

  const { error } = await auth.signIn.email({ email, password });

  if (error) {
    return { error: error.message || "Failed to sign in. Try again." };
  }

  redirect(await resolvePostAuthPath());
}

export async function signup(
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!name || !email || !password) {
    return { error: "Please fill in all fields." };
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }

  const { error } = await auth.signUp.email({ name, email, password });

  if (error) {
    return { error: error.message || "Failed to create account." };
  }

  redirect(await resolvePostAuthPath());
}

export async function logout(): Promise<void> {
  await auth.signOut();
  redirect("/login");
}
