"use client";

import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  createNotification,
  type NotificationActionState,
} from "@/app/admin/notifications/actions";

const initialState: NotificationActionState = {};

const AUDIENCES = [
  { value: "ALL", label: "All users" },
  { value: "WEIGHT_GAIN", label: "Weight Gain" },
  { value: "WEIGHT_LOSS", label: "Weight Loss" },
  { value: "MUSCLE_GROWTH", label: "Muscle Growth" },
  { value: "FIT_BODY", label: "Fit Body" },
] as const;

export default function CreateNotificationForm() {
  const [state, formAction, pending] = useActionState(createNotification, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-3">
      {state.error && (
        <div className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600" role="alert">
          {state.error}
        </div>
      )}
      {state.success && (
        <div className="rounded-lg bg-green-50 px-4 py-2 text-sm text-green-700" role="status">
          {state.success}
        </div>
      )}

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Title</label>
        <input
          name="title"
          required
          placeholder="e.g. New feature: meal photos"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="What do you want to tell them?"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Audience</label>
        <select
          name="audience"
          defaultValue="ALL"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20"
        >
          {AUDIENCES.map((a) => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Sending..." : "Send Notification"}
      </Button>
    </form>
  );
}
