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
  metadataBase: new URL("https://reworksstudio.in"),
  title: {
    default: "Reworks Studio | Autonomous AI Systems & Custom Software Engineering",
    template: "%s | Reworks Studio"
  },
  description:
    "Reworks Studio designs and engineers production AI agents, autonomous workflow pipelines, and custom software systems. Partnering with high-growth technology teams globally.",
  keywords: [
    "Reworks Studio",
    "AI engineering studio",
    "autonomous AI agents",
    "custom software development",
    "multi-agent systems",
    "AI workflow automation",
    "enterprise RAG systems",
    "SaaS dashboard development",
    "Next.js engineering",
    "FastAPI LLM pipelines",
    "Rishi Yadav",
    "Navdeep Bhardwaj"
  ],
  authors: [
    { name: "Rishi Yadav", url: "https://reworksstudio.in/about" },
    { name: "Navdeep Bhardwaj", url: "https://reworksstudio.in/about" }
  ],
  creator: "Reworks Studio",
  publisher: "Reworks Studio",
  alternates: {
    canonical: "https://reworksstudio.in",
  },
  openGraph: {
    title: "Reworks Studio | Autonomous AI Systems & Custom Software Engineering",
    description:
      "Production-grade AI agents, workflow automation pipelines, and custom software engineered for high-growth tech teams.",
    url: "https://reworksstudio.in",
    siteName: "Reworks Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/orbis_compiler.png",
        width: 1200,
        height: 630,
        alt: "Reworks Studio Engineering Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reworks Studio | Autonomous AI Systems & Custom Software Engineering",
    description:
      "Production-grade AI agents, workflow automation pipelines, and custom software engineered for high-growth tech teams.",
    images: ["/orbis_compiler.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://reworksstudio.in/#organization",
      "name": "Reworks Studio",
      "url": "https://reworksstudio.in",
      "logo": "https://reworksstudio.in/orbis_compiler.png",
      "email": "hello@reworksstudio.in",
      "founders": [
        {
          "@type": "Person",
          "name": "Rishi Yadav",
          "jobTitle": "Founder & Technical Lead",
          "image": "https://reworksstudio.in/rishi.png"
        },
        {
          "@type": "Person",
          "name": "Navdeep Bhardwaj",
          "jobTitle": "Co-Founder & Director"
        }
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Cyber City / Sector 29",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122001",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Narnaul Hub",
          "addressLocality": "Narnaul",
          "addressRegion": "Haryana",
          "postalCode": "123001",
          "addressCountry": "IN"
        }
      ],
      "sameAs": [
        "https://github.com/rishiyadav11",
        "https://linkedin.com"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://reworksstudio.in/#website",
      "url": "https://reworksstudio.in",
      "name": "Reworks Studio",
      "publisher": {
        "@id": "https://reworksstudio.in/#organization"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://reworksstudio.in/#service",
      "name": "Reworks Studio — AI & Custom Software Engineering",
      "url": "https://reworksstudio.in/services",
      "provider": {
        "@id": "https://reworksstudio.in/#organization"
      },
      "areaServed": ["United States", "United Kingdom", "Australia", "India", "Global"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Engineering Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Autonomous AI Agents & Swarms",
              "description": "Multi-agent systems with deterministic tool calling and guardrails."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Workflow Automation Pipelines",
              "description": "Enterprise event routing, webhook pipelines, and n8n integrations."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Production SaaS Dashboards & Portals",
              "description": "Next.js 16 and TypeScript full-stack applications with PostgreSQL."
            }
          }
        ]
      }
    }
  ]
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
