import React from "react";
import { motion } from "framer-motion";
import { marketData } from "@/src/lib/data/presentation-data";

export  function MarketSlide() {
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
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
            Un Marché de 2,8 Milliards USD
          </h2>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-blue-200/30 shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Le marché congolais représente une opportunité exceptionnelle
                avec
                <strong className="text-blue-600">
                  {" "}
                  84 millions d`habitants
                </strong>{" "}
                et une économie de
                <strong className="text-blue-700"> 55 milliards USD</strong>,
                dont 70% restent dans l`informel.
              </p>

              <div className="grid md:grid-cols-4 gap-3 mb-6">
                <div className="bg-green-50 p-3 rounded-xl border border-green-200">
                  <div className="text-xl font-bold text-green-600">$2.8B</div>
                  <div className="text-xs text-gray-600">
                    Marché total (TAM)
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                  <div className="text-xl font-bold text-blue-600">$850M</div>
                  <div className="text-xs text-gray-600">
                    Marché serviceable (SAM)
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
                  <div className="text-xl font-bold text-purple-600">$280M</div>
                  <div className="text-xs text-gray-600">
                    Marché atteignable (SOM)
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded-xl border border-orange-200">
                  <div className="text-xl font-bold text-orange-600">15%</div>
                  <div className="text-xs text-gray-600">
                    Croissance annuelle
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-4">
              {marketData.map((segment, index) => (
                <motion.div
                  key={segment.category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-blue-50/50 p-4 rounded-xl shadow-md border border-blue-100"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <segment.icon className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                    {segment.category}
                  </h4>
                  <p className="text-lg font-bold text-blue-600 mb-1">
                    {segment.market}
                  </p>
                  <p className="text-green-600 text-xs font-medium">
                    {segment.growth} / an
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
