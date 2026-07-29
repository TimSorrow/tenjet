"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { MapFooter } from "@/components/MapFooter";
import { useTranslation } from "@/context/LanguageContext";

export default function PrivacyPolicy() {
  const { language } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen text-gray-100 bg-[#030814] selection:bg-cyan-500/30 selection:text-white overflow-x-hidden relative">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow container mx-auto px-6 py-32 max-w-4xl">
          {language === "es" ? (
            <div className="space-y-6 text-gray-300 font-sans leading-relaxed">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Política de Privacidad</h1>
              <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">1. Recopilación de Datos</h2>
              <p>En tenjet.club ("nosotros", "nuestro", "la empresa"), respetamos su privacidad y nos comprometemos a proteger los datos personales de nuestros clientes y visitantes del sitio web. Recopilamos información básica para procesar sus reservas de alquiler de motos de agua, incluyendo su nombre y número de teléfono (principalmente a través de WhatsApp).</p>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">2. Uso de la Información</h2>
              <p>La información que recopilamos se utiliza exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Procesar y confirmar su reserva.</li>
                <li>Comunicarnos con usted respecto a su reserva (cambios por clima, disponibilidad, etc.).</li>
                <li>Cumplir con las normativas legales locales de España y regulaciones marítimas de Tenerife.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">3. Protección de Datos (GDPR)</h2>
              <p>Cumplimos con el Reglamento General de Protección de Datos (GDPR). Sus datos se almacenan de manera segura y no se comparten, venden ni alquilan a terceros bajo ninguna circunstancia, a menos que lo exija la ley española o las autoridades portuarias.</p>

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">4. Sus Derechos</h2>
              <p>Usted tiene derecho a solicitar acceso, corrección o eliminación de los datos personales que tenemos sobre usted. Para cualquier consulta sobre sus datos, por favor contáctenos a través de nuestro correo electrónico de soporte (info@oceanrush.es) o vía WhatsApp.</p>
            </div>
          ) : (
            <div className="space-y-6 text-gray-300 font-sans leading-relaxed">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Privacy Policy</h1>
              <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">1. Data Collection</h2>
              <p>At tenjet.club ("we", "us", "our"), we respect your privacy and are committed to protecting the personal data of our customers and website visitors. We collect basic information to process your jet ski rental bookings, including your name and phone number (primarily via WhatsApp).</p>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">2. Use of Information</h2>
              <p>The information we collect is used exclusively to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Process and confirm your booking.</li>
                <li>Communicate with you regarding your reservation (weather changes, availability, etc.).</li>
                <li>Comply with local Spanish legal regulations and Tenerife maritime rules.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">3. Data Protection (GDPR)</h2>
              <p>We comply with the General Data Protection Regulation (GDPR). Your data is stored securely and is never shared, sold, or rented to third parties under any circumstances, unless required by Spanish law or port authorities.</p>

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">4. Your Rights</h2>
              <p>You have the right to request access, correction, or deletion of the personal data we hold about you. For any inquiries regarding your data, please contact us via our support email (info@oceanrush.es) or WhatsApp.</p>
            </div>
          )}
        </main>

        <MapFooter />
      </div>
    </div>
  );
}
