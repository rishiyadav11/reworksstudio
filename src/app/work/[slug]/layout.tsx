import type { Metadata } from "next";

const CASE_TITLES: Record<string, { title: string; desc: string }> = {
  "reviewboost-ai": {
    title: "ReviewBoost AI — Autonomous Sentiment Agent",
    desc: "In-depth case study on Llama-3 sentiment analysis and Qdrant vector retrieval architecture engineered by Reworks Studio.",
  },
  "orbis-compiler": {
    title: "Orbis Design Compiler — Multimodal Vision Engine",
    desc: "Technical case study on automated screenshot-to-code compilation using GPT-4 Vision and Next.js 16.",
  },
  "baemark": {
    title: "Baemark Store — Headless E-Commerce System",
    desc: "Performance case study on headless Next.js frontend with Shopify Storefront API and Framer Motion micro-interactions.",
  },
  "synth-flow": {
    title: "SynthFlow Automation — Node-Based LLM Canvas",
    desc: "Architecture case study on drag-and-drop workflow graphs orchestrating OpenAI and Anthropic pipelines.",
  },
  "nexus-finance": {
    title: "Nexus Finance OS — Real-Time Analytics Engine",
    desc: "Fintech engineering case study with D3.js interactive charts, PostgreSQL, and Prisma ORM.",
  },
  "healthsync-medical": {
    title: "HealthSync Medical — HIPAA Clinical Dashboard",
    desc: "Healthcare portal case study integrating FHIR/HL7 hospital APIs and strict IAM cloud access controls.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_TITLES[slug];

  const title = project?.title || "Case Study & Architecture";
  const desc = project?.desc || "Technical project architecture and production delivery by Reworks Studio.";

  return {
    title,
    description: desc,
    alternates: {
      canonical: `https://reworksstudio.in/work/${slug}`,
    },
    openGraph: {
      title: `${title} | Reworks Studio`,
      description: desc,
      url: `https://reworksstudio.in/work/${slug}`,
    },
  };
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
