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
      {/* Centered CTA Button */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <a
            href="#booking"
            className="group relative flex items-center justify-center gap-3 px-12 py-6 rounded-3xl font-heading font-black text-xl sm:text-2xl tracking-widest uppercase text-white bg-water-blue hover:bg-water-blue-hover shadow-[0_8px_30px_rgba(0,141,253,0.45)] hover:shadow-[0_8px_40px_rgba(0,141,253,0.7)] transform hover:-translate-y-1 transition-all duration-300 select-none"
          >
            <Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:scale-110 transition-transform" />
            {t.hero.cta}
            {/* Highlight flash animation */}
            <span className="absolute inset-0 w-full h-full rounded-3xl bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
