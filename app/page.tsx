"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FeaturesSlide,
  HeroSlide,
  MarketSlide,
  ProblemSlide,
  RevenueSlide,
  SolutionSlide,
  FundingSlide,
  ImpactSlide,
  MissionSlide,
  ContactSlide,
} from "@/src/components/slides";
import { SlideNavigation } from "@/src/components/navigation/slide-navigation";
import { MobileNavigation } from "@/src/components/navigation/mobile-navigation";
import { DesktopNavigation } from "@/src/components/navigation/desktop-navigation";
import { Background } from "@/src/components/background/background";
import { ToogleButtonNavigation } from "@/src/components/navigation/toogle-button";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showNavigation, setShowNavigation] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  // Detect mobile device with improved detection
  useEffect(() => {
    const checkMobile = () => {
      const isMobileWidth = window.innerWidth < 768;
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(isMobileWidth || isTouchDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
    };
  }, []);

  const handleSlideChange = (direction: "prev" | "next") => {
    if (swiperRef.current) {
      if (direction === "prev") {
        swiperRef.current.slidePrev();
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <main className="h-screen w-screen overflow-hidden relative text-gray-800">
      {/* Background with elegant white theme */}
      <Background />

      {/* Navigation Toggle Button */}
      <ToogleButtonNavigation
        showNavigation={showNavigation}
        setShowNavigation={setShowNavigation}
      />

      {/* Desktop Navigation Arrows */}
      {!isMobile && (
        <DesktopNavigation
          activeSlide={activeSlide}
          handleSlideChange={handleSlideChange}
        />
      )}

      {/* Mobile Navigation Indicators */}
      {isMobile && (
        <MobileNavigation activeSlide={activeSlide} totalSlides={10} />
      )}

      {/* Slide Navigation Draggable à gauche */}
      <SlideNavigation
        activeSlide={activeSlide}
        goToSlide={goToSlide}
        handleSlideChange={handleSlideChange}
        showNavigation={showNavigation}
      />

      {/* Swiper Slides */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={0}
        slidesPerView={1}
        direction="horizontal"
        mousewheel={{
          enabled: true,
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: false,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: false,
        }}
        allowTouchMove={true}
        touchRatio={1.2}
        touchAngle={30}
        threshold={5}
        longSwipesRatio={0.3}
        longSwipesMs={200}
        shortSwipes={true}
        followFinger={true}
        touchMoveStopPropagation={false}
        touchStartPreventDefault={false}
        touchStartForcePreventDefault={false}
        touchReleaseOnEdges={true}
        resistance={true}
        resistanceRatio={0.85}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
          hideOnClick: false,
          renderBullet: (_, className) => {
            return `<span class="${className} !bg-blue-600 !opacity-100"></span>`;
          },
        }}
        speed={400}
        grabCursor={true}
        centeredSlides={false}
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        modules={[Navigation, Pagination, Keyboard, Mousewheel]}
        className="h-screen w-screen"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        onTouchStart={() => {
          // Améliore la réactivité tactile
          if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
          }
        }}
        onTouchEnd={() => {
          // Restaure le scroll après le swipe
          setTimeout(() => {
            document.body.style.overflow = "";
          }, 100);
        }}
      >
        {/* Hero Slide */}
        <SwiperSlide className="h-full w-full overflow-y-auto">
          <HeroSlide goToSlide={goToSlide} />
        </SwiperSlide>

        {/* Problem Slide */}
        <SwiperSlide className="h-full w-full overflow-y-auto">
          <ProblemSlide />
        </SwiperSlide>

        {/* Solution Slide */}
        <SwiperSlide className="h-full w-full overflow-y-auto">
          <SolutionSlide />
        </SwiperSlide>

        {/* Market Size Slide */}
        <SwiperSlide className="h-full w-full overflow-y-auto">
          <MarketSlide />
        </SwiperSlide>

        {/* Features Slide */}
        <SwiperSlide className="h-full w-full overflow-y-auto">
          <FeaturesSlide />
        </SwiperSlide>

        {/* Revenue Model Slide */}
        <SwiperSlide className="h-full w-full overflow-y-auto">
          <RevenueSlide />
        </SwiperSlide>

        {/* Funding Slide */}
        <SwiperSlide className="h-full w-full overflow-y-auto">
          <FundingSlide />
        </SwiperSlide>

        {/* Impact Slide */}
        <SwiperSlide className="h-full w-full overflow-y-auto">
          <ImpactSlide />
        </SwiperSlide>

        {/* Mission Slide */}
        <SwiperSlide className="h-full w-full overflow-y-auto">
          <MissionSlide />
        </SwiperSlide>

        {/* Contact Slide */}
        <SwiperSlide className="h-full w-full overflow-y-auto">
          <ContactSlide />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
