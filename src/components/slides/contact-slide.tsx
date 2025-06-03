import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  MessageSquare,
  Calendar,
  Handshake,
  Rocket,
  Star,
  Globe,
  Users,
  Award,
} from "lucide-react";
import { Logo } from "../ui/logo";

export function ContactSlide() {
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
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Handshake className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Rejoignez l `Aventure TunaWork
            </h2>
          </div>

          {/* Message de remerciement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white text-center mb-8"
          >
            <div className="mb-4">
              <Logo size="lg" showText={false} animated={true} />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Merci de votre Attention !
            </h3>
            <p className="text-blue-100 mb-6">
              Vous venez de découvrir TunaWork, la solution qui va révolutionner
              l `économie des services en RDC. Ensemble, transformons 2,8
              milliards USD d `opportunités en succès concret.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <Rocket className="w-8 h-8 mx-auto mb-2" />
                <div className="text-xl font-bold">Innovation</div>
                <div className="text-sm text-blue-100">
                  Technologie de pointe
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-xl font-bold">Impact</div>
                <div className="text-sm text-blue-100">
                  100 000+ vies changées
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-xl font-bold">Excellence</div>
                <div className="text-sm text-blue-100">Standards élevés</div>
              </div>
            </div>
          </motion.div>

          {/* Contact et prochaines étapes */}
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
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  💬 Contactez-nous
                </h3>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:luzologedeon340@gmail.com"
                  className="flex items-center space-x-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-sm text-blue-600">
                      luzologedeon340@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+243854816076"
                  className="flex items-center space-x-3 p-3 rounded-lg border border-gray-100 hover:border-green-200 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Téléphone</h4>
                    <p className="text-sm text-green-600">+243 85 48 160 76</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/gedeon-luzolo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                    <p className="text-sm text-blue-600">@Gedeon Luzolo</p>
                  </div>
                </a>
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
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  📅 Prochaines Étapes
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Démonstration Live",
                    description:
                      "Découvrez TunaWork en action avec une démo personnalisée",
                    icon: Globe,
                    color: "blue",
                  },
                  {
                    title: "Discussion Stratégique",
                    description:
                      "Explorons ensemble les opportunités de partenariat",
                    icon: Handshake,
                    color: "green",
                  },
                  {
                    title: "Plan d `Investissement",
                    description:
                      "Détaillons les modalités et la roadmap de croissance",
                    icon: Star,
                    color: "purple",
                  },
                ].map((step) => (
                  <div
                    key={step.title}
                    className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
                  >
                    <div
                      className={`w-8 h-8 bg-${step.color}-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                    >
                      <step.icon className={`w-4 h-4 text-${step.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to action final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center"
          >
            <h3 className="text-xl font-bold mb-3">
              🚀 Ensemble, Digitalisons l `Afrique !
            </h3>
            <p className="text-green-100 mb-4">
              TunaWork n `est pas qu `une plateforme, c `est une révolution
              économique qui commence aujourd `hui. Rejoignez-nous pour
              transformer 100 000+ vies et créer l `avenir du travail en RDC.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">Aujourd `hui</div>
                <div className="text-sm text-green-100">Nous commençons</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">Demain</div>
                <div className="text-sm text-green-100">Nous transformons</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">Ensemble</div>
                <div className="text-sm text-green-100">Nous réussissons</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
