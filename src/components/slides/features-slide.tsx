"use client";

import { motion } from "framer-motion";
import { featuresData } from "@/src/lib/data/presentation-data";

export const FeaturesSlide: React.FC = () => {
  return (
    <div className="min-h-full w-full py-20 pt-14">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
            Fonctionnalités Clés
          </h2>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-blue-200/30 shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                TunaWork sera accessible depuis n`importe quel appareil, offrant
                une expérience utilisateur fluide et cohérente sur ordinateur et
                smartphone.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
              {featuresData.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-50/50 backdrop-blur-xl rounded-xl p-4 border border-blue-100 shadow-lg"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 shadow-lg">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
