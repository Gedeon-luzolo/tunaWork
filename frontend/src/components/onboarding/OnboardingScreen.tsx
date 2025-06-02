"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OnboardingSlide } from "./OnboardingSlide";
import { OnboardingProps, OnboardingSlideData } from "./types";
import { useTranslations } from "next-intl";

export function OnboardingScreen({ onComplete, onSkip }: OnboardingProps) {
  const t = useTranslations("onboarding");

  const onboardingData: OnboardingSlideData[] = [
    {
      id: 1,
      title: t("slide1.title"),
      subtitle: t("slide1.subtitle"),
      description: t("slide1.description"),
      image: "/images/onboarding/slide1.jpg",
      buttonText: t("slide1.button"),
    },
    {
      id: 2,
      title: t("slide2.title"),
      subtitle: t("slide2.subtitle"),
      description: t("slide2.description"),
      image: "/images/onboarding/slide2.jpg",
      buttonText: t("slide2.button"),
    },
    {
      id: 3,
      title: t("slide3.title"),
      subtitle: t("slide3.subtitle"),
      description: t("slide3.description"),
      image: "/images/onboarding/slide3.jpg",
      buttonText: t("slide3.button"),
      isLast: true,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < onboardingData.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const skipOnboarding = () => {
    if (onSkip) {
      onSkip();
    } else {
      onComplete();
    }
  };

  // Auto-advance slides (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide < onboardingData.length - 1) {
        nextSlide();
      }
    }, 8000); // 8 seconds per slide

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        nextSlide();
      } else if (event.key === "Escape") {
        skipOnboarding();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Logo/Brand */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 z-20"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-white text-xl font-bold">TunaWork</span>
        </div>
      </motion.div>

      {/* Slides Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait" custom={direction}>
          <OnboardingSlide
            key={currentSlide}
            slide={onboardingData[currentSlide]}
            isActive={true}
            onNext={nextSlide}
            onSkip={onSkip}
            currentIndex={currentSlide}
            totalSlides={onboardingData.length}
          />
        </AnimatePresence>
      </div>

      {/* Touch/Swipe Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex items-center space-x-2 text-white/50 text-sm">
          <span>{t("swipe_hint")}</span>
        </div>
      </motion.div>
    </div>
  );
}
