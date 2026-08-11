"use client";

interface AuthCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function AuthCheckbox({
  id,
  label,
  checked,
  onChange,
}: AuthCheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
    >
      <div className="relative flex items-center justify-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer h-4 w-4 appearance-none rounded border border-gray-300 bg-white checked:border-[#4CAF50] checked:bg-[#4CAF50] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20"
        />
        <svg
          className="pointer-events-none absolute hidden h-3 w-3 text-white peer-checked:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      {label}
    </label>
  );
}