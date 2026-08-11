"use client";

interface AuthDividerProps {
  text: string;
}

export default function AuthDivider({ text }: AuthDividerProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 border-t border-gray-200" />
      <span className="text-sm text-gray-500">{text}</span>
      <div className="flex-1 border-t border-gray-200" />
    </div>
  );
}