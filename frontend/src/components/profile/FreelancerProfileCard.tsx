"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Clock, DollarSign, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { type FreelancerProfile } from "../../lib/data/freelancerProfile";

interface FreelancerProfileCardProps {
  profile: FreelancerProfile;
  onContact?: () => void;
  onViewProfile?: () => void;
}

export function FreelancerProfileCard({ 
  profile, 
  onContact, 
  onViewProfile 
}: FreelancerProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20 hover:shadow-xl transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start space-x-4 mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
              <span className="text-xl font-bold text-blue-600">
                {profile.name.charAt(0)}
              </span>
            </div>
          </div>
          {profile.isOnline && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
          )}
          {profile.isVerified && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
            {profile.name}
          </h3>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium truncate">
            {profile.title}
          </p>
          <div className="flex items-center space-x-1 mt-1">
            <MapPin className="w-3 h-3 text-gray-500 flex-shrink-0" />
            <span className="text-xs text-gray-600 dark:text-gray-400 truncate">
              {profile.location}
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {profile.rating}
            </span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {profile.totalReviews} avis
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <DollarSign className="w-4 h-4 text-green-500" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {profile.hourlyRate.split('-')[0]}
            </span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">par heure</p>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {profile.specialties.slice(0, 3).map((specialty, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
            >
              {specialty}
            </span>
          ))}
          {profile.specialties.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
              +{profile.specialties.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Response Time */}
      <div className="flex items-center justify-center space-x-1 mb-6 text-green-600">
        <Clock className="w-4 h-4" />
        <span className="text-sm font-medium">Répond en {profile.responseTime}</span>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <Button 
          onClick={onViewProfile}
          variant="outline" 
          className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
        >
          Voir le profil
        </Button>
        <Button 
          onClick={onContact}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Contacter
        </Button>
      </div>
    </motion.div>
  );
}
