import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  animated?: boolean;
  variant?: "gradient" | "svg" | "simple";
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
};

const textSizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
};

const iconSizeClasses = {
  sm: "text-sm",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
};

const SVGLogo = ({
  size,
  animated,
}: {
  size: keyof typeof sizeClasses;
  animated: boolean;
}) => (
  <div
    className={cn(
      sizeClasses[size],
      "relative rounded-xl overflow-hidden",
      animated && "soft-glow"
    )}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="tunaworkGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect
        width="40"
        height="40"
        rx="12"
        fill="url(#tunaworkGradient)"
        filter={animated ? "url(#glow)" : undefined}
      />

      <g transform="translate(8, 8)">
        <rect x="2" y="3" width="20" height="3" rx="1.5" fill="white" />
        <rect x="10" y="3" width="4" height="18" rx="2" fill="white" />
        <circle cx="12" cy="24" r="1.5" fill="white" opacity="0.8" />
      </g>
    </svg>
  </div>
);

const GradientLogo = ({
  size,
  animated,
}: {
  size: keyof typeof sizeClasses;
  animated: boolean;
}) => (
  <div
    className={cn(
      sizeClasses[size],
      "rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg",
      animated && "soft-glow"
    )}
  >
    <span className={cn("text-white font-bold", iconSizeClasses[size])}>T</span>
  </div>
);

export function Logo({
  size = "md",
  showText = true,
  className,
  animated = true,
  variant = "svg",
}: LogoProps) {
  const LogoIcon = ({ className: iconClassName }: { className?: string }) => {
    switch (variant) {
      case "svg":
        return <SVGLogo size={size} animated={animated} />;
      case "gradient":
        return <GradientLogo size={size} animated={animated} />;
      case "simple":
        return (
          <div
            className={cn(
              sizeClasses[size],
              "rounded-xl bg-blue-500 flex items-center justify-center",
              iconClassName
            )}
          >
            <span className={cn("text-white font-bold", iconSizeClasses[size])}>
              T
            </span>
          </div>
        );
      default:
        return <SVGLogo size={size} animated={animated} />;
    }
  };

  const content = (
    <div className={cn("flex items-center space-x-3", className)}>
      <LogoIcon />
      {showText && (
        <span
          className={cn(
            "font-bold text-gray-900 dark:text-white",
            textSizeClasses[size]
          )}
        >
          TunaWork
        </span>
      )}
    </div>
  );

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
