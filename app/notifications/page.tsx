"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

type TabKey = "today" | "week" | "earlier";

interface NotificationItem {
  title: string;
  message: string;
}

export default function Notifications() {
  const [activeTab, setActiveTab] = useState<TabKey>("today");

  const notifications: Record<TabKey, NotificationItem[]> = {
    today: [
      {
        title: "How can you prevent heart disease?",
        message:
          "To reduce the risk of Coronary artery disease, eat healthy foods, exercise regularly, avoid smoking, maintain a healthy weight, manage stress, sleep well, and control conditions like Hypertension and Diabetes mellitus",
      },
      {
        title: "Reminder",
        message:
          "Choose heart-healthy foods today! Eat more fruits and vegetables, whole grains, and lean proteins to help prevent Coronary artery disease and keep your heart strong.",
      },
      {
        title: "How can you prevent diabetes?",
        message:
          "You can lower your risk by eating a healthy diet (more vegetables, fruits, whole grains, and less sugar), exercising at least 30 minutes most days, maintaining a healthy weight, avoiding smoking, and getting regular health checkups to monitor blood sugar levels. Small daily healthy habits make a big difference.",
      },
      {
        title: "Water Reminder Notification",
        message:
          "Time to drink water! Stay hydrated and keep your body healthy. Have a glass of water now!",
      },
    ],
    week: [],
    earlier: [],
  };

  const tabs: { key: TabKey; label: string }[] = [
    { key: "today", label: "Today" },
    { key: "week", label: "This Week" },
    { key: "earlier", label: "Earlier" },
  ];

  const activeList = notifications[activeTab];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Your notifications</h1>

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
          {activeList.map((note, i) => (
            <div key={i} className="pb-6 border-b border-gray-200">
              <h3 className="font-bold mb-2">{note.title}</h3>
              <p className="text-sm text-gray-600">{note.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}