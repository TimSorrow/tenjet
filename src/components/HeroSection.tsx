"use client";

import React, { useRef } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Shield, Award, Fuel } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Setup Scroll Parallax using Framer Motion
  const { scrollY } = useScroll();
  
  // Parallax transforms tied to scroll position
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const yBg = useTransform(scrollY, [0, 800], [0, 250]);
  
  // Jet Ski glide animation: moves forward, angles up slightly, and scales up
  const xJetSki = useTransform(scrollY, [0, 1000], [0, 150]);
  const yJetSki = useTransform(scrollY, [0, 1000], [0, -40]);
  const scaleJetSki = useTransform(scrollY, [0, 1000], [1, 1.12]);
  const rotateJetSki = useTransform(scrollY, [0, 1000], [0, 6]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full h-[95vh] min-h-[750px] overflow-hidden flex items-center bg-transparent"
    >
      {/* Decorative Splash/Ocean Particle Effects in Background */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Animated ambient circular light */}
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-gradient-to-tr from-primary/20 to-transparent rounded-full filter blur-[80px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] bg-gradient-to-tr from-secondary-container/10 to-transparent rounded-full filter blur-[100px]" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-20 flex flex-col justify-center h-full pb-20">
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl text-left"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-sun-yellow bg-white/5 border border-sun-yellow/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(255,183,0,0.15)]">
            {t.hero.badge}
          </span>

          {/* Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.05] mb-6">
            {t.hero.titleStart}{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container drop-shadow-[0_2px_15px_rgba(0,186,255,0.2)]">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl mb-8">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#booking"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl font-heading font-black text-base tracking-wider uppercase text-on-primary-container bg-primary-container hover:bg-white shadow-[0_4px_25px_rgba(0,186,255,0.35)] transform hover:-translate-y-1 transition-all duration-300"
            >
              <Calendar className="h-5 w-5 text-on-primary-container group-hover:scale-110 transition-transform" />
              {t.hero.cta}
              {/* Highlight flash animation */}
              <span className="absolute inset-0 w-full h-full rounded-2xl bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </a>
          </div>
          
          <p className="text-xs text-gray-400 font-medium mt-3 flex items-center gap-1.5 px-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
            {t.hero.subcta}
          </p>
        </motion.div>
      </div>

      {/* Jet Ski Parallax Image Layer */}
      <motion.div
        style={{
          x: xJetSki,
          y: yJetSki,
          scale: scaleJetSki,
          rotate: rotateJetSki,
        }}
        className="absolute bottom-[6%] right-[-5%] sm:right-[2%] lg:right-[8%] w-[320px] sm:w-[480px] lg:w-[680px] h-[220px] sm:h-[330px] lg:h-[470px] z-25 pointer-events-none select-none"
      >
        <Image
          src="/images/jetski-cutout-v2.png"
          alt="Jet Ski Action Cutout"
          fill
          priority
          sizes="(max-w-700px) 100vw, 700px"
          className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
        />
        {/* Subtle Water Splash Backlight */}
        <div className="absolute inset-0 bg-radial-gradient(ellipse at center, rgba(6,182,212,0.15) 0%, transparent 70%) pointer-events-none" />
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

      {/* Trust Badges Bar / Quick Stats Floating Overlay */}
      <div className="absolute bottom-[60px] sm:bottom-[90px] left-0 w-full z-20 py-4 border-y border-white/5 bg-ocean-dark/40 backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center justify-center border-r border-white/5">
            <span className="font-heading font-black text-2xl text-secondary-container tracking-tight">
              {t.hero.stat1Number}
            </span>
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
              {t.hero.stat1Label}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center border-r border-white/5">
            <span className="font-heading font-black text-2xl text-primary-container tracking-tight flex items-center gap-1">
              <Award className="h-5 w-5 text-primary-container animate-float" />
              {t.hero.stat2Number}
            </span>
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
              {t.hero.stat2Label}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-heading font-black text-2xl text-primary-fixed-dim tracking-tight flex items-center gap-1">
              <Shield className="h-5 w-5 text-primary-fixed-dim" />
              {t.hero.stat3Number}
            </span>
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
              {t.hero.stat3Label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
