import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import FoodForm from "@/components/admin/FoodForm";
import { createFood } from "@/app/admin/foods/actions";

export const dynamic = "force-dynamic";

export default async function NewFoodPage() {
  await requireAdmin();

  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Add Food</h1>
        <p className="mt-1 text-sm text-secondary-text">
          All nutrition values are per 100g.
        </p>
      </div>

      {categories.length === 0 ? (
        <p className="text-sm text-secondary-text">
          Create a category first before adding foods.
        </p>
      ) : (
        <FoodForm
          action={createFood}
          categories={categories}
          submitLabel="Add Food"
          pendingLabel="Adding..."
        />
      )}
    </div>
  );
}
