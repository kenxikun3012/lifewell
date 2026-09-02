import "server-only";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/session";
import { isAdminEmail } from "@/lib/admin";
import { auth } from "@/lib/auth/server";
import { prisma } from "@/lib/prisma";

/**
 * The signed-in user's Profile, redirecting to /onboarding if the mandatory
 * onboarding form hasn't been completed yet. Use this (instead of plain
 * requireUser()) in any page/action that deals with personal nutrition
 * data — food/water logging, targets, the dashboard.
 */
export async function requireOnboardedUser() {
  const profile = await requireUser();
  if (!profile.onboardingCompletedAt) {
    redirect("/onboarding");
  }
  return profile;
}

/**
 * Where to send a user right after a successful login/signup, or when they
 * land on /login, /signup, or /onboarding while already signed in. Admins
 * skip onboarding entirely (they only use /admin); everyone else is routed
 * to /onboarding until they've completed it.
 */
export async function resolvePostAuthPath(): Promise<string> {
  const { data: session } = await auth.getSession();
  if (!session?.user) return "/login";
  if (isAdminEmail(session.user.email)) return "/admin";

  const profile = await prisma.profile.upsert({
    where: { id: session.user.id },
    update: {},
    create: { id: session.user.id },
    select: { onboardingCompletedAt: true },
  });

  return profile.onboardingCompletedAt ? "/" : "/onboarding";
}
