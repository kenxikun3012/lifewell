import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  buildHref: (page: number) => string;
}

export default function Pagination({ page, totalPages, buildHref }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3 text-sm text-secondary-text">
      <span>
        Page {page} of {totalPages}
      </span>
      <div className="flex gap-1">
        <Link
          href={buildHref(Math.max(1, page - 1))}
          aria-disabled={page <= 1}
          className={`flex items-center gap-1 rounded-lg border border-gray-300 px-2.5 py-1.5 ${
            page <= 1 ? "pointer-events-none opacity-40" : "hover:bg-gray-50"
          }`}
        >
          <ChevronLeft size={14} /> Prev
        </Link>
        <Link
          href={buildHref(Math.min(totalPages, page + 1))}
          aria-disabled={page >= totalPages}
          className={`flex items-center gap-1 rounded-lg border border-gray-300 px-2.5 py-1.5 ${
            page >= totalPages ? "pointer-events-none opacity-40" : "hover:bg-gray-50"
          }`}
        >
          Next <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}
