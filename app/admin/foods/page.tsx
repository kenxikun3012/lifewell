import Link from "next/link";
import Image from "next/image";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import FoodFilters from "@/components/admin/FoodFilters";
import Pagination from "@/components/admin/Pagination";
import DeleteFoodButton from "@/components/admin/DeleteFoodButton";
import type { Prisma } from "@/generated/prisma/client";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 10;

function formatNum(n: Prisma.Decimal | number) {
  return Number(n).toLocaleString(undefined, { maximumFractionDigits: 1 });
}

export default async function FoodsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; page?: string }>;
}) {
  await requireAdmin();
  const { q = "", category = "", page: pageParam } = await searchParams;

  const page = Math.max(1, Number(pageParam) || 1);

  const where: Prisma.FoodWhereInput = {
    ...(category ? { categoryId: category } : {}),
    ...(q
      ? {
          OR: [
            { name: { contains: q, mode: "insensitive" } },
            { burmeseName: { contains: q, mode: "insensitive" } },
          ],
        }
      : {}),
  };

  const [foods, total, categories] = await Promise.all([
    prisma.food.findMany({
      where,
      include: { category: { select: { name: true } } },
      orderBy: { name: "asc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.food.count({ where }),
    prisma.category.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  function buildHref(targetPage: number) {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (category) params.set("category", category);
    if (targetPage > 1) params.set("page", String(targetPage));
    const qs = params.toString();
    return `/admin/foods${qs ? `?${qs}` : ""}`;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Foods</h1>
          <p className="mt-1 text-sm text-secondary-text">{total} total</p>
        </div>
        <Link href="/admin/foods/new">
          <Button>Add Food</Button>
        </Link>
      </div>

      <FoodFilters categories={categories} />

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="py-3 pl-4 pr-2">Image</th>
              <th className="py-3 px-2">English Name</th>
              <th className="py-3 px-2">Burmese Name</th>
              <th className="py-3 px-2">Category</th>
              <th className="py-3 px-2 text-right">Calories</th>
              <th className="py-3 px-2 text-right">Protein</th>
              <th className="py-3 px-2 text-right">Carbs</th>
              <th className="py-3 px-2 text-right">Fat</th>
              <th className="py-3 pl-2 pr-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-8 text-center text-secondary-text">
                  No foods found.
                </td>
              </tr>
            ) : (
              foods.map((food) => (
                <tr key={food.id} className="border-b border-gray-100 last:border-0">
                  <td className="py-2 pl-4 pr-2">
                    <Image
                      src={food.imageUrl}
                      alt={food.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-lg object-cover ring-1 ring-gray-200"
                    />
                  </td>
                  <td className="py-2 px-2 font-medium text-gray-900">{food.name}</td>
                  <td className="py-2 px-2 text-gray-700" lang="my">
                    {food.burmeseName}
                  </td>
                  <td className="py-2 px-2 text-secondary-text">{food.category.name}</td>
                  <td className="py-2 px-2 text-right tabular-nums text-gray-700">
                    {formatNum(food.calories)}
                  </td>
                  <td className="py-2 px-2 text-right tabular-nums text-gray-700">
                    {formatNum(food.protein)}
                  </td>
                  <td className="py-2 px-2 text-right tabular-nums text-gray-700">
                    {formatNum(food.carbohydrates)}
                  </td>
                  <td className="py-2 px-2 text-right tabular-nums text-gray-700">
                    {formatNum(food.fat)}
                  </td>
                  <td className="py-2 pl-2 pr-4">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/admin/foods/${food.id}/edit`}
                        className="rounded px-2 py-1 text-xs font-medium text-primary-green hover:bg-gray-100"
                      >
                        Edit
                      </Link>
                      <DeleteFoodButton id={food.id} name={food.name} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <Pagination page={page} totalPages={totalPages} buildHref={buildHref} />
      </div>
    </div>
  );
}
