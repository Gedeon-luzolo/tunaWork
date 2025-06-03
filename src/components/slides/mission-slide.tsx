import { motion } from "framer-motion";
import {
  Globe,
  Heart,
  Target,
  Rocket,
  Users,
  Award,
  Zap,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";

export function MissionSlide() {
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
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
              <Rocket className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800">
              Notre Mission & Vision
            </h2>
          </div>

          {/* Mission principale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-xl p-6 text-white text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              Transformer l`Économie Africaine
            </h3>
            <p className="text-orange-100 mb-6">
              Révolutionner le marché des services en RDC en créant la première
              plateforme numérique qui connecte, forme et autonomise 100 000+
              prestataires locaux.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <div className="text-xl font-bold">Mission</div>
                <div className="text-sm text-orange-100">
                  Digitaliser l`informel
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <div className="text-xl font-bold">Vision</div>
                <div className="text-sm text-orange-100">
                  Autonomiser les talents
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Globe className="w-8 h-8 mx-auto mb-2" />
                <div className="text-xl font-bold">Impact</div>
                <div className="text-sm text-orange-100">
                  Rayonnement africain
                </div>
              </div>
            </div>
          </motion.div>

          {/* Valeurs et objectifs */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  🌟 Nos Valeurs
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Excellence & Qualité
                    </h4>
                    <p className="text-sm text-gray-600">
                      Standards élevés pour tous les services et formations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Impact Social
                    </h4>
                    <p className="text-sm text-gray-600">
                      Transformation positive des communautés locales
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Inclusion & Équité
                    </h4>
                    <p className="text-sm text-gray-600">
                      Opportunités égales pour tous, sans discrimination
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Innovation Continue
                    </h4>
                    <p className="text-sm text-gray-600">
                      Technologies avancées au service de l`humain
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
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  🎯 Objectifs 2025
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Emplois Créés",
                    description: "50 000+ freelancers actifs",
                    progress: 85,
                    color: "green",
                  },
                  {
                    title: "Formation & Certification",
                    description: "25 000 freelancers formés",
                    progress: 70,
                    color: "blue",
                  },
                  {
                    title: "Expansion Géographique",
                    description: "Toutes les communes de Kinshasa",
                    progress: 60,
                    color: "purple",
                  },
                  {
                    title: "Impact Économique",
                    description: "$125M de transactions",
                    progress: 75,
                    color: "orange",
                  },
                ].map((goal, index) => (
                  <div key={goal.title} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {goal.title}
                      </h4>
                      <span
                        className={`text-${goal.color}-600 font-bold text-sm`}
                      >
                        {goal.progress}%
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{goal.description}</p>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1.2, delay: 0.4 + index * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r from-${goal.color}-400 to-${goal.color}-600 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
          >
            <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">
              🗺️ Roadmap Stratégique
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  phase: "Phase 1",
                  period: "2024-2025",
                  title: "Lancement & Croissance",
                  objectives: [
                    "Lancement officiel à Kinshasa",
                    "10 000 freelancers actifs",
                    "Partenariats stratégiques",
                  ],
                  color: "blue",
                  icon: Rocket,
                },
                {
                  phase: "Phase 2",
                  period: "2025-2026",
                  title: "Expansion & Formation",
                  objectives: [
                    "50 000 freelancers actifs",
                    "Plateforme de formation",
                    "Expansion régionale RDC",
                  ],
                  color: "green",
                  icon: TrendingUp,
                },
                {
                  phase: "Phase 3",
                  period: "2026-2030",
                  title: "Leadership Africain",
                  objectives: [
                    "Expansion 5 pays africains",
                    "500 000 freelancers",
                    "Référence continentale",
                  ],
                  color: "purple",
                  icon: Globe,
                },
              ].map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-${phase.color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <phase.icon className={`w-6 h-6 text-${phase.color}-600`} />
                  </div>
                  <div
                    className={`text-xs font-bold text-${phase.color}-600 mb-1`}
                  >
                    {phase.phase}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    {phase.period}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                    {phase.title}
                  </h4>
                  <div className="space-y-1">
                    {phase.objectives.map((objective, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-gray-600"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {objective}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center mt-8"
          >
            <h3 className="text-xl font-bold mb-3">
              🚀 Rejoignez la Révolution
            </h3>
            <p className="text-orange-100 mb-4">
              Ensemble, transformons l`économie congolaise et créons un avenir
              prospère pour tous les talents locaux.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">Aujourd`hui</div>
                <div className="text-sm text-orange-100">Nous lançons</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">2025</div>
                <div className="text-sm text-orange-100">Nous dominons</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">2030</div>
                <div className="text-sm text-orange-100">Nous inspirons</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
