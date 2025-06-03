import { motion } from "framer-motion";
import {
  Heart,
  TrendingUp,
  Users,
  DollarSign,
  Building,
  Zap,
  Globe,
  Award,
  Target,
  CheckCircle,
} from "lucide-react";

export function ImpactSlide() {
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
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
              Impact Transformationnel
            </h2>
          </div>

          {/* Vision d`impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6 text-white text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              Révolutionner l`Économie Congolaise
            </h3>
            <p className="text-purple-100 mb-6">
              TunaWork transforme 2,8 milliards USD d`économie informelle en un
              écosystème numérique structuré, créant des opportunités durables
              pour 100 000+ prestataires.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">100 000+</div>
                <div className="text-sm text-purple-100">Vies transformées</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <DollarSign className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">$2.8B</div>
                <div className="text-sm text-purple-100">
                  Économie structurée
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">1ère</div>
                <div className="text-sm text-purple-100">Plateforme RDC</div>
              </div>
            </div>
          </motion.div>

          {/* Impact social et économique */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  💼 Impact Social
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Emploi Durable
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      50 000+ freelancers avec revenus stables et prévisibles
                    </p>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      +300% revenus moyens
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Professionnalisation
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      Formation et certification des compétences
                    </p>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      85% taux de réussite
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Inclusion Sociale
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      Accès égal aux opportunités pour tous
                    </p>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      40% femmes actives
                    </span>
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
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  💰 Impact Économique
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Croissance Économique
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      $2.8B d`économie informelle structurée et digitalisée
                    </p>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      +150% croissance annuelle
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Écosystème Business
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      Création d`un marché structuré et transparent
                    </p>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      100M+ transactions/an
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Rayonnement Régional
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      Modèle exportable vers d`autres pays africains
                    </p>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                      5 pays ciblés
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Métriques d`impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
          >
            <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">
              📊 Métriques d`Impact Projetées
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  metric: "Emplois Créés",
                  value: "50 000+",
                  description: "Freelancers actifs",
                  color: "green",
                  icon: Users,
                },
                {
                  metric: "Revenus Générés",
                  value: "$125M",
                  description: "Transactions annuelles",
                  color: "blue",
                  icon: DollarSign,
                },
                {
                  metric: "Satisfaction Client",
                  value: "95%",
                  description: "Taux de satisfaction",
                  color: "purple",
                  icon: Heart,
                },
                {
                  metric: "Croissance",
                  value: "+18%",
                  description: "Croissance mensuelle",
                  color: "orange",
                  icon: TrendingUp,
                },
              ].map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-${metric.color}-100 rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <metric.icon
                      className={`w-6 h-6 text-${metric.color}-600`}
                    />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {metric.value}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                    {metric.metric}
                  </h4>
                  <p className="text-xs text-gray-600">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision à long terme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center mt-8"
          >
            <h3 className="text-xl font-bold mb-3">🌍 Vision 2030</h3>
            <p className="text-green-100 mb-4">
              Devenir la référence africaine pour la digitalisation des services
              locaux, transformant l`économie informelle en opportunités
              durables.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">5 Pays</div>
                <div className="text-sm text-green-100">
                  Expansion régionale
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">500 000+</div>
                <div className="text-sm text-green-100">Freelancers actifs</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">$1B+</div>
                <div className="text-sm text-green-100">Impact économique</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
