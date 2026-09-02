import Link from "next/link";
import Image from "next/image";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import StatCard from "@/components/admin/StatCard";

export const dynamic = "force-dynamic";

function startOfWeek(): Date {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const start = new Date(now);
  start.setDate(now.getDate() - day);
  start.setHours(0, 0, 0, 0);
  return start;
}

export default async function AdminDashboardPage() {
  await requireAdmin();

  const [
    totalFoods,
    totalCategories,
    foodsThisWeek,
    foodsWithImages,
    foodsWithoutImages,
    recentFoods,
  ] = await Promise.all([
    prisma.food.count(),
    prisma.category.count(),
    prisma.food.count({ where: { createdAt: { gte: startOfWeek() } } }),
    prisma.food.count({ where: { imageUrl: { not: "" } } }),
    prisma.food.count({ where: { imageUrl: "" } }),
    prisma.food.findMany({
      orderBy: { createdAt: "desc" },
      take: 8,
      include: { category: { select: { name: true } } },
    }),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-secondary-text">Nutrition food database overview.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <StatCard label="Total Foods" value={totalFoods} />
        <StatCard label="Total Categories" value={totalCategories} />
        <StatCard label="Added This Week" value={foodsThisWeek} />
        <StatCard label="With Images" value={foodsWithImages} />
        <StatCard label="Without Images" value={foodsWithoutImages} />
      </div>

      <div className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-100 px-4 py-3">
          <h2 className="text-sm font-semibold text-gray-900">Recently Added</h2>
        </div>
        {recentFoods.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-secondary-text">
            No foods yet.{" "}
            <Link href="/admin/foods/new" className="text-primary-green hover:underline">
              Add the first one
            </Link>
            .
          </p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {recentFoods.map((food) => (
              <li key={food.id} className="flex items-center gap-3 px-4 py-3">
                <Image
                  src={food.imageUrl}
                  alt={food.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-lg object-cover ring-1 ring-gray-200"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">{food.name}</p>
                  <p className="truncate text-xs text-secondary-text" lang="my">
                    {food.burmeseName} · {food.category.name}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-secondary-text">
                  {food.createdAt.toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
