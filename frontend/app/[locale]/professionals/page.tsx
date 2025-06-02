"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Navbar } from "@/src/components/navigation/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { SearchFilters } from "@/src/components/professionals/SearchFilters";
import { allFreelancers } from "@/src/lib/data/allFreelancers";
import { FreelancerGrid } from "@/src/components/professionals/FreelancerGrid";
import HeroFormation from "@/src/components/heroFormation";

export default function ProfessionalsPage() {
  const t = useTranslations("professionals");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedCity, setSelectedCity] = useState("Toutes");
  const [sortBy, setSortBy] = useState("rating");

  // Fonction de filtrage et tri
  const filteredAndSortedFreelancers = useMemo(() => {
    let filtered = allFreelancers.filter((freelancer) => {
      const matchesSearch =
        freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        freelancer.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "Tous" || freelancer.category === selectedCategory;

      const matchesCity =
        selectedCity === "Toutes" || freelancer.city === selectedCity;

      return matchesSearch && matchesCategory && matchesCity;
    });

    // Tri
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "projects":
          return b.completedProjects - a.completedProjects;
        case "price_low":
          return (
            parseFloat(a.hourlyRate.split("-")[0]) -
            parseFloat(b.hourlyRate.split("-")[0])
          );
        case "price_high":
          return (
            parseFloat(b.hourlyRate.split("-")[1]) -
            parseFloat(a.hourlyRate.split("-")[1])
          );
        case "recent":
          return (
            new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime()
          );
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedCity, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Tous");
    setSelectedCity("Toutes");
    setSortBy("rating");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <HeroFormation/>
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%233b82f6%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" /> */}

        {/* Floating Elements */}
        {/* <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300 dark:bg-blue-700 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400 dark:bg-blue-600 rounded-full opacity-15 animate-pulse delay-2000"></div> */}

        {/* <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>
        </div> */}
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <SearchFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              sortBy={sortBy}
              setSortBy={setSortBy}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <p className="text-gray-600 dark:text-gray-300">
                {t("results_count", {
                  count: filteredAndSortedFreelancers.length,
                })}
              </p>
            </motion.div>

            {/* Freelancers Grid */}
            <FreelancerGrid freelancers={filteredAndSortedFreelancers} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
