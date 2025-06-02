"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  MessageCircle, 
  CheckCircle,
  Eye,
  Briefcase
} from "lucide-react";
import { Button } from "../ui/button";
import { PremiumFreelancer } from "@/src/lib/data/freelancers";
import { Link } from "@/src/i18n/routing";

interface FreelancerCardProps {
  freelancer: PremiumFreelancer;
}

export function FreelancerCard({ freelancer }: FreelancerCardProps) {
  const t = useTranslations("professionals");

  return (
    <div className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              {freelancer.image.includes("api/placeholder") ? (
                <span className="text-xl font-bold text-blue-600">
                  {freelancer.name.charAt(0)}
                </span>
              ) : (
                <img 
                  src={freelancer.image} 
                  alt={freelancer.name}
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
          </div>
          
          {/* Online Status */}
          {freelancer.isOnline && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
          
          {/* Verified Badge */}
          {freelancer.isVerified && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {freelancer.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
            {freelancer.title}
          </p>
          <div className="flex items-center space-x-1 mt-1">
            <MapPin className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {freelancer.city}
            </span>
          </div>
        </div>

        {/* Online/Offline Status */}
        <div className="flex-shrink-0">
          <span className={`text-xs px-2 py-1 rounded-full ${
            freelancer.isOnline 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
          }`}>
            {freelancer.isOnline ? t("online") : t("offline")}
          </span>
        </div>
      </div>

      {/* Rating and Projects */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {freelancer.rating}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            ({freelancer.completedProjects} {t("completed_projects")})
          </span>
        </div>
        
        <div className="flex items-center space-x-1">
          <DollarSign className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {freelancer.hourlyRate}
          </span>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-1">
        {freelancer.bio}
      </p>

      {/* Specialties */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {freelancer.specialties.slice(0, 3).map((specialty, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
            >
              {specialty}
            </span>
          ))}
          {freelancer.specialties.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
              +{freelancer.specialties.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Response Time */}
      <div className="flex items-center justify-center space-x-1 mb-4 text-green-600">
        <Clock className="w-4 h-4" />
        <span className="text-sm font-medium">
          {t("response_time")} {freelancer.responseTime}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 mt-auto">
        <Link href={`/freelancer/${freelancer.id}`} className="flex-1">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center space-x-2 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-200"
          >
            <Eye className="w-4 h-4" />
            <span>{t("view_profile")}</span>
          </Button>
        </Link>
        
        <Button 
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:scale-[1.02] transition-all duration-300 text-white font-semibold shadow-lg shadow-blue-500/25 border-0 flex items-center justify-center space-x-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t("contact")}</span>
        </Button>
      </div>
    </div>
  );
}
