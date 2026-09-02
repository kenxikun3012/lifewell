import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import CreateCategoryForm from "@/components/admin/CreateCategoryForm";
import CategoryRow from "@/components/admin/CategoryRow";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  await requireAdmin();

  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { foods: true } } },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Categories</h1>
        <p className="mt-1 text-sm text-secondary-text">
          Organize the food catalog. A category can&apos;t be deleted while foods still use it.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <CreateCategoryForm />
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="py-3 pl-4 pr-2">Name</th>
              <th className="py-3 px-2">Foods</th>
              <th className="py-3 pl-2 pr-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-8 text-center text-sm text-secondary-text">
                  No categories yet.
                </td>
              </tr>
            ) : (
              categories.map((c) => (
                <CategoryRow key={c.id} id={c.id} name={c.name} foodCount={c._count.foods} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
