"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroFormation() {
  const t = useTranslations("professionals");
  return (
    <section className="relative w-full h-[70vh] overflow-hidden ">
      <div className="absolute inset-0 w-full h-[70vh]">
        <Image
          src="/images/female.jpg"
          alt="Hero Image"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-black/50" />

      {/* Content */}
      <div className="container relative h-full px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col justify-center h-full max-w-2xl mt-10 text-center lg:text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("title")}
          </motion.h1>

          <motion.p
            className="mb-8 text-gray-200 text-md lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 mx-auto lg:mx-0 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="text-white bg-gradient-to-r from-blue-500 to-blue-600 group"
            >
              Chercher un freelancer
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
