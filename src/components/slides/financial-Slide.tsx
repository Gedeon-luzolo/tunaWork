"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart as RechartsBarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { financialData } from "@/src/lib/data/presentation-data";

export function FinancialSlide() {
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
            Projections Financières
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
                Croissance exponentielle avec un business model scalable :
                <strong className="text-blue-600">
                  {" "}
                  profitabilité dès l`année 2
                </strong>
                .
              </p>

              <div className="grid md:grid-cols-4 gap-2 mb-4">
                <div className="bg-green-50 p-2 rounded-lg border border-green-200">
                  <div className="text-lg font-bold text-green-600">$6M</div>
                  <div className="text-xs text-gray-600">Revenus Année 1</div>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-blue-600">$60M</div>
                  <div className="text-xs text-gray-600">Revenus Année 4</div>
                </div>
                <div className="bg-purple-50 p-2 rounded-lg border border-purple-200">
                  <div className="text-lg font-bold text-purple-600">35%</div>
                  <div className="text-xs text-gray-600">Marge EBITDA</div>
                </div>
                <div className="bg-orange-50 p-2 rounded-lg border border-orange-200">
                  <div className="text-lg font-bold text-orange-600">$15M</div>
                  <div className="text-xs text-gray-600">Série A</div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-base font-semibold mb-3 text-gray-800 text-center">
                  Croissance des Revenus
                </h3>
                <div className="h-32 mb-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={financialData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => [`$${value}M`, "Revenus"]}
                      />
                      <Bar dataKey="value" fill="#3B82F6" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-xs">CAGR 4 ans</span>
                    <span className="font-bold text-green-600 text-xs">
                      185%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-xs">Break-even</span>
                    <span className="font-bold text-blue-600 text-xs">
                      Mois 18
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-3 text-gray-800 text-center">
                  Métriques Clés
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      year: "Année 1",
                      gmv: "$50M",
                      users: "5K",
                      margin: "-20%",
                    },
                    {
                      year: "Année 2",
                      gmv: "$150M",
                      users: "15K",
                      margin: "5%",
                    },
                    {
                      year: "Année 3",
                      gmv: "$300M",
                      users: "35K",
                      margin: "22%",
                    },
                    {
                      year: "Année 4",
                      gmv: "$500M",
                      users: "65K",
                      margin: "35%",
                    },
                  ].map((year) => (
                    <div
                      key={year.year}
                      className="p-2 bg-blue-50 rounded-lg border border-blue-100"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-semibold text-gray-800 text-xs">
                          {year.year}
                        </h4>
                        <span
                          className={`font-bold text-xs ${
                            year.margin.startsWith("-")
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {year.margin}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <div className="text-gray-600">GMV</div>
                          <div className="font-medium text-blue-600">
                            {year.gmv}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600">Users</div>
                          <div className="font-medium text-purple-600">
                            {year.users}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
