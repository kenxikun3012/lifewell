import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-block px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-primary-green text-white hover:bg-[#52a045]",
    secondary: "bg-secondary-green text-white hover:bg-[#7bbf6d]",
  };

  const className = `${baseClasses} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}