import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import FoodForm from "@/components/admin/FoodForm";
import { updateFood } from "@/app/admin/foods/actions";

export const dynamic = "force-dynamic";

export default async function EditFoodPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;

  const [food, categories] = await Promise.all([
    prisma.food.findUnique({ where: { id } }),
    prisma.category.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } }),
  ]);

  if (!food) {
    notFound();
  }

  const boundAction = updateFood.bind(null, food.id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Edit Food</h1>
        <p className="mt-1 text-sm text-secondary-text">
          All nutrition values are per 100g.
        </p>
      </div>

      <FoodForm
        action={boundAction}
        categories={categories}
        defaults={{
          name: food.name,
          burmeseName: food.burmeseName,
          categoryId: food.categoryId,
          calories: food.calories.toString(),
          protein: food.protein.toString(),
          carbohydrates: food.carbohydrates.toString(),
          fat: food.fat.toString(),
          imageUrl: food.imageUrl,
        }}
        submitLabel="Save Changes"
        pendingLabel="Saving..."
      />
    </div>
  );
}
