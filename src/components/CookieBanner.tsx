"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "@/context/LanguageContext";

export const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookie_consent");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/90 backdrop-blur-md border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300 font-medium text-center sm:text-left">
          {t.cookieBanner.message}{" "}
          <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 ml-1">
            {t.cookieBanner.policy}
          </a>
        </div>
        <button
          onClick={acceptCookies}
          className="whitespace-nowrap px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
        >
          {t.cookieBanner.accept}
        </button>
      </div>
    </div>
  );
};
