import { prisma } from "@/lib/prisma";

/**
 * Get (or lazily create) the Prisma User record for a Supabase-authenticated
 * user, keyed by email. The Supabase auth user lives in Supabase Auth; the
 * Prisma User holds profile data and owns MealEntry logs.
 */
export async function getOrCreateUserByEmail(email: string, name?: string) {
  const safeEmail = email.trim().toLowerCase();

  const existing = await prisma.user.findUnique({
    where: { email: safeEmail },
  });

  if (existing) {
    // Keep the display name fresh if provided
    if (name && name !== existing.name) {
      return prisma.user.update({
        where: { id: existing.id },
        data: { name },
      });
    }
    return existing;
  }

  return prisma.user.create({
    data: {
      email: safeEmail,
      name: name || safeEmail.split("@")[0] || "User",
    },
  });
}