import Button from "@/components/Button";

interface OnboardingPromptProps {
  name: string;
}

export default function OnboardingPrompt({ name }: OnboardingPromptProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-[40px] font-bold leading-tight text-primary-text">
            Welcome, {name}
          </h1>
          <p className="text-base text-secondary-text leading-relaxed">
            Finish setting up your profile to get personalized calorie & macro targets — and
            unlock your streak pet, which grows and changes with your eating habits.
          </p>
          <div>
            <Button variant="primary" href="/onboarding">
              Finish setting up
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md aspect-square bg-secondary-green/20 rounded-2xl flex items-center justify-center">
            <span className="text-primary-green font-semibold text-lg text-center px-6">
              Your streak pet is waiting to hatch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
