import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans, Hanken_Grotesk, Syncopate } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { CookieBanner } from "@/components/CookieBanner";
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

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tenjet.club"),
  title: "tenjet.club - Elite Jet Ski Experience",
  description: "Pristine design meets unparalleled performance in a sun-drenched coastal escape. Feel the adrenaline, embrace the wave in Puerto Colón, Tenerife.",
  keywords: ["jet ski puerto colon", "jet ski rent costa adeje", "tenerife jet ski safari", "water sports tenerife", "puerto colon jet ski rental"],
  authors: [{ name: "tenjet.club Rentals" }],
  robots: "index, follow",
  openGraph: {
    title: "tenjet.club - Elite Jet Ski Experience",
    description: "Pristine design meets unparalleled performance in a sun-drenched coastal escape. Feel the adrenaline, embrace the wave in Puerto Colón, Tenerife.",
    url: "https://tenjet.club",
    siteName: "tenjet.club",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "tenjet.club Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tenjet.club - Elite Jet Ski Experience",
    description: "Pristine design meets unparalleled performance in a sun-drenched coastal escape. Feel the adrenaline, embrace the wave in Puerto Colón, Tenerife.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${plusJakartaSans.variable} ${hankenGrotesk.variable} ${syncopate.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "TenJet Club",
              image: "https://tenjet.club/og-image.png",
              "@id": "https://tenjet.club",
              url: "https://tenjet.club",
              telephone: "+34665519742",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Centro Comercial Puerto Colón, S/N",
                addressLocality: "Adeje",
                addressRegion: "Tenerife",
                postalCode: "38670",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.0789729,
                longitude: -16.7360216,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                opens: "09:00",
                closes: "18:00"
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030814] text-gray-100">
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}

