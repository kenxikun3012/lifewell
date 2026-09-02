import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Page not found</h1>
      <p className="text-sm text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-[#4CAF50] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#43A047]"
      >
        Go home
      </Link>
    </div>
  );
}
