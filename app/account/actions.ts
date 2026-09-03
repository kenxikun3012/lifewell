"use server";

import { revalidatePath } from "next/cache";
import { requireOnboardedUser } from "@/lib/onboarding";
import { auth } from "@/lib/auth/server";
import { prisma } from "@/lib/prisma";
import { uploadAvatarImage, validateImage } from "@/lib/imagekit";

export interface ProfileActionState {
  error?: string;
  success?: string;
}

export interface AvatarActionState {
  error?: string;
  success?: string;
}

export async function updateProfile(
  _prevState: ProfileActionState,
  formData: FormData
): Promise<ProfileActionState> {
  const dbUser = await requireOnboardedUser();

  const name = String(formData.get("name") ?? "").trim();
  const age = Number(formData.get("age"));
  const sex = String(formData.get("sex") ?? "");
  const weightKg = Number(formData.get("weightKg"));
  const heightCm = Number(formData.get("heightCm"));

  if (!name) return { error: "Please enter your full name." };
  if (!Number.isFinite(age) || age < 13 || age > 120) {
    return { error: "Please enter a valid age (13–120)." };
  }
  if (sex !== "male" && sex !== "female") {
    return { error: "Please select your sex." };
  }
  if (!Number.isFinite(weightKg) || weightKg < 20 || weightKg > 400) {
    return { error: "Please enter a valid weight (20–400 kg)." };
  }
  if (!Number.isFinite(heightCm) || heightCm < 100 || heightCm > 250) {
    return { error: "Please enter a valid height (100–250 cm)." };
  }

  const { error: nameError } = await auth.updateUser({ name });
  if (nameError) {
    return { error: nameError.message || "Failed to update your name." };
  }

  await prisma.profile.update({
    where: { id: dbUser.id },
    data: { age, gender: sex, weightKg, heightCm },
  });

  revalidatePath("/account");
  return { success: "Profile updated." };
}

export async function updateAvatar(
  _prevState: AvatarActionState,
  formData: FormData
): Promise<AvatarActionState> {
  const dbUser = await requireOnboardedUser();

  const image = formData.get("image");
  if (!(image instanceof File) || image.size === 0) {
    return { error: "Please choose an image." };
  }
  const imageError = validateImage(image);
  if (imageError) return { error: imageError };

  let url: string;
  try {
    url = await uploadAvatarImage(image, dbUser.id);
  } catch (error) {
    console.error("Avatar upload failed", error);
    return { error: "Upload failed. Please try again." };
  }

  const { error } = await auth.updateUser({ image: url });
  if (error) {
    return { error: error.message || "Failed to save your photo." };
  }

  revalidatePath("/account");
  return { success: "Profile photo updated." };
}

export async function removeAvatar(): Promise<{ error?: string }> {
  await requireOnboardedUser();

  const { error } = await auth.updateUser({ image: null });
  if (error) {
    return { error: error.message || "Failed to remove your photo." };
  }

  revalidatePath("/account");
  return {};
}
