import type { Metadata } from "next";
import { Inter, Poppins, Anton, Roboto_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reworks Studio | Custom Software & AI Agency in Narnaul & Gurugram",
  description:
    "Reworks Studio is the top custom software, web design, and AI agency in Narnaul and Gurugram, Haryana, India. We build premium Next.js websites, mobile apps, SaaS dashboards, and intelligent AI agents.",
  keywords: [
    "Reworks Studio",
    "AI agency Narnaul",
    "custom software developer Narnaul",
    "best web design studio Gurugram",
    "top AI agents developer Haryana",
    "Reworks Narnaul",
    "Reworks Gurugram",
    "Reworks Studio India",
    "AI agency India",
    "AI agents",
    "AI chatbots",
    "AI workflows",
    "custom software",
    "web development",
    "mobile apps",
    "portfolio websites",
    "dashboard development",
    "digital agency India",
  ],
  authors: [{ name: "Reworks Studio" }],
  openGraph: {
    title: "Reworks Studio | Custom Software & AI Agency in Narnaul & Gurugram",
    description:
      "Premium websites, custom software, apps, AI agents & intelligent automation in Narnaul, Gurugram, and across India.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Reworks Studio",
  "image": "https://reworksstudio.in/logo.png",
  "@id": "https://reworksstudio.in/#organization",
  "url": "https://reworksstudio.in",
  "telephone": "",
  "priceRange": "$$",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Gurugram",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Narnaul",
      "addressLocality": "Narnaul",
      "addressRegion": "Haryana",
      "postalCode": "123001",
      "addressCountry": "IN"
    }
  ],
  "geo": [
    {
      "@type": "GeoCoordinates",
      "latitude": "28.4595",
      "longitude": "77.0266"
    },
    {
      "@type": "GeoCoordinates",
      "latitude": "28.0444",
      "longitude": "76.1112"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "10:00",
    "closes": "19:00"
  },
  "founders": [
    {
      "@type": "Person",
      "name": "Rishi Yadav"
    },
    {
      "@type": "Person",
      "name": "Navdeep Bhardwaj"
    }
  ],
  "description": "Reworks Studio is a premier custom software, AI engineering, and digital design agency based in Narnaul and Gurugram, Haryana, India. Founded by Rishi Yadav and Navdeep Bhardwaj, we build Next.js portals, SaaS dashboards, and automated AI agents."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${anton.variable} ${robotoMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-dark font-inter">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
