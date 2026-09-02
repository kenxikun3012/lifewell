"use client";

import { useMemo, useState } from "react";
import type { MyNotification } from "@/app/notifications/actions";

type TabKey = "today" | "week" | "earlier";

interface NotificationsListProps {
  notifications: MyNotification[];
}

function groupByRecency(notifications: MyNotification[]): Record<TabKey, MyNotification[]> {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const weekAgo = new Date(startOfToday);
  weekAgo.setDate(weekAgo.getDate() - 7);

  const groups: Record<TabKey, MyNotification[]> = { today: [], week: [], earlier: [] };
  for (const n of notifications) {
    const createdAt = new Date(n.createdAt);
    if (createdAt >= startOfToday) {
      groups.today.push(n);
    } else if (createdAt >= weekAgo) {
      groups.week.push(n);
    } else {
      groups.earlier.push(n);
    }
  }
  return groups;
}

export default function NotificationsList({ notifications }: NotificationsListProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("today");
  const groups = useMemo(() => groupByRecency(notifications), [notifications]);

  const tabs: { key: TabKey; label: string }[] = [
    { key: "today", label: "Today" },
    { key: "week", label: "This Week" },
    { key: "earlier", label: "Earlier" },
  ];

  const activeList = groups[activeTab];

  return (
    <>
      <div className="flex bg-gray-50 rounded-lg overflow-hidden mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-4 font-semibold ${
              activeTab === tab.key ? "bg-white" : "bg-gray-50 text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {activeList.length === 0 && (
          <p className="text-gray-400">No notifications here yet.</p>
        )}
        {activeList.map((note) => (
          <div key={note.id} className="flex gap-3 pb-6 border-b border-gray-200">
            {!note.read && (
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-green" aria-label="Unread" />
            )}
            <div className={note.read ? "" : "flex-1"}>
              <h3 className="font-bold mb-2">{note.title}</h3>
              <p className="text-sm text-gray-600">{note.message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
