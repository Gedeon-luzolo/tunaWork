import { motion } from "framer-motion";
import { Globe, Heart, Target } from "lucide-react";

export function MissionSlide() {
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
            Notre Mission
          </h2>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-blue-200/30 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Vision
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  TunaWork aspire à devenir la plateforme de référence pour le
                  travail indépendant en Afrique, en connectant les talents
                  locaux aux opportunités mondiales.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      icon: Target,
                      title: "Excellence",
                      description:
                        "Promouvoir l'excellence dans le travail indépendant",
                    },
                    {
                      icon: Heart,
                      title: "Impact Social",
                      description: "Créer un impact social positif",
                    },
                    {
                      icon: Globe,
                      title: "Ouverture",
                      description:
                        "Faciliter l'accès aux marchés internationaux",
                    },
                  ].map((value) => (
                    <div
                      key={value.title}
                      className="flex items-start gap-3 p-3 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center border border-blue-500/20 shadow-lg">
                        <value.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {value.description}
                        </p>
                      </div>
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Objectifs
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Développement Local",
                      description: "50,000 emplois créés d'ici 2025",
                      progress: 75,
                    },
                    {
                      title: "Formation",
                      description: "10,000 freelancers formés",
                      progress: 60,
                    },
                    {
                      title: "Expansion",
                      description: "30 pays africains d'ici 2026",
                      progress: 45,
                    },
                  ].map((goal, index) => (
                    <div
                      key={goal.title}
                      className="p-4 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-800">
                          {goal.title}
                        </h4>
                        <span className="text-blue-600 font-semibold text-sm">
                          {goal.progress}%
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs mb-3">
                        {goal.description}
                      </p>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${goal.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
