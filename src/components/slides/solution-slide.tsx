import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export function SolutionSlide() {
  return (
    <div className="w-full py-20 pt-14 overflow-y-scroll">
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
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900">
              Notre Solution
            </h2>
          </div>

          {/* Vision principale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              TunaWork : Plateforme SaaS Révolutionnaire
            </h3>
            <p className="text-blue-100 mb-4">
              Transformation complète du marché informel des services en RDC en
              un écosystème numérique structuré, sécurisé et transparent.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">20 000+</div>
                <div className="text-sm text-blue-100">Freelancers ciblés</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">2M USD</div>
                <div className="text-sm text-blue-100">Marché potentiel</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-blue-100">Digital</div>
              </div>
            </div>
          </motion.div>

          {/* Fonctionnalités clés */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <div className="aspect-video bg-blue-50 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/images/humain1.jpg"
                  alt="Écosystème Numérique Complet"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Écosystème Numérique Complet
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Plateforme tout-en-un qui connecte freelancers et clients dans
                un environnement sécurisé et professionnel.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Interface intuitive et moderne
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Accessible sur tous les appareils
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
              <div className="aspect-video bg-blue-50 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/images/ia.jpg"
                  alt="Technologie Avancée - Intelligence Artificielle"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Technologie Avancée
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Intelligence artificielle et algorithmes de matching pour des
                connexions optimales entre offre et demande.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Matching IA précis à 80%
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Recommandations personnalisées
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
