import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Reworks Studio software engineering engagement guidelines, IP assignment terms, and client guarantees.",
  alternates: {
    canonical: "https://reworksstudio.in/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
