import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "green" | "outline" | "ghost" | "secondary";
type Size = "default" | "icon" | "sm" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lifewell-green/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  green: "bg-lifewell-green text-white hover:bg-lifewell-green-dark shadow-sm hover:scale-105 active:scale-95",
  outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
  ghost: "text-gray-600 hover:bg-gray-100 hover:text-lifewell-green",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
};

const sizes: Record<Size, string> = {
  default: "h-10 px-5 rounded-lg text-sm",
  sm: "h-8 px-3 rounded-md text-xs",
  lg: "h-12 px-6 rounded-xl text-sm",
  icon: "h-10 w-10 rounded-full",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "green", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };