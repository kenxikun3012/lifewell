"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export interface CategoryActionState {
  error?: string;
  success?: string;
}

export async function createCategory(
  _prevState: CategoryActionState,
  formData: FormData
): Promise<CategoryActionState> {
  await requireAdmin();

  const name = String(formData.get("name") ?? "").trim();
  if (!name) {
    return { error: "Category name is required." };
  }

  const existing = await prisma.category.findFirst({
    where: { name: { equals: name, mode: "insensitive" } },
  });
  if (existing) {
    return { error: `"${name}" already exists.` };
  }

  await prisma.category.create({ data: { name } });
  revalidatePath("/admin/categories");
  return { success: `Created "${name}".` };
}

export async function renameCategory(
  _prevState: CategoryActionState,
  formData: FormData
): Promise<CategoryActionState> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  if (!id || !name) {
    return { error: "Category name is required." };
  }

  const duplicate = await prisma.category.findFirst({
    where: { name: { equals: name, mode: "insensitive" }, NOT: { id } },
  });
  if (duplicate) {
    return { error: `"${name}" already exists.` };
  }

  await prisma.category.update({ where: { id }, data: { name } });
  revalidatePath("/admin/categories");
  return { success: `Renamed to "${name}".` };
}

export async function deleteCategory(
  _prevState: CategoryActionState,
  formData: FormData
): Promise<CategoryActionState> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  if (!id) {
    return { error: "Missing category id." };
  }

  const foodCount = await prisma.food.count({ where: { categoryId: id } });
  if (foodCount > 0) {
    return {
      error: `Can't delete — ${foodCount} food${foodCount === 1 ? "" : "s"} still use this category.`,
    };
  }

  await prisma.category.delete({ where: { id } });
  revalidatePath("/admin/categories");
  return { success: "Category deleted." };
}
