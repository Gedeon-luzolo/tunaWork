"use client";

import { Smartphone } from "lucide-react";
import { Button } from "../ui/button";

interface MobileAppModalTriggerProps {
  onOpen: () => void;
}

export function MobileAppModalTrigger({ onOpen }: MobileAppModalTriggerProps) {
  return (
    <Button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse hover:animate-none"
      size="icon"
    >
      <div className="flex flex-col items-center">
        <Smartphone className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        <span className="text-xs font-medium mt-1">App</span>
      </div>
    </Button>
  );
}
