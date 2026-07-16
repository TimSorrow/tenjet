"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Play, Flame, Award, Zap } from "lucide-react";
import Image from "next/image";

export const ShowcaseSection = () => {
  const { t } = useTranslation();

  return (
    <section id="showcase" className="py-24 bg-ocean-dark relative overflow-hidden">
      {/* Refracting Shifting Liquid Blobs in Background */}
      <div className="absolute top-[20%] left-[15%] w-[320px] h-[320px] rounded-full bg-cyan-500/10 filter blur-[90px] pointer-events-none z-0 liquid-blob" />
      <div className="absolute bottom-[20%] right-[10%] w-[420px] h-[420px] rounded-full bg-neon-orange/10 filter blur-[110px] pointer-events-none z-0 liquid-blob-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Text and Badges */}
          <div className="lg:col-span-5 space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)]"
            >
              {t.showcase.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-[1.1]"
            >
              {t.showcase.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 font-medium text-sm sm:text-base leading-relaxed"
            >
              {t.showcase.desc}
            </motion.p>

            {/* Showcase Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 pt-2"
            >
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/5 bg-white/2.5 text-xs font-semibold text-gray-300">
                <Flame className="h-4.5 w-4.5 text-neon-orange" />
                <span>{t.showcase.tag1}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/5 bg-white/2.5 text-xs font-semibold text-gray-300">
                <Zap className="h-4.5 w-4.5 text-sun-yellow" />
                <span>{t.showcase.tag2}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/5 bg-white/2.5 text-xs font-semibold text-gray-300">
                <Award className="h-4.5 w-4.5 text-green-400" />
                <span>{t.showcase.tag3}</span>
              </div>
            </motion.div>

            {/* Direct CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="#booking"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-heading font-black text-sm tracking-wider uppercase text-black bg-gradient-to-r from-sun-yellow to-neon-orange hover:from-neon-orange hover:to-sun-yellow shadow-[0_4px_20px_rgba(255,106,0,0.3)] hover:shadow-[0_4px_25px_rgba(255,106,0,0.5)] transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <Play className="h-4 w-4 fill-black text-black group-hover:scale-110 transition-transform" />
                {t.hero.cta}
              </a>
            </motion.div>
          </div>

          {/* Right Side: Liquid Glass Showcase Media Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="liquid-glass p-3.5 sm:p-5 shadow-2xl relative group transform hover:rotate-1 transition-transform duration-500">
              
              {/* Outer Glow Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-neon-orange/10 opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Inner Video Container */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-inner bg-ocean-dark">
                {/* Loop Animated WebP Jet Ski Action */}
                <Image
                  src="/images/jet-ski-wake.webp"
                  alt="Jet Ski carving circles wake loop"
                  fill
                  unoptimized
                  priority
                  sizes="(max-w-1024px) 100vw, 800px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                />
                
                {/* Visual Glass Overlay reflection */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-70 pointer-events-none" />
                
                {/* Action Play overlay badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-1.5 shadow-lg select-none">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                  Live Action Loop
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
