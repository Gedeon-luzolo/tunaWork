"use client";

import { useAppInstallPrompt } from "@/src/hooks/useAppInstallPrompt";
import { AppInstallPopup } from "@/src/components/ui/AppInstallPopup";

interface AppInstallProviderProps {
  children: React.ReactNode;
}

export function AppInstallProvider({ children }: AppInstallProviderProps) {
  const { showPopup, dismissPopup } = useAppInstallPrompt();

  return (
    <>
      {children}
      {showPopup && <AppInstallPopup onClose={dismissPopup} />}
    </>
  );
}
