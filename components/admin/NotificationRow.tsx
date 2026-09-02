"use client";

import { useRef, useState, useTransition } from "react";
import { Trash2 } from "lucide-react";
import ConfirmDialog, { type ConfirmDialogHandle } from "@/components/admin/ConfirmDialog";
import { deleteNotification } from "@/app/admin/notifications/actions";

const GOAL_LABELS: Record<string, string> = {
  WEIGHT_GAIN: "Weight Gain",
  WEIGHT_LOSS: "Weight Loss",
  MUSCLE_GROWTH: "Muscle Growth",
  FIT_BODY: "Fit Body",
};

interface NotificationRowProps {
  id: string;
  title: string;
  message: string;
  goal: string | null;
  createdAt: string;
}

export default function NotificationRow({ id, title, message, goal, createdAt }: NotificationRowProps) {
  const dialogRef = useRef<ConfirmDialogHandle>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleConfirm() {
    setError(null);
    startTransition(async () => {
      const result = await deleteNotification(id);
      if (result.error) {
        setError(result.error);
      } else {
        dialogRef.current?.close();
      }
    });
  }

  return (
    <div className="flex items-start justify-between gap-4 border-b border-gray-100 py-4 last:border-0">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
            {goal ? GOAL_LABELS[goal] ?? goal : "All users"}
          </span>
        </div>
        <p className="mt-1 text-sm text-secondary-text">{message}</p>
        <p className="mt-1 text-xs text-gray-400">
          {new Date(createdAt).toLocaleString()}
        </p>
      </div>
      <button
        type="button"
        aria-label={`Delete ${title}`}
        onClick={() => dialogRef.current?.open()}
        className="shrink-0 rounded p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-600"
      >
        <Trash2 size={15} />
      </button>
      <ConfirmDialog
        ref={dialogRef}
        title={`Delete "${title}"?`}
        description={error ?? "This can't be undone."}
        pending={isPending}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
