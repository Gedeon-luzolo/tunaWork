"use client";

import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Clock,
  DollarSign,
  MessageCircle,
  CheckCircle,
  Calendar,
  Award,
  Briefcase,
  Heart,
  Share2,
  User,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { Button } from "../ui/button";
import { type FreelancerProfile } from "../../lib/data/freelancerProfile";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface FreelancerDetailedProfileProps {
  profile: FreelancerProfile;
}

export function FreelancerDetailedProfile({
  profile,
}: FreelancerDetailedProfileProps) {
  const [activeTab, setActiveTab] = useState("about");
  const t = useTranslations("profile");

  const tabs = [
    { id: "about", label: t("about"), icon: User },
    { id: "portfolio", label: t("portfolio"), icon: Briefcase },
    { id: "reviews", label: t("reviews"), icon: Star },
    { id: "experience", label: "Expérience", icon: BookOpen },
    { id: "certifications", label: "Certifications", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <img
          src={profile.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />

        {/* Profile Header */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
           
                    <span className="text-2xl md:text-4xl font-bold text-blue-600">
                      {profile.name.charAt(0)}
                    </span>
                  </div>
                  {/* <img
                    src={profile.avatar}
                    alt="Cover"
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                {profile.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                )}
                {profile.isVerified && (
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1 text-white">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                  {profile.name}
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-2">
                  {profile.title}
                </p>
                <div className="flex items-center space-x-1 text-blue-100">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Sauvegarder
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Partager
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t("contact")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {profile.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {profile.totalReviews} {t("reviews")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Briefcase className="w-5 h-5 text-blue-500" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {profile.completedProjects}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("completed_projects")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {profile.hourlyRate}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("hourly_rate")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {profile.responseTime}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t("response_time")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {t("languages")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {t("skills")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Social Networks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Réseaux sociaux
              </h3>
              <div className="space-y-3">
                {profile.socialNetworks.map((network, index) => (
                  <a
                    key={index}
                    href={network.url}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div
                      className={`w-8 h-8 rounded-full ${network.color} flex items-center justify-center`}
                    >
                      <span className="text-white text-sm">{network.icon}</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {network.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? "bg-blue-500 text-white"
                        : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-800/70"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              {activeTab === "about" && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {t("about")}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {profile.bio}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Spécialités
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "portfolio" && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    {t("portfolio")}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {profile.portfolio.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {item.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-blue-600 dark:text-blue-400">
                            {item.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {item.completedDate}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    {t("reviews")} ({profile.reviews.length})
                  </h2>
                  <div className="space-y-6">
                    {profile.reviews.map((review) => (
                      <div
                        key={review.id}
                        className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="flex items-start space-x-4">
                          <img
                            src={review.clientAvatar}
                            alt={review.clientName}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-gray-900 dark:text-white">
                                {review.clientName}
                              </h4>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "text-yellow-500 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                              {review.comment}
                            </p>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                              <span>{review.projectTitle}</span>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Expérience professionnelle
                  </h2>
                  <div className="space-y-6">
                    {profile.workExperience.map((exp) => (
                      <div
                        key={exp.id}
                        className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {exp.position}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 mb-1">
                              {exp.company}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                              {exp.duration}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                              {exp.description}
                            </p>
                            {exp.current && (
                              <span className="inline-block mt-2 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                                Poste actuel
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "certifications" && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Certifications
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.certifications.map((cert) => (
                      <div
                        key={cert.id}
                        className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{cert.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {cert.name}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 text-sm">
                              {cert.issuer}
                            </p>
                            <p className="text-gray-500 text-sm">{cert.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
