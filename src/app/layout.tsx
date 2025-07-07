import "styles/globals.css";
import Head from 'next/head'
import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "trpc/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export const metadata: Metadata = {
  title: "Reworks Studio | Design, Develop, Dominate",
  description:
    "Reworks Studio helps brands grow with stunning websites, modern apps, and creative design solutions. We specialize in Web Design, Branding, and Development for ambitious businesses.",
  icons: [{ rel: "icon", url: "/logo.png" }],
  keywords: [
    "Reworks Studio",
    "web design",
    "branding",
    "web development",
    "creative agency",
    "UI UX design",
    "React agency",
    "Next.js developers",
    "full-stack agency",
    "India tech agency",
  ],
  openGraph: {
    title: "Reworks Studio | Creative Web Agency",
    description:
      "We design powerful digital experiences for forward-thinking brands. From web development to design, Reworks Studio is your growth partner.",
    url: "https://reworksstudio.vercel.app", // update if different
    siteName: "Reworks Studio",
    images: [
      {
        url: "https://reworksstudio.vercel.app/logo.png", // add your OG image in public folder
        width: 1200,
        height: 630,
        alt: "Reworks Studio - Creative Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reworks Studio | Design, Develop, Dominate",
    description:
      "Helping startups and brands with design, development, and digital excellence.",
    images: ["https://reworksstudio.vercel.app/logo.png"], // same OG image
  },
};


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <Head>
        <meta name="google-site-verification" content="JR7NqfGj6cnhQEofYL58J3-grXL9IikRbUuNgqf2HjU" />
      </Head>

      <body>
          <Navbar/>
        
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer/>
      </body>
    </html>
  );
}
