import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust, Security & The No Black-Box Guarantee",
  description:
    "Reworks Studio accountability guarantees: 100% intellectual property ownership, unrestricted repository access from day one, transparent milestone pricing, and NDA protections.",
  alternates: {
    canonical: "https://reworksstudio.in/trust",
  },
  openGraph: {
    title: "Trust, Security & The No Black-Box Guarantee | Reworks Studio",
    description:
      "Full IP ownership, zero proprietary vendor traps, and radical transparency in software engineering.",
    url: "https://reworksstudio.in/trust",
  },
};

export default function TrustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
