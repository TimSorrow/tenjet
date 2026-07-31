"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { MapFooter } from "@/components/MapFooter";
import { useTranslation } from "@/context/LanguageContext";

export default function LegalNotice() {
  const { language } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen text-gray-100 bg-[#030814] selection:bg-cyan-500/30 selection:text-white overflow-x-hidden relative">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow container mx-auto px-6 py-32 max-w-4xl">
          {language === "es" ? (
            <div className="space-y-6 text-gray-300 font-sans leading-relaxed">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Aviso Legal</h1>
              <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">1. Información de la Empresa</h2>
              <p>En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que este sitio web (tenjet.club) es operado por:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Razón Social:</strong> EXCURSION PHOTO SERVICE, S.L.</li>
                <li><strong>NIF/CIF:</strong> B38638060</li>
                <li><strong>Domicilio Social:</strong> Centro Comercial Puerto Colón, S/N, 38670 Adeje, Tenerife, España</li>
              </ul>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">2. Objeto del Sitio Web</h2>
              <p>El sitio web tenjet.club actúa como una plataforma de intermediación (agencia de reservas en línea) para la comercialización de excursiones y alquiler de motos de agua en Tenerife. EXCURSION PHOTO SERVICE, S.L. no es la empresa operadora final de las excursiones marítimas.</p>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">3. Propiedad Intelectual</h2>
              <p>Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a EXCURSION PHOTO SERVICE, S.L., sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.</p>

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">4. Exclusión de Responsabilidad</h2>
              <p>EXCURSION PHOTO SERVICE, S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
            </div>
          ) : (
            <div className="space-y-6 text-gray-300 font-sans leading-relaxed">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Legal Notice (Aviso Legal)</h1>
              <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">1. Company Information</h2>
              <p>In compliance with Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE) of Spain, it is reported that this website (tenjet.club) is operated by:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Company Name:</strong> EXCURSION PHOTO SERVICE, S.L.</li>
                <li><strong>VAT Number (CIF):</strong> B38638060</li>
                <li><strong>Registered Address:</strong> Centro Comercial Puerto Colón, S/N, 38670 Adeje, Tenerife, Spain</li>
              </ul>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">2. Purpose of the Website</h2>
              <p>The tenjet.club website acts as an intermediary platform (online booking agency) for the marketing of excursions and jet ski rentals in Tenerife. EXCURSION PHOTO SERVICE, S.L. is not the final operating company of the maritime excursions.</p>
              
              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">3. Intellectual Property</h2>
              <p>All the contents of the website, including texts, photographs, graphics, images, icons, technology, software, as well as its graphic design and source codes, constitute a work whose property belongs to EXCURSION PHOTO SERVICE, S.L., and none of the exploitation rights over them can be understood to be transferred to the user.</p>

              <h2 className="text-2xl font-heading font-bold text-white mt-8 mb-4">4. Limitation of Liability</h2>
              <p>EXCURSION PHOTO SERVICE, S.L. is not responsible, under any circumstances, for damages of any nature that could be caused, for example: errors or omissions in the contents, lack of availability of the portal or the transmission of viruses or malicious or harmful programs in the contents, despite having adopted all the necessary technological measures to prevent it.</p>
            </div>
          )}
        </main>

        <MapFooter />
      </div>
    </div>
  );
}
