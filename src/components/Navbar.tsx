"use client";

import React, { useState } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Waves } from "lucide-react";

export const Navbar = () => {
  const { t, language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.pricing, href: "#pricing" },
    { name: t.nav.whyUs, href: "#why-us" },
  ];

  const handleLangToggle = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <nav className="glass-navbar sticky top-0 w-full z-50 px-4 py-3 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-neon-orange p-1.5 rounded-lg shadow-[0_0_15px_rgba(255,106,0,0.4)] group-hover:scale-110 transition-transform duration-300">
            <Waves className="h-6 w-6 text-white" />
          </div>
          <span className="font-heading font-black text-xl tracking-wider text-white bg-clip-text bg-gradient-to-r from-white to-gray-300">
            OCEAN<span className="text-neon-orange">RUSH</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold tracking-wide text-gray-300 hover:text-white transition-colors duration-200 py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-glow transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Controls & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={handleLangToggle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-all text-gray-300"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4 text-cyan-glow" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* CTA Button */}
          <a
            href="#booking"
            className="relative px-6 py-2.5 rounded-xl font-heading font-bold text-sm tracking-wider uppercase text-on-secondary bg-coral-glow hover:bg-secondary shadow-md shadow-coral-glow/30 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            {t.nav.booking}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Lang Button */}
          <button
            onClick={handleLangToggle}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border border-gray-700 text-gray-300"
          >
            <Globe className="h-3.5 w-3.5 text-cyan-glow" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full overflow-hidden border-t border-white/5 mt-3"
          >
            <div className="flex flex-col gap-4 py-4 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-gray-300 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-xl font-heading font-bold text-sm tracking-wider uppercase text-on-secondary bg-coral-glow hover:bg-secondary"
              >
                {t.nav.booking}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
