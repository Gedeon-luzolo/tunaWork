"use client";

import { motion } from "framer-motion";
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  MessageCircle, 
  Heart,
  Share2,
  Calendar,
  Award,
  Briefcase,
  Globe,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Timer
} from "lucide-react";
import { freelancerProfileExample } from "../../../src/lib/data/freelancerProfile";
import { Button } from "../../../src/components/ui/button";

export default function FreelancerProfilePage() {
  const profile = freelancerProfileExample;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
            <Heart className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-3xl font-bold text-blue-600">
                        {profile.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {profile.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  )}
                  {profile.isVerified && (
                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {profile.name}
                      </h1>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {profile.title}
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{profile.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Membre depuis {profile.joinedDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating and Stats */}
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-bold text-gray-900 dark:text-white">{profile.rating}</span>
                      <span className="text-gray-600 dark:text-gray-400">({profile.totalReviews} avis)</span>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">•</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {profile.completedProjects} projets complétés
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">•</div>
                    <div className="flex items-center space-x-1 text-green-600">
                      <Clock className="w-4 h-4" />
                      <span>{profile.responseTime}</span>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {profile.languages.map((language, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">À propos</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {profile.bio}
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Compétences</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profile.portfolio.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700 aspect-video mb-3">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">{item.category}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {item.description}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {item.completedDate}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Expérience professionnelle</h2>
              <div className="space-y-6">
                {profile.workExperience.map((exp) => (
                  <div key={exp.id} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                            Actuel
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.duration}</p>
                      <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Avis clients ({profile.totalReviews})
              </h2>
              <div className="space-y-6">
                {profile.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {review.clientName.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {review.clientName}
                          </h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-500 fill-current"
                                    : "text-gray-300 dark:text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {review.projectTitle}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20 sticky top-6"
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {profile.hourlyRate}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tarif horaire</p>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">
                    {profile.availability}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contacter
                </Button>
                <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950">
                  Inviter au projet
                </Button>
              </div>

              {/* Social Networks */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Réseaux sociaux
                </p>
                <div className="flex space-x-2">
                  {profile.socialNetworks.map((network, index) => (
                    <a
                      key={index}
                      href={network.url}
                      className={`w-10 h-10 rounded-lg ${network.color} flex items-center justify-center text-white hover:scale-110 transition-transform duration-200`}
                    >
                      {network.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Statistiques</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Gains totaux</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {profile.stats.totalEarnings}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Clients fidèles</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {profile.stats.repeatClients}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Timer className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Livraison à temps</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {profile.stats.onTimeDelivery}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-orange-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Respect budget</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {profile.stats.budgetAccuracy}%
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Certifications</h3>
              <div className="space-y-3">
                {profile.certifications.map((cert) => (
                  <div key={cert.id} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                      <span>{cert.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
