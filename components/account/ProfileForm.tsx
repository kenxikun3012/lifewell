"use client";

import { useActionState } from "react";
import { updateProfile, type ProfileActionState } from "@/app/account/actions";

interface ProfileFormProps {
  name: string;
  email: string;
  age: number | null;
  gender: string | null;
  weightKg: number | null;
  heightCm: number | null;
}

const initialState: ProfileActionState = {};

export default function ProfileForm({ name, email, age, gender, weightKg, heightCm }: ProfileFormProps) {
  const [state, formAction, pending] = useActionState(updateProfile, initialState);

  return (
    <form action={formAction}>
      {state.error && (
        <div className="mb-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600" role="alert">
          {state.error}
        </div>
      )}
      {state.success && (
        <div className="mb-4 rounded-lg bg-green-50 px-4 py-2 text-sm text-green-700" role="status">
          {state.success}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
        <div>
          <label className="text-sm font-semibold text-gray-600 block mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            required
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-600 block mb-1">Email</label>
          <input
            type="email"
            value={email}
            disabled
            className="border rounded px-3 py-2 w-full bg-gray-50 text-gray-500"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-600 block mb-1">Age</label>
          <input
            type="number"
            name="age"
            min="13"
            max="120"
            defaultValue={age ?? ""}
            required
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-600 block mb-1">Sex</label>
          <select
            name="sex"
            defaultValue={gender ?? ""}
            required
            className="border rounded px-3 py-2 w-full"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-600 block mb-1">Weight (kg)</label>
          <input
            type="number"
            name="weightKg"
            step="0.1"
            min="20"
            max="400"
            defaultValue={weightKg ?? ""}
            required
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-600 block mb-1">Height (cm)</label>
          <input
            type="number"
            name="heightCm"
            step="0.1"
            min="100"
            max="250"
            defaultValue={heightCm ?? ""}
            required
            className="border rounded px-3 py-2 w-full"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 rounded-lg bg-primary-green px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-green/90 disabled:opacity-50"
      >
        {pending ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
