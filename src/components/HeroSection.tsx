"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";

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
            className="group relative flex items-center justify-center gap-3 px-12 py-6 rounded-3xl font-heading font-black text-xl sm:text-2xl tracking-widest uppercase text-white bg-coral-glow hover:bg-[#e83e44] shadow-[0_8px_30px_rgba(252,93,93,0.5)] hover:shadow-[0_8px_40px_rgba(252,93,93,0.75)] transform hover:-translate-y-1 transition-all duration-300 select-none"
          >
            <Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:scale-110 transition-transform" />
            {t.hero.cta}
            {/* Highlight flash animation */}
            <span className="absolute inset-0 w-full h-full rounded-3xl bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </a>
        </motion.div>
      </div>

      {/* Jet Ski Parallax Image Layer (moved further left to prevent edge-clipping) */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-[6%] right-[8%] sm:right-[16%] lg:right-[24%] w-[300px] sm:w-[460px] lg:w-[630px] h-[200px] sm:h-[310px] lg:h-[430px] z-25 pointer-events-none select-none opacity-85 sm:opacity-100"
      >
        <Image
          src="/images/jetski-cutout-v2.png"
          alt="Jet Ski Action Cutout"
          fill
          priority
          sizes="(max-w-630px) 100vw, 630px"
          className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
        />
        {/* Subtle Water Splash Backlight */}
        <div className="absolute inset-0 bg-radial-gradient(ellipse at center, rgba(6,182,212,0.12) 0%, transparent 70%) pointer-events-none" />
      </motion.div>

      {/* Layered Animated Wave SVGs at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] sm:h-[90px] translate-y-[2px]"
        >
          {/* Wave Layer 1 (Deepest/Slowest) */}
          <path
            d="M985.6,38.6C1024.1,22.2,1069,11.8,1125,18.8c58,7.2,75,41.4,75,41.4V120H0V60.2c0,0,29.8-31.5,91.8-21.5c62,10,123.3,42.5,177.3,42.5c54,0,105.7-38.3,161.7-41.5c56-3.2,108.3,31.2,162.3,35c54,3.8,111.7-27.5,165.7-26.2C812.8,49.8,947.1,55,985.6,38.6z"
            className="fill-[#030814] opacity-35"
          />
          {/* Wave Layer 2 (Middle/Floating) */}
          <path
            d="M0,80c120,40,240,40,360,0s240-40,360,0s240,40,360,0s240-40,360,0v40H0V80z"
            className="fill-[#030814] opacity-50"
          />
          {/* Wave Layer 3 (Top/Crisp Border) */}
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,18,83.66,26.83,149.57,47.15,220.66,62.26,321.39,56.44z"
            className="fill-[#030814]"
          />
        </svg>
      </div>
    </section>
  );
};
