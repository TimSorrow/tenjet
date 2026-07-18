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
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24 px-4 max-w-6xl mx-auto w-full">
        {/* Left: Text Stack */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col text-center md:text-left gap-1 sm:gap-2 select-none"
        >
          <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-widest text-white leading-none">
            JET SKI
          </h1>
          <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-widest text-cyan-glow leading-none">
            TOURS
          </h2>
          <h3 className="font-heading font-black text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest text-gray-300 leading-none">
            PUERTO COLON
          </h3>
          <h4 className="font-heading font-black text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest text-water-blue leading-none">
            TENERIFE
          </h4>
        </motion.div>

        {/* Right: CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex-shrink-0"
        >
          <a
            href="https://wa.me/34665519742?text=Hi,%20i%20would%20like%20to%20rent%20a%20jetski"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-glitch px-8 py-5 sm:px-12 sm:py-6 text-sm sm:text-lg select-none"
            data-text={t.hero.cta}
          >
            <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white z-10" />
            <span className="z-10">{t.hero.cta}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
