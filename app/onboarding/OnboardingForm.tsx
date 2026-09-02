"use client";

import { useActionState } from "react";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import { completeOnboarding } from "./actions";
import type { OnboardingState } from "./actions";

const initialState: OnboardingState = {};

const GOALS = [
  { value: "WEIGHT_GAIN", label: "Weight Gain", description: "Eat above maintenance" },
  { value: "WEIGHT_LOSS", label: "Weight Loss", description: "Eat below maintenance" },
  { value: "MUSCLE_GROWTH", label: "Muscle Growth", description: "Lean bulk, high protein" },
  { value: "FIT_BODY", label: "Fit Body", description: "Maintain & tone" },
] as const;

export default function OnboardingForm() {
  const [state, formAction, pending] = useActionState(completeOnboarding, initialState);

  return (
    <AuthCard>
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Tell us about yourself</h1>
        <p className="mt-1 text-sm text-gray-500">
          We&apos;ll use this to build your personalized calorie &amp; macro plan.
        </p>
      </div>

      {state?.error && (
        <div className="mb-3 rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-600" role="alert">
          {state.error}
        </div>
      )}

      <form action={formAction} className="space-y-3.5">
        <AuthInput
          id="name"
          name="name"
          label="Full Name"
          type="text"
          placeholder="John Doe"
          autoComplete="name"
          required
        />

        <div className="grid grid-cols-2 gap-3">
          <AuthInput
            id="age"
            name="age"
            label="Age"
            type="number"
            min="13"
            max="120"
            placeholder="25"
            required
          />
          <div className="space-y-1">
            <label htmlFor="sex" className="block text-[13px] font-semibold text-gray-700">
              Sex
            </label>
            <select
              id="sex"
              name="sex"
              required
              defaultValue=""
              className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 shadow-sm transition-all duration-200 focus:border-[#4CAF50] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <AuthInput
            id="weightKg"
            name="weightKg"
            label="Weight (kg)"
            type="number"
            step="0.1"
            min="20"
            max="400"
            placeholder="60"
            required
          />
          <AuthInput
            id="heightCm"
            name="heightCm"
            label="Height (cm)"
            type="number"
            step="0.1"
            min="100"
            max="250"
            placeholder="165"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="activityLevel" className="block text-[13px] font-semibold text-gray-700">
            Activity Level
          </label>
          <select
            id="activityLevel"
            name="activityLevel"
            required
            defaultValue=""
            className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 shadow-sm transition-all duration-200 focus:border-[#4CAF50] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="SEDENTARY">Sedentary (little to no exercise)</option>
            <option value="LIGHTLY_ACTIVE">Lightly active (1–3 days/week)</option>
            <option value="ACTIVE">Active (3–5 days/week)</option>
            <option value="VERY_ACTIVE">Very active (6–7 days/week)</option>
          </select>
        </div>

        <fieldset>
          <legend className="mb-1.5 block text-[13px] font-semibold text-gray-700">
            Diet Preference
          </legend>
          <div className="grid grid-cols-2 gap-2">
            {GOALS.map((goal) => (
              <label
                key={goal.value}
                className="flex cursor-pointer flex-col rounded-xl border border-gray-300 px-3 py-2 text-sm transition-colors has-[:checked]:border-[#4CAF50] has-[:checked]:bg-[#4CAF50]/10"
              >
                <span className="flex items-center gap-1.5 font-semibold text-gray-800">
                  <input
                    type="radio"
                    name="goal"
                    value={goal.value}
                    required
                    className="accent-[#4CAF50]"
                  />
                  {goal.label}
                </span>
                <span className="mt-0.5 text-xs text-gray-500">{goal.description}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <AuthButton type="submit" variant="primary" disabled={pending}>
          {pending ? "Saving..." : "Build My Plan"}
        </AuthButton>
      </form>
    </AuthCard>
  );
}
