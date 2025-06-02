import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Logo } from "../ui/logo";

export function ToogleButtonNavigation({
  showNavigation,
  setShowNavigation,
}: {
  showNavigation: boolean;
  setShowNavigation: (showNavigation: boolean) => void;
}) {
  return (
    <motion.button
      onClick={() => setShowNavigation(!showNavigation)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-4 left-4 z-[60] glassmorphism backdrop-blur-md border border-blue-200/30 shadow-lg rounded-xl p-3 cursor-pointer"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex items-center gap-2">
        {showNavigation ? (
          <ChevronLeft className="h-4 w-4 text-blue-600" />
        ) : (
          <ChevronRight className="h-4 w-4 text-blue-600" />
        )}
        <Logo size="sm" showText={false} />
      </div>
    </motion.button>
  );
}
