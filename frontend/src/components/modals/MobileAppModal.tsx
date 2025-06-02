"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  X,
  Smartphone,
  Bell,
  Search,
  MessageCircle,
  Download,
  Star,
  Briefcase,
} from "lucide-react";
import { Button } from "../ui/button";

interface MobileAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileAppModal({ isOpen, onClose }: MobileAppModalProps) {
  const t = useTranslations("mobile_app_modal");

  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Bell,
      title: t("features.notifications"),
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Search,
      title: t("features.advanced_search"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      title: t("features.chat"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Briefcase,
      title: t("features.portfolio"),
      color: "from-indigo-500 to-blue-500",
    },
  ];

  // Auto-rotate features
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isOpen, features.length]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl h-[80vh] overflow-hidden"
        >
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 h-full">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group shadow-lg"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left Side - Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-between">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-600 dark:text-gray-300 ml-2 font-semibold">4.9</span>
                    </div>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {t("title")}
                  </h2>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {t("subtitle")}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                    {t("description")}
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="my-4"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      const isActive = index === currentFeature;
                      
                      return (
                        <motion.div
                          key={index}
                          animate={{
                            scale: isActive ? 1.02 : 1,
                            opacity: isActive ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`p-3 rounded-xl border transition-all duration-300 ${
                            isActive
                              ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 shadow-md"
                              : "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs font-medium text-gray-900 dark:text-white">
                              {feature.title}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Download Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-3"
                >
                  <div className="space-y-3">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white h-12 rounded-xl flex items-center justify-center space-x-3 group transition-all duration-300">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold">📱</span>
                      </div>
                      <div className="text-left">
                        <div className="text-xs opacity-80">{t("download_on")}</div>
                        <div className="font-semibold">{t("app_store")}</div>
                      </div>
                      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </Button>

                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12 rounded-xl flex items-center justify-center space-x-3 group transition-all duration-300">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-green-600 font-bold">▶</span>
                      </div>
                      <div className="text-left">
                        <div className="text-xs opacity-80">{t("download_on")}</div>
                        <div className="font-semibold">{t("play_store")}</div>
                      </div>
                      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </Button>
                  </div>

                  <div className="flex justify-center mt-4">
                    <Button
                      variant="ghost"
                      onClick={onClose}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-6 py-2"
                    >
                      {t("later")}
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Phone Mockup */}
              <div className="hidden lg:flex relative p-6 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-purple-900/20">
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8 w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-800/40 shadow-lg"
                />
                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-purple-200 dark:bg-purple-800/40 shadow-lg"
                />

                {/* Phone Mockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", damping: 20 }}
                  className="relative"
                >
                  <div className="w-64 h-[480px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white rounded-[2rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="h-6 bg-gray-900 flex items-center justify-between px-4 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 border border-white rounded-sm">
                            <div className="w-3 h-full bg-white rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="p-3 h-full">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">T</span>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">TunaWork</div>
                            <div className="text-xs text-gray-500">Mobile App</div>
                          </div>
                        </div>

                        {/* Animated Feature Showcase */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentFeature}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-2"
                          >
                            {features.slice(currentFeature, currentFeature + 3).map((feature, index) => {
                              const Icon = feature.icon;
                              return (
                                <div key={index} className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm">
                                  <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                                    <Icon className="w-3 h-3 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-xs font-medium text-gray-900">{feature.title}</div>
                                    <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                        className={`h-full bg-gradient-to-r ${feature.color} rounded-full`}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </motion.div>
                        </AnimatePresence>

                        {/* Coming Soon Badge */}
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute bottom-3 left-3 right-3"
                        >
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-2 px-3 rounded-lg font-semibold text-xs flex items-center justify-center space-x-1">
                            <Star className="w-3 h-3" />
                            <span>{t("coming_soon")}</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
