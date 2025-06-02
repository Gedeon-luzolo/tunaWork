"use client";

import { useState, useEffect } from "react";

export function useMobileAppModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Vérifier si le modal a déjà été affiché
    const modalShown = localStorage.getItem("tunawork_mobile_modal_shown");
    const lastShown = localStorage.getItem("tunawork_mobile_modal_last_shown");
    
    if (modalShown === "true") {
      setHasShown(true);
      
      // Si le modal a été affiché, vérifier si c'était il y a plus de 7 jours
      if (lastShown) {
        const lastShownDate = new Date(lastShown);
        const now = new Date();
        const daysDiff = Math.floor((now.getTime() - lastShownDate.getTime()) / (1000 * 60 * 60 * 24));
        
        // Afficher à nouveau après 7 jours
        if (daysDiff >= 7) {
          setHasShown(false);
        }
      }
    }

    // Afficher le modal après 10 secondes si pas encore affiché
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000); // 10 secondes

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const closeModal = () => {
    setIsOpen(false);
    setHasShown(true);
    
    // Marquer comme affiché dans localStorage
    localStorage.setItem("tunawork_mobile_modal_shown", "true");
    localStorage.setItem("tunawork_mobile_modal_last_shown", new Date().toISOString());
  };

  const openModal = () => {
    setIsOpen(true);
  };

  // Fonction pour forcer l'affichage (pour les tests)
  const forceShow = () => {
    localStorage.removeItem("tunawork_mobile_modal_shown");
    localStorage.removeItem("tunawork_mobile_modal_last_shown");
    setHasShown(false);
    setIsOpen(true);
  };

  return {
    isOpen,
    closeModal,
    openModal,
    forceShow,
    hasShown,
  };
}
