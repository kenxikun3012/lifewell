"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, UtensilsCrossed, PlusCircle, Tags, Bell, LogOut } from "lucide-react";
import { logout } from "@/app/auth/actions";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/foods", label: "Foods", icon: UtensilsCrossed },
  { href: "/admin/foods/new", label: "Add Food", icon: PlusCircle },
  { href: "/admin/categories", label: "Categories", icon: Tags },
  { href: "/admin/notifications", label: "Notifications", icon: Bell },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-56 shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="border-b border-gray-100 px-5 py-4">
        <span className="text-base font-bold text-gray-900">LifeWell Admin</span>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {links.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-primary-green/10 text-primary-green"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon size={17} />
              {label}
            </Link>
          );
        })}
      </nav>

      <form action={logout} className="border-t border-gray-100 p-3">
        <button
          type="submit"
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-red-600"
        >
          <LogOut size={17} />
          Logout
        </button>
      </form>
    </aside>
  );
}
