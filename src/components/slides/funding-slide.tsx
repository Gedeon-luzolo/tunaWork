import { motion } from "framer-motion";
import {
  DollarSign,
  Building2,
  Clock,
  CheckCircle,
  Target,
} from "lucide-react";

export function FundingSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center overflow-y-auto py-20 pt-28">
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
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900">
              Financement & Création d'Entreprise
            </h2>
          </div>

          {/* Budget requis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white text-center mb-6"
          >
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Budget Minimum Requis</h3>
            </div>
            <div className="text-4xl font-bold mb-2">7 000 USD</div>
            <p className="text-blue-100 mb-4">
              Financement minimum nécessaire pour la réalisation complète du
              projet TunaWork
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-lg font-semibold">MVP</div>
                <div className="text-sm text-blue-100">
                  Développement initial
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-lg font-semibold">Lancement</div>
                <div className="text-sm text-blue-100">
                  Marketing & acquisition
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-lg font-semibold">Croissance</div>
                <div className="text-sm text-blue-100">Expansion & équipe</div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Répartition du budget */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                Répartition du Budget (7 000 USD)
              </h3>
              <div className="space-y-3">
                {[
                  {
                    category: "Développement technique",
                    amount: 3500,
                    percentage: 50,
                    color: "blue",
                  },
                  {
                    category: "Marketing & Acquisition",
                    amount: 1750,
                    percentage: 25,
                    color: "green",
                  },
                  {
                    category: "Opérations & Légal",
                    amount: 1050,
                    percentage: 15,
                    color: "purple",
                  },
                  {
                    category: "Fonds de roulement",
                    amount: 700,
                    percentage: 10,
                    color: "orange",
                  },
                ].map((item) => (
                  <div
                    key={item.category}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-gray-800">
                        {item.category}
                      </div>
                      <div className="text-sm text-gray-600">
                        {item.percentage}% du budget
                      </div>
                    </div>
                    <div className={`text-lg font-bold text-${item.color}-600`}>
                      ${item.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Création d'entreprise */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                Création d'Entreprise
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-semibold text-blue-800 mb-2">
                    Structure Juridique
                  </div>
                  <div className="text-sm text-blue-700">
                    <div>• SARL (Société à Responsabilité Limitée)</div>
                    <div>• Siège social : Kinshasa, RDC</div>
                    <div>• Capital social : 1 000 USD minimum</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-gray-800">
                    Timeline de création :
                  </div>
                  {[
                    {
                      phase: "Préparation dossier",
                      duration: "2 semaines",
                      status: "planned",
                    },
                    {
                      phase: "Dépôt RCCM",
                      duration: "3-4 semaines",
                      status: "planned",
                    },
                    {
                      phase: "Obtention NIF",
                      duration: "1 semaine",
                      status: "planned",
                    },
                    {
                      phase: "Compte bancaire",
                      duration: "1 semaine",
                      status: "planned",
                    },
                  ].map((step) => (
                    <div
                      key={step.phase}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm font-medium">
                          {step.phase}
                        </span>
                      </div>
                      <span className="text-xs text-gray-600">
                        {step.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Opportunités pour incubateurs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center"
          >
            <h3 className="text-xl font-bold mb-4">
              🚀 Opportunité pour Incubateurs
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">7 000 USD</div>
                <div className="text-sm text-green-100">Budget minimum</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">6-8 mois</div>
                <div className="text-sm text-green-100">Durée incubation</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">ROI 300%+</div>
                <div className="text-sm text-green-100">Retour attendu</div>
              </div>
            </div>
            <p className="text-green-100 mb-4">
              Nous recherchons un partenaire incubateur pour nous accompagner
              dans le développement de TunaWork et la structuration du marché
              des services freelance en RDC.
            </p>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">Prêt pour l'incubation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
