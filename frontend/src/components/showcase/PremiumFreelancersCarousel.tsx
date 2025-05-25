"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

// Types pour les freelancers
interface SocialNetwork {
  name: string;
  url: string;
  icon: string;
  color: string;
}

interface PremiumFreelancer {
  id: number;
  name: string;
  title: string;
  location: string;
  rating: number;
  completedProjects: number;
  hourlyRate: string;
  image: string;
  specialties: string[];
  socialNetworks: SocialNetwork[];
  isVerified: boolean;
}

// Données d'exemple des freelancers premium
const premiumFreelancers: PremiumFreelancer[] = [
  {
    id: 1,
    name: "Marie Kongo",
    title: "Couturière Professionnelle",
    location: "Kinshasa, RDC",
    rating: 4.9,
    completedProjects: 127,
    hourlyRate: "15-25$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Robes de soirée", "Costumes"],
    socialNetworks: [
      { name: "Instagram", url: "#", icon: "📸", color: "bg-pink-500" },
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
    ],
    isVerified: true,
  },
  {
    id: 2,
    name: "Jean Mukendi",
    title: "Informaticien Expert",
    location: "Lubumbashi, RDC",
    rating: 5.0,
    completedProjects: 89,
    hourlyRate: "30-50$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Réparation PC", "Développement"],
    socialNetworks: [
      { name: "LinkedIn", url: "#", icon: "💼", color: "bg-blue-600" },
      { name: "GitHub", url: "#", icon: "💻", color: "bg-gray-800" },
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
    ],
    isVerified: true,
  },
  {
    id: 3,
    name: "Grace Mbuyi",
    title: "Photographe Événementiel",
    location: "Goma, RDC",
    rating: 4.8,
    completedProjects: 156,
    hourlyRate: "20-40$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Mariages", "Portraits"],
    socialNetworks: [
      { name: "Instagram", url: "#", icon: "📸", color: "bg-pink-500" },
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
    ],
    isVerified: true,
  },
  {
    id: 4,
    name: "Patrick Kabila",
    title: "Mécanicien Auto",
    location: "Kinshasa, RDC",
    rating: 4.9,
    completedProjects: 73,
    hourlyRate: "25-35$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Moteur", "Électricité auto"],
    socialNetworks: [
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
      { name: "Telegram", url: "#", icon: "✈️", color: "bg-blue-400" },
    ],
    isVerified: true,
  },
  {
    id: 5,
    name: "Sylvie Tshala",
    title: "Femme de Ménage Pro",
    location: "Mbuji-Mayi, RDC",
    rating: 4.7,
    completedProjects: 94,
    hourlyRate: "10-15$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Nettoyage bureau", "Maisons"],
    socialNetworks: [
      { name: "WhatsApp", url: "#", icon: "�", color: "bg-green-500" },
      { name: "Facebook", url: "#", icon: "�", color: "bg-blue-700" },
      { name: "Telegram", url: "#", icon: "✈️", color: "bg-blue-400" },
    ],
    isVerified: true,
  },
  {
    id: 6,
    name: "David Mwamba",
    title: "Chauffeur Privé",
    location: "Bukavu, RDC",
    rating: 5.0,
    completedProjects: 67,
    hourlyRate: "12-20$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Transport VIP", "Livraisons"],
    socialNetworks: [
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
      { name: "Telegram", url: "#", icon: "✈️", color: "bg-blue-400" },
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
    ],
    isVerified: true,
  },
  {
    id: 7,
    name: "Claudine Ilunga",
    title: "Lavandière Experte",
    location: "Kananga, RDC",
    rating: 4.6,
    completedProjects: 112,
    hourlyRate: "8-12$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Pressing", "Repassage"],
    socialNetworks: [
      { name: "WhatsApp", url: "#", icon: "💬", color: "bg-green-500" },
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
      { name: "Telegram", url: "#", icon: "✈️", color: "bg-blue-400" },
    ],
    isVerified: true,
  },
  {
    id: 8,
    name: "Emmanuel Kasongo",
    title: "Électricien Certifié",
    location: "Kisangani, RDC",
    rating: 4.8,
    completedProjects: 85,
    hourlyRate: "18-28$/h",
    image: "/api/placeholder/120/120",
    specialties: ["Installation", "Dépannage"],
    socialNetworks: [
      { name: "WhatsApp", url: "#", icon: "�", color: "bg-green-500" },
      { name: "Facebook", url: "#", icon: "📘", color: "bg-blue-700" },
      { name: "LinkedIn", url: "#", icon: "�", color: "bg-blue-600" },
    ],
    isVerified: true,
  },
];

// Composant pour une carte de freelancer
function FreelancerCard({
  freelancer,
  index,
  className = "w-full",
}: {
  freelancer: PremiumFreelancer;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`${className} flex-shrink-0 px-3`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="glassmorphism rounded-xl p-4 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        {/* Profile Header */}
        <div className="flex items-start space-x-3 mb-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-0.5">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-600">
                  {freelancer.name.charAt(0)}
                </span>
              </div>
            </div>
            {freelancer.isVerified && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-900 dark:text-white truncate">
              {freelancer.name}
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium truncate">
              {freelancer.title}
            </p>
            <div className="flex items-center space-x-1 mt-1">
              <MapPin className="w-3 h-3 text-gray-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400 truncate">
                {freelancer.location}
              </span>
            </div>
          </div>
        </div>

        {/* Rating and Social Networks */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {freelancer.rating}
            </span>
          </div>
          <div className="flex space-x-1">
            {freelancer.socialNetworks.slice(0, 3).map((network, idx) => (
              <motion.a
                key={idx}
                href={network.url}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-6 h-6 rounded-md ${network.color} flex items-center justify-center text-white text-xs hover:shadow-lg transition-all duration-200`}
              >
                {network.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {freelancer.specialties.slice(0, 2).map((specialty, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PremiumFreelancersCarousel() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 glassmorphism rounded-full px-4 py-2 mb-6 backdrop-blur-md border border-white/20"
          >
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Freelancers Premium
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Talents d'Exception
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Connectés au Monde
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Découvrez nos freelancers premium avec leurs réseaux professionnels
            et leurs expertises reconnues internationalement.
          </motion.p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumFreelancers.map((freelancer, index) => (
            <FreelancerCard
              key={freelancer.id}
              freelancer={freelancer}
              index={index}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
