"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Flame, Compass, BadgeDollarSign, Anchor } from "lucide-react";

export const WhyChooseUs = () => {
  const { t } = useTranslation();

  const cards = [
    {
      title: t.whyUs.card1Title,
      desc: t.whyUs.card1Desc,
      icon: Flame,
      colorClass: "text-coral-glow bg-coral-glow/10 border-coral-glow/30",
    },
    {
      title: t.whyUs.card2Title,
      desc: t.whyUs.card2Desc,
      icon: Anchor,
      colorClass: "text-cyan-glow bg-cyan-glow/10 border-cyan-glow/30",
    },
    {
      title: t.whyUs.card3Title,
      desc: t.whyUs.card3Desc,
      icon: BadgeDollarSign,
      colorClass: "text-cyan-glow bg-cyan-glow/10 border-cyan-glow/30",
    },
    {
      title: t.whyUs.card4Title,
      desc: t.whyUs.card4Desc,
      icon: Compass,
      colorClass: "text-purple-400 bg-purple-950/40 border-purple-800/30",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 35 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 18 },
    },
  };

  return (
    <section id="why-us" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative ambient glowing orb */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-gradient-to-br from-cyan-600/5 to-transparent rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4"
          >
            {t.whyUs.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400 font-medium"
          >
            {t.whyUs.subtitle}
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative liquid-glass rounded-3xl p-8 hover:border-white/20 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-glow to-coral-glow group-hover:w-full transition-all duration-500" />
                
                <div className="flex gap-6 items-start">
                  {/* Animated Icon Container */}
                  <div className={`p-4 rounded-2xl border flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${card.colorClass}`}>
                    <Icon className="h-7 w-7 animate-float" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3 tracking-wide uppercase group-hover:text-cyan-glow transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 font-medium text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
