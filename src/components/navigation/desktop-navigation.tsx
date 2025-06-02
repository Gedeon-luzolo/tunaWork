import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../ui/lib/utils";
import { slides } from "@/src/lib/data/slide-data";

export interface ISlide2 {
  handleSlideChange: (direction: "prev" | "next") => void;
  activeSlide: number;
}

export function DesktopNavigation({activeSlide, handleSlideChange}:ISlide2) {
  return (
    <>
      <motion.button
        onClick={() => handleSlideChange("prev")}
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 glassmorphism backdrop-blur-md border border-blue-200/30 shadow-lg rounded-full p-4 cursor-pointer group"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        disabled={activeSlide === 0}
      >
        <ChevronLeft
          className={cn(
            "h-6 w-6 transition-colors",
            activeSlide === 0
              ? "text-gray-400"
              : "text-blue-600 group-hover:text-blue-700"
          )}
        />
      </motion.button>

      <motion.button
        onClick={() => handleSlideChange("next")}
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 glassmorphism backdrop-blur-md border border-blue-200/30 shadow-lg rounded-full p-4 cursor-pointer group"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        disabled={activeSlide === slides.length - 1}
      >
        <ChevronRight
          className={cn(
            "h-6 w-6 transition-colors",
            activeSlide === slides.length - 1
              ? "text-gray-400"
              : "text-blue-600 group-hover:text-blue-700"
          )}
        />
      </motion.button>
    </>
  );
}
