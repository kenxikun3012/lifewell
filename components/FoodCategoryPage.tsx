import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FoodCard from "./FoodCard";
import { ArrowLeft } from "lucide-react";
import type { FoodItem } from "@/lib/food-data";

interface FoodCategoryPageProps {
  title: string;
  description: string;
  foods: FoodItem[];
}

export default function FoodCategoryPage({
  title,
  description,
  foods,
}: FoodCategoryPageProps) {
  return (
    <>
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-secondary-text transition hover:text-primary-green mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-[36px] font-bold text-primary-text">{title}</h1>
          <p className="text-secondary-text text-base mt-2 max-w-2xl">
            {description}
          </p>
        </div>

        {/* All foods grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {foods.map((food, index) => (
            <FoodCard
              key={index}
              title={food.title}
              calories={food.calories}
              imagePlaceholder={food.imagePlaceholder}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}