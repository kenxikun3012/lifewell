import Navbar from "@/components/Navbar";
import NotificationsList from "@/components/NotificationsList";
import { getMyNotifications, markAllNotificationsRead } from "@/app/notifications/actions";

export const dynamic = "force-dynamic";

export default async function Notifications() {
  const notifications = await getMyNotifications();
  // Visiting the page counts as having seen everything currently listed.
  await markAllNotificationsRead();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Your notifications</h1>
        <NotificationsList notifications={notifications} />
      </div>
    </div>
  );
}
