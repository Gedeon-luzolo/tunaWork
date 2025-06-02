"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Données des témoignages pour la page d'accueil
const testimonials = [
  {
    id: 1,
    name: "Marie Nsimba",
    role: "Directrice Marketing",
    company: "Congo Digital",
    rating: 5,
    content:
      "TunaWork m'a permis de trouver des freelancers exceptionnels pour mes projets. La qualité du travail et le professionnalisme sont remarquables !",
    image: "/api/placeholder/80/80",
    location: "Kinshasa, RDC",
  },
  {
    id: 2,
    name: "Jean-Claude Mbuyi",
    role: "Développeur Full Stack",
    rating: 5,
    content:
      "Grâce à TunaWork, j'ai pu développer ma carrière de freelancer et travailler avec des clients internationaux. C'est un game-changer !",
    image: "/api/placeholder/80/80",
    location: "Lubumbashi, RDC",
  },
  {
    id: 3,
    name: "Sarah Kabongo",
    role: "CEO StartupRDC",
    rating: 5,
    content:
      "J'ai lancé ma startup avec l'aide de freelancers trouvés sur TunaWork. De la création du logo au développement, tout s'est passé parfaitement.",
    image: "/api/placeholder/80/80",
    location: "Goma, RDC",
  },
  {
    id: 4,
    name: "Patrick Tshisekedi",
    role: "Graphiste",
    rating: 5,
    content:
      "TunaWork a transformé ma façon de travailler. J'ai accès à des projets variés et je peux me concentrer sur ce que je fais de mieux.",
    image: "/api/placeholder/80/80",
    location: "Kinshasa, RDC",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Témoignages
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ce que disent nos utilisateurs qui font confiance à TunaWork
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glassmorphism rounded-3xl p-8 lg:p-12 backdrop-blur-md border border-white/20 shadow-2xl"
          >
            {/* Quote Content */}
            <div className="text-center mb-8">
              <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < currentTestimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <span className="text-lg font-bold text-blue-600">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="text-center">
                <div className="font-semibold text-gray-900 dark:text-white text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {currentTestimonial.role}
                  {currentTestimonial.company && (
                    <span> • {currentTestimonial.company}</span>
                  )}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {currentTestimonial.location}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
