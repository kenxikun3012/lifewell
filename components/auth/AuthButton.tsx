"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "google";
  fullWidth?: boolean;
  children: ReactNode;
}

export default function AuthButton({
  variant = "primary",
  fullWidth = true,
  children,
  className = "",
  ...props
}: AuthButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-[#4CAF50] px-5 py-2 text-white shadow-sm hover:bg-[#43A047] focus:ring-[#4CAF50]/40 active:scale-[0.98]",
    outline:
      "border border-gray-300 bg-white px-5 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-gray-300/40 active:scale-[0.98]",
    google:
      "border border-gray-300 bg-white px-5 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-gray-300/40 active:scale-[0.98]",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}