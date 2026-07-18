"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Check, Clock, ShieldCheck } from "lucide-react";

export const PricingSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="pricing" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-cyan-600/5 to-transparent rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[500px] h-[500px] bg-gradient-to-br from-coral-glow/5 to-transparent rounded-full filter blur-[120px] pointer-events-none" />

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
            {t.pricing.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-sm sm:text-base text-white font-semibold px-6 py-3 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md max-w-3xl mt-4"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 mb-16"
        >
          {t.pricing.pricingOptions.map((option, idx) => {
            const isPopular = idx === 1; // Double is most popular
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 liquid-glass !overflow-visible ${
                  isPopular
                    ? "border-2 border-water-blue shadow-[0_15px_40px_rgba(0,141,253,0.15)] scale-100 md:scale-105 z-20"
                    : "hover:border-white/20 shadow-2xl z-10"
                }`}
              >
                {/* Popular Tag */}
                {isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-heading font-extrabold text-xs tracking-wider uppercase text-white bg-water-blue shadow-[0_0_15px_rgba(0,141,253,0.5)] z-30">
                    {t.pricing.popular}
                  </span>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/30">
                      <Clock className="h-3.5 w-3.5" />
                      {option.duration}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-white mb-2 uppercase tracking-wide">
                    {option.title}
                  </h3>

                  <p className="text-white/80 text-sm font-medium leading-relaxed mb-6">
                    {option.desc}
                  </p>

                  {/* Pricing Details */}
                  <div className="border-y border-white/5 py-6 mb-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading font-black text-4xl sm:text-5xl text-white">
                        {option.price}
                      </span>
                      {option.oldPrice && (
                        <span className="font-heading font-semibold text-lg sm:text-xl text-white/45 line-through">
                          {option.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <a
                  href={`#booking?duration=${encodeURIComponent(option.duration)}`}
                  className={`w-full text-center py-3 sm:py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
                    isPopular
                      ? "btn-glitch select-none"
                      : "text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transform hover:-translate-y-0.5"
                  }`}
                  data-text={isPopular ? t.pricing.bookBtn : undefined}
                >
                  <span className={isPopular ? "z-10" : ""}>{t.pricing.bookBtn}</span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Included List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto liquid-glass rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-cyan-glow" />
                {t.pricing.includesTitle}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto flex-1 md:pl-8 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0">
              {t.pricing.includesItems.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-gray-300 font-medium">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">
                    <Check className="h-3 w-3 text-cyan-400" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
