"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import {
  uploadFoodImage,
  deleteFoodImage,
  validateFoodImage,
} from "@/lib/imagekit";

export interface FoodActionState {
  error?: string;
  fieldErrors?: Partial<Record<"name" | "burmeseName" | "categoryId" | "calories" | "protein" | "carbohydrates" | "fat" | "image", string>>;
}

interface ParsedFoodInput {
  name: string;
  burmeseName: string;
  categoryId: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
}

function parseDecimalField(
  formData: FormData,
  key: "calories" | "protein" | "carbohydrates" | "fat"
): { value: number; error?: string } {
  const raw = String(formData.get(key) ?? "").trim();
  if (!raw) return { value: 0, error: "Required." };

  const value = Number(raw);
  if (!Number.isFinite(value)) return { value: 0, error: "Must be a number." };
  if (value < 0) return { value: 0, error: "Can't be negative." };
  if (value > 9999.99) return { value: 0, error: "Too large." };

  return { value };
}

async function parseFoodForm(
  formData: FormData
): Promise<{ data?: ParsedFoodInput; state?: FoodActionState }> {
  const name = String(formData.get("name") ?? "").trim();
  const burmeseName = String(formData.get("burmeseName") ?? "").trim();
  const categoryId = String(formData.get("categoryId") ?? "").trim();

  const fieldErrors: FoodActionState["fieldErrors"] = {};

  if (!name) fieldErrors.name = "Required.";
  if (!burmeseName) fieldErrors.burmeseName = "Required.";
  if (!categoryId) fieldErrors.categoryId = "Required.";

  const calories = parseDecimalField(formData, "calories");
  const protein = parseDecimalField(formData, "protein");
  const carbohydrates = parseDecimalField(formData, "carbohydrates");
  const fat = parseDecimalField(formData, "fat");
  if (calories.error) fieldErrors.calories = calories.error;
  if (protein.error) fieldErrors.protein = protein.error;
  if (carbohydrates.error) fieldErrors.carbohydrates = carbohydrates.error;
  if (fat.error) fieldErrors.fat = fat.error;

  if (Object.keys(fieldErrors).length > 0) {
    return { state: { error: "Please fix the errors below.", fieldErrors } };
  }

  if (categoryId) {
    const category = await prisma.category.findUnique({ where: { id: categoryId } });
    if (!category) {
      return {
        state: {
          error: "Please fix the errors below.",
          fieldErrors: { categoryId: "Category not found." },
        },
      };
    }
  }

  return {
    data: {
      name,
      burmeseName,
      categoryId,
      calories: calories.value,
      protein: protein.value,
      carbohydrates: carbohydrates.value,
      fat: fat.value,
    },
  };
}

async function checkDuplicateNames(
  name: string,
  burmeseName: string,
  excludeId?: string
): Promise<FoodActionState | null> {
  const [nameDupe, burmeseDupe] = await Promise.all([
    prisma.food.findFirst({
      where: { name: { equals: name, mode: "insensitive" }, NOT: excludeId ? { id: excludeId } : undefined },
    }),
    prisma.food.findFirst({
      where: {
        burmeseName: { equals: burmeseName, mode: "insensitive" },
        NOT: excludeId ? { id: excludeId } : undefined,
      },
    }),
  ]);

  const fieldErrors: FoodActionState["fieldErrors"] = {};
  if (nameDupe) fieldErrors.name = "A food with this English name already exists.";
  if (burmeseDupe) fieldErrors.burmeseName = "A food with this Burmese name already exists.";

  if (Object.keys(fieldErrors).length > 0) {
    return { error: "Please fix the errors below.", fieldErrors };
  }
  return null;
}

export async function createFood(
  _prevState: FoodActionState,
  formData: FormData
): Promise<FoodActionState> {
  await requireAdmin();

  const { data, state } = await parseFoodForm(formData);
  if (!data) return state!;

  const duplicateState = await checkDuplicateNames(data.name, data.burmeseName);
  if (duplicateState) return duplicateState;

  const image = formData.get("image");
  if (!(image instanceof File) || image.size === 0) {
    return {
      error: "Please fix the errors below.",
      fieldErrors: { image: "An image is required." },
    };
  }
  const imageError = validateFoodImage(image);
  if (imageError) {
    return { error: "Please fix the errors below.", fieldErrors: { image: imageError } };
  }

  let imageUrl: string;
  let imageFileId: string;
  try {
    const uploaded = await uploadFoodImage(image);
    imageUrl = uploaded.url;
    imageFileId = uploaded.fileId;
  } catch (error) {
    console.error("ImageKit upload failed", error);
    return {
      error: "Please fix the errors below.",
      fieldErrors: { image: "Image upload failed. Please try again." },
    };
  }

  await prisma.food.create({
    data: { ...data, imageUrl, imageFileId },
  });

  revalidatePath("/admin/foods");
  revalidatePath("/admin");
  redirect("/admin/foods");
}

export async function updateFood(
  id: string,
  _prevState: FoodActionState,
  formData: FormData
): Promise<FoodActionState> {
  await requireAdmin();

  const existing = await prisma.food.findUnique({ where: { id } });
  if (!existing) {
    return { error: "Food not found." };
  }

  const { data, state } = await parseFoodForm(formData);
  if (!data) return state!;

  const duplicateState = await checkDuplicateNames(data.name, data.burmeseName, id);
  if (duplicateState) return duplicateState;

  let imageUrl = existing.imageUrl;
  let imageFileId = existing.imageFileId;
  const image = formData.get("image");
  if (image instanceof File && image.size > 0) {
    const imageError = validateFoodImage(image);
    if (imageError) {
      return { error: "Please fix the errors below.", fieldErrors: { image: imageError } };
    }
    try {
      const uploaded = await uploadFoodImage(image);
      imageUrl = uploaded.url;
      imageFileId = uploaded.fileId;
    } catch (error) {
      console.error("ImageKit upload failed", error);
      return {
        error: "Please fix the errors below.",
        fieldErrors: { image: "Image upload failed. Please try again." },
      };
    }
  }

  await prisma.food.update({
    where: { id },
    data: { ...data, imageUrl, imageFileId },
  });

  // Only clean up the old image after the DB write succeeds, and only if it
  // actually changed — never leave a food pointing at a deleted image.
  if (imageFileId !== existing.imageFileId) {
    await deleteFoodImage(existing.imageFileId);
  }

  revalidatePath("/admin/foods");
  revalidatePath("/admin");
  redirect("/admin/foods");
}

export async function deleteFood(id: string): Promise<{ error?: string }> {
  await requireAdmin();

  const existing = await prisma.food.findUnique({ where: { id } });
  if (!existing) {
    return { error: "Food not found." };
  }

  await prisma.food.delete({ where: { id } });
  await deleteFoodImage(existing.imageFileId);

  revalidatePath("/admin/foods");
  revalidatePath("/admin");
  return {};
}
