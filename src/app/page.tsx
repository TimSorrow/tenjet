import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BookingForm } from "@/components/BookingForm";
import { MapFooter } from "@/components/MapFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-gray-100 selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden relative">
      {/* Fixed Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="https://storage.googleapis.com/aida-public/animations/22_jet_ski_wake.mp4" type="video/mp4" />
      </video>

      {/* Fixed Ambient Gradient Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 to-secondary-container/20 z-0 pointer-events-none" />

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

          {/* Interactive Booking Form */}
          <BookingForm />
        </main>

        {/* Footer with Google Map and WhatsApp CTA */}
        <MapFooter />
      </div>
    </div>
  );
}

