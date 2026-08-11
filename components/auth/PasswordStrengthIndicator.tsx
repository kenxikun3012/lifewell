"use client";

import { getPasswordStrength } from "@/lib/passwordStrength";

interface PasswordStrengthIndicatorProps {
  password: string;
  touched: boolean;
}

export default function PasswordStrengthIndicator({
  password,
  touched,
}: PasswordStrengthIndicatorProps) {
  if (!touched || password.length === 0) return null;

  const strength = getPasswordStrength(password);
  const labelColor = ["", "#dc2626", "#f97316", "#22c55e", "#16a34a"];

  return (
    <div className="mt-2">
      <p
        className="text-xs font-medium transition-colors duration-300"
        style={{ color: labelColor[strength.score] }}
      >
        {password.length < 8
          ? `At least 8 characters (${password.length}/8)`
          : `Password strength: ${strength.label}`}
      </p>
    </div>
  );
}