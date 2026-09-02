"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import type { Goal } from "@/generated/prisma/client";

const GOALS: Goal[] = ["WEIGHT_LOSS", "WEIGHT_GAIN", "MUSCLE_GROWTH", "FIT_BODY"];

export interface NotificationActionState {
  error?: string;
  success?: string;
}

export async function createNotification(
  _prevState: NotificationActionState,
  formData: FormData
): Promise<NotificationActionState> {
  await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const audience = String(formData.get("audience") ?? "ALL");

  if (!title) return { error: "Title is required." };
  if (!message) return { error: "Message is required." };

  const goal = audience === "ALL" ? null : (audience as Goal);
  if (goal !== null && !GOALS.includes(goal)) {
    return { error: "Invalid audience." };
  }

  await prisma.notification.create({ data: { title, message, goal } });

  revalidatePath("/admin/notifications");
  return { success: "Notification sent." };
}

export async function deleteNotification(id: string): Promise<{ error?: string }> {
  await requireAdmin();

  if (!id) return { error: "Missing notification id." };

  await prisma.notification.delete({ where: { id } });
  revalidatePath("/admin/notifications");
  return {};
}
