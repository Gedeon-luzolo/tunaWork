"use client";

import { HeroSection } from "@/src/components/hero/HeroSection";
import { Navbar } from "@/src/components/navigation/Navbar";
import { OnboardingFlow } from "@/src/components/onboarding/OnboardingFlow";
import { useOnboarding } from "@/src/components/onboarding/useOnboarding";
import { Button } from "@/src/components/ui/button";

export default function Home() {
  const {
    shouldShowOnboarding,
    isLoading,
    completeOnboarding,
    resetOnboarding,
  } = useOnboarding();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (shouldShowOnboarding) {
    return <OnboardingFlow onComplete={completeOnboarding} />;
  }

  return (
    <div>
      <Navbar/>
      <HeroSection />
    </div>
  );
}
