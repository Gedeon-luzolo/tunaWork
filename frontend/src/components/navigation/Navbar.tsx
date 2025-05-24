"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Fonctionnalités", href: "#features", hasDropdown: true },
  { name: "Tarifs", href: "#pricing" },
  { name: "À propos", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glassmorphism rounded-2xl backdrop-blur-md border border-white/20 shadow-xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                TunaWork
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 glassmorphism rounded-xl backdrop-blur-md border border-white/20 shadow-xl p-4"
                    >
                      <div className="space-y-3">
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        >
                          <div className="font-medium text-gray-900 dark:text-white">
                            Recherche de talents
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Trouvez les meilleurs freelancers
                          </div>
                        </a>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        >
                          <div className="font-medium text-gray-900 dark:text-white">
                            Gestion de projets
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Outils collaboratifs intégrés
                          </div>
                        </a>
                        <a
                          href="#"
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        >
                          <div className="font-medium text-gray-900 dark:text-white">
                            Paiements sécurisés
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Transactions protégées
                          </div>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10 transition-all duration-200"
              >
                Se connecter
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:scale-[1.02] transition-all duration-300 px-6 py-2 rounded-xl text-white font-semibold shadow-lg shadow-blue-500/25 border-0">
                S'inscrire
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-white/20"
            >
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 space-y-3">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10"
                  >
                    Se connecter
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 border-0">
                    S'inscrire
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
