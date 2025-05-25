"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { videoData } from "../../lib/data/video";

export function VideoHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Découvrez
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TunaWork
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            La première plateforme freelance qui révolutionne le travail en République Démocratique du Congo
          </p>

          {/* Video Thumbnail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative max-w-3xl mx-auto cursor-pointer group"
            onClick={openVideo}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                {/* Play Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                >
                  <Play className="w-12 h-12 text-white ml-1" />
                </motion.div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              
              {/* Duration Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium">
                  {videoData.duration}
                </span>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12"
          >
            <button
              onClick={openVideo}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Play className="w-5 h-5 inline mr-2" />
              Regarder la présentation
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
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
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Iframe */}
            <iframe
              src={`${videoData.videoUrl}?autoplay=1`}
              title="TunaWork Presentation Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
