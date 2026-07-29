"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { MapFooter } from "@/components/MapFooter";
import { useTranslation } from "@/context/LanguageContext";

export default function TermsOfService() {
  const { language } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen text-gray-100 bg-[#030814] selection:bg-cyan-500/30 selection:text-white overflow-x-hidden relative">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow container mx-auto px-6 py-32 max-w-4xl">
          {language === "es" ? (
            <div className="space-y-6 text-gray-300 font-sans leading-relaxed">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Términos de Servicio y Reglas de Alquiler</h1>
              <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">1. Requisitos del Conductor y Pasajero</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Edad del conductor:</strong> El conductor debe ser mayor de 16 años. Los conductores menores de 18 años requieren el consentimiento firmado de un padre o tutor legal.</li>
                <li><strong>Edad del pasajero:</strong> La edad mínima para viajar como pasajero en una moto de agua doble es de 8 años.</li>
                <li><strong>Identificación:</strong> Se debe presentar un documento de identidad válido (Pasaporte, DNI o NIE) antes de iniciar la actividad.</li>
                <li><strong>Salud:</strong> La actividad no está recomendada para mujeres embarazadas o personas con problemas severos de espalda o corazón. No es necesario tener licencia de navegación.</li>
              </ul>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">2. Reglas de Seguridad</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>El uso del chaleco salvavidas (proporcionado por nosotros) es obligatorio en todo momento durante el recorrido.</li>
                <li>Los clientes deben seguir estrictamente todas las instrucciones proporcionadas por el guía/instructor profesional.</li>
                <li>Está estrictamente prohibido conducir bajo los efectos del alcohol o drogas. Nos reservamos el derecho de denegar el servicio sin reembolso en estos casos.</li>
                <li>Las motos de agua deben mantener una distancia de seguridad mínima de 100 metros respecto a otras embarcaciones y de 200 metros de la costa/playas.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">3. Política de Reservas, Cancelación y Reembolsos</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Cancelación por el cliente:</strong> Puede cancelar o modificar su reserva de forma gratuita con hasta 24 horas de antelación al inicio del tour. Las cancelaciones con menos de 24 horas o "no shows" no son reembolsables.</li>
                <li><strong>Condiciones climáticas:</strong> La actividad está sujeta a las condiciones del mar. En caso de que nuestro capitán determine que el mar no es seguro, le ofreceremos reprogramar la actividad o un reembolso completo del 100%.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">4. Responsabilidad y Daños</h2>
              <p>Nuestras tarifas incluyen seguro de responsabilidad civil obligatoria. Sin embargo, el cliente es económicamente responsable de cualquier daño causado a la moto de agua como resultado de conducción imprudente, colisiones por no mantener la distancia de seguridad, o por no seguir las directrices del instructor.</p>
            </div>
          ) : (
            <div className="space-y-6 text-gray-300 font-sans leading-relaxed">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Terms of Service & Rental Rules</h1>
              <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">1. Driver and Passenger Requirements</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Driver Age:</strong> The driver must be at least 16 years old. Drivers under 18 require signed consent from a parent or legal guardian.</li>
                <li><strong>Passenger Age:</strong> The minimum age to ride as a passenger on a double jet ski is 8 years old.</li>
                <li><strong>Identification:</strong> A valid ID (Passport or National ID) must be presented before the activity begins.</li>
                <li><strong>Health:</strong> The activity is not recommended for pregnant women or individuals with severe back or heart conditions. No boating license is required.</li>
              </ul>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">2. Safety Rules</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Wearing a life jacket (provided by us) is mandatory at all times during the ride.</li>
                <li>Customers must strictly follow all instructions provided by the professional guide/instructor.</li>
                <li>Driving under the influence of alcohol or drugs is strictly prohibited. We reserve the right to refuse service without a refund in such cases.</li>
                <li>Jet skis must maintain a minimum safe distance of 100 meters from other vessels and 200 meters from the coast/beaches.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">3. Booking, Cancellation, and Refund Policy</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Customer Cancellation:</strong> You may cancel or modify your booking free of charge up to 24 hours before the tour start time. Cancellations with less than 24 hours notice or "no-shows" are non-refundable.</li>
                <li><strong>Weather Conditions:</strong> The activity is subject to sea conditions. If our captain determines that sea conditions are unsafe, we will offer to reschedule your activity or provide a 100% full refund.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">4. Liability and Damages</h2>
              <p>Our rates include mandatory civil liability insurance. However, the customer is financially responsible for any damages caused to the jet ski as a result of reckless driving, collisions due to not keeping a safe distance, or failing to follow the instructor's guidelines.</p>
            </div>
          )}
        </main>

        <MapFooter />
      </div>
    </div>
  );
}
