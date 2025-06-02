import { motion } from "framer-motion";
import {
  Shield,
  CreditCard,
  Sparkles,
  FileText,
  FolderTree,
  Star,
} from "lucide-react";

export  function SolutionSlide() {
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
            TunaWork : La Solution qui Révolutionne
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
                TunaWork transforme ce marché informel de{" "}
                <strong className="text-blue-600">2,8 milliards USD</strong> en
                un écosystème digital sécurisé.
              </p>

              <div className="grid md:grid-cols-3 gap-2 mb-4">
                <div className="bg-green-50 p-2 rounded-lg border border-green-200">
                  <div className="text-lg font-bold text-green-600">$500M</div>
                  <div className="text-xs text-gray-600">Marché initial</div>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-blue-600">50,000+</div>
                  <div className="text-xs text-gray-600">Freelancers</div>
                </div>
                <div className="bg-purple-50 p-2 rounded-lg border border-purple-200">
                  <div className="text-lg font-bold text-purple-600">
                    15,000+
                  </div>
                  <div className="text-xs text-gray-600">Entreprises</div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-3">
              {[
                {
                  title: "Profils vérifiés",
                  icon: Shield,
                  benefit: "100% sécurisé",
                },
                {
                  title: "Paiements intelligents",
                  icon: CreditCard,
                  benefit: "Garanti",
                },
                {
                  title: "Matching IA",
                  icon: Sparkles,
                  benefit: "97% précis",
                },
                {
                  title: "Contrats digitaux",
                  icon: FileText,
                  benefit: "Légal",
                },
                {
                  title: "Portfolio dynamique",
                  icon: FolderTree,
                  benefit: "Visible",
                },
                {
                  title: "Reviews transparents",
                  icon: Star,
                  benefit: "Confiance",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-50/50 backdrop-blur-xl rounded-lg p-3 border border-blue-100 shadow-lg"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <feature.icon className="w-3 h-3 text-white" />
                  </div>
                  <div className="mb-1">
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                      {feature.benefit}
                    </span>
                  </div>
                  <h3 className="text-xs font-semibold mb-1 text-gray-800">
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
