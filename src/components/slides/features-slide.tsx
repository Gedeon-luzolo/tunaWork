"use client";

import { motion } from "framer-motion";
import {
  Search,
  MessageSquare,
  Star,
  Image as ImageIcon,
  Activity,
  Shield,
  Zap,
  CheckCircle,
  Smartphone,
  Monitor,
} from "lucide-react";

export const FeaturesSlide: React.FC = () => {
  return (
    <div className="min-h-full w-full py-20 pt-18 overflow-y-scroll">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900">
              Fonctionnalités Avancées
            </h2>
          </div>
          {/* Section accessibilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              Accessible Partout, Tout le Temps
            </h3>
            <p className="text-blue-100 mb-6">
              TunaWork s`adapte à votre mode de vie avec une expérience fluide
              sur tous vos appareils.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <Monitor className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Version Desktop</h4>
                <p className="text-sm text-blue-100">
                  Interface complète pour la gestion avancée de vos projets et
                  clients
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Smartphone className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Application Mobile</h4>
                <p className="text-sm text-blue-100">
                  Restez connecté en déplacement avec toutes les fonctionnalités
                  essentielles
                </p>
              </div>
            </div>
          </motion.div>
          {/* Fonctionnalités principales */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                🔍 Découverte & Connexion
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Recherche Intelligente
                    </h4>
                    <p className="text-sm text-gray-600">
                      Filtres avancés par compétences, localisation, tarifs et
                      disponibilité
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Messagerie Intégrée
                    </h4>
                    <p className="text-sm text-gray-600">
                      Chat en temps réel avec partage de fichiers et historique
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
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                🛡️ Sécurité & Confiance
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Paiements Sécurisés
                    </h4>
                    <p className="text-sm text-gray-600">
                      Système d`escrow et intégration avec Mobile Money
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Système d`Évaluations
                    </h4>
                    <p className="text-sm text-gray-600">
                      Reviews transparents et notation multicritères
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Fonctionnalités supplémentaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-md mb-10"
          >
            <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">
              Fonctionnalités Complètes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <ImageIcon className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Portfolio Dynamique
                    </h4>
                    <p className="text-xs text-gray-600">
                      Galerie de projets avec témoignages clients
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Activity className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Fil d`Actualités
                    </h4>
                    <p className="text-xs text-gray-600">
                      Suivi des travaux récents et mises à jour
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Validation Qualité
                    </h4>
                    <p className="text-xs text-gray-600">
                      Processus de vérification des compétences
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Notifications Temps Réel
                    </h4>
                    <p className="text-xs text-gray-600">
                      Alertes instantanées pour nouvelles opportunités
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
