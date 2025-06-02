"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Users,
  Globe,
  Sparkles,
  X,
  Volume2,
  Heart,
  Accessibility,
} from "lucide-react";
import { videoData } from "../../lib/data/video";

export function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 overflow-hidden">
      {/* Background Pattern - Copié du HeroSection */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%233b82f6%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      {/* Main Content - 2 Colonnes */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Colonne Gauche - Vidéo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative group cursor-pointer" onClick={openVideo}>
              {/* Video Container */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 p-1 sm:p-2">
                <div className="aspect-video bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-blue-900/20 dark:via-gray-800/20 dark:to-blue-950/20 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgb(59_130_246)_1px,_transparent_1px)] bg-[size:40px_40px]" />
                  </div>

                  {/* Play Button */}
                  <div className="relative z-10 text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-2xl transition-all duration-500"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 ml-1" />
                    </motion.div>

                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Regarder notre histoire
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-2">
                        <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>
                          Sous-titres disponibles • {videoData.duration}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Accessibility Badge */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 flex items-center space-x-1">
                      <Accessibility className="w-3 h-3" />
                      <span className="hidden sm:inline">Accessible</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-2  bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </motion.div>

          {/* Colonne Droite - Fonctionnalités Inclusives */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Découvrez comment TunaWork unit les talents congolais et crée
                des opportunités pour tous, peu importe votre origine, votre
                genre ou votre parcours.
              </motion.p>
            </div>

            {/* Inclusive Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "🌍",
                  title: "Diversité & Inclusion",
                  description: "Tous les talents sont les bienvenus",
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  icon: "♿",
                  title: "Accessibilité",
                  description: "Plateforme accessible à tous",
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  icon: "❤️",
                  title: "Communauté",
                  description: "Environnement bienveillant",
                  color: "from-pink-500 to-rose-600",
                },
                {
                  icon: "⚖️",
                  title: "Équité",
                  description: "Chances égales pour tous",
                  color: "from-amber-500 to-orange-600",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="relative p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 h-full">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-lg">{feature.icon}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeVideo}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 border border-white/20"
              aria-label="Fermer la vidéo"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Accessibility Info */}
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white border border-white/20 flex items-center space-x-1">
                <Volume2 className="w-3 h-3" />
                <span>Sous-titres disponibles</span>
              </div>
            </div>

            {/* Video Iframe */}
            <iframe
              src={`${videoData.videoUrl}?autoplay=1&cc_load_policy=1`}
              title="TunaWork - Notre Histoire (Vidéo accessible avec sous-titres)"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
