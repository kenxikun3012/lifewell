import FoodCategoryPage from "@/components/FoodCategoryPage";
import { riceGrainsFoods } from "@/lib/food-data";

export default function RiceGrainsPage() {
  return (
    <FoodCategoryPage
      title="Rice & Grains"
      description="Explore the calorie content of all rice and grain foods to make informed choices for your meals."
      foods={riceGrainsFoods}
    />
  );
}