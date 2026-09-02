"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useRef } from "react";
import { Search } from "lucide-react";

interface FoodFiltersProps {
  categories: { id: string; name: string }[];
}

export default function FoodFilters({ categories }: FoodFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  function submit() {
    const formData = new FormData(formRef.current!);
    const params = new URLSearchParams();
    const q = String(formData.get("q") ?? "").trim();
    const category = String(formData.get("category") ?? "");
    if (q) params.set("q", q);
    if (category) params.set("category", category);
    // Any filter change resets pagination.
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div className="relative flex-1">
        <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          name="q"
          defaultValue={searchParams.get("q") ?? ""}
          placeholder="Search by English or Burmese name..."
          className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20"
        />
      </div>
      <select
        name="category"
        defaultValue={searchParams.get("category") ?? ""}
        onChange={submit}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20"
      >
        <option value="">All categories</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:hidden"
      >
        Search
      </button>
    </form>
  );
}
