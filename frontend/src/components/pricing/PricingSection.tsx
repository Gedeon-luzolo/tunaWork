"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Star, Crown, Building2, Zap } from "lucide-react";
import { Button } from "../ui/button";

// Types de plans
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  priceCDF: number;
  icon: any;
  popular: boolean;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline" | "secondary";
  gradient: string;
}

export function PricingSection() {
  const t = useTranslations("pricing");
  const [currency, setCurrency] = useState<"USD" | "CDF">("USD");

  const plans: PricingPlan[] = [
    {
      id: "gratuit",
      name: "Gratuit",
      description: "Parfait pour commencer votre carrière de freelancer",
      priceUSD: 0,
      priceCDF: 0,
      icon: Star,
      popular: false,
      features: [
        "Profil freelancer basique",
        "Postuler à 5 projets/mois",
        "Messagerie limitée",
        "Support communautaire",
        "Portfolio 3 projets max",
        "Commission 10% sur projets",
      ],
      buttonText: "Commencer gratuitement",
      buttonVariant: "outline",
      gradient: "from-gray-400 to-gray-500",
    },
    {
      id: "premium",
      name: "Premium",
      description: "Le choix des freelancers professionnels",
      priceUSD: 15,
      priceCDF: 37500,
      icon: Crown,
      popular: true,
      features: [
        "Profil freelancer avancé",
        "Candidatures illimitées",
        "Messagerie prioritaire",
        "Support prioritaire 24/7",
        "Portfolio illimité",
        "Commission réduite 5%",
        "Badge 'Premium' visible",
        "Statistiques détaillées",
        "Notifications en temps réel",
      ],
      buttonText: "Devenir Premium",
      buttonVariant: "default",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: "entreprise",
      name: "Entreprise",
      description: "Pour les agences et équipes de freelancers",
      priceUSD: 50,
      priceCDF: 125000,
      icon: Building2,
      popular: false,
      features: [
        "Gestion d'équipe complète",
        "Projets collaboratifs",
        "Facturation automatisée",
        "Support dédié",
        "API et intégrations",
        "Commission 3% seulement",
        "Rapports avancés",
        "Formation personnalisée",
        "Gestionnaire de compte",
        "Contrats personnalisés",
      ],
      buttonText: "Contacter l'équipe",
      buttonVariant: "secondary",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
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
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {t("subtitle")}
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span
              className={`text-sm font-medium ${
                currency === "USD" ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {t("currency_usd")}
            </span>
            <button
              onClick={() => setCurrency(currency === "USD" ? "CDF" : "USD")}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                currency === "USD" ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  currency === "USD" ? "translate-x-1" : "translate-x-7"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                currency === "CDF" ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {t("currency_cdf")}
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative glassmorphism rounded-3xl p-8 backdrop-blur-md border transition-all duration-300 ${
                  plan.popular
                    ? "border-blue-300 shadow-2xl scale-105"
                    : "border-white/20 hover:shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {t("popular")}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    {plan.priceUSD === 0 ? (
                      <div className="text-4xl font-bold text-gray-900 dark:text-white">
                        {t("free")}
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-900 dark:text-white">
                        {currency === "USD"
                          ? `$${plan.priceUSD}`
                          : `${plan.priceCDF.toLocaleString()} FC`}
                        <span className="text-lg font-normal text-gray-500">
                          {t("per_month")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
                      : plan.id === "entreprise"
                      ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                      : "border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glassmorphism rounded-2xl p-6 backdrop-blur-md border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("info.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t("info.no_commitment")}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{t("info.cancel_anytime")}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>{t("info.support_24_7")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
