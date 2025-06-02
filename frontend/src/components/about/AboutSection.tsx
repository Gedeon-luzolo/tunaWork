"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Shield,
  Users,
  Globe,
  Zap,
  Heart,
  Award,
  MessageCircle,
  CreditCard,
  Star,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

// Données des fonctionnalités
const features = [
  {
    icon: Shield,
    title: "Paiements Sécurisés",
    description:
      "Système de paiement sécurisé avec protection des fonds et garantie de satisfaction",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "Communauté Active",
    description:
      "Plus de 1,200 freelancers vérifiés et des milliers de clients satisfaits",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "Portée Internationale",
    description:
      "Connectez-vous avec des clients locaux et internationaux depuis la RDC",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Processus Rapide",
    description:
      "Trouvez des projets et commencez à travailler en quelques clics seulement",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: MessageCircle,
    title: "Communication Fluide",
    description:
      "Messagerie intégrée pour échanger facilement avec vos clients",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: CreditCard,
    title: "Facturation Simple",
    description:
      "Outils de facturation automatisés et suivi des paiements en temps réel",
    color: "from-pink-500 to-pink-600",
  },
];

// Statistiques
const stats = [
  { number: "2,500+", label: "Projets Réalisés", icon: CheckCircle },
  { number: "1,200+", label: "Freelancers Actifs", icon: Users },
  { number: "98%", label: "Taux de Satisfaction", icon: Star },
  { number: "24/7", label: "Support Client", icon: Heart },
];

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t("title")}
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t("description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t("mission.title")}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("mission.description")}
                </p>
              </div>

              <div className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t("vision.title")}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("vision.description")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center glassmorphism rounded-2xl p-6 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {t("features_title")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
