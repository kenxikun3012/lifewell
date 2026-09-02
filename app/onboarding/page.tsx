import { redirect } from "next/navigation";
import { requireUser } from "@/lib/session";
import OnboardingForm from "./OnboardingForm";

export const dynamic = "force-dynamic";

export default async function OnboardingPage() {
  const profile = await requireUser();
  if (profile.onboardingCompletedAt) {
    redirect("/");
  }

  return <OnboardingForm />;
}
