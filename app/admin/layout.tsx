import { requireAdmin } from "@/lib/admin";
import AdminSidebar from "@/components/admin/AdminSidebar";

// Every /admin page/action independently calls requireAdmin() too — this
// layout-level check is not the only line of defense (see lib/admin.ts).
export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 overflow-x-hidden p-6">{children}</main>
    </div>
  );
}
