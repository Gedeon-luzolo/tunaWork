"use client";

import { motion } from "framer-motion";
import { ChevronRight, Users, Star } from "lucide-react";

export const ProblemSlide: React.FC = () => {
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
            Un Marché de 2,8 Milliards USD Non Exploité
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
                Le marché des services en RDC représente une opportunité
                économique colossale largement inexploitée.
                <span className="font-semibold text-blue-600">
                  {" "}
                  Plus de 70% de l`économie congolaise fonctionne dans
                  l`informel
                </span>
                , générant annuellement plus de{" "}
                <span className="font-bold text-blue-700">
                  2,8 milliards USD
                </span>{" "}
                sans aucune structuration digitale.
              </p>

              <div className="grid md:grid-cols-3 gap-3 mb-6">
                <div className="bg-red-50 p-3 rounded-xl border border-red-200">
                  <div className="text-xl font-bold text-red-600">78%</div>
                  <div className="text-xs text-gray-600">
                    Transactions non sécurisées
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded-xl border border-orange-200">
                  <div className="text-xl font-bold text-orange-600">65%</div>
                  <div className="text-xs text-gray-600">Revenus instables</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                  <div className="text-xl font-bold text-yellow-600">82%</div>
                  <div className="text-xs text-gray-600">
                    Aucune visibilité digitale
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-blue-50/50 backdrop-blur-xl rounded-2xl p-4 border border-blue-100 shadow-lg"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Clients - Une recherche frustrante
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      <strong>Pas de garantie qualité:</strong> 89% des clients
                      ont déjà été déçus par un service
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      <strong>Prix imprévisibles:</strong> Variations de 300%
                      pour le même service
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      <strong>Recherche chronophage:</strong> En moyenne 48h
                      pour trouver un freelancer qualifié
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-blue-50/50 backdrop-blur-xl rounded-2xl p-4 border border-blue-100 shadow-lg"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Freelancers - Un potentiel gâché
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      <strong>Revenus imprévisibles:</strong> 73% gagnent moins
                      de 200 USD/mois
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      <strong>Invisibilité totale:</strong> Aucune vitrine
                      digitale pour 98% des freelancers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-600">
                      <strong>Paiements risqués:</strong> 45% des freelancers ne
                      sont jamais payés intégralement
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
