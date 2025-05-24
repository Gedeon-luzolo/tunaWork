"use client";

import { useState, useEffect } from "react";

export function useOnboarding() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if onboarding has been completed
    const onboardingCompleted = localStorage.getItem("tunawork_onboarding_completed");
    
    if (!onboardingCompleted) {
      setShouldShowOnboarding(true);
    }
    
    setIsLoading(false);
  }, []);

  const completeOnboarding = () => {
    localStorage.setItem("tunawork_onboarding_completed", "true");
    setShouldShowOnboarding(false);
  };

  const resetOnboarding = () => {
    localStorage.removeItem("tunawork_onboarding_completed");
    setShouldShowOnboarding(true);
  };

  return {
    shouldShowOnboarding,
    isLoading,
    completeOnboarding,
    resetOnboarding,
  };
}
