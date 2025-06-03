"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Logo } from "@/src/components/ui/logo";
import { ArrowRight } from "lucide-react";

interface HeroSlideProps {
  goToSlide: (index: number) => void;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({ goToSlide }) => {
  return (
    <div className="min-h-full w-full flex items-center justify-center py-20">
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <Logo
              size="xl"
              showText={false}
              animated={true}
              className="animate-float"
            />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
            TunaWork
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-6 text-gray-700"
          >
            Digitalisation du marché informel des services en RDC
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base mb-8 text-gray-600 max-w-2xl mx-auto"
          >
            Une solution SaaS révolutionnaire qui transforme le marché informel
            de Kinshasa en un écosystème numérique structuré, créant des
            opportunités pour plus de 50,000 freelancers
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => goToSlide(1)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 text-base rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <span>Découvrir le projet</span>
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
