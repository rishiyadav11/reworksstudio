"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

// Sample mock database of in-depth case studies
const CASE_STUDIES: Record<string, any> = {
  "reviewboost-ai": {
    title: "ReviewBoost AI",
    category: "SaaS & AI",
    year: "2025",
    client: "Concept / R&D",
    heroImage: "/reviewboost_dashboard.png",
    bg: "#e0e7ff",
    accent: "#6366f1",
    tech: ["FastAPI", "Llama 3", "Qdrant Vector DB", "LangChain", "Next.js", "Tailwind CSS"],
    overview: "ReviewBoost AI is a conceptual SaaS platform designed to automate and elevate customer sentiment evaluation. Leveraging the power of Llama-3 and vector search databases, it can ingest thousands of customer reviews and generate hyper-personalized, context-aware responses instantly.",
    challenge: "Modern e-commerce brands receive hundreds of reviews daily. Manually responding to them is tedious and prone to generic copy-pasting, which hurts brand loyalty. The challenge was to build an agentic system that doesn't just reply, but actually understands the specific product context and sentiment.",
    solution: "We engineered a pipeline using FastAPI for high-performance async processing, LangChain for LLM orchestration, and Qdrant to store vectorized product knowledge. When a review is submitted, the system queries Qdrant for specific product details, feeds it into a Llama-3 prompt, and generates a bespoke response. The frontend is a snappy Next.js dashboard providing analytics on sentiment trends.",
    architecture: [
      { step: "Data Ingestion", desc: "Webhooks from Shopify/Amazon ingest raw review text." },
      { step: "Vector Search", desc: "Qdrant retrieves relevant product specs and past issues." },
      { step: "LLM Generation", desc: "LangChain orchestrates Llama-3 to draft the response." },
      { step: "Human-in-the-Loop", desc: "Dashboard allows manual approval before publishing." }
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  "orbis-compiler": {
    title: "Orbis Design Compiler",
    category: "SaaS & AI",
    year: "2024",
    client: "Concept / R&D",
    heroImage: "/orbis_compiler.png",
    bg: "#ecfdf5",
    accent: "#10b981",
    tech: ["React", "GPT-4 Vision", "Tailwind CSS", "TypeScript", "Node.js"],
    overview: "Orbis Design Compiler is an experimental agentic translation engine that converts static layout screenshot mockups directly into production-ready Next.js components styled with Tailwind CSS.",
    challenge: "The handoff between design and engineering is traditionally slow. Developers spend hours translating Figma mocks into boilerplate CSS and React structures. The goal was to eliminate this friction using multimodal AI models.",
    solution: "We built an interface where users can upload any screenshot. The backend routes the image to GPT-4 Vision with a highly constrained system prompt demanding strict Tailwind syntax and functional React component structures. The output is rendered live in a sandbox environment for instant preview and code extraction.",
    architecture: [
      { step: "Image Upload", desc: "Drag-and-drop interface for high-res UI screenshots." },
      { step: "Vision Parsing", desc: "Multimodal LLM analyzes spatial layout and colors." },
      { step: "Code Generation", desc: "Outputs strictly typed React + Tailwind code." },
      { step: "Live Preview", desc: "Sandboxed iframe renders the component instantly." }
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  "baemark": {
    title: "Baemark Store",
    category: "E-commerce & Retail",
    year: "2025",
    client: "Baemark Retail",
    heroImage: "/baemark_store.png",
    bg: "#fef3c7",
    accent: "#b45309",
    tech: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Framer Motion"],
    overview: "Baemark is a high-end streetwear and fashion label that needed an online presence matching their modern, aesthetic clothing lines. The focus was on large, beautiful imagery and incredibly fast page loads.",
    challenge: "The standard Shopify theme ecosystem was too slow and visually constraining for Baemark's vision. They needed a fully custom frontend that could handle heavy image assets without sacrificing performance.",
    solution: "We decoupled their store by building a headless Next.js frontend using the Shopify Storefront API. This allowed us to implement custom Framer Motion page transitions and fine-tuned image optimization, resulting in a buttery smooth shopping experience.",
    architecture: [
      { step: "Headless Frontend", desc: "Next.js App Router for ultra-fast page transitions." },
      { step: "CMS & Products", desc: "Shopify Storefront API fetches live inventory." },
      { step: "Styling", desc: "Tailwind CSS used for precise, aesthetic component design." },
      { step: "Checkout", desc: "Seamless redirect to Shopify's secure checkout layer." }
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  "synth-flow": {
    title: "SynthFlow Automation",
    category: "SaaS & AI",
    year: "2025",
    client: "Internal R&D",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    bg: "#f3e8ff",
    accent: "#a855f7",
    tech: ["Next.js", "Node.js", "React Flow", "Tailwind CSS"],
    overview: "SynthFlow is a visual node-based automation builder allowing non-technical teams to construct complex LLM workflows and agentic pipelines in a drag-and-drop canvas.",
    challenge: "Building AI agents usually requires complex python scripts. We wanted to make agent creation as easy as drawing a flowchart.",
    solution: "Built a highly interactive React Flow canvas where users can connect specialized nodes (LLMs, API Fetchers, Webhooks) into robust pipelines.",
    architecture: [
      { step: "Canvas", desc: "React Flow for the interactive drag-and-drop interface." },
      { step: "Engine", desc: "Node.js backend executes the graphs concurrently." },
      { step: "Integration", desc: "Natively supports OpenAI, Anthropic, and generic APIs." }
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  "nexus-finance": {
    title: "Nexus Finance OS",
    category: "E-commerce & Retail",
    year: "2024",
    client: "FinTech Corp",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    bg: "#e0f2fe",
    accent: "#0ea5e9",
    tech: ["React", "TypeScript", "Prisma", "D3.js"],
    overview: "Nexus is a modern financial operating system for digital retail, offering real-time revenue analytics, smart inventory forecasting, and sleek dashboards.",
    challenge: "Existing financial dashboards were clunky and slow to load large datasets. Nexus needed to be lightning fast and beautiful.",
    solution: "Leveraged React with D3.js for high-performance custom data visualizations, backed by a Prisma-managed PostgreSQL database.",
    architecture: [
      { step: "Data Layer", desc: "Prisma ORM for typesafe database queries." },
      { step: "Visuals", desc: "D3.js integration for interactive charts." },
      { step: "Real-time", desc: "WebSockets stream live transaction updates." }
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  "healthsync-medical": {
    title: "HealthSync Medical",
    category: "Health & Education",
    year: "2025",
    client: "Healthcare Provider Network",
    heroImage: "/healthsync_medical.png",
    bg: "#f0fdf4",
    accent: "#22c55e",
    tech: ["Next.js", "FHIR / HL7 API", "PostgreSQL", "HIPAA Compliant AWS"],
    overview: "HealthSync is a HIPAA-compliant patient management dashboard with AI-driven triage and secure data pipelines for modern clinics.",
    challenge: "Clinics often struggle with fragmented legacy software that requires repetitive data entry, risking patient health and operational efficiency.",
    solution: "We engineered a unified Next.js dashboard integrating directly with FHIR compliant health records. Role-based access ensures doctors see clinical data while administrators see operational metrics.",
    architecture: [
      { step: "Security", desc: "End-to-end encryption and strict IAM roles on AWS." },
      { step: "Integration", desc: "FHIR standard APIs interface with legacy hospital DBs." },
      { step: "Interface", desc: "React-based clean UI optimized for tablet and desktop." }
    ],
    links: {
      demo: "#",
      github: "#"
    }
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = CASE_STUDIES[slug];

  const [indiaTime, setIndiaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true } as const;
      const dayOptions = { timeZone: "Asia/Kolkata", weekday: "short" } as const;
      setIndiaTime(`${new Date().toLocaleString("en-US", dayOptions)} - ${new Date().toLocaleString("en-US", options)} - India`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream text-brand-dark pt-14">
        <h1 className="font-anton text-6xl mb-4">404 - PROJECT NOT FOUND</h1>
        <p className="font-mono-roboto mb-8">The case study you are looking for does not exist or is currently being updated.</p>
        <button onClick={() => router.push('/work')} className="px-6 py-3 bg-brand-dark text-brand-cream font-mono-roboto font-bold uppercase tracking-widest">
          Return to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="flex-grow w-full bg-[#fcfcfc] text-[#131415] pt-14 selection:bg-brand-purple selection:text-white">
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden" style={{ backgroundColor: project.bg }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col items-start relative z-10">
          <Link href="/work" className="inline-flex items-center gap-2 font-mono-roboto text-[10px] font-bold uppercase tracking-widest hover:text-brand-purple transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Index
          </Link>
          
          <span className="font-mono-roboto text-xs font-bold tracking-widest uppercase mb-4" style={{ color: project.accent }}>
            {project.category}
          </span>
          <h1 className="font-anton text-5xl md:text-8xl tracking-wide uppercase text-brand-dark max-w-4xl leading-[0.9]">
            {project.title}
          </h1>
        </div>
        
        {/* Accent Graphic */}
        <div className="absolute right-0 bottom-0 w-[50vw] h-[50vw] rounded-tl-full opacity-10 pointer-events-none" style={{ backgroundColor: project.accent }} />
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Specs */}
        <div className="lg:col-span-4 space-y-12">
          <div>
            <h3 className="font-mono-roboto text-[10px] font-bold text-brand-dark/50 uppercase tracking-widest mb-3">Project Type</h3>
            <p className="font-sans text-sm font-semibold">{project.client}</p>
          </div>
          <div>
            <h3 className="font-mono-roboto text-[10px] font-bold text-brand-dark/50 uppercase tracking-widest mb-3">Launch Year</h3>
            <p className="font-sans text-sm font-semibold">{project.year}</p>
          </div>
          <div>
            <h3 className="font-mono-roboto text-[10px] font-bold text-brand-dark/50 uppercase tracking-widest mb-3">Engineering Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="font-mono-roboto text-[10px] font-bold border-2 border-brand-dark/10 px-3 py-1 bg-white uppercase">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-brand-dark/10">
            <a href={project.links.demo} className="flex items-center justify-center gap-2 w-full py-4 bg-brand-dark text-brand-cream font-mono-roboto text-[10px] font-bold tracking-widest hover:bg-brand-purple transition-colors uppercase border border-brand-dark">
              <Globe className="w-4 h-4" /> Live Demo
            </a>
            <a href={project.links.github} className="flex items-center justify-center gap-2 w-full py-4 border-2 border-brand-dark font-mono-roboto text-[10px] font-bold hover:bg-brand-cream transition-colors uppercase">
              <Github className="w-4 h-4" /> View Source Code
            </a>
          </div>
        </div>

        {/* Right Column: Story */}
        <div className="lg:col-span-8 space-y-16">
          
          <div className="w-full aspect-video border-2 border-brand-dark shadow-[-8px_8px_0px_0px_#131415] overflow-hidden bg-gray-100">
            <img src={project.heroImage} alt={`${project.title} Interface`} className="w-full h-full object-cover" />
          </div>

          <section>
            <h2 className="font-anton text-3xl tracking-wide uppercase mb-6 text-brand-dark">Executive Overview</h2>
            <p className="font-sans text-base leading-relaxed text-brand-dark/80">{project.overview}</p>
          </section>

          <section>
            <h2 className="font-anton text-3xl tracking-wide uppercase mb-6 text-brand-dark">The Challenge</h2>
            <p className="font-sans text-base leading-relaxed text-brand-dark/80">{project.challenge}</p>
          </section>

          <section>
            <h2 className="font-anton text-3xl tracking-wide uppercase mb-6 text-brand-dark">Technical Solution</h2>
            <p className="font-sans text-base leading-relaxed text-brand-dark/80 mb-8">{project.solution}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.architecture.map((step: any, idx: number) => (
                <div key={idx} className="border border-brand-dark/20 p-6 bg-white hover:border-brand-purple transition-colors">
                  <span className="font-anton text-2xl text-brand-dark/20 block mb-2">0{idx + 1}</span>
                  <h4 className="font-mono-roboto text-[11px] font-bold uppercase tracking-wider text-brand-dark mb-2">{step.step}</h4>
                  <p className="font-sans text-xs text-brand-dark/70 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Next Steps CTA */}
      <div className="w-full bg-[#131415] text-brand-cream py-24 text-center px-6">
        <h2 className="font-anton text-4xl md:text-5xl tracking-wide uppercase mb-6">Need a system like this?</h2>
        <Link href="/connect" className="inline-block bg-brand-cream text-brand-dark px-8 py-4 font-mono-roboto text-[11px] font-bold tracking-widest uppercase hover:bg-brand-purple hover:text-white transition-colors">
          Start a Project Discussion
        </Link>
      </div>

      {/* Footer Status Bar */}
      <div className="w-full bg-[#efeae0] border-t border-brand-dark/10 py-4 px-6 md:px-12 flex items-center justify-between font-mono-roboto text-xs text-brand-dark/70">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00c850] animate-pulse"></div>
          <span>Case Study Loaded</span>
        </div>
        <div className="font-semibold">
          {indiaTime || "India Time"}
        </div>
      </div>
    </div>
  );
}
