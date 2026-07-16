"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, MessageCircle, AlertTriangle } from "lucide-react";

export const BookingForm = () => {
  const { t, language } = useTranslation();
  
  // Local state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    date: "",
    time: "",
    duration: "1 hour",
    rideType: "single",
    quantity: "1",
    requests: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Pre-populate duration from URL hash if available (e.g. #booking?duration=1 hour)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes("?")) {
        const queryStr = hash.split("?")[1];
        const params = new URLSearchParams(queryStr);
        const durationParam = params.get("duration");
        if (durationParam) {
          setFormData((prev) => ({ ...prev, duration: durationParam }));
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Trigger on initial mount too
    handleHashChange();
    
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = t.booking.errors.name;
    if (!formData.phone.trim()) errors.phone = t.booking.errors.phone;
    if (!formData.date) errors.date = t.booking.errors.date;
    if (!formData.time) errors.time = t.booking.errors.time;
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1200);
  };

  // Compile WhatsApp booking redirect link
  const getWhatsAppLink = () => {
    const phoneNum = "34600123456"; // Tenerife support number (mock)
    const typeLabel = formData.rideType === "single" ? t.booking.single : t.booking.double;
    
    const message = language === "es"
      ? `¡Hola! Me gustaría reservar un tour de moto de agua en Puerto Colón:
👤 Nombre: ${formData.fullName}
📞 Teléfono: ${formData.phone}
📅 Fecha: ${formData.date}
⏰ Hora: ${formData.time}
⏱️ Duración: ${formData.duration}
🏍️ Tipo: ${typeLabel}
🔢 Cantidad: ${formData.quantity}
💬 Notas: ${formData.requests || "Ninguna"}`
      : `Hello! I would like to book a Jet Ski tour in Puerto Colón:
👤 Name: ${formData.fullName}
📞 Phone: ${formData.phone}
📅 Date: ${formData.date}
⏰ Time: ${formData.time}
⏱️ Duration: ${formData.duration}
🏍️ Type: ${typeLabel}
🔢 Quantity: ${formData.quantity}
💬 Notes: ${formData.requests || "None"}`;

    return `https://wa.me/${phoneNum}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="booking" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[40%] left-[5%] w-[350px] h-[350px] bg-gradient-to-tr from-coral-glow/5 to-transparent rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4">
            {t.booking.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Booking Card & Form */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {!showSuccess ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className="text-sm font-semibold text-gray-300 mb-2">
                      {t.booking.fullName} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`px-4 py-3 rounded-xl bg-black/40 border text-white focus:outline-none focus:ring-2 focus:ring-cyan-glow/50 transition-all font-medium ${
                        formErrors.fullName ? "border-red-500" : "border-white/10 focus:border-cyan-glow"
                      }`}
                      placeholder="e.g. John Doe"
                    />
                    {formErrors.fullName && (
                      <span className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        {formErrors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-300 mb-2">
                      {t.booking.phone} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`px-4 py-3 rounded-xl bg-black/40 border text-white focus:outline-none focus:ring-2 focus:ring-cyan-glow/50 transition-all font-medium ${
                        formErrors.phone ? "border-red-500" : "border-white/10 focus:border-cyan-glow"
                      }`}
                      placeholder="e.g. +44 7911 123456"
                    />
                    {formErrors.phone && (
                      <span className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        {formErrors.phone}
                      </span>
                    )}
                  </div>

                  {/* Date Picker */}
                  <div className="flex flex-col">
                    <label htmlFor="date" className="text-sm font-semibold text-gray-300 mb-2">
                      {t.booking.date} *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`px-4 py-3 rounded-xl bg-black/40 border text-white focus:outline-none focus:ring-2 focus:ring-cyan-glow/50 transition-all font-medium ${
                        formErrors.date ? "border-red-500" : "border-white/10 focus:border-cyan-glow"
                      }`}
                    />
                    {formErrors.date && (
                      <span className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        {formErrors.date}
                      </span>
                    )}
                  </div>

                  {/* Time Slot Picker */}
                  <div className="flex flex-col">
                    <label htmlFor="time" className="text-sm font-semibold text-gray-300 mb-2">
                      {t.booking.time} *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`px-4 py-3 rounded-xl bg-black/40 border text-white focus:outline-none focus:ring-2 focus:ring-cyan-glow/50 transition-all font-medium ${
                        formErrors.time ? "border-red-500" : "border-white/10 focus:border-cyan-glow"
                      }`}
                    >
                      <option value="" disabled>--Select Slot--</option>
                      <option value="09:00">09:00</option>
                      <option value="10:30">10:30</option>
                      <option value="12:00">12:00</option>
                      <option value="13:30">13:30</option>
                      <option value="15:00">15:00</option>
                      <option value="16:30">16:30</option>
                    </select>
                    {formErrors.time && (
                      <span className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        {formErrors.time}
                      </span>
                    )}
                  </div>

                  {/* Tour Duration Option */}
                  <div className="flex flex-col">
                    <label htmlFor="duration" className="text-sm font-semibold text-gray-300 mb-2">
                      {t.booking.duration}
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/50 transition-all font-medium"
                    >
                      <option value="40 min">40 min</option>
                      <option value="1 hour">1 hour</option>
                      <option value="2 hours">2 hours</option>
                    </select>
                  </div>

                  {/* Jet Ski Ride Type */}
                  <div className="flex flex-col">
                    <label htmlFor="rideType" className="text-sm font-semibold text-gray-300 mb-2">
                      {t.booking.rideType}
                    </label>
                    <select
                      id="rideType"
                      name="rideType"
                      value={formData.rideType}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/50 transition-all font-medium"
                    >
                      <option value="single">{t.booking.single}</option>
                      <option value="double">{t.booking.double}</option>
                    </select>
                  </div>

                  {/* Number of Jet Skis */}
                  <div className="flex flex-col">
                    <label htmlFor="quantity" className="text-sm font-semibold text-gray-300 mb-2">
                      {t.booking.quantity}
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/50 transition-all font-medium"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="flex flex-col">
                  <label htmlFor="requests" className="text-sm font-semibold text-gray-300 mb-2">
                    {t.booking.requests}
                  </label>
                  <textarea
                    id="requests"
                    name="requests"
                    rows={3}
                    value={formData.requests}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/50 transition-all font-medium resize-none"
                    placeholder="e.g. Any details about participants age, pick up request, etc."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-heading font-black text-base tracking-wider uppercase text-on-secondary bg-coral-glow hover:bg-[#e83e44] shadow-[0_4px_15px_rgba(252,93,93,0.35)] transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t.booking.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 text-white" />
                      {t.booking.submit}
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Success Modal */
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8 max-w-md mx-auto"
              >
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-6 animate-bounce" />
                <h3 className="font-heading font-black text-2xl uppercase tracking-wide text-white mb-2">
                  {t.booking.successTitle}
                </h3>
                <p className="text-gray-300 font-medium text-sm leading-relaxed mb-8">
                  {t.booking.successDesc}
                </p>

                {/* Booking Summary Box */}
                <div className="bg-ocean-dark border border-white/5 rounded-2xl p-5 mb-8 text-left text-sm space-y-2.5">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400 font-semibold">{t.booking.fullName}:</span>
                    <span className="text-white font-bold">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-semibold">{t.booking.date}:</span>
                    <span className="text-white font-bold">{formData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-semibold">{t.booking.time}:</span>
                    <span className="text-white font-bold">{formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-semibold">{t.booking.duration}:</span>
                    <span className="text-white font-bold">{formData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-semibold">{t.booking.rideType}:</span>
                    <span className="text-white font-bold">
                      {formData.rideType === "single" ? t.booking.single : t.booking.double}
                    </span>
                  </div>
                </div>

                {/* Redirect button to WhatsApp */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl font-heading font-black text-base tracking-wider uppercase text-white bg-green-600 hover:bg-green-500 shadow-[0_4px_25px_rgba(22,163,74,0.4)] hover:shadow-[0_4px_30px_rgba(22,163,74,0.6)] transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                  {t.booking.whatsappBtn}
                </a>

                {/* Edit details link */}
                <button
                  onClick={() => setShowSuccess(false)}
                  className="text-xs text-gray-500 hover:text-white transition-colors mt-4 underline font-medium block mx-auto"
                >
                  ← Edit details
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
