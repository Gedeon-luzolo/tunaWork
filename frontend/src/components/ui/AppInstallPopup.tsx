"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { X, Smartphone, Download, Star } from "lucide-react";

interface AppInstallPopupProps {
  onClose?: () => void;
}

export function AppInstallPopup({ onClose }: AppInstallPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fermé le popup
    const hasClosedPopup = localStorage.getItem("tunawork-app-popup-closed");
    const lastShown = localStorage.getItem("tunawork-app-popup-last-shown");
    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 1 semaine en millisecondes

    // Afficher le popup si :
    // - Il n'a jamais été fermé OU
    // - Il a été fermé il y a plus d'une semaine
    if (!hasClosedPopup || (lastShown && now - parseInt(lastShown) > oneWeek)) {
      // Délai de 3 secondes avant d'afficher le popup
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    localStorage.setItem("tunawork-app-popup-closed", "true");
    localStorage.setItem("tunawork-app-popup-last-shown", Date.now().toString());
    
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      onClose?.();
    }, 300);
  };

  const handleInstall = (platform: "android" | "ios") => {
    // URLs des stores (à remplacer par les vraies URLs)
    const storeUrls = {
      android: "https://play.google.com/store/apps/details?id=com.tunawork.app",
      ios: "https://apps.apple.com/app/tunawork/id123456789"
    };

    // Ouvrir le store correspondant
    window.open(storeUrls[platform], "_blank");
    
    // Marquer comme installé et fermer le popup
    localStorage.setItem("tunawork-app-popup-installed", "true");
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ 
            scale: isClosing ? 0.9 : 1, 
            opacity: isClosing ? 0 : 1, 
            y: isClosing ? 20 : 0 
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-md glassmorphism rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden"
        >
          {/* Header avec bouton fermer */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Contenu principal */}
          <div className="p-6 text-center">
            {/* Icône de l'app */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-xl"
            >
              <span className="text-white text-3xl font-bold">T</span>
            </motion.div>

            {/* Titre */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-white mb-2"
            >
              Téléchargez TunaWork
            </motion.h2>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-300 mb-4 leading-relaxed"
            >
              Accédez à tous vos projets freelance directement depuis votre mobile. 
              Une expérience optimisée pour les professionnels.
            </motion.p>

            {/* Étoiles et note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center justify-center space-x-1 mb-6"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-white font-semibold ml-2">4.8</span>
              <span className="text-gray-400 text-sm">(2,847 avis)</span>
            </motion.div>

            {/* Boutons de téléchargement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-y-3"
            >
              {/* Bouton Android */}
              <Button
                onClick={() => handleInstall("android")}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 px-6 py-3 rounded-xl text-white font-semibold shadow-lg group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
                    <Download className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Télécharger sur</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </div>
              </Button>

              {/* Bouton iOS */}
              <Button
                onClick={() => handleInstall("ios")}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black transition-all duration-300 px-6 py-3 rounded-xl text-white font-semibold shadow-lg group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Télécharger sur</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </div>
              </Button>
            </motion.div>

            {/* Lien "Plus tard" */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              onClick={handleClose}
              className="mt-4 text-gray-400 hover:text-white transition-colors duration-200 text-sm underline"
            >
              Peut-être plus tard
            </motion.button>
          </div>

          {/* Indicateurs de fonctionnalités */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white/5 p-4 border-t border-white/10"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-blue-400 font-semibold text-sm">Hors ligne</div>
                <div className="text-gray-400 text-xs">Accès sans internet</div>
              </div>
              <div>
                <div className="text-green-400 font-semibold text-sm">Notifications</div>
                <div className="text-gray-400 text-xs">Alertes en temps réel</div>
              </div>
              <div>
                <div className="text-purple-400 font-semibold text-sm">Rapide</div>
                <div className="text-gray-400 text-xs">Performance optimisée</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
