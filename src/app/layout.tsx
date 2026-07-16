import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans, Hanken_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "NEON WAVE - Elite Jet Ski Experience",
  description: "Pristine design meets unparalleled performance in a sun-drenched coastal escape. Feel the adrenaline, embrace the wave in Puerto Colón, Tenerife.",
  keywords: ["jet ski puerto colon", "jet ski rent costa adeje", "tenerife jet ski safari", "water sports tenerife", "puerto colon jet ski rental"],
  authors: [{ name: "NEON WAVE Rentals" }],
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
      className={`${dmSans.variable} ${plusJakartaSans.variable} ${hankenGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-transparent text-gray-100">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

