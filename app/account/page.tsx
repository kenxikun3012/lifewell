import Navbar from "@/components/Navbar";
import ProfileForm from "@/components/account/ProfileForm";
import TargetsForm from "@/components/account/TargetsForm";
import AvatarUpload from "@/components/account/AvatarUpload";
import { requireOnboardedUser } from "@/lib/onboarding";
import { getSession } from "@/lib/session";
import type { Goal, ActivityLevel } from "@/generated/prisma/client";

export const dynamic = "force-dynamic";

const GOAL_LABELS: Record<Goal, string> = {
  WEIGHT_LOSS: "Weight Loss",
  WEIGHT_GAIN: "Weight Gain",
  MUSCLE_GROWTH: "Muscle Growth",
  FIT_BODY: "Fit Body",
};

const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  SEDENTARY: "Sedentary",
  LIGHTLY_ACTIVE: "Lightly active",
  ACTIVE: "Active",
  VERY_ACTIVE: "Very active",
};

export default async function AccountPage() {
  const profile = await requireOnboardedUser();
  const session = await getSession();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="rounded-2xl border border-gray-200 p-10">
          <h1 className="text-3xl font-bold mb-8">Account Information</h1>

          <AvatarUpload currentUrl={session?.user.image ?? null} name={session?.user.name ?? ""} />

          <ProfileForm
            name={session?.user.name ?? ""}
            email={session?.user.email ?? ""}
            age={profile.age}
            gender={profile.gender}
            weightKg={profile.weightKg ? Number(profile.weightKg) : null}
            heightCm={profile.heightCm ? Number(profile.heightCm) : null}
          />

          {(profile.goal || profile.activityLevel) && (
            <div className="mt-6 flex flex-wrap gap-2 border-t border-gray-100 pt-6">
              {profile.goal && (
                <span className="rounded-full bg-primary-green/10 px-3 py-1 text-sm font-semibold text-primary-green">
                  Goal: {GOAL_LABELS[profile.goal]}
                </span>
              )}
              {profile.activityLevel && (
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                  Activity: {ACTIVITY_LABELS[profile.activityLevel]}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 p-10">
          <h2 className="text-2xl font-bold mb-2">Nutrition Targets</h2>
          <p className="text-sm text-gray-500 mb-6">
            Your daily calorie and macro goals, used across the dashboard and meal tracker.
          </p>
          <TargetsForm />
        </div>
      </div>
    </div>
  );
}
