"use server";

import { requireOnboardedUser } from "@/lib/onboarding";
import { prisma } from "@/lib/prisma";

export interface MyNotification {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
}

/** Notifications addressed to the current user (broadcast + their goal), newest first. */
export async function getMyNotifications(): Promise<MyNotification[]> {
  const profile = await requireOnboardedUser();

  const notifications = await prisma.notification.findMany({
    where: {
      OR: [{ goal: null }, ...(profile.goal ? [{ goal: profile.goal }] : [])],
    },
    orderBy: { createdAt: "desc" },
    include: {
      reads: { where: { userId: profile.id }, select: { id: true } },
    },
  });

  return notifications.map((n) => ({
    id: n.id,
    title: n.title,
    message: n.message,
    createdAt: n.createdAt.toISOString(),
    read: n.reads.length > 0,
  }));
}

export async function getUnreadNotificationCount(): Promise<number> {
  const profile = await requireOnboardedUser();

  return prisma.notification.count({
    where: {
      OR: [{ goal: null }, ...(profile.goal ? [{ goal: profile.goal }] : [])],
      reads: { none: { userId: profile.id } },
    },
  });
}

/** Marks every notification currently visible to the user as read. */
export async function markAllNotificationsRead(): Promise<void> {
  const profile = await requireOnboardedUser();

  const unread = await prisma.notification.findMany({
    where: {
      OR: [{ goal: null }, ...(profile.goal ? [{ goal: profile.goal }] : [])],
      reads: { none: { userId: profile.id } },
    },
    select: { id: true },
  });

  if (unread.length === 0) return;

  await prisma.notificationRead.createMany({
    data: unread.map((n) => ({ notificationId: n.id, userId: profile.id })),
    skipDuplicates: true,
  });
}
