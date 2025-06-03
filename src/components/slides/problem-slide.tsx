"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Users,
  Star,
  TrendingDown,
  DollarSign,
  Eye,
  Shield,
  Clock,
} from "lucide-react";

export const ProblemSlide: React.FC = () => {
  return (
    <div className="min-h-full w-full py-20 pt-14 overflow-y-scroll">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              Le Problème Majeur
            </h2>
          </div>

          {/* Contexte du marché */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-6 text-white text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              Un Marché de 1,8 Milliards USD Inexploité
            </h3>
            <p className="text-red-100 mb-6">
              Plus de 60% de l`économie congolaise fonctionne dans l`informel,
              générant annuellement 1,8 milliards USD sans aucune structuration
              digitale.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <TrendingDown className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">78%</div>
                <div className="text-sm text-red-100">
                  Transactions non sécurisées
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <DollarSign className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">65%</div>
                <div className="text-sm text-red-100">Revenus instables</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Eye className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">82%</div>
                <div className="text-sm text-red-100">
                  Aucune visibilité digitale
                </div>
              </div>
            </div>
          </motion.div>

          {/* Problèmes des acteurs */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  😤 Frustrations des Clients
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Aucune Garantie Qualité
                    </h4>
                    <p className="text-sm text-gray-600">
                      89% des clients ont déjà été déçus par un service non
                      conforme
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Prix Imprévisibles
                    </h4>
                    <p className="text-sm text-gray-600">
                      Variations de 100% pour le même service selon le
                      prestataire
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Recherche Chronophage
                    </h4>
                    <p className="text-sm text-gray-600">
                      En moyenne 48h pour trouver un freelancer qualifié
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  😔 Défis des Freelancers
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Revenus Instables
                    </h4>
                    <p className="text-sm text-gray-600">
                      73% gagnent moins de 200 USD/mois de façon irrégulière
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Invisibilité Totale
                    </h4>
                    <p className="text-sm text-gray-600">
                      96% n`ont aucune vitrine digitale pour présenter leurs
                      services
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Paiements Risqués
                    </h4>
                    <p className="text-sm text-gray-600">
                      26% ne sont jamais payés intégralement pour leurs services
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Impact du problème */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-md text-center"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              💔 Conséquences de cette Situation
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingDown className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Économie Freinée
                </h4>
                <p className="text-sm text-gray-600">
                  Potentiel économique énorme gaspillé par manque de
                  structuration
                </p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Talents Perdus
                </h4>
                <p className="text-sm text-gray-600">
                  Milliers de freelancers talentueux restent dans l`ombre
                </p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Confiance Brisée
                </h4>
                <p className="text-sm text-gray-600">
                  Méfiance généralisée entre clients et prestataires
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
