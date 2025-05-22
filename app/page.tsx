"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/src/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  Smartphone,
  Globe,
  Search,
  MessageSquare,
  Star,
  ImageIcon,
  Activity,
  Shield,
  CreditCard,
  Award,
  Users,
  FileText,
  FolderTree,
  Sparkles,
  TrendingUp,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/src/components/ui/lib/utils";

import { Footer } from "@/src/components/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    sectionsRef.current[section]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "problem",
        "solution",
        "features",
        "impact",
        "mission",
        "business",
      ];

      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Revenue data for pie chart
  const revenueData = [
    { name: "Commission sur transactions", value: 60, color: "#3B82F6" },
    { name: "Abonnements premium", value: 25, color: "#8B5CF6" },
    { name: "Services à valeur ajoutée", value: 10, color: "#EC4899" },
    { name: "Publicités ciblées", value: 5, color: "#F59E0B" },
  ];

  // Financial projections data for bar chart
  const financialData = [
    { name: "Année 1", value: 50 },
    { name: "Année 2", value: 200 },
    { name: "Année 3", value: 400 },
    { name: "Année 4", value: 500 },
  ];

  // User growth data for area chart
  const userGrowthData = [
    { name: "Q1", freelancers: 100, clients: 50 },
    { name: "Q2", freelancers: 300, clients: 150 },
    { name: "Q3", freelancers: 700, clients: 400 },
    { name: "Q4", freelancers: 1200, clients: 800 },
    { name: "Q5", freelancers: 2000, clients: 1200 },
    { name: "Q6", freelancers: 3500, clients: 1800 },
    { name: "Q7", freelancers: 5000, clients: 2500 },
    { name: "Q8", freelancers: 7000, clients: 3500 },
  ];

  return (
    <main className="min-h-screen relative text-gray-100 overflow-hidden">
      {/* Background image */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/images/hero.jpg"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.5) blur(1px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-emerald-900/30 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.2)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.15)_0%,_transparent_60%)] pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0V20M0 1H20' stroke='white' stroke-opacity='0.1'/%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_2px_30px_rgba(16,185,129,0.15)]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center justify-center">
              <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-md"></div>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200 drop-shadow-[0_2px_8px_rgba(16,185,129,0.4)]">
              TunaWork
            </span>
          </div>
          <div className="hidden md:flex gap-2">
            {[
              "problem",
              "solution",
              "features",
              "impact",
              "mission",
              "business",
            ].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full backdrop-blur-md",
                  activeSection === section
                    ? "text-white bg-emerald-500/30 border border-emerald-400/30 shadow-[0_2px_10px_rgba(16,185,129,0.3)]"
                    : "text-white/80 hover:text-white border border-white/5 hover:border-white/20 hover:bg-white/5"
                )}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-6 py-2 rounded-full border border-emerald-400/30 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
            <span>Contacter</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionsRef.current.hero = el;
        }}
        className="h-screen relative flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 inline-block"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center mb-6 transform rotate-12">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg transform -rotate-12"></div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-teal-200 drop-shadow-[0_2px_12px_rgba(16,185,129,0.3)]">
              TunaWork
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg"
            >
              Digitalisation du marché informel des services en RDC
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg mb-12 text-white/80 max-w-2xl mx-auto drop-shadow-md"
            >
              Une solution SaaS innovante pour la mise en relation entre
              freelancers et clients à Kinshasa
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => scrollToSection("problem")}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-8 py-6 text-lg rounded-full border border-emerald-400/30 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]"
              >
                <span>Découvrir le projet</span>
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-emerald-100 drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionsRef.current.problem = el;
        }}
        className="min-h-screen py-20 relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-teal-200 text-center drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">
                Problématique
              </h2>

              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl mb-8 text-white/90 leading-relaxed"
                >
                  Le marché des services en République Démocratique du Congo,
                  particulièrement à Kinshasa, est largement informel et
                  désorganisé.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_20px_rgba(16,185,129,0.08)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300">
                      <Users className="w-6 h-6 text-emerald-200" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-md">
                      Pour les clients
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ChevronRight className="w-4 h-4 text-emerald-200" />
                        </div>
                        <span className="text-white/80">
                          Difficulté à trouver des prestataires fiables
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ChevronRight className="w-4 h-4 text-emerald-200" />
                        </div>
                        <span className="text-white/80">
                          Manque de transparence sur les prix
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ChevronRight className="w-4 h-4 text-emerald-200" />
                        </div>
                        <span className="text-white/80">
                          Absence de garantie de qualité
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_20px_rgba(16,185,129,0.08)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300">
                      <Star className="w-6 h-6 text-emerald-200" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-md">
                      Pour les freelancers
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ChevronRight className="w-4 h-4 text-emerald-200" />
                        </div>
                        <span className="text-white/80">
                          Difficulté à se faire connaître
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ChevronRight className="w-4 h-4 text-emerald-200" />
                        </div>
                        <span className="text-white/80">
                          Instabilité des revenus
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ChevronRight className="w-4 h-4 text-emerald-200" />
                        </div>
                        <span className="text-white/80">
                          Absence de protection contractuelle
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="mt-6 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_20px_rgba(16,185,129,0.08)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300">
                    <Globe className="w-6 h-6 text-emerald-200" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-md">
                    Pour l'économie
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Un secteur informel important qui échappe à la fiscalité et
                    limite le développement économique structuré
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionsRef.current.solution = el;
        }}
        className="min-h-screen py-20 relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-emerald-900/20 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-teal-200 text-center drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">
                Notre Solution
              </h2>

              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl mb-8 text-white/90 leading-relaxed"
                >
                  TunaWork est une plateforme SaaS innovante qui vise à
                  digitaliser et structurer le marché des services freelance à
                  Kinshasa, en créant un écosystème sécurisé et transparent.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      title: "Profils vérifiés",
                      description:
                        "Vérification des compétences et de l'identité des freelancers",
                      icon: Shield,
                    },
                    {
                      title: "Système d'évaluation",
                      description:
                        "Notation mutuelle entre clients et freelancers",
                      icon: Star,
                    },
                    {
                      title: "Paiements sécurisés",
                      description:
                        "Système d'escrow pour garantir les transactions",
                      icon: CreditCard,
                    },
                    {
                      title: "Contrats standardisés",
                      description:
                        "Protection juridique pour toutes les parties",
                      icon: FileText,
                    },
                    {
                      title: "Catégorisation",
                      description:
                        "Organisation claire par domaine d'expertise",
                      icon: FolderTree,
                    },
                    {
                      title: "Matching intelligent",
                      description:
                        "Recommandation basée sur les besoins et compétences",
                      icon: Sparkles,
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300">
                        <feature.icon className="w-6 h-6 text-emerald-200" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white drop-shadow-md">
                        {feature.title}
                      </h3>
                      <p className="text-white/80">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 mt-8 border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                >
                  <h3 className="text-xl font-semibold mb-6 text-white drop-shadow-md text-center">
                    Fonctionnement
                  </h3>

                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent hidden md:block"></div>

                    {[
                      { step: 1, label: "Inscription" },
                      { step: 2, label: "Mise en relation" },
                      { step: 3, label: "Contrat sécurisé" },
                      { step: 4, label: "Paiement sécurisé" },
                      { step: 5, label: "Évaluation" },
                    ].map((step, index) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="text-center z-10"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mx-auto mb-3 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                          <span className="text-xl font-bold text-white">
                            {step.step}
                          </span>
                        </div>
                        <p className="text-white/80">{step.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionsRef.current.features = el;
        }}
        className="min-h-screen py-20 relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-emerald-900/20 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-teal-200 text-center drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">
              Fonctionnalités de la Plateforme
            </h2>

            <div className="max-w-6xl mx-auto mb-16">
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-white drop-shadow-md">
                      Disponible sur Web et Mobile
                    </h3>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      TunaWork sera accessible depuis n'importe quel appareil,
                      offrant une expérience utilisateur fluide et cohérente sur
                      ordinateur et smartphone.
                    </p>
                    <div className="flex gap-6 mb-6">
                      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        <Globe className="w-5 h-5 text-emerald-200" />
                        <span className="text-white/80">Application Web</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        <Smartphone className="w-5 h-5 text-emerald-200" />
                        <span className="text-white/80">
                          Application Mobile
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex justify-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl"></div>

                      <div className="relative flex justify-center gap-6">
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.15)] overflow-hidden w-48 h-96 border border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] transform hover:-translate-y-2">
                          <div className="h-8 bg-black/60 flex items-center justify-center">
                            <div className="w-16 h-1 bg-white/20 rounded-full"></div>
                          </div>
                          <div className="p-3">
                            <div className="bg-emerald-500/10 h-40 rounded-lg mb-3 border border-emerald-500/20"></div>
                            <div className="space-y-2">
                              <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
                              <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                              <div className="h-2 bg-white/10 rounded-full w-5/6"></div>
                            </div>
                          </div>
                        </div>

                        <div className="hidden md:block bg-black/40 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.15)] overflow-hidden w-64 h-48 border border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] transform hover:-translate-y-2">
                          <div className="h-6 bg-black/60 flex items-center px-3">
                            <div className="w-20 h-1 bg-white/20 rounded-full"></div>
                          </div>
                          <div className="p-3 flex">
                            <div className="bg-emerald-500/10 w-20 h-32 rounded-lg mr-3 border border-emerald-500/20"></div>
                            <div className="flex-1 space-y-2">
                              <div className="h-2 bg-white/10 rounded-full w-full"></div>
                              <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
                              <div className="h-2 bg-white/10 rounded-full w-5/6"></div>
                              <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Search,
                    title: "Recherche de Freelancers",
                    description:
                      "Recherche avancée par compétences, localisation, tarifs et disponibilité. Filtres personnalisés pour trouver le freelancer idéal.",
                  },
                  {
                    icon: MessageSquare,
                    title: "Messagerie Intégrée",
                    description:
                      "Système de chat en temps réel pour faciliter la communication entre clients et freelancers. Partage de fichiers et suivi des conversations.",
                  },
                  {
                    icon: Star,
                    title: "Système d'Avis",
                    description:
                      "Évaluations et commentaires détaillés après chaque mission. Notation sur plusieurs critères pour une évaluation complète.",
                  },
                  {
                    icon: ImageIcon,
                    title: "Portfolio",
                    description:
                      "Espace personnalisé pour présenter les réalisations passées. Galerie de projets avec descriptions et témoignages clients.",
                  },
                  {
                    icon: Activity,
                    title: "Fil d'Actualités",
                    description:
                      "Publications des travaux récents et mises à jour de statut. Possibilité de suivre les freelancers et de rester informé de leurs activités.",
                  },
                  {
                    icon: Shield,
                    title: "Protection des Transactions",
                    description:
                      "Système d'escrow pour sécuriser les paiements. Libération des fonds uniquement après validation du travail.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-emerald-200" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white drop-shadow-md">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: CreditCard,
                    title: "Paiements Flexibles",
                    description:
                      "Multiples options de paiement adaptées au contexte local. Suivi des transactions et historique des paiements.",
                  },
                  {
                    icon: Award,
                    title: "Certification des Compétences",
                    description:
                      "Badges et certifications pour valoriser l'expertise. Tests de compétences pour valider les savoir-faire.",
                  },
                  {
                    icon: Users,
                    title: "Communauté",
                    description:
                      "Forums d'entraide et groupes thématiques. Événements virtuels et opportunités de networking.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-emerald-200" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white drop-shadow-md">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionsRef.current.impact = el;
        }}
        className="min-h-screen py-20 relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-emerald-900/20 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-teal-200 text-center drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">
              Impact Social et Économique
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-white drop-shadow-md">
                    Impact sur l'Emploi
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Création d'Emplois",
                        value: "50,000+",
                        description: "Freelancers actifs sur la plateforme",
                      },
                      {
                        title: "Taux d'Activité",
                        value: "85%",
                        description:
                          "Des freelancers travaillent régulièrement",
                      },
                      {
                        title: "Revenus Moyens",
                        value: "2,500€",
                        description: "Par mois pour les freelancers actifs",
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="flex items-center justify-between p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                      >
                        <div>
                          <h4 className="text-lg font-medium text-white">
                            {stat.title}
                          </h4>
                          <p className="text-white/70 text-sm">
                            {stat.description}
                          </p>
                        </div>
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-200 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]">
                          {stat.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-white drop-shadow-md">
                    Impact Économique
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Volume d'Affaires",
                        value: "100M€",
                        description: "Transactions annuelles",
                      },
                      {
                        title: "Croissance",
                        value: "+150%",
                        description: "En 2023",
                      },
                      {
                        title: "Taux de Satisfaction",
                        value: "95%",
                        description: "Des utilisateurs satisfaits",
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="flex items-center justify-between p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                      >
                        <div>
                          <h4 className="text-lg font-medium text-white">
                            {stat.title}
                          </h4>
                          <p className="text-white/70 text-sm">
                            {stat.description}
                          </p>
                        </div>
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-200 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]">
                          {stat.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Globe,
                    title: "Couverture Géographique",
                    description:
                      "Présence dans plus de 20 pays avec une forte concentration en Europe et en Afrique.",
                  },
                  {
                    icon: Users,
                    title: "Communauté Active",
                    description:
                      "Plus de 100,000 utilisateurs actifs mensuellement, créant un réseau dynamique.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Croissance Soutenue",
                    description:
                      "Une croissance mensuelle moyenne de 15% depuis le lancement.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-emerald-200" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white drop-shadow-md">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionsRef.current.mission = el;
        }}
        className="min-h-screen py-20 relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-emerald-900/20 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-teal-200 text-center drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">
              Notre Mission
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-white drop-shadow-md">
                    Vision
                  </h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    TunaWork aspire à devenir la plateforme de référence pour le
                    travail indépendant en Afrique, en connectant les talents
                    locaux aux opportunités mondiales. Notre vision est de créer
                    un écosystème dynamique où chaque freelancer peut s'épanouir
                    professionnellement et contribuer au développement
                    économique de son pays.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Target,
                        title: "Excellence",
                        description:
                          "Promouvoir l'excellence et la qualité dans le travail indépendant",
                      },
                      {
                        icon: Heart,
                        title: "Impact Social",
                        description:
                          "Créer un impact social positif en favorisant l'emploi local",
                      },
                      {
                        icon: Globe,
                        title: "Ouverture",
                        description:
                          "Faciliter l'accès aux marchés internationaux",
                      },
                    ].map((value, index) => (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3 }}
                        className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300">
                          <value.icon className="w-5 h-5 text-emerald-200" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-1">
                            {value.title}
                          </h4>
                          <p className="text-white/70 text-sm">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-white drop-shadow-md">
                    Objectifs
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Développement Local",
                        description:
                          "Créer 50,000 opportunités d'emploi pour les freelancers africains d'ici 2025",
                        progress: 75,
                      },
                      {
                        title: "Formation",
                        description:
                          "Former 10,000 nouveaux freelancers aux meilleures pratiques du travail indépendant",
                        progress: 60,
                      },
                      {
                        title: "Expansion",
                        description:
                          "Étendre nos services à 30 pays africains d'ici 2026",
                        progress: 45,
                      },
                    ].map((goal, index) => (
                      <motion.div
                        key={goal.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3 }}
                        className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-lg font-medium text-white">
                            {goal.title}
                          </h4>
                          <span className="text-emerald-300 font-semibold">
                            {goal.progress}%
                          </span>
                        </div>
                        <p className="text-white/70 text-sm mb-4">
                          {goal.description}
                        </p>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${goal.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-emerald-500/80 to-teal-500/80 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Communauté",
                    description:
                      "Une communauté active de plus de 100,000 freelancers et clients",
                  },
                  {
                    icon: Award,
                    title: "Reconnaissance",
                    description:
                      "Reconnue comme la meilleure plateforme de freelancing en Afrique",
                  },
                  {
                    icon: Sparkles,
                    title: "Innovation",
                    description:
                      "Pionnière dans l'utilisation de l'IA pour la mise en relation",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-emerald-200" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white drop-shadow-md">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Plan Section */}
      <section
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionsRef.current.business = el;
        }}
        className="min-h-screen py-20 relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-emerald-900/20 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-teal-200 text-center drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">
              Business Plan
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-white drop-shadow-md">
                    Modèle de Revenus
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Commission sur les Transactions",
                        description:
                          "10% sur chaque transaction réalisée via la plateforme",
                        value: "70%",
                        color: "from-emerald-400/80 to-teal-400/80",
                      },
                      {
                        title: "Abonnements Premium",
                        description:
                          "Fonctionnalités avancées pour les utilisateurs professionnels",
                        value: "20%",
                        color: "from-emerald-400/80 to-teal-400/80",
                      },
                      {
                        title: "Services Additionnels",
                        description:
                          "Formation, certification, et services de mise en relation",
                        value: "10%",
                        color: "from-emerald-400/80 to-teal-400/80",
                      },
                    ].map((revenue, index) => (
                      <motion.div
                        key={revenue.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3 }}
                        className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-lg font-medium text-white">
                            {revenue.title}
                          </h4>
                          <span className="text-emerald-300 font-semibold">
                            {revenue.value}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm mb-4">
                          {revenue.description}
                        </p>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: revenue.value }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${revenue.color} rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-white drop-shadow-md">
                    Projections Financières
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Année 1",
                        revenue: "2.5M€",
                        users: "50,000",
                        growth: "+150%",
                      },
                      {
                        title: "Année 2",
                        revenue: "6M€",
                        users: "150,000",
                        growth: "+140%",
                      },
                      {
                        title: "Année 3",
                        revenue: "15M€",
                        users: "500,000",
                        growth: "+150%",
                      },
                    ].map((projection, index) => (
                      <motion.div
                        key={projection.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3 }}
                        className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xl font-semibold text-white">
                            {projection.title}
                          </h4>
                          <span className="text-emerald-300 font-semibold">
                            {projection.growth}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-white/70 mb-1">
                              Revenus
                            </p>
                            <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-200 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]">
                              {projection.revenue}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-white/70 mb-1">
                              Utilisateurs
                            </p>
                            <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-200 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]">
                              {projection.users}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Target,
                    title: "Objectifs de Croissance",
                    description:
                      "Atteindre 1 million d'utilisateurs actifs d'ici 2025",
                  },
                  {
                    icon: Globe,
                    title: "Expansion Internationale",
                    description: "Présence dans 30 pays africains d'ici 2026",
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance Financière",
                    description:
                      "Objectif de rentabilité atteint dès la deuxième année",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-emerald-200" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white drop-shadow-md">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
