import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BookingForm } from "@/components/BookingForm";
import { MapFooter } from "@/components/MapFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-ocean-dark text-gray-100 selection:bg-neon-orange selection:text-white">
      {/* Sticky glassmorphic Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Animated Parallax Hero Section */}
        <HeroSection />

        {/* Pricing Options */}
        <PricingSection />

        {/* Why Choose Us Grid */}
        <WhyChooseUs />

        {/* Interactive Booking Form */}
        <BookingForm />
      </main>

      {/* Footer with Google Map and WhatsApp CTA */}
      <MapFooter />
    </div>
  );
}

