"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PremiumFreelancer } from "@/src/lib/data/freelancers";
import { FreelancerCard } from "./FreelancerCard";
import { SearchX } from "lucide-react";

interface FreelancerGridProps {
  freelancers: PremiumFreelancer[];
}

export function FreelancerGrid({ freelancers }: FreelancerGridProps) {
  const t = useTranslations("professionals");

  if (freelancers.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16"
      >
        <div className="glassmorphism rounded-2xl p-12 backdrop-blur-md border border-white/20 max-w-md mx-auto">
          <SearchX className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {t("no_results")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t("no_results_desc")}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {freelancers.map((freelancer, index) => (
        <motion.div
          key={freelancer.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
          whileHover={{ y: -5 }}
          className="h-full"
        >
          <FreelancerCard freelancer={freelancer} />
        </motion.div>
      ))}
    </div>
  );
}
