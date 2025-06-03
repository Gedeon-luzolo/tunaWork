"use client";

import React from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { revenueData } from "@/src/lib/data/presentation-data";

export function RevenueSlide() {
  return (
    <div className="min-h-full w-full py-20 pt-18">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
            Modèle de Revenus Diversifié
          </h2>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-4 border border-blue-200/30 shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center mb-4"
            >
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                Génération de revenus par{" "}
                <strong className="text-blue-600">3 sources principales</strong>
                , avec un modèle économique diversifié et{" "}
                <strong className="text-blue-700">scalable</strong>.
              </p>

              <div className="grid grid-cols-3  gap-3 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-blue-600 mb-1">
                    60%
                  </div>
                  <div className="text-xs text-gray-600">
                    Abonnements premium
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <div className="text-lg font-bold text-purple-600 mb-1">
                    20%
                  </div>
                  <div className="text-xs text-gray-600">
                    Publicités ciblées
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="text-lg font-bold text-green-600 mb-1">
                    20%
                  </div>
                  <div className="text-xs text-gray-600">Formation</div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-gray-800 text-center mb-3">
                  Sources de Revenus
                </h3>
                {[
                  {
                    name: "Abonnements premium",
                    percentage: "60%",
                    projection: "$2k",
                    description: "Fonctionnalités avancées, priorité support",
                  },
                  {
                    name: "Publicités ciblées",
                    percentage: "20%",
                    projection: "$0,8K",
                    description: "Publicités géolocalisées, sponsoring",
                  },
                  {
                    name: "Plateforme de formation",
                    percentage: "20%",
                    projection: "$0,6",
                    description: "Proposition cours à domicile",
                  },
                ].map((revenue) => (
                  <div
                    key={revenue.name}
                    className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-semibold text-gray-800">
                        {revenue.name}
                      </span>
                      <div className="flex gap-2">
                        <span className="text-blue-600 font-bold text-sm">
                          {revenue.percentage}
                        </span>
                        <span className="text-green-600 font-bold text-sm">
                          {revenue.projection}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">
                      {revenue.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-base font-semibold text-gray-800 text-center mb-3">
                  Répartition
                </h3>
                <div className="h-32 mb-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={revenueData}
                        cx="50%"
                        cy="50%"
                        innerRadius={20}
                        outerRadius={50}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {revenueData.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-center">
                    <div className="text-xs text-gray-600">
                      Revenus totaux projetés
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      $2M / an
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center">
                    <div className="text-xs text-gray-600">
                      Croissance mensuelle
                    </div>
                    <div className="text-sm font-semibold text-blue-600">
                      +35% 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
