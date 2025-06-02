"use client";

import { FAQSection } from "@/src/components/faq/FAQSection";
import { HeroSection } from "@/src/components/hero/HeroSection";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/navigation/Navbar";
import { OnboardingFlow } from "@/src/components/onboarding/OnboardingFlow";
import { PremiumFreelancersCarousel } from "@/src/components/showcase/PremiumFreelancersCarousel";
import { VideoSection } from "@/src/components/video/VideoSection";
import { TestimonialsSection } from "@/src/components/testimonials/TestimonialsSection";
import { PricingSection } from "@/src/components/pricing/PricingSection";
import { AboutSection } from "@/src/components/about/AboutSection";
import { MobileAppModal, MobileAppModalTrigger } from "@/src/components/modals";
import { useOnboarding } from "@/src/hooks/useOnboarding";
import { useMobileAppModal } from "../../src/hooks/useMobileAppModal";

export default function Home() {
  const { shouldShowOnboarding, isLoading, completeOnboarding } =
    useOnboarding();
  const {
    isOpen: isMobileModalOpen,
    closeModal: closeMobileModal,
    openModal: openMobileModal,
  } = useMobileAppModal();

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
      <Navbar />
      <HeroSection />
      <VideoSection />
      <PremiumFreelancersCarousel />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />

      {/* Mobile App Modal */}
      <MobileAppModal isOpen={isMobileModalOpen} onClose={closeMobileModal} />

      {/* Test Button for Modal (remove in production) */}
      <MobileAppModalTrigger onOpen={openMobileModal} />
    </div>
  );
}
