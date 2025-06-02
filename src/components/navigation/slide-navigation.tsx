import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { slides } from "@/src/lib/data/slide-data";
import { cn } from "../ui/lib/utils";
import { Logo } from "../ui/logo";

interface ISlide {
  showNavigation: boolean;
  goToSlide: (index: number) => void;
  handleSlideChange: (direction: "prev" | "next") => void;
  activeSlide: number;
}

export function SlideNavigation({
  goToSlide,
  handleSlideChange,
  showNavigation,
  activeSlide,
}: ISlide) {
  return (
    <motion.div
      drag="y"
      dragConstraints={{
        top: 50,
        bottom: typeof window !== "undefined" ? window.innerHeight - 400 : 500,
      }}
      className={cn(
        "fixed top-20 left-4 z-50 glassmorphism backdrop-blur-md border border-blue-200/30 shadow-lg rounded-2xl p-4 cursor-move w-48 transition-all duration-300",
        showNavigation
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full pointer-events-none"
      )}
      initial={{ x: -200, opacity: 0 }}
      animate={{
        x: showNavigation ? 0 : -200,
        opacity: showNavigation ? 1 : 0,
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-200/30">
        <Logo size="sm" showText={false} />
        <span className="font-semibold text-gray-700 text-sm">Navigation</span>
      </div>

      <div className="space-y-2 max-h-80 overflow-y-auto hide-scrollbar">
        {slides.map((slide, index) => (
          <motion.button
            key={slide.id}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "w-full text-left text-xs font-medium transition-all duration-300 px-3 py-2 rounded-lg backdrop-blur-md border relative overflow-hidden",
              activeSlide === index
                ? "text-white bg-blue-500 border-blue-400 shadow-md"
                : "text-gray-700 hover:text-blue-600 border-gray-200/50 hover:border-blue-300/50 hover:bg-blue-50/50"
            )}
          >
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeSlide === index ? "bg-white" : "bg-blue-400"
                )}
              />
              <span className="truncate">{slide.title}</span>
            </div>
            {activeSlide === index && (
              <motion.div
                layoutId="activeSlideIndicator"
                className="absolute inset-0 bg-blue-500 rounded-lg -z-10"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex gap-1 mt-4 pt-3 border-t border-blue-200/30">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg border-gray-200 bg-white/70 hover:bg-blue-50 text-gray-600 hover:text-blue-600 flex-1 text-xs"
          onClick={() => handleSlideChange("prev")}
        >
          <ChevronLeft className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg border-gray-200 bg-white/70 hover:bg-blue-50 text-gray-600 hover:text-blue-600 flex-1 text-xs"
          onClick={() => handleSlideChange("next")}
        >
          <ChevronRight className="h-3 w-3" />
        </Button>
      </div>
    </motion.div>
  );
}
