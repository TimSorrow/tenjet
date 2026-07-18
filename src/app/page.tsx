import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { PricingSection } from "@/components/PricingSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { MapFooter } from "@/components/MapFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-gray-100 selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden relative">
      {/* Dynamic Background Video cross-fader */}
      <BackgroundVideo />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky glassmorphic Navbar */}
        <Navbar />

        <main className="flex-grow">
          {/* Animated Parallax Hero Section */}
          <HeroSection />

          {/* Pricing Options */}
          <PricingSection />

          {/* Why Choose Us Grid */}
          <WhyChooseUs />
        </main>

        {/* Footer with Google Map and WhatsApp CTA */}
        <MapFooter />
      </div>
    </div>
  );
}

