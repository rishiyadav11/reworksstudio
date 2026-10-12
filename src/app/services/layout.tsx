import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engineering & Custom Software Capabilities",
  description:
    "Explore Reworks Studio capabilities: Autonomous AI Agents, Workflow Automation Pipelines, High-Performance SaaS Dashboards, and Sub-400ms Voice Systems. Transparent scope calculator included.",
  alternates: {
    canonical: "https://reworksstudio.in/services",
  },
  openGraph: {
    title: "AI Engineering & Custom Software Capabilities | Reworks Studio",
    description:
      "Explore Reworks Studio capabilities: Autonomous AI Agents, Workflow Automation Pipelines, and Production SaaS Dashboards.",
    url: "https://reworksstudio.in/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
