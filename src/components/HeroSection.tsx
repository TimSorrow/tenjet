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
            className="group relative flex items-center justify-center gap-2 px-6 py-4 sm:px-10 sm:py-5 rounded-2xl font-heading font-bold text-xs sm:text-base tracking-widest uppercase text-white bg-gradient-to-r from-water-blue to-[#00a2ff] hover:from-water-blue-hover hover:to-water-blue border border-white/10 hover:border-white/20 shadow-[0_8px_25px_rgba(0,141,253,0.35)] hover:shadow-[0_8px_35px_rgba(0,141,253,0.55)] transform hover:-translate-y-0.5 transition-all duration-300 select-none"
          >
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:scale-110 transition-transform" />
            {t.hero.cta}
            {/* Highlight flash animation */}
            <span className="absolute inset-0 w-full h-full rounded-2xl bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
