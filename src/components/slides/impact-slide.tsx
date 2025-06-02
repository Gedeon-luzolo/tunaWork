import {motion} from "framer-motion"
import { Globe, TrendingUp, Users } from "lucide-react";

export function ImpactSlide() {
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
              Impact Social et Économique
            </h2>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-blue-200/30 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                    Impact sur l`Emploi
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Création d`Emplois",
                        value: "50,000+",
                        description: "Freelancers actifs sur la plateforme",
                      },
                      {
                        title: "Revenus Moyens",
                        value: "$2,500",
                        description: "Par mois pour les freelancers actifs",
                      },
                      {
                        title: "Taux d`Activité",
                        value: "85%",
                        description:
                          "Des freelancers travaillent régulièrement",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.title}
                        className="p-4 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-sm font-medium text-gray-800">
                            {stat.title}
                          </h4>
                          <span className="text-blue-600 font-semibold">
                            {stat.value}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                    Impact Économique
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Volume d`Affaires",
                        value: "$100M",
                        description: "Transactions annuelles",
                      },
                      {
                        title: "Croissance",
                        value: "+150%",
                        description: "Croissance annuelle",
                      },
                      {
                        title: "Satisfaction",
                        value: "95%",
                        description: "Des utilisateurs satisfaits",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.title}
                        className="p-4 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-sm font-medium text-gray-800">
                            {stat.title}
                          </h4>
                          <span className="text-blue-600 font-semibold">
                            {stat.value}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  {
                    icon: Globe,
                    title: "Couverture Géographique",
                    description:
                      "20+ pays avec une forte concentration en Afrique",
                  },
                  {
                    icon: Users,
                    title: "Communauté Active",
                    description: "100,000+ utilisateurs actifs mensuellement",
                  },
                  {
                    icon: TrendingUp,
                    title: "Croissance Soutenue",
                    description: "15% de croissance mensuelle moyenne",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-blue-50/50 backdrop-blur-xl rounded-xl p-4 border border-blue-100 shadow-lg text-center"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 shadow-lg mx-auto">
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
}
