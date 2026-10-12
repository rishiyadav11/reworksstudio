import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Reworks Studio data governance, confidentiality commitments, and privacy practices.",
  alternates: {
    canonical: "https://reworksstudio.in/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
