"use client";

import React from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { revenueData } from "@/src/lib/data/presentation-data";

export function RevenueSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="container mx-auto px-6 z-10 max-h-[90vh] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto h-full flex flex-col justify-center"
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
                <strong className="text-blue-600">4 streams principaux</strong>,
                avec un objectif de{" "}
                <strong className="text-blue-700">$50M de GMV</strong> la
                première année.
              </p>

              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="text-lg font-bold text-green-600 mb-1">
                    $50M
                  </div>
                  <div className="text-xs text-gray-600">GMV cible Année 1</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-blue-600 mb-1">
                    12%
                  </div>
                  <div className="text-xs text-gray-600">Take Rate moyen</div>
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
                    percentage: "25%",
                    projection: "$1.5M",
                  },
                  {
                    name: "Services à valeur ajoutée",
                    percentage: "10%",
                    projection: "$600K",
                  },
                  {
                    name: "Publicités ciblées",
                    percentage: "5%",
                    projection: "$300K",
                  },
                ].map((revenue) => (
                  <div
                    key={revenue.name}
                    className="p-2 bg-blue-50 rounded-lg border border-blue-100"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-800">
                        {revenue.name}
                      </span>
                      <div className="flex gap-2">
                        <span className="text-blue-600 font-bold text-xs">
                          {revenue.percentage}
                        </span>
                        <span className="text-green-600 font-medium text-xs">
                          {revenue.projection}
                        </span>
                      </div>
                    </div>
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
                <div className="bg-green-50 p-2 rounded-lg border border-green-100 text-center">
                  <div className="text-xs text-gray-600">Revenue Run Rate</div>
                  <div className="text-sm font-semibold text-green-600">
                    $500K / mois
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
