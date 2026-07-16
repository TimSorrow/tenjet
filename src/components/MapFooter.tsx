"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Phone, MessageCircle, Mail, MapPin, Waves } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const MapFooter = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
    { name: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  ];

  return (
    <footer className="bg-transparent border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Wave Overlay */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 opacity-5">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]">
          <path d="M0,0V120H1200V0C1023.2,79.1,802.8,84.1,600,60C383.6,34.2,165.7,35,0,0Z" className="fill-white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Footer Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="bg-coral-glow p-1.5 rounded-lg shadow-[0_0_10px_rgba(252,93,93,0.3)]">
                <Waves className="h-5 w-5 text-white group-hover:skew-x-[-10deg] transition-transform duration-200" />
              </div>
              <span className="font-heading font-black text-lg tracking-wider text-white uppercase italic">
                NEON <span className="text-cyan-glow">WAVE</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all transform hover:-translate-y-0.5"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links & Info */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white mb-5">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    {t.nav.pricing}
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="text-gray-400 hover:text-white transition-colors">
                    {t.nav.whyUs}
                  </a>
                </li>
                <li>
                  <a href="#booking" className="text-gray-400 hover:text-white transition-colors">
                    {t.nav.booking}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white mb-5">
                {t.footer.contact}
              </h4>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan-glow flex-shrink-0" />
                  <a href="tel:+34600123456" className="hover:text-white transition-colors">
                    +34 600 123 456
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <a
                    href="https://wa.me/34600123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Support
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <a href="mailto:info@oceanrush.es" className="hover:text-white transition-colors">
                    info@oceanrush.es
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Cancellation Policy Detail */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white mb-5">
              {t.footer.policyTitle}
            </h4>
            <p className="text-gray-400 text-xs font-semibold leading-relaxed bg-white/2.5 border border-white/5 rounded-2xl p-4">
              {t.footer.policyText}
            </p>
          </div>

        </div>

        {/* Embedded Map Section */}
        <div className="w-full mb-12">
          <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white mb-5 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-cyan-glow" />
            {t.footer.location}
          </h4>
          <div className="relative w-full h-[280px] sm:h-[350px] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.849132104523!2d-16.736021623724613!3d28.078972875971434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a97de015c92cb%3A0x6b7725902096bb79!2sPuerto%20Col%C3%B3n!5e0!3m2!1sen!2ses!4v1710000000000!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Puerto Colón Marina"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
            {/* Float Address Card Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/85 border border-white/5 backdrop-blur-md p-4 rounded-2xl max-w-xs shadow-2xl pointer-events-none">
              <span className="block font-heading font-bold text-xs uppercase tracking-wider text-cyan-400 mb-1">
                Marina Base
              </span>
              <span className="block text-xs font-semibold text-gray-300">
                {t.footer.address}
              </span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Bottom Rights */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-semibold text-gray-500">
          <span>
            © {new Date().getFullYear()} OCEANRUSH. {t.footer.allRights}
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
