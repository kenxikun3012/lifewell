import Button from "./Button";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column - Text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-[40px] font-bold leading-tight text-primary-text">
            Calculate your calories
          </h1>
          <p className="text-base text-secondary-text leading-relaxed">
            Discover the calorie content of common foods and make informed
            decisions about your daily nutrition. LifeWell helps you track what
            you eat with ease.
          </p>
          <div>
            <Button variant="primary" href="/meal-tracker">
              Get Started
            </Button>
          </div>
        </div>

        {/* Right column - Image/Illustration */}
        <div className="flex justify-center">
          <div className="w-full max-w-md aspect-square bg-secondary-green/20 rounded-2xl flex items-center justify-center">
            <span className="text-primary-green font-semibold text-lg">
              Hero Image Placeholder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}