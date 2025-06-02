import { funding } from "@/src/lib/data/presentation-data";
import { motion } from "framer-motion";

export function FundingSlide() {
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
            Opportunités de Financement
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
                Pour transformer notre vision en réalité et capturer ce marché
                de <strong className="text-blue-600">2,8 milliards USD</strong>,
                nous proposons{" "}
                <strong className="text-green-600">
                  différents niveaux d`investissement
                </strong>{" "}
                adaptés à tous les profils, à partir de{" "}
                <strong className="text-green-600">4.000 USD</strong>.
              </p>

              <div className="grid md:grid-cols-4 gap-2 mb-4">
                <div className="bg-green-50 p-2 rounded-lg border border-green-200">
                  <div className="text-lg font-bold text-green-600">$4K+</div>
                  <div className="text-xs text-gray-600">
                    Investissement minimal
                  </div>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-blue-600">
                    Flexible
                  </div>
                  <div className="text-xs text-gray-600">Montants adaptés</div>
                </div>
                <div className="bg-purple-50 p-2 rounded-lg border border-purple-200">
                  <div className="text-lg font-bold text-purple-600">
                    ROI 300%+
                  </div>
                  <div className="text-xs text-gray-600">Retour attendu</div>
                </div>
                <div className="bg-orange-50 p-2 rounded-lg border border-orange-200">
                  <div className="text-lg font-bold text-orange-600">
                    3-5 ans
                  </div>
                  <div className="text-xs text-gray-600">Horizon sortie</div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-gray-800 text-center mb-3">
                  Niveaux d`Investissement
                </h3>
                {funding.map((level) => (
                  <div
                    key={level.tier}
                    className={`p-2 rounded-lg border shadow-lg ${
                      level.priority === "VIP"
                        ? "bg-gold-50 border-yellow-300"
                        : level.priority === "Premium"
                        ? "bg-purple-50 border-purple-200"
                        : level.priority === "Standard"
                        ? "bg-blue-50 border-blue-200"
                        : "bg-green-50 border-green-200"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <level.icon
                          className={`w-4 h-4 ${
                            level.priority === "VIP"
                              ? "text-yellow-600"
                              : level.priority === "Premium"
                              ? "text-purple-600"
                              : level.priority === "Standard"
                              ? "text-blue-600"
                              : "text-green-600"
                          }`}
                        />
                        <span className="text-xs font-medium text-gray-800">
                          {level.tier}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span
                          className={`font-bold text-xs ${
                            level.priority === "VIP"
                              ? "text-yellow-600"
                              : level.priority === "Premium"
                              ? "text-purple-600"
                              : level.priority === "Standard"
                              ? "text-blue-600"
                              : "text-green-600"
                          }`}
                        >
                          {level.amount}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {level.equity}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">{level.benefits}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-gray-800 text-center mb-3">
                  Utilisation des Fonds
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      priority: "CRITIQUE",
                      category: "Marketing Digital",
                      percentage: "40%",
                      description:
                        "Acquisition utilisateurs via Google, Facebook, LinkedIn",
                    },
                    {
                      priority: "CRITIQUE",
                      category: "Infrastructure Tech",
                      percentage: "25%",
                      description:
                        "Serveurs cloud, sécurité, licences logiciels",
                    },
                    {
                      priority: "IMPORTANT",
                      category: "Équipe Core",
                      percentage: "20%",
                      description:
                        "Développeurs, designers, responsables produit",
                    },
                    {
                      priority: "IMPORTANT",
                      category: "Opérations",
                      percentage: "10%",
                      description: "Support client, bureaux, équipements",
                    },
                    {
                      priority: "UTILE",
                      category: "Légal & Compliance",
                      percentage: "5%",
                      description: "Avocats, audits, certifications",
                    },
                  ].map((use) => (
                    <div
                      key={use.category}
                      className="p-2 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium text-gray-800">
                          {use.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                              use.priority === "CRITIQUE"
                                ? "bg-red-100 text-red-700"
                                : use.priority === "IMPORTANT"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {use.priority}
                          </span>
                          <span className="font-bold text-blue-600 text-xs">
                            {use.percentage}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">{use.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white text-center">
                  <h4 className="text-sm font-semibold mb-1">
                    💰 INVESTISSEMENT OUVERT
                  </h4>
                  <p className="text-xs opacity-90">
                    Opportunité unique de marché $2.8B USD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
