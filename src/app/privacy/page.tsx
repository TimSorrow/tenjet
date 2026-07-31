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

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">3. Protección de Datos (GDPR) y Terceros</h2>
              <p>Cumplimos con el Reglamento General de Protección de Datos (GDPR). Sus datos se almacenan de manera segura. Sin embargo, al utilizar nuestro servicio de reservas, usted acepta que:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li><strong>Transferencia a Operadores Finales:</strong> Sus datos de reserva (nombre y teléfono) serán transferidos a la empresa operadora final de las motos de agua para que puedan prestar el servicio y cumplir con los registros marítimos.</li>
                <li><strong>Uso de WhatsApp (Meta):</strong> Al utilizar nuestro botón de reserva, usted será redirigido a WhatsApp (propiedad de Meta Platforms, Inc.). El procesamiento de los mensajes enviados a través de esta plataforma estará sujeto a las propias políticas de privacidad de Meta.</li>
              </ul>
              <p>No compartimos, vendemos ni alquilamos sus datos a terceros para fines de marketing bajo ninguna circunstancia.</p>

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

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">3. Data Protection (GDPR) & Third Parties</h2>
              <p>We comply with the General Data Protection Regulation (GDPR). Your data is stored securely. However, by using our booking service, you agree that:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li><strong>Transfer to Final Operators:</strong> Your booking data (name and phone) will be transferred to the final jet ski operating company so they can provide the service and comply with maritime registries.</li>
                <li><strong>Use of WhatsApp (Meta):</strong> By using our booking button, you will be redirected to WhatsApp (owned by Meta Platforms, Inc.). The processing of messages sent through this platform is subject to Meta's own privacy policies.</li>
              </ul>
              <p>We do not share, sell, or rent your data to third parties for marketing purposes under any circumstances.</p>

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
