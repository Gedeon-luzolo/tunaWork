"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
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

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
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
      {isMobile && <MobileNavigation />}

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
        mousewheel={!isMobile}
        keyboard={{ enabled: true }}
        allowTouchMove={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="h-screen w-screen"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {/* Hero Slide */}
        <SwiperSlide className="h-full w-full">
          <HeroSlide goToSlide={goToSlide} />
        </SwiperSlide>

        {/* Problem Slide */}
        <SwiperSlide className="h-full w-full">
          <ProblemSlide />
        </SwiperSlide>

        {/* Solution Slide */}
        <SwiperSlide className="h-full w-full">
          <SolutionSlide />
        </SwiperSlide>

        {/* Market Size Slide */}
        <SwiperSlide className="h-full w-full">
          <MarketSlide />
        </SwiperSlide>

        {/* Features Slide */}
        <SwiperSlide className="h-full w-full">
          <FeaturesSlide />
        </SwiperSlide>

        {/* Revenue Model Slide */}
        <SwiperSlide className="h-full w-full">
          <RevenueSlide />
        </SwiperSlide>

        {/* Funding Slide */}
        <SwiperSlide className="h-full w-full">
          <FundingSlide />
        </SwiperSlide>

        {/* Impact Slide */}
        <SwiperSlide className="h-full w-full">
          <ImpactSlide />
        </SwiperSlide>

        {/* Mission Slide */}
        <SwiperSlide className="h-full w-full">
          <MissionSlide />
        </SwiperSlide>

        {/* Contact Slide */}
        <SwiperSlide className="h-full w-full">
          <ContactSlide />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
