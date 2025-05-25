"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, MessageCircle, Mail } from "lucide-react";
import { faqItems, faqCategories, type FAQItem } from "../../lib/data/faq";

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrer les FAQ par catégorie et recherche
  const filteredFAQs = faqItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle FAQ item
  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 glassmorphism rounded-full px-4 py-2 mb-6 backdrop-blur-md border border-white/20"
          >
            <MessageCircle className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Questions Fréquentes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Vous avez des questions ?
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Nous avons les réponses
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Trouvez rapidement les réponses à vos questions sur TunaWork. 
            Si vous ne trouvez pas ce que vous cherchez, contactez notre équipe support.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher dans les FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === "all"
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
            }`}
          >
            Toutes
          </button>
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="mb-4"
                >
                  <div className="glassmorphism rounded-2xl backdrop-blur-md border border-white/20 overflow-hidden">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/10 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                        {item.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openItems.includes(item.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-2">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Essayez avec d'autres mots-clés ou contactez notre support.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glassmorphism rounded-2xl p-8 backdrop-blur-md border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Notre équipe support est là pour vous aider 24h/7j
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Chat en direct</span>
              </button>
              <button className="border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Envoyer un email</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
