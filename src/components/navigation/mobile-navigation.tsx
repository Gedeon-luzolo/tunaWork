import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

interface MobileNavigationProps {
  activeSlide?: number;
  totalSlides?: number;
}

export function MobileNavigation({
  activeSlide = 0,
  totalSlides = 10,
}: MobileNavigationProps) {
  return (
    <motion.div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg rounded-2xl px-4 py-3"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="flex flex-col items-center gap-2">
        {/* Instructions de navigation */}
        <div className="flex items-center gap-3 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <ChevronLeft className="h-3 w-3 text-blue-600" />
            <ChevronRight className="h-3 w-3 text-blue-600" />
            <span>Swipe horizontal</span>
          </div>
          <div className="w-px h-3 bg-gray-300"></div>
          <div className="flex items-center gap-1">
            <ChevronUp className="h-3 w-3 text-green-600" />
            <ChevronDown className="h-3 w-3 text-green-600" />
            <span>Scroll vertical</span>
          </div>
        </div>

        {/* Indicateur de slide */}
        <div className="flex items-center gap-1">
          <span className="text-xs font-medium text-blue-600">
            {activeSlide + 1}
          </span>
          <span className="text-xs text-gray-400">/</span>
          <span className="text-xs text-gray-500">{totalSlides}</span>
        </div>
      </div>
    </motion.div>
  );
}
