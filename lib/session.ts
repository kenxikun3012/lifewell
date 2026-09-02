import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/server";
import { prisma } from "@/lib/prisma";

/** Current Neon Auth session, or null if signed out. */
export async function getSession() {
  const { data } = await auth.getSession();
  return data;
}

/** Current Neon Auth session, redirecting to /login if signed out. */
export async function requireSession() {
  const session = await getSession();
  if (!session?.user?.id) {
    redirect("/login");
  }
  return session;
}

/**
 * The app-specific Profile row for the signed-in user, lazily created on
 * first access. Redirects to /login if signed out.
 */
export async function requireUser() {
  const session = await requireSession();

  return prisma.profile.upsert({
    where: { id: session.user.id },
    update: {},
    create: { id: session.user.id },
  });
}
