import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work & Verifiable Case Studies",
  description:
    "Review production case studies and internal labs from Reworks Studio: ReviewBoost AI, Orbis Design Compiler, Baemark Headless Store, and HealthSync Medical.",
  alternates: {
    canonical: "https://reworksstudio.in/work",
  },
  openGraph: {
    title: "Selected Work & Verifiable Case Studies | Reworks Studio",
    description:
      "Review production codebases, architecture diagrams, and measurable impact across AI systems and SaaS platforms.",
    url: "https://reworksstudio.in/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
