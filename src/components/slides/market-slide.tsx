import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Scissors,
  Shirt,
  Car,
  Home,
  Paintbrush,
  Hammer,
  Zap,
  Users,
  TrendingUp,
  MapPin,
  DollarSign,
} from "lucide-react";

export function MarketSlide() {
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
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
              Marché des Services Locaux
            </h2>
          </div>

          {/* Contexte du marché */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-6 text-white text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              Un Écosystème de Services Essentiels
            </h3>
            <p className="text-green-100 mb-6">
              Kinshasa compte plus de 15 millions d`habitants avec des besoins
              quotidiens en services de proximité. Un marché de 1,8 milliards
              USD dominé par l`informel.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">50 000+</div>
                <div className="text-sm text-green-100">
                  Prestataires actifs
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">24 Communes</div>
                <div className="text-sm text-green-100">Zone de couverture</div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">+18%</div>
                <div className="text-sm text-green-100">
                  Croissance annuelle
                </div>
              </div>
            </div>
          </motion.div>

          {/* Métiers principaux */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                🔧 Services Techniques & Réparation
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">Mécaniciens</h4>
                    <p className="text-sm text-gray-600">
                      Réparation auto, moto, vélos
                    </p>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-green-600 font-medium">
                        4 000+ actifs
                      </span>
                      <span className="text-xs text-blue-600 font-medium">
                        $420K/an
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">
                      Électriciens
                    </h4>
                    <p className="text-sm text-gray-600">
                      Installation, dépannage électrique
                    </p>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-green-600 font-medium">
                        2 000+ actifs
                      </span>
                      <span className="text-xs text-blue-600 font-medium">
                        $280K/an
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Hammer className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">
                      Artisans & Bricolage
                    </h4>
                    <p className="text-sm text-gray-600">
                      Menuiserie, plomberie, maçonnerie
                    </p>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-green-600 font-medium">
                        5 000+ actifs
                      </span>
                      <span className="text-xs text-blue-600 font-medium">
                        $520K/an
                      </span>
                    </div>
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
                ✨ Services Personnels & Beauté
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Scissors className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">
                      Coiffeurs & Esthétique
                    </h4>
                    <p className="text-sm text-gray-600">
                      Coiffure, manucure, soins beauté
                    </p>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-green-600 font-medium">
                        8 000+ actifs
                      </span>
                      <span className="text-xs text-blue-600 font-medium">
                        $380K/an
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shirt className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">
                      Lavandiers & Pressing
                    </h4>
                    <p className="text-sm text-gray-600">
                      Lavage, repassage, nettoyage
                    </p>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-green-600 font-medium">
                        2 000+ actifs
                      </span>
                      <span className="text-xs text-blue-600 font-medium">
                        $220K/an
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">
                      Services Ménagers
                    </h4>
                    <p className="text-sm text-gray-600">
                      Nettoyage, jardinage, entretien
                    </p>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-green-600 font-medium">
                        5 000+ actifs
                      </span>
                      <span className="text-xs text-blue-600 font-medium">
                        $450K/an
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Autres services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
          >
            <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">
              Autres Services en Forte Demande
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  name: "Transport & Livraison",
                  icon: Car,
                  workers: "8 000+",
                  market: "$180K",
                  color: "yellow",
                },
                {
                  name: "Peinture & Décoration",
                  icon: Paintbrush,
                  workers: "6 500+",
                  market: "$150K",
                  color: "purple",
                },
                {
                  name: "Sécurité & Gardiennage",
                  icon: Home,
                  workers: "12 000+",
                  market: "$320K",
                  color: "red",
                },
                {
                  name: "Formation & Cours",
                  icon: Users,
                  workers: "4 000+",
                  market: "$120K",
                  color: "indigo",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <service.icon
                      className={`w-6 h-6 text-${service.color}-600`}
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    {service.name}
                  </h4>
                  <p className="text-xs text-green-600 font-medium">
                    {service.workers}
                  </p>
                  <p className="text-xs text-blue-600 font-bold">
                    {service.market}/an
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
