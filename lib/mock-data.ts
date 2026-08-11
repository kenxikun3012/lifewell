export interface Food {
  name: string;
  serving: string;
  calories: number;
}

export interface Meal {
  id: string;
  name: string;
  currentCalories: number;
  targetCalories: number;
  bgColor: string;
  color: string;
  image: string;
  foods: Food[];
}

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", active: false },
  { label: "Dashboard", href: "/dashboard", active: false },
  { label: "Meal Tracker", href: "/meal-tracker", active: true },
  { label: "BMI", href: "/bmi", active: false },
  { label: "About Us", href: "/about", active: false },
];

export const quickLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Meal Tracker", href: "/meal-tracker" },
  { label: "BMI Calculator", href: "/bmi" },
  { label: "Account", href: "/account" },
];

export const supportLinks: { label: string; href: string }[] = [
  { label: "About Us", href: "/about" },
  { label: "Notifications", href: "/notifications" },
  { label: "Contact", href: "/about" },
  { label: "FAQ", href: "/about" },
];

export const weekDays = [
  { day: "Mon", date: 18 },
  { day: "Tue", date: 19 },
  { day: "Wed", date: 20 },
  { day: "Thu", date: 21 },
  { day: "Fri", date: 22 },
  { day: "Sat", date: 23 },
  { day: "Sun", date: 24 },
];

export const nutritionData = {
  caloriesLeft: 650,
  remainingCalories: 650,
  carbs: 120,
  fat: 45,
  protein: 80,
};

export const waterIntake = {
  current: 1.2,
  goal: 2.5,
};

export const meals: Meal[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    currentCalories: 320,
    targetCalories: 400,
    bgColor: "bg-orange-50",
    color: "text-orange-600",
    image: "/images/meal-breakfast.svg",
    foods: [
      { name: "Oatmeal with banana", serving: "1 bowl · 250g", calories: 220 },
      { name: "Boiled egg", serving: "1 piece · 50g", calories: 78 },
      { name: "Orange juice", serving: "1 glass · 200ml", calories: 22 },
    ],
  },
  {
    id: "lunch",
    name: "Lunch",
    currentCalories: 680,
    targetCalories: 600,
    bgColor: "bg-green-50",
    color: "text-green-600",
    image: "/images/meal-lunch.svg",
    foods: [
      { name: "Chicken breast (grilled)", serving: "150g", calories: 248 },
      { name: "Brown rice", serving: "1 cup · 195g", calories: 218 },
      { name: "Steamed broccoli", serving: "1 cup · 156g", calories: 55 },
    ],
  },
  {
    id: "dinner",
    name: "Dinner",
    currentCalories: 450,
    targetCalories: 500,
    bgColor: "bg-blue-50",
    color: "text-blue-600",
    image: "/images/meal-dinner.svg",
    foods: [
      { name: "Salmon fillet", serving: "120g", calories: 250 },
      { name: "Quinoa", serving: "1 cup · 185g", calories: 222 },
      { name: "Mixed salad", serving: "1 bowl", calories: 40 },
    ],
  },
  {
    id: "snack",
    name: "Snack",
    currentCalories: 150,
    targetCalories: 200,
    bgColor: "bg-purple-50",
    color: "text-purple-600",
    image: "/images/meal-snack.svg",
    foods: [
      { name: "Greek yogurt", serving: "1 cup · 170g", calories: 100 },
      { name: "Almonds", serving: "1 oz · 28g", calories: 164 },
    ],
  },
];