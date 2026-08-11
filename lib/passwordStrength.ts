export type PasswordStrength = {
  label: "Weak" | "Fair" | "Strong" | "Very Strong";
  color: string;
  bgColor: string;
  score: number; // 0-4
};

export function getPasswordStrength(password: string): PasswordStrength {
  const len = password.length;

  if (len === 0) {
    return { label: "Weak", color: "#dc2626", bgColor: "#fee2e2", score: 0 };
  }

  if (len < 8) {
    return { label: "Weak", color: "#dc2626", bgColor: "#fee2e2", score: 1 };
  }

  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[^a-zA-Z0-9]/.test(password);

  const variety = [hasLetters, hasNumbers, hasSymbols].filter(Boolean).length;

  if (len >= 8 && variety === 1) {
    return { label: "Fair", color: "#f97316", bgColor: "#ffedd5", score: 2 };
  }

  if (len >= 8 && variety === 2) {
    return { label: "Strong", color: "#22c55e", bgColor: "#dcfce7", score: 3 };
  }

  if (len >= 8 && variety === 3) {
    return {
      label: "Very Strong",
      color: "#16a34a",
      bgColor: "#bbf7d0",
      score: 4,
    };
  }

  return { label: "Weak", color: "#dc2626", bgColor: "#fee2e2", score: 0 };
}