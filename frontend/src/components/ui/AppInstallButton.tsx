"use client";

import { useState } from "react";
import { Button } from "./button";
import { Download } from "lucide-react";
import { AppInstallPopup } from "./AppInstallPopup";

export function AppInstallButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowPopup(true)}
        variant="outline"
        className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
      >
        <Download className="w-4 h-4 mr-2" />
        Télécharger l'app
      </Button>
      
      {showPopup && (
        <AppInstallPopup onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}
