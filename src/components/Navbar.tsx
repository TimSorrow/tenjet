"use client";

import React, { useState } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";

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
    <nav className="glass-navbar sticky top-0 w-full z-50 px-4 py-1 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center group py-0.5">
          <div className="relative w-[90px] h-[50px] sm:w-[108px] sm:h-[60px] transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="tenjet.club logo"
              fill
              className="object-contain"
              priority
            />
          </div>
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
            href="https://wa.me/34665519742?text=Hi,%20i%20would%20like%20to%20rent%20a%20jetski"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glitch px-5 py-2 text-xs select-none"
            data-text={t.nav.booking}
          >
            <span className="z-10">{t.nav.booking}</span>
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
                href="https://wa.me/34665519742?text=Hi,%20i%20would%20like%20to%20rent%20a%20jetski"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full btn-glitch py-3 text-xs select-none"
                data-text={t.nav.booking}
              >
                <span className="z-10">{t.nav.booking}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
