"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative w-full h-[95vh] min-h-[700px] overflow-hidden flex items-center justify-center bg-transparent"
    >
      <div className="relative z-20 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <a
            href="#booking"
            className="group btn-glitch px-6 py-4 sm:px-10 sm:py-5 text-xs sm:text-base select-none"
            data-text={t.hero.cta}
          >
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-white z-10" />
            <span className="z-10">{t.hero.cta}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
