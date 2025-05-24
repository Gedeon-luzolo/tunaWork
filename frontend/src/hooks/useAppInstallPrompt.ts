"use client";

import { useState, useEffect } from "react";

interface AppInstallPromptState {
  showPopup: boolean;
  isStandalone: boolean;
  isMobile: boolean;
  canInstallPWA: boolean;
}

export function useAppInstallPrompt() {
  const [state, setState] = useState<AppInstallPromptState>({
    showPopup: false,
    isStandalone: false,
    isMobile: false,
    canInstallPWA: false,
  });

  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Détecter si l'app est déjà installée (mode standalone)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                        (window.navigator as any).standalone ||
                        document.referrer.includes('android-app://');

    // Détecter si c'est un appareil mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    // Vérifier les conditions pour afficher le popup
    const hasClosedPopup = localStorage.getItem("tunawork-app-popup-closed");
    const hasInstalled = localStorage.getItem("tunawork-app-popup-installed");
    const lastShown = localStorage.getItem("tunawork-app-popup-last-shown");
    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 1 semaine

    // Conditions pour afficher le popup :
    // 1. Pas en mode standalone (app pas installée)
    // 2. Sur mobile
    // 3. Pas marqué comme installé
    // 4. Pas fermé récemment (moins d'une semaine)
    const shouldShowPopup = !isStandalone && 
                           isMobile && 
                           !hasInstalled &&
                           (!hasClosedPopup || (lastShown && now - parseInt(lastShown) > oneWeek));

    setState({
      showPopup: shouldShowPopup,
      isStandalone,
      isMobile,
      canInstallPWA: false,
    });

    // Écouter l'événement beforeinstallprompt pour PWA
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setState(prev => ({ ...prev, canInstallPWA: true }));
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const installPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        localStorage.setItem("tunawork-app-popup-installed", "true");
        setState(prev => ({ ...prev, showPopup: false }));
      }
      
      setDeferredPrompt(null);
      setState(prev => ({ ...prev, canInstallPWA: false }));
    }
  };

  const dismissPopup = () => {
    localStorage.setItem("tunawork-app-popup-closed", "true");
    localStorage.setItem("tunawork-app-popup-last-shown", Date.now().toString());
    setState(prev => ({ ...prev, showPopup: false }));
  };

  const markAsInstalled = () => {
    localStorage.setItem("tunawork-app-popup-installed", "true");
    setState(prev => ({ ...prev, showPopup: false }));
  };

  return {
    ...state,
    installPWA,
    dismissPopup,
    markAsInstalled,
    deferredPrompt,
  };
}
