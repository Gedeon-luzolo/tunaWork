"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Play,
  Star,
  Shield,
  Briefcase,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%233b82f6%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      {/* Professional Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Side - Freelancer Profiles */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden sm:block absolute left-2 sm:left-4 md:left-8 lg:left-12 top-1/2 transform -translate-y-1/2"
        >
          <div className="space-y-2 sm:space-y-3">
            <div className="glassmorphism rounded-lg p-2 sm:p-3 shadow-lg backdrop-blur-md border border-white/20">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white truncate">
                    Marie K.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    UI/UX Designer
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current flex-shrink-0" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="glassmorphism rounded-lg p-2 sm:p-3 shadow-lg backdrop-blur-md border border-white/20 ml-3 sm:ml-4 md:ml-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"></div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white truncate">
                    Jean M.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    Développeur
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current flex-shrink-0" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Client Success */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="hidden sm:block absolute right-2 sm:right-4 md:right-8 lg:right-12 top-1/2 transform -translate-y-1/2"
        >
          <div className="glassmorphism rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg backdrop-blur-md border border-white/20">
            <div className="text-center mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md sm:rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mx-auto mb-1 sm:mb-2">
                <Briefcase className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white">
                Entreprises
              </p>
            </div>
            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-gradient-to-r from-blue-400 to-blue-500"></div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-gradient-to-r from-green-400 to-green-500"></div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-gradient-to-r from-purple-400 to-purple-500"></div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-gradient-to-r from-pink-400 to-pink-500"></div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">+50</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 glassmorphism rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8 backdrop-blur-md border border-white/20"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              Plateforme de confiance pour freelancers
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-2"
          >
            Plateforme Professionnelle de
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Talents Freelance Congolais
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2"
          >
            Connectez-vous avec les meilleurs freelancers congolais. TunaWork
            facilite la collaboration, garantit des paiements sécurisés et
            assure le succès de vos projets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:scale-[1.02] transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base text-white font-semibold shadow-xl shadow-blue-500/25 group border-0 backdrop-blur-sm">
              Commencer maintenant
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              variant="ghost"
              className="w-full sm:w-auto glassmorphism hover:bg-white/10 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/20 group text-sm sm:text-base"
            >
              <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              Voir la démo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
