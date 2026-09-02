"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { FoodActionState } from "@/app/admin/foods/actions";

export interface FoodFormCategory {
  id: string;
  name: string;
}

export interface FoodFormDefaults {
  name: string;
  burmeseName: string;
  categoryId: string;
  calories: string;
  protein: string;
  carbohydrates: string;
  fat: string;
  imageUrl?: string;
}

interface FoodFormProps {
  action: (prevState: FoodActionState, formData: FormData) => Promise<FoodActionState>;
  categories: FoodFormCategory[];
  defaults?: FoodFormDefaults;
  submitLabel: string;
  pendingLabel: string;
}

const emptyDefaults: FoodFormDefaults = {
  name: "",
  burmeseName: "",
  categoryId: "",
  calories: "",
  protein: "",
  carbohydrates: "",
  fat: "",
};

const initialState: FoodActionState = {};

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20";

export default function FoodForm({
  action,
  categories,
  defaults = emptyDefaults,
  submitLabel,
  pendingLabel,
}: FoodFormProps) {
  const [state, formAction, pending] = useActionState(action, initialState);
  const [preview, setPreview] = useState<string | null>(defaults.imageUrl ?? null);

  // React resets uncontrolled <form action={fn}> fields after every
  // submission, success or failure — controlled state keeps the admin's
  // typed data intact when a submission comes back with a validation error,
  // instead of forcing a full retype (fast data entry matters here).
  const [values, setValues] = useState(defaults);

  function set<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  // React's <form action={fn}> auto-resets the form natively after every
  // submission (success or failure). That reset writes directly to the
  // <select>'s DOM value without firing a change event, so our controlled
  // `value` prop — unchanged in React state — never gets reapplied on the
  // next render (React only touches the DOM when the prop itself changes).
  // Force a re-sync after every action result.
  const categorySelectRef = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    if (categorySelectRef.current) {
      categorySelectRef.current.value = values.categoryId;
    }
  }, [state, values.categoryId]);

  return (
    <form action={formAction} className="max-w-2xl space-y-5">
      {state.error && (
        <div className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600" role="alert">
          {state.error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="English Name" error={state.fieldErrors?.name}>
          <input
            name="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            required
            className={inputClass}
            placeholder="e.g. Chicken Curry"
          />
        </Field>

        <Field label="Burmese Name" error={state.fieldErrors?.burmeseName}>
          <input
            name="burmeseName"
            value={values.burmeseName}
            onChange={(e) => set("burmeseName", e.target.value)}
            required
            lang="my"
            className={inputClass}
            placeholder="ကြက်သားဟင်း"
          />
        </Field>
      </div>

      <Field label="Category" error={state.fieldErrors?.categoryId}>
        <select
          ref={categorySelectRef}
          name="categoryId"
          value={values.categoryId}
          onChange={(e) => set("categoryId", e.target.value)}
          required
          className={inputClass}
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Calories (kcal / 100g)" error={state.fieldErrors?.calories}>
          <input
            name="calories"
            type="number"
            step="0.01"
            min="0"
            value={values.calories}
            onChange={(e) => set("calories", e.target.value)}
            required
            className={inputClass}
          />
        </Field>
        <Field label="Protein (g / 100g)" error={state.fieldErrors?.protein}>
          <input
            name="protein"
            type="number"
            step="0.01"
            min="0"
            value={values.protein}
            onChange={(e) => set("protein", e.target.value)}
            required
            className={inputClass}
          />
        </Field>
        <Field label="Carbohydrates (g / 100g)" error={state.fieldErrors?.carbohydrates}>
          <input
            name="carbohydrates"
            type="number"
            step="0.01"
            min="0"
            value={values.carbohydrates}
            onChange={(e) => set("carbohydrates", e.target.value)}
            required
            className={inputClass}
          />
        </Field>
        <Field label="Fat (g / 100g)" error={state.fieldErrors?.fat}>
          <input
            name="fat"
            type="number"
            step="0.01"
            min="0"
            value={values.fat}
            onChange={(e) => set("fat", e.target.value)}
            required
            className={inputClass}
          />
        </Field>
      </div>

      <Field
        label={defaults.imageUrl ? "Replace Image (optional)" : "Image"}
        error={state.fieldErrors?.image}
      >
        <div className="flex items-center gap-4">
          {preview && (
            <Image
              src={preview}
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 rounded-lg object-cover ring-1 ring-gray-200"
              unoptimized={preview.startsWith("blob:")}
            />
          )}
          <input
            name="image"
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            required={!defaults.imageUrl}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setPreview(URL.createObjectURL(file));
            }}
            className="block w-full text-sm text-gray-600 file:mr-3 file:rounded-lg file:border-0 file:bg-gray-100 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-gray-700 hover:file:bg-gray-200"
          />
        </div>
        <p className="mt-1 text-xs text-secondary-text">
          JPG, JPEG, PNG, or WebP. Max 5MB.
          {state.fieldErrors?.image && " If a validation error above cleared the file, please re-select it."}
        </p>
      </Field>

      <Button type="submit" disabled={pending}>
        {pending ? pendingLabel : submitLabel}
      </Button>
    </form>
  );
}
