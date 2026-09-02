import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import CreateNotificationForm from "@/components/admin/CreateNotificationForm";
import NotificationRow from "@/components/admin/NotificationRow";

export const dynamic = "force-dynamic";

export default async function AdminNotificationsPage() {
  await requireAdmin();

  const notifications = await prisma.notification.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Notifications</h1>
        <p className="mt-1 text-sm text-secondary-text">
          Send an in-app message to all users, or just users with a specific diet goal.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <CreateNotificationForm />
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h2 className="mb-2 text-sm font-semibold text-gray-900">Sent</h2>
        {notifications.length === 0 ? (
          <p className="py-8 text-center text-sm text-secondary-text">
            No notifications sent yet.
          </p>
        ) : (
          <div>
            {notifications.map((n) => (
              <NotificationRow
                key={n.id}
                id={n.id}
                title={n.title}
                message={n.message}
                goal={n.goal}
                createdAt={n.createdAt.toISOString()}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
