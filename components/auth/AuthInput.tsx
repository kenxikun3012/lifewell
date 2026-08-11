"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, id, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={`w-full rounded-full border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-[#4CAF50] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20 ${
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;