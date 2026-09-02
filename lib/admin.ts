import "server-only";
import { redirect } from "next/navigation";
import { requireSession } from "@/lib/session";

/**
 * Administrators, identified by email via ADMIN_EMAIL — a comma-separated
 * list (a single email also works). Every /admin page and every admin
 * server action must call this — route protection alone (proxy.ts) is not
 * sufficient authorization.
 */
export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) return false;

  const adminEmails = (process.env.ADMIN_EMAIL ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

  return adminEmails.includes(normalizedEmail);
}

/** Current session, redirecting to / if signed in but not an admin. */
export async function requireAdmin() {
  const session = await requireSession();
  if (!isAdminEmail(session.user.email)) {
    redirect("/");
  }
  return session;
}
