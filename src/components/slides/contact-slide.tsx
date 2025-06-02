import {motion} from "framer-motion"
import { FileText, Linkedin, Mail, Phone, Smartphone, TrendingUp } from "lucide-react";
import { Logo } from "../ui/logo";


export function ContactSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="container mx-auto px-6 z-10 max-h-[90vh] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto h-full flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
            Merci de votre attention !
          </h2>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-blue-200/30 shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <div className="mb-6 inline-block">
                <Logo size="lg" showText={false} animated={true} />
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nous espérons que cette présentation vous a donné un aperçu
                complet de <strong className="text-blue-600">TunaWork</strong>{" "}
                et de son potentiel à transformer l`économie numérique en RDC.
              </p>

              <p className="text-base text-gray-600 mb-6">
                Nous serions ravis de discuter de ce projet avec vous et
                d`explorer les opportunités de collaboration.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Contactez-nous
                </h3>

                <div className="space-y-3">
                  <a
                    href="mailto:contact@tunawork.com"
                    className="flex items-center gap-3 p-3 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center border border-blue-500/20 shadow-lg group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">
                        Email
                      </h4>
                      <p className="text-blue-600 text-xs">
                        contact@tunawork.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+243123456789"
                    className="flex items-center gap-3 p-3 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center border border-green-500/20 shadow-lg group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">
                        Téléphone
                      </h4>
                      <p className="text-green-600 text-xs">+243 123 456 789</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/company/tunawork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg flex items-center justify-center border border-blue-700/20 shadow-lg group-hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">
                        LinkedIn
                      </h4>
                      <p className="text-blue-700 text-xs">@tunawork</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Prochaines étapes
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      title: "Démonstration produit",
                      description: "Découvrez TunaWork en action",
                      icon: Smartphone,
                    },
                    {
                      title: "Business plan détaillé",
                      description: "Accès aux projections complètes",
                      icon: FileText,
                    },
                    {
                      title: "Opportunités d`investissement",
                      description: "Rejoignez notre aventure",
                      icon: TrendingUp,
                    },
                  ].map((step) => (
                    <div
                      key={step.title}
                      className="p-3 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center border border-blue-500/20 shadow-lg">
                          <step.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 mb-1">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 text-xs">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white text-center">
                  <h4 className="text-sm font-semibold mb-2">
                    Ensemble, digitalisons l`Afrique !
                  </h4>
                  <p className="text-xs opacity-90">
                    TunaWork - L`avenir du travail en RDC
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
