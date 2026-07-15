import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Jet Ski Puerto Colón | Costa Adeje Tenerife Jet Ski Rental & Safari Tours",
  description: "Feel the adrenaline! Premium Jet Ski rentals and safari tours in Puerto Colón, Costa Adeje, Tenerife. High-performance Sea-Doos, no license required, 100% insured.",
  keywords: ["jet ski puerto colon", "jet ski rent costa adeje", "tenerife jet ski safari", "water sports tenerife", "puerto colon jet ski rental"],
  authors: [{ name: "Puerto Colon Jet Ski Rentals" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ocean-dark text-gray-100">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

