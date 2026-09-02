"use client";

import { useActionState, useEffect, useState } from "react";
import { getUserTargets, updateTargets, type UserTargets, type TargetsActionState } from "@/app/targets/actions";

const initialState: TargetsActionState = {};

const FIELDS: { name: keyof UserTargets; formKey: string; label: string; unit: string }[] = [
  { name: "calories", formKey: "calories", label: "Calories", unit: "kcal" },
  { name: "proteinG", formKey: "protein_g", label: "Protein", unit: "g" },
  { name: "carbsG", formKey: "carbs_g", label: "Carbohydrates", unit: "g" },
  { name: "fatG", formKey: "fat_g", label: "Fat", unit: "g" },
];

export default function TargetsForm() {
  const [targets, setTargets] = useState<UserTargets | null>(null);
  const [state, formAction, pending] = useActionState(updateTargets, initialState);

  useEffect(() => {
    getUserTargets().then(setTargets);
  }, []);

  // Reflect a successful save without a full page reload.
  useEffect(() => {
    if (state.success) getUserTargets().then(setTargets);
  }, [state.success]);

  if (!targets) {
    return <p className="text-sm text-gray-500">Loading targets…</p>;
  }

  return (
    <form action={formAction} className="space-y-4">
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

      <div className="grid gap-4 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.formKey}>
            <label className="mb-1 block text-sm font-semibold text-gray-600">
              {field.label} ({field.unit}/day)
            </label>
            <input
              name={field.formKey}
              type="number"
              step="0.1"
              min="0"
              defaultValue={targets[field.name]}
              required
              className="border rounded px-3 py-2 w-full"
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-primary-green px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-green/90 disabled:opacity-50"
      >
        {pending ? "Saving..." : "Save Targets"}
      </button>
    </form>
  );
}
