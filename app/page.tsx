"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Logo } from "@/src/components/ui/logo";
import {
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
  ChevronLeft,
  ArrowUp,
  ArrowDown,
  Mail,
  Phone,
  Linkedin,
  Github,
  DollarSign,
  Server,
  Megaphone,
  Zap,
  Building,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/src/components/ui/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showNavigation, setShowNavigation] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slides = [
    { id: "hero", title: "Accueil" },
    { id: "problem", title: "Problématique" },
    { id: "solution", title: "Solution" },
    { id: "market-size", title: "Marché" },
    { id: "features-1", title: "Fonctionnalités" },
    { id: "revenue-model", title: "Revenus" },
    { id: "financial", title: "Projections" },
    { id: "funding", title: "Financement" },
    { id: "impact", title: "Impact" },
    { id: "mission", title: "Mission" },
    { id: "contact", title: "Contact" },
  ];

  // Revenue data for pie chart
  const revenueData = [
    { name: "Commission sur transactions", value: 60, color: "#3B82F6" },
    { name: "Abonnements premium", value: 25, color: "#8B5CF6" },
    { name: "Services à valeur ajoutée", value: 10, color: "#EC4899" },
    { name: "Publicités ciblées", value: 5, color: "#F59E0B" },
  ];

  // Financial projections data for bar chart
  const financialData = [
    { name: "Année 1", value: 6 },
    { name: "Année 2", value: 18 },
    { name: "Année 3", value: 36 },
    { name: "Année 4", value: 60 },
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

  const handleSlideChange = (direction: "prev" | "next") => {
    if (swiperRef.current) {
      if (direction === "prev") {
        swiperRef.current.slidePrev();
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <main className="h-screen w-screen overflow-hidden relative text-gray-800">
      {/* Background with elegant white theme */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%233b82f6%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.1)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.05)_0%,_transparent_60%)] pointer-events-none" />
      </div>

      {/* Navigation Toggle Button */}
      <motion.button
        onClick={() => setShowNavigation(!showNavigation)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 left-4 z-[60] glassmorphism backdrop-blur-md border border-blue-200/30 shadow-lg rounded-xl p-3 cursor-pointer"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          {showNavigation ? (
            <ChevronLeft className="h-4 w-4 text-blue-600" />
          ) : (
            <ChevronRight className="h-4 w-4 text-blue-600" />
          )}
          <Logo size="sm" showText={false} />
        </div>
      </motion.button>

      {/* Desktop Navigation Arrows */}
      {!isMobile && (
        <>
          <motion.button
            onClick={() => handleSlideChange("prev")}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 glassmorphism backdrop-blur-md border border-blue-200/30 shadow-lg rounded-full p-4 cursor-pointer group"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            disabled={activeSlide === 0}
          >
            <ChevronLeft
              className={cn(
                "h-6 w-6 transition-colors",
                activeSlide === 0
                  ? "text-gray-400"
                  : "text-blue-600 group-hover:text-blue-700"
              )}
            />
          </motion.button>

          <motion.button
            onClick={() => handleSlideChange("next")}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 glassmorphism backdrop-blur-md border border-blue-200/30 shadow-lg rounded-full p-4 cursor-pointer group"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            disabled={activeSlide === slides.length - 1}
          >
            <ChevronRight
              className={cn(
                "h-6 w-6 transition-colors",
                activeSlide === slides.length - 1
                  ? "text-gray-400"
                  : "text-blue-600 group-hover:text-blue-700"
              )}
            />
          </motion.button>
        </>
      )}

      {/* Mobile Navigation Indicators */}
      {isMobile && (
        <motion.div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 glassmorphism backdrop-blur-md border border-blue-200/30 shadow-lg rounded-full px-4 py-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <ArrowUp className="h-4 w-4 text-blue-600" />
            <span className="text-xs text-gray-600">Slide pour naviguer</span>
            <ArrowDown className="h-4 w-4 text-blue-600" />
          </div>
        </motion.div>
      )}

      {/* Slide Navigation Draggable à gauche */}
      <motion.div
        drag="y"
        dragConstraints={{
          top: 50,
          bottom:
            typeof window !== "undefined" ? window.innerHeight - 400 : 500,
        }}
        className={cn(
          "fixed top-20 left-4 z-50 glassmorphism backdrop-blur-md border border-blue-200/30 shadow-lg rounded-2xl p-4 cursor-move w-48 transition-all duration-300",
          showNavigation
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full pointer-events-none"
        )}
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: showNavigation ? 0 : -200,
          opacity: showNavigation ? 1 : 0,
        }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-200/30">
          <Logo size="sm" showText={false} />
          <span className="font-semibold text-gray-700 text-sm">
            Navigation
          </span>
        </div>

        <div className="space-y-2 max-h-80 overflow-y-auto hide-scrollbar">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "w-full text-left text-xs font-medium transition-all duration-300 px-3 py-2 rounded-lg backdrop-blur-md border relative overflow-hidden",
                activeSlide === index
                  ? "text-white bg-blue-500 border-blue-400 shadow-md"
                  : "text-gray-700 hover:text-blue-600 border-gray-200/50 hover:border-blue-300/50 hover:bg-blue-50/50"
              )}
            >
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeSlide === index ? "bg-white" : "bg-blue-400"
                  )}
                />
                <span className="truncate">{slide.title}</span>
              </div>
              {activeSlide === index && (
                <motion.div
                  layoutId="activeSlideIndicator"
                  className="absolute inset-0 bg-blue-500 rounded-lg -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <div className="flex gap-1 mt-4 pt-3 border-t border-blue-200/30">
          <Button
            variant="outline"
            size="sm"
            className="rounded-lg border-gray-200 bg-white/70 hover:bg-blue-50 text-gray-600 hover:text-blue-600 flex-1 text-xs"
            onClick={() => handleSlideChange("prev")}
          >
            <ChevronLeft className="h-3 w-3" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-lg border-gray-200 bg-white/70 hover:bg-blue-50 text-gray-600 hover:text-blue-600 flex-1 text-xs"
            onClick={() => handleSlideChange("next")}
          >
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>
      </motion.div>

      {/* Swiper Slides */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={0}
        slidesPerView={1}
        direction="horizontal"
        mousewheel={!isMobile}
        keyboard={{ enabled: true }}
        allowTouchMove={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="h-screen w-screen"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {/* Hero Slide */}
        <SwiperSlide className="h-full w-full">
          <div className="h-full w-full flex items-center justify-center">
            <div className="container mx-auto px-6 z-10 text-center max-h-[90vh] flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8 inline-block"
                >
                  <Logo
                    size="xl"
                    showText={false}
                    animated={true}
                    className="animate-float"
                  />
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
                  TunaWork
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-lg md:text-xl mb-6 text-gray-700"
                >
                  Digitalisation du marché informel des services en RDC
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base mb-8 text-gray-600 max-w-2xl mx-auto"
                >
                  Une solution SaaS révolutionnaire qui transforme le marché
                  informel de Kinshasa en un écosystème numérique structuré,
                  créant des opportunités pour plus de 50,000 freelancers
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button
                    onClick={() => goToSlide(1)}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 text-base rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <span>Découvrir le projet</span>
                    <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Problem Slide */}
        <SwiperSlide className="h-full w-full">
          <div className="h-full w-full flex items-center justify-center">
            <div className="container mx-auto px-6 z-10 max-h-[90vh] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto h-full flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
                  Un Marché de 2,8 Milliards USD Non Exploité
                </h2>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-blue-200/30 shadow-xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Le marché des services en RDC représente une opportunité
                      économique colossale largement inexploitée.
                      <span className="font-semibold text-blue-600">
                        {" "}
                        Plus de 70% de l'économie congolaise fonctionne dans
                        l'informel
                      </span>
                      , générant annuellement plus de{" "}
                      <span className="font-bold text-blue-700">
                        2,8 milliards USD
                      </span>{" "}
                      sans aucune structuration digitale.
                    </p>

                    <div className="grid md:grid-cols-3 gap-3 mb-6">
                      <div className="bg-red-50 p-3 rounded-xl border border-red-200">
                        <div className="text-xl font-bold text-red-600">
                          78%
                        </div>
                        <div className="text-xs text-gray-600">
                          Transactions non sécurisées
                        </div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-xl border border-orange-200">
                        <div className="text-xl font-bold text-orange-600">
                          65%
                        </div>
                        <div className="text-xs text-gray-600">
                          Revenus instables
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                        <div className="text-xl font-bold text-yellow-600">
                          82%
                        </div>
                        <div className="text-xs text-gray-600">
                          Aucune visibilité digitale
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-blue-50/50 backdrop-blur-xl rounded-2xl p-4 border border-blue-100 shadow-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">
                        Clients - Une recherche frustrante
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-gray-600">
                            <strong>Pas de garantie qualité:</strong> 89% des
                            clients ont déjà été déçus par un service
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-gray-600">
                            <strong>Prix imprévisibles:</strong> Variations de
                            300% pour le même service
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-gray-600">
                            <strong>Recherche chronophage:</strong> En moyenne
                            48h pour trouver un freelancer qualifié
                          </span>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-blue-50/50 backdrop-blur-xl rounded-2xl p-4 border border-blue-100 shadow-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">
                        Freelancers - Un potentiel gâché
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-gray-600">
                            <strong>Revenus imprévisibles:</strong> 73% gagnent
                            moins de 200 USD/mois
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-gray-600">
                            <strong>Invisibilité totale:</strong> Aucune vitrine
                            digitale pour 98% des freelancers
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-gray-600">
                            <strong>Paiements risqués:</strong> 45% des
                            freelancers ne sont jamais payés intégralement
                          </span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Solution Slide */}
        <SwiperSlide className="h-full w-full">
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
                      <strong className="text-blue-600">
                        2,8 milliards USD
                      </strong>{" "}
                      en un écosystème digital sécurisé.
                    </p>

                    <div className="grid md:grid-cols-3 gap-2 mb-4">
                      <div className="bg-green-50 p-2 rounded-lg border border-green-200">
                        <div className="text-lg font-bold text-green-600">
                          $500M
                        </div>
                        <div className="text-xs text-gray-600">
                          Marché initial
                        </div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                        <div className="text-lg font-bold text-blue-600">
                          50,000+
                        </div>
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
        </SwiperSlide>

        {/* Market Size Slide */}
        <SwiperSlide className="h-full w-full">
          <div className="h-full w-full flex items-center justify-center">
            <div className="container mx-auto px-6 z-10 max-h-[90vh] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto h-full flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
                  Un Marché de 2,8 Milliards USD
                </h2>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-blue-200/30 shadow-xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Le marché congolais représente une opportunité
                      exceptionnelle avec
                      <strong className="text-blue-600">
                        {" "}
                        84 millions d'habitants
                      </strong>{" "}
                      et une économie de
                      <strong className="text-blue-700">
                        {" "}
                        55 milliards USD
                      </strong>
                      , dont 70% restent dans l'informel.
                    </p>

                    <div className="grid md:grid-cols-4 gap-3 mb-6">
                      <div className="bg-green-50 p-3 rounded-xl border border-green-200">
                        <div className="text-xl font-bold text-green-600">
                          $2.8B
                        </div>
                        <div className="text-xs text-gray-600">
                          Marché total (TAM)
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                        <div className="text-xl font-bold text-blue-600">
                          $850M
                        </div>
                        <div className="text-xs text-gray-600">
                          Marché serviceable (SAM)
                        </div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
                        <div className="text-xl font-bold text-purple-600">
                          $280M
                        </div>
                        <div className="text-xs text-gray-600">
                          Marché atteignable (SOM)
                        </div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-xl border border-orange-200">
                        <div className="text-xl font-bold text-orange-600">
                          15%
                        </div>
                        <div className="text-xs text-gray-600">
                          Croissance annuelle
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      {
                        category: "IT & Digital",
                        market: "$420M",
                        growth: "+35%",
                        icon: Smartphone,
                      },
                      {
                        category: "Design & Créatif",
                        market: "$280M",
                        growth: "+28%",
                        icon: ImageIcon,
                      },
                      {
                        category: "Marketing",
                        market: "$350M",
                        growth: "+32%",
                        icon: TrendingUp,
                      },
                      {
                        category: "Services Pro",
                        market: "$650M",
                        growth: "+22%",
                        icon: Users,
                      },
                    ].map((segment, index) => (
                      <motion.div
                        key={segment.category}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center bg-blue-50/50 p-4 rounded-xl shadow-md border border-blue-100"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg">
                          <segment.icon className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                          {segment.category}
                        </h4>
                        <p className="text-lg font-bold text-blue-600 mb-1">
                          {segment.market}
                        </p>
                        <p className="text-green-600 text-xs font-medium">
                          {segment.growth} / an
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Features Slide */}
        <SwiperSlide className="h-full w-full">
          <div className="h-full w-full flex items-center justify-center">
            <div className="container mx-auto px-6 z-10 max-h-[90vh] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto h-full flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
                  Fonctionnalités Clés
                </h2>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-blue-200/30 shadow-xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed">
                      TunaWork sera accessible depuis n'importe quel appareil,
                      offrant une expérience utilisateur fluide et cohérente sur
                      ordinateur et smartphone.
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        icon: Search,
                        title: "Recherche Avancée",
                        description:
                          "Recherche par compétences, localisation, tarifs et disponibilité avec filtres personnalisés.",
                      },
                      {
                        icon: MessageSquare,
                        title: "Messagerie Intégrée",
                        description:
                          "Chat en temps réel pour faciliter la communication. Partage de fichiers et suivi des conversations.",
                      },
                      {
                        icon: Star,
                        title: "Système d'Avis",
                        description:
                          "Évaluations et commentaires détaillés après chaque mission. Notation sur plusieurs critères.",
                      },
                      {
                        icon: ImageIcon,
                        title: "Portfolio",
                        description:
                          "Espace personnalisé pour présenter les réalisations. Galerie de projets avec témoignages.",
                      },
                      {
                        icon: Activity,
                        title: "Fil d'Actualités",
                        description:
                          "Publications des travaux récents et mises à jour de statut. Suivi des freelancers.",
                      },
                      {
                        icon: Shield,
                        title: "Protection Transactions",
                        description:
                          "Système d'escrow pour sécuriser les paiements. Libération des fonds après validation.",
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-blue-50/50 backdrop-blur-xl rounded-xl p-4 border border-blue-100 shadow-lg"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 shadow-lg">
                          <feature.icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-sm font-semibold mb-2 text-gray-800">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Revenue Model Slide */}
        <SwiperSlide className="h-full w-full">
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
                  Modèle de Revenus Diversifié
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
                      Génération de revenus par{" "}
                      <strong className="text-blue-600">
                        4 streams principaux
                      </strong>
                      , avec un objectif de{" "}
                      <strong className="text-blue-700">$50M de GMV</strong> la
                      première année.
                    </p>

                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                        <div className="text-lg font-bold text-green-600 mb-1">
                          $50M
                        </div>
                        <div className="text-xs text-gray-600">
                          GMV cible Année 1
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <div className="text-lg font-bold text-blue-600 mb-1">
                          12%
                        </div>
                        <div className="text-xs text-gray-600">
                          Take Rate moyen
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-gray-800 text-center mb-3">
                        Sources de Revenus
                      </h3>
                      {[
                        {
                          name: "Commission transactions",
                          percentage: "60%",
                          projection: "$3.6M",
                        },
                        {
                          name: "Abonnements premium",
                          percentage: "25%",
                          projection: "$1.5M",
                        },
                        {
                          name: "Services à valeur ajoutée",
                          percentage: "10%",
                          projection: "$600K",
                        },
                        {
                          name: "Publicités ciblées",
                          percentage: "5%",
                          projection: "$300K",
                        },
                      ].map((revenue, index) => (
                        <div
                          key={revenue.name}
                          className="p-2 bg-blue-50 rounded-lg border border-blue-100"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-medium text-gray-800">
                              {revenue.name}
                            </span>
                            <div className="flex gap-2">
                              <span className="text-blue-600 font-bold text-xs">
                                {revenue.percentage}
                              </span>
                              <span className="text-green-600 font-medium text-xs">
                                {revenue.projection}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col justify-center">
                      <h3 className="text-base font-semibold text-gray-800 text-center mb-3">
                        Répartition
                      </h3>
                      <div className="h-32 mb-3">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={revenueData}
                              cx="50%"
                              cy="50%"
                              innerRadius={20}
                              outerRadius={50}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {revenueData.map((entry, index) => (
                                <Cell key={index} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="bg-green-50 p-2 rounded-lg border border-green-100 text-center">
                        <div className="text-xs text-gray-600">
                          Revenue Run Rate
                        </div>
                        <div className="text-sm font-semibold text-green-600">
                          $500K / mois
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Financial Projections Slide */}
        <SwiperSlide className="h-full w-full">
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
                  Projections Financières
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
                      Croissance exponentielle avec un business model scalable :
                      <strong className="text-blue-600">
                        {" "}
                        profitabilité dès l'année 2
                      </strong>
                      .
                    </p>

                    <div className="grid md:grid-cols-4 gap-2 mb-4">
                      <div className="bg-green-50 p-2 rounded-lg border border-green-200">
                        <div className="text-lg font-bold text-green-600">
                          $6M
                        </div>
                        <div className="text-xs text-gray-600">
                          Revenus Année 1
                        </div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                        <div className="text-lg font-bold text-blue-600">
                          $60M
                        </div>
                        <div className="text-xs text-gray-600">
                          Revenus Année 4
                        </div>
                      </div>
                      <div className="bg-purple-50 p-2 rounded-lg border border-purple-200">
                        <div className="text-lg font-bold text-purple-600">
                          35%
                        </div>
                        <div className="text-xs text-gray-600">
                          Marge EBITDA
                        </div>
                      </div>
                      <div className="bg-orange-50 p-2 rounded-lg border border-orange-200">
                        <div className="text-lg font-bold text-orange-600">
                          $15M
                        </div>
                        <div className="text-xs text-gray-600">Série A</div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-base font-semibold mb-3 text-gray-800 text-center">
                        Croissance des Revenus
                      </h3>
                      <div className="h-32 mb-3">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={financialData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip
                              formatter={(value) => [`$${value}M`, "Revenus"]}
                            />
                            <Bar dataKey="value" fill="#3B82F6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                          <span className="text-gray-600 text-xs">
                            CAGR 4 ans
                          </span>
                          <span className="font-bold text-green-600 text-xs">
                            185%
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                          <span className="text-gray-600 text-xs">
                            Break-even
                          </span>
                          <span className="font-bold text-blue-600 text-xs">
                            Mois 18
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-3 text-gray-800 text-center">
                        Métriques Clés
                      </h3>
                      <div className="space-y-2">
                        {[
                          {
                            year: "Année 1",
                            gmv: "$50M",
                            users: "5K",
                            margin: "-20%",
                          },
                          {
                            year: "Année 2",
                            gmv: "$150M",
                            users: "15K",
                            margin: "5%",
                          },
                          {
                            year: "Année 3",
                            gmv: "$300M",
                            users: "35K",
                            margin: "22%",
                          },
                          {
                            year: "Année 4",
                            gmv: "$500M",
                            users: "65K",
                            margin: "35%",
                          },
                        ].map((year, index) => (
                          <div
                            key={year.year}
                            className="p-2 bg-blue-50 rounded-lg border border-blue-100"
                          >
                            <div className="flex justify-between items-center mb-1">
                              <h4 className="font-semibold text-gray-800 text-xs">
                                {year.year}
                              </h4>
                              <span
                                className={`font-bold text-xs ${
                                  year.margin.startsWith("-")
                                    ? "text-red-600"
                                    : "text-green-600"
                                }`}
                              >
                                {year.margin}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <div className="text-gray-600">GMV</div>
                                <div className="font-medium text-blue-600">
                                  {year.gmv}
                                </div>
                              </div>
                              <div>
                                <div className="text-gray-600">Users</div>
                                <div className="font-medium text-purple-600">
                                  {year.users}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Funding Slide */}
        <SwiperSlide className="h-full w-full">
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
                  Opportunités de Financement
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
                      Pour transformer notre vision en réalité et capturer ce
                      marché de{" "}
                      <strong className="text-blue-600">
                        2,8 milliards USD
                      </strong>
                      , nous proposons{" "}
                      <strong className="text-green-600">
                        différents niveaux d'investissement
                      </strong>{" "}
                      adaptés à tous les profils, à partir de{" "}
                      <strong className="text-green-600">4.000 USD</strong>.
                    </p>

                    <div className="grid md:grid-cols-4 gap-2 mb-4">
                      <div className="bg-green-50 p-2 rounded-lg border border-green-200">
                        <div className="text-lg font-bold text-green-600">
                          $4K+
                        </div>
                        <div className="text-xs text-gray-600">
                          Investissement minimal
                        </div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                        <div className="text-lg font-bold text-blue-600">
                          Flexible
                        </div>
                        <div className="text-xs text-gray-600">
                          Montants adaptés
                        </div>
                      </div>
                      <div className="bg-purple-50 p-2 rounded-lg border border-purple-200">
                        <div className="text-lg font-bold text-purple-600">
                          ROI 300%+
                        </div>
                        <div className="text-xs text-gray-600">
                          Retour attendu
                        </div>
                      </div>
                      <div className="bg-orange-50 p-2 rounded-lg border border-orange-200">
                        <div className="text-lg font-bold text-orange-600">
                          3-5 ans
                        </div>
                        <div className="text-xs text-gray-600">
                          Horizon sortie
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h3 className="text-base font-semibold text-gray-800 text-center mb-3">
                        Niveaux d'Investissement
                      </h3>
                      {[
                        {
                          tier: "Partenaire Fondateur",
                          amount: "$50K+",
                          equity: "5-15%",
                          icon: Award,
                          benefits:
                            "Conseil d'administration, décisions stratégiques",
                          priority: "VIP",
                        },
                        {
                          tier: "Investisseur Principal",
                          amount: "$20K+",
                          equity: "2-5%",
                          icon: TrendingUp,
                          benefits: "Rapports mensuels, accès privilégié",
                          priority: "Premium",
                        },
                        {
                          tier: "Investisseur Actif",
                          amount: "$10K+",
                          equity: "1-2%",
                          icon: Users,
                          benefits: "Rapports trimestriels, événements",
                          priority: "Standard",
                        },
                        {
                          tier: "Soutien Initial",
                          amount: "$4K+",
                          equity: "0.5-1%",
                          icon: Heart,
                          benefits: "Reconnaissance, mises à jour",
                          priority: "Base",
                        },
                      ].map((level, index) => (
                        <div
                          key={level.tier}
                          className={`p-2 rounded-lg border shadow-lg ${
                            level.priority === "VIP"
                              ? "bg-gold-50 border-yellow-300"
                              : level.priority === "Premium"
                              ? "bg-purple-50 border-purple-200"
                              : level.priority === "Standard"
                              ? "bg-blue-50 border-blue-200"
                              : "bg-green-50 border-green-200"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <level.icon
                                className={`w-4 h-4 ${
                                  level.priority === "VIP"
                                    ? "text-yellow-600"
                                    : level.priority === "Premium"
                                    ? "text-purple-600"
                                    : level.priority === "Standard"
                                    ? "text-blue-600"
                                    : "text-green-600"
                                }`}
                              />
                              <span className="text-xs font-medium text-gray-800">
                                {level.tier}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <span
                                className={`font-bold text-xs ${
                                  level.priority === "VIP"
                                    ? "text-yellow-600"
                                    : level.priority === "Premium"
                                    ? "text-purple-600"
                                    : level.priority === "Standard"
                                    ? "text-blue-600"
                                    : "text-green-600"
                                }`}
                              >
                                {level.amount}
                              </span>
                              <span className="text-gray-500 text-xs">
                                {level.equity}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">
                            {level.benefits}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-base font-semibold text-gray-800 text-center mb-3">
                        Utilisation des Fonds
                      </h3>
                      <div className="space-y-2">
                        {[
                          {
                            priority: "CRITIQUE",
                            category: "Marketing Digital",
                            percentage: "40%",
                            description:
                              "Acquisition utilisateurs via Google, Facebook, LinkedIn",
                          },
                          {
                            priority: "CRITIQUE",
                            category: "Infrastructure Tech",
                            percentage: "25%",
                            description:
                              "Serveurs cloud, sécurité, licences logiciels",
                          },
                          {
                            priority: "IMPORTANT",
                            category: "Équipe Core",
                            percentage: "20%",
                            description:
                              "Développeurs, designers, responsables produit",
                          },
                          {
                            priority: "IMPORTANT",
                            category: "Opérations",
                            percentage: "10%",
                            description: "Support client, bureaux, équipements",
                          },
                          {
                            priority: "UTILE",
                            category: "Légal & Compliance",
                            percentage: "5%",
                            description: "Avocats, audits, certifications",
                          },
                        ].map((use, index) => (
                          <div
                            key={use.category}
                            className="p-2 bg-gray-50 rounded-lg border border-gray-200"
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-medium text-gray-800">
                                {use.category}
                              </span>
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                                    use.priority === "CRITIQUE"
                                      ? "bg-red-100 text-red-700"
                                      : use.priority === "IMPORTANT"
                                      ? "bg-orange-100 text-orange-700"
                                      : "bg-yellow-100 text-yellow-700"
                                  }`}
                                >
                                  {use.priority}
                                </span>
                                <span className="font-bold text-blue-600 text-xs">
                                  {use.percentage}
                                </span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600">
                              {use.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white text-center">
                        <h4 className="text-sm font-semibold mb-1">
                          💰 INVESTISSEMENT OUVERT
                        </h4>
                        <p className="text-xs opacity-90">
                          Opportunité unique de marché $2.8B USD
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Impact Slide */}
        <SwiperSlide className="h-full w-full">
          <div className="h-full w-full flex items-center justify-center">
            <div className="container mx-auto px-6 z-10 max-h-[90vh] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto h-full flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
                  Impact Social et Économique
                </h2>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-blue-200/30 shadow-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                        Impact sur l'Emploi
                      </h3>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Création d'Emplois",
                            value: "50,000+",
                            description: "Freelancers actifs sur la plateforme",
                          },
                          {
                            title: "Revenus Moyens",
                            value: "$2,500",
                            description: "Par mois pour les freelancers actifs",
                          },
                          {
                            title: "Taux d'Activité",
                            value: "85%",
                            description:
                              "Des freelancers travaillent régulièrement",
                          },
                        ].map((stat, index) => (
                          <div
                            key={stat.title}
                            className="p-4 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-sm font-medium text-gray-800">
                                {stat.title}
                              </h4>
                              <span className="text-blue-600 font-semibold">
                                {stat.value}
                              </span>
                            </div>
                            <p className="text-gray-600 text-xs">
                              {stat.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                        Impact Économique
                      </h3>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Volume d'Affaires",
                            value: "$100M",
                            description: "Transactions annuelles",
                          },
                          {
                            title: "Croissance",
                            value: "+150%",
                            description: "Croissance annuelle",
                          },
                          {
                            title: "Satisfaction",
                            value: "95%",
                            description: "Des utilisateurs satisfaits",
                          },
                        ].map((stat, index) => (
                          <div
                            key={stat.title}
                            className="p-4 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-sm font-medium text-gray-800">
                                {stat.title}
                              </h4>
                              <span className="text-blue-600 font-semibold">
                                {stat.value}
                              </span>
                            </div>
                            <p className="text-gray-600 text-xs">
                              {stat.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    {[
                      {
                        icon: Globe,
                        title: "Couverture Géographique",
                        description:
                          "20+ pays avec une forte concentration en Afrique",
                      },
                      {
                        icon: Users,
                        title: "Communauté Active",
                        description:
                          "100,000+ utilisateurs actifs mensuellement",
                      },
                      {
                        icon: TrendingUp,
                        title: "Croissance Soutenue",
                        description: "15% de croissance mensuelle moyenne",
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-blue-50/50 backdrop-blur-xl rounded-xl p-4 border border-blue-100 shadow-lg text-center"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 shadow-lg mx-auto">
                          <feature.icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-sm font-semibold mb-2 text-gray-800">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Mission Slide */}
        <SwiperSlide className="h-full w-full">
          <div className="h-full w-full flex items-center justify-center">
            <div className="container mx-auto px-6 z-10 max-h-[90vh] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto h-full flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
                  Notre Mission
                </h2>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-blue-200/30 shadow-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        Vision
                      </h3>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        TunaWork aspire à devenir la plateforme de référence
                        pour le travail indépendant en Afrique, en connectant
                        les talents locaux aux opportunités mondiales.
                      </p>
                      <div className="space-y-3">
                        {[
                          {
                            icon: Target,
                            title: "Excellence",
                            description:
                              "Promouvoir l'excellence dans le travail indépendant",
                          },
                          {
                            icon: Heart,
                            title: "Impact Social",
                            description: "Créer un impact social positif",
                          },
                          {
                            icon: Globe,
                            title: "Ouverture",
                            description:
                              "Faciliter l'accès aux marchés internationaux",
                          },
                        ].map((value, index) => (
                          <div
                            key={value.title}
                            className="flex items-start gap-3 p-3 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center border border-blue-500/20 shadow-lg">
                              <value.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-800 mb-1">
                                {value.title}
                              </h4>
                              <p className="text-gray-600 text-xs">
                                {value.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        Objectifs
                      </h3>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Développement Local",
                            description: "50,000 emplois créés d'ici 2025",
                            progress: 75,
                          },
                          {
                            title: "Formation",
                            description: "10,000 freelancers formés",
                            progress: 60,
                          },
                          {
                            title: "Expansion",
                            description: "30 pays africains d'ici 2026",
                            progress: 45,
                          },
                        ].map((goal, index) => (
                          <div
                            key={goal.title}
                            className="p-4 bg-blue-50/50 backdrop-blur-md rounded-xl border border-blue-100 shadow-lg"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-sm font-medium text-gray-800">
                                {goal.title}
                              </h4>
                              <span className="text-blue-600 font-semibold text-sm">
                                {goal.progress}%
                              </span>
                            </div>
                            <p className="text-gray-600 text-xs mb-3">
                              {goal.description}
                            </p>
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${goal.progress}%` }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Contact Slide */}
        <SwiperSlide className="h-full w-full">
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
                      Nous espérons que cette présentation vous a donné un
                      aperçu complet de{" "}
                      <strong className="text-blue-600">TunaWork</strong> et de
                      son potentiel à transformer l'économie numérique en RDC.
                    </p>

                    <p className="text-base text-gray-600 mb-6">
                      Nous serions ravis de discuter de ce projet avec vous et
                      d'explorer les opportunités de collaboration.
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
                            <p className="text-green-600 text-xs">
                              +243 123 456 789
                            </p>
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
                            title: "Opportunités d'investissement",
                            description: "Rejoignez notre aventure",
                            icon: TrendingUp,
                          },
                        ].map((step, index) => (
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
                          Ensemble, digitalisons l'Afrique !
                        </h4>
                        <p className="text-xs opacity-90">
                          TunaWork - L'avenir du travail en RDC
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
