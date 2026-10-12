"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Plus, Minus, Code, Cpu, ShieldCheck, Terminal, Layers, ArrowRight, Zap, Globe, Sparkles, Database } from "lucide-react";
import SystemArchitectureVisualizer from "@/components/SystemArchitectureVisualizer";

// ─── SERVICES DIRECTORY ──────────────────────────────────────────────────────
const CAPABILITIES = [
  {
    id: "ai-agents",
    title: "Autonomous AI Agents & Swarms",
    category: "AI ENGINEERING",
    tagline: "Autonomous systems that execute complex, multi-step business logic with deterministic guardrails.",
    desc: "We engineer agentic workflows that autonomously triage support, process unstructured documents, and trigger backend operations without manual intervention.",
    tech: ["Llama 3", "LangChain", "Qdrant", "FastAPI", "Python"],
    deliverables: ["Multi-Agent Orchestration", "Tool-Calling Sandboxes", "Automated Hallucination Checks"],
    color: "#1b43f4",
    link: "/services"
  },
  {
    id: "workflow-automation",
    title: "AI Workflow & System Integrations",
    category: "OPERATIONS AUTOMATION",
    tagline: "Connect legacy databases, ERPs, and cloud SaaS tools to intelligent background automation pipelines.",
    desc: "Replace hundreds of manual operational hours with automated pipelines. We connect your custom backend to n8n, Make, webhooks, and secure database triggers.",
    tech: ["n8n", "PostgreSQL", "Webhooks", "Node.js", "Redis"],
    deliverables: ["Bidirectional CRM/ERP Sync", "Asynchronous Event Buses", "Self-Healing Retries"],
    color: "#7c3aed",
    link: "/services"
  },
  {
    id: "saas-dashboards",
    title: "Production SaaS Dashboards & Portals",
    category: "WEB ENGINEERING",
    tagline: "Ultra-responsive, type-safe web portals engineered for high data volume and complex user roles.",
    desc: "Built with Next.js 16 and TypeScript. We build secure role-based portals, analytics engines, and subscription billing systems ready for scale.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Prisma", "NextAuth"],
    deliverables: ["Real-Time Visualizations", "Granular RBAC Security", "Stripe Billing Integrations"],
    color: "#059669",
    link: "/services"
  },
  {
    id: "custom-software",
    title: "Custom Software & API Backends",
    category: "BACKEND ARCHITECTURE",
    tagline: "Scalable backend infrastructures designed for high availability and zero vendor lock-in.",
    desc: "When off-the-shelf software falls short, we build custom APIs, microservices, and specialized internal tools that run your exact core operations.",
    tech: ["TypeScript", "Docker", "PostgreSQL", "AWS / Edge", "GraphQL"],
    deliverables: ["High-Concurrency REST/GraphQL APIs", "Containerized Deployments", "SOC2-Ready Schemas"],
    color: "#ea580c",
    link: "/services"
  },
  {
    id: "voice-ai",
    title: "Voice AI & Conversational Telephony",
    category: "REAL-TIME SYSTEMS",
    tagline: "Sub-400ms voice pipelines for automated inbound call triage and human-like voice agents.",
    desc: "We orchestrate Twilio SIP streams, streaming speech-to-text, LLM reasoners, and neural voice synthesis to deliver natural voice conversations without delay.",
    tech: ["Twilio SIP", "Streaming Whisper", "Cartesia", "WebSockets"],
    deliverables: ["Telephony Trunk Integration", "Natural Interruption Handling", "Zero-Lag Audio Streaming"],
    color: "#1b43f4",
    link: "/services"
  }
];

// ─── VERIFIABLE PROJECTS & TECHNICAL PROOF ──────────────────────────────────
const FEATURED_PROJECTS = [
  {
    id: "reviewboost-ai",
    title: "ReviewBoost AI",
    badge: "Internal R&D / Prototype",
    category: "SaaS & Autonomous Agent",
    heroImage: "/reviewboost_dashboard.png",
    desc: "Llama-3 powered customer sentiment evaluation and automatic response agent. Utilizes Qdrant vector search to ground responses in actual product specs.",
    tech: ["FastAPI", "Llama 3", "Qdrant", "LangChain", "Next.js"],
    impact: "Automates sentiment evaluation across 10k+ customer reviews with contextual grounding.",
    link: "/work/reviewboost-ai"
  },
  {
    id: "orbis-compiler",
    title: "Orbis Design Compiler",
    badge: "Internal R&D / Prototype",
    category: "Multimodal Vision AI",
    heroImage: "/orbis_compiler.png",
    desc: "Agentic translation engine converting static UI screenshot mockups into production-ready, type-safe Next.js components styled with Tailwind CSS.",
    tech: ["React", "Vision Models", "Tailwind CSS", "TypeScript", "Node.js"],
    impact: "Reduces design-to-code translation cycles from days to instantaneous component scaffolding.",
    link: "/work/orbis-compiler"
  },
  {
    id: "baemark",
    title: "Baemark Store",
    badge: "Client Production",
    category: "Headless E-Commerce",
    heroImage: "/baemark_store.png",
    desc: "High-performance headless e-commerce store built for a modern fashion label. Custom Framer Motion micro-interactions and sub-second page transitions.",
    tech: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Framer Motion"],
    impact: "Sub-second navigation across catalog pages with 99+ mobile performance score.",
    link: "/work/baemark"
  },
  {
    id: "healthsync-medical",
    title: "HealthSync Medical",
    badge: "Client Architecture",
    category: "Healthcare Infrastructure",
    heroImage: "/healthsync_medical.png",
    desc: "Unified patient management dashboard with AI-driven triage pipelines and HIPAA-compliant data access layers for clinic networks.",
    tech: ["Next.js", "FHIR / HL7 API", "PostgreSQL", "AWS IAM"],
    impact: "Eliminated duplicate record entry across legacy hospital databases.",
    link: "/work/healthsync-medical"
  }
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  return (
    <div className="flex-grow w-full bg-brand-cream text-brand-dark pt-16">
      
      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION — HIGH-IMPACT B2B ENGINEERING POSITIONING
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-brand-dark/15 px-6 md:px-12 pt-16 md:pt-24 pb-20 overflow-hidden bg-brand-cream">
        
        {/* Architectural Background Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "linear-gradient(rgba(18,19,20,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(18,19,20,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Eyebrow Status Pill */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono-roboto text-[11px] font-bold tracking-[0.2em] uppercase text-brand-dark bg-white border border-brand-dark px-3 py-1 shadow-[-2px_2px_0px_0px_#121314]">
              AI SYSTEMS &amp; CUSTOM SOFTWARE ENGINEERING
            </span>
            <div className="hidden sm:flex items-center gap-2 font-mono-roboto text-[10px] text-brand-dark/70 font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>PRODUCTION-READY CODE • NO TEMPLATES</span>
            </div>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-[6.5vw] tracking-tight text-brand-dark uppercase leading-[0.92] max-w-5xl">
            ENGINEERING AUTONOMOUS AI INTO PRODUCTS &amp; OPERATIONS.
          </h1>

          {/* Value Proposition Subheadline */}
          <p className="mt-8 font-sans text-base sm:text-lg lg:text-xl text-brand-dark/80 max-w-3xl leading-relaxed">
            Reworks Studio is a high-conviction engineering studio. We architect and deploy multi-agent workflows, production SaaS systems, and custom software pipelines for high-growth companies and engineering partners.
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/connect"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-dark text-brand-cream font-mono-roboto text-xs font-bold tracking-widest uppercase border-2 border-brand-dark shadow-[-5px_5px_0px_0px_#1b43f4] hover:bg-brand-cobalt hover:shadow-[-5px_5px_0px_0px_#121314] transition-all duration-200 active:translate-x-0.5 active:translate-y-0.5"
            >
              BOOK AN ENGINEERING SCOPING CALL
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-dark font-mono-roboto text-xs font-bold tracking-widest uppercase border-2 border-brand-dark shadow-[-5px_5px_0px_0px_#121314] hover:bg-brand-cream hover:shadow-none transition-all duration-200"
            >
              EXPLORE PRODUCTION SYSTEMS
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Core Trust / Credibility Metrics Ribbon */}
          <div className="mt-16 pt-8 border-t border-brand-dark/15 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono-roboto text-xs">
            <div className="space-y-1">
              <span className="text-[10px] text-brand-dark/50 uppercase tracking-widest block font-bold">INTELLECTUAL PROPERTY</span>
              <span className="font-bold text-brand-dark text-sm sm:text-base">100% Client Ownership</span>
              <p className="text-[11px] text-brand-dark/60 font-sans">Full repository and IP transfer from day one.</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-brand-dark/50 uppercase tracking-widest block font-bold">ARCHITECTURE DISCIPLINE</span>
              <span className="font-bold text-brand-dark text-sm sm:text-base">Zero Black-Box Lock-in</span>
              <p className="text-[11px] text-brand-dark/60 font-sans">Open standards, type-safe Next.js &amp; Python.</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-brand-dark/50 uppercase tracking-widest block font-bold">LATENCY TARGETS</span>
              <span className="font-bold text-brand-dark text-sm sm:text-base">Sub-400ms Voice &amp; LLM</span>
              <p className="text-[11px] text-brand-dark/60 font-sans">Streaming edge pipelines with fast TTFT.</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-brand-dark/50 uppercase tracking-widest block font-bold">DIRECT ENGAGEMENT</span>
              <span className="font-bold text-brand-dark text-sm sm:text-base">Founder-Led Delivery</span>
              <p className="text-[11px] text-brand-dark/60 font-sans">Work directly with Rishi &amp; Navdeep.</p>
            </div>
          </div>

          {/* ── SIGNATURE TECHNICAL ARTIFACT: INTERACTIVE SYSTEM PIPELINE ── */}
          <div className="mt-16">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono-roboto text-xs font-bold tracking-widest uppercase text-brand-dark flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-cobalt" />
                SYSTEM BLUEPRINT: INTERACTIVE ARCHITECTURE CANVAS
              </span>
              <span className="hidden sm:inline font-mono-roboto text-[11px] text-brand-dark/60">
                Inspect how we architect enterprise agentic pipelines
              </span>
            </div>
            <SystemArchitectureVisualizer />
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CAPABILITIES & CORE SERVICES
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-brand-dark/10 pb-8">
            <div>
              <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase block mb-2">
                ENGINEERING DOMAINS
              </span>
              <h2 className="font-anton text-4xl sm:text-6xl tracking-tight text-brand-dark uppercase">
                CAPABILITIES &amp; SYSTEMS
              </h2>
            </div>
            <p className="font-sans text-sm text-brand-dark/70 max-w-md leading-relaxed">
              We design and construct production systems around tangible operational objectives, not speculative hype.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.id}
                className={`border-2 border-brand-dark p-8 flex flex-col justify-between bg-brand-cream transition-all duration-200 hover:shadow-[-6px_6px_0px_0px_#121314] ${
                  idx === 0 || idx === 1 ? "lg:col-span-6" : "lg:col-span-4"
                }`}
                style={{ boxShadow: "-4px 4px 0px 0px #121314" }}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono-roboto text-[10px] font-bold tracking-widest uppercase bg-white border border-brand-dark px-2.5 py-1">
                      {cap.category}
                    </span>
                    <span className="font-mono-roboto text-xs font-bold text-brand-dark/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-anton text-2xl tracking-wide uppercase text-brand-dark mb-3">
                    {cap.title}
                  </h3>
                  <p className="font-sans text-xs text-brand-dark/80 leading-relaxed mb-6">
                    {cap.desc}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-brand-dark/10">
                    <span className="text-[10px] font-mono-roboto font-bold tracking-wider text-brand-dark/60 uppercase block">
                      KEY PRODUCTION DELIVERABLES:
                    </span>
                    {cap.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs font-sans text-brand-dark/90">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-dark/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.tech.slice(0, 3).map((t) => (
                      <span key={t} className="font-mono-roboto text-[9px] font-semibold bg-white border border-brand-dark/20 px-2 py-0.5 text-brand-dark/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={cap.link}
                    className="font-mono-roboto text-xs font-bold tracking-wider uppercase text-brand-dark hover:text-brand-cobalt flex items-center gap-1 group"
                  >
                    SPECS <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono-roboto text-xs font-bold tracking-widest uppercase px-6 py-3 border-2 border-brand-dark bg-white shadow-[-3px_3px_0px_0px_#121314] hover:bg-brand-cream transition-colors"
            >
              OPEN FULL CAPABILITY DIRECTORY &amp; ESTIMATOR <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SELECTED WORK & TECHNICAL PROOF (VERIFIED ASSETS)
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-brand-dark/10 pb-8">
            <div>
              <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase block mb-2">
                VERIFIABLE PROOF OF WORK
              </span>
              <h2 className="font-anton text-4xl sm:text-6xl tracking-tight text-brand-dark uppercase">
                SELECTED PRODUCTION CODE &amp; LABS
              </h2>
            </div>
            <p className="font-sans text-sm text-brand-dark/70 max-w-md leading-relaxed">
              Every project represents real engineering. We clearly distinguish between client production deployments and internal R&amp;D experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="border-2 border-brand-dark bg-white p-6 md:p-8 flex flex-col justify-between shadow-[-6px_6px_0px_0px_#121314] transition-all duration-200 hover:shadow-[-8px_8px_0px_0px_#1b43f4] group"
              >
                <div>
                  {/* Hero Screenshot */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-brand-dark mb-6 bg-gray-100">
                    <img
                      src={project.heroImage}
                      alt={`${project.title} Interface`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-brand-dark text-brand-cream text-[9px] font-bold font-mono-roboto px-2.5 py-1 uppercase tracking-widest border border-brand-dark">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-mono-roboto text-[10px] font-bold text-brand-cobalt uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-anton text-2xl sm:text-3xl tracking-wide uppercase text-brand-dark mb-3">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-brand-dark/75 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="p-3 bg-brand-cream/60 border border-brand-dark/15 mb-6 text-xs font-sans text-brand-dark/90">
                    <strong className="font-mono-roboto text-[10px] uppercase tracking-wider text-brand-dark/70 block mb-1">
                      MEASURED OUTCOME / IMPACT:
                    </strong>
                    {project.impact}
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-dark/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono-roboto text-[9px] font-medium bg-brand-cream border border-brand-dark/20 px-2 py-0.5 text-brand-dark/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1.5 font-mono-roboto text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-cobalt"
                  >
                    READ CASE STUDY <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono-roboto text-xs font-bold tracking-widest uppercase px-8 py-4 bg-brand-dark text-brand-cream border-2 border-brand-dark shadow-[-4px_4px_0px_0px_#1b43f4] hover:bg-brand-cobalt transition-colors"
            >
              VIEW ALL WORK &amp; REPOSITORIES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          HOW REWORKS WORKS — DELIVERY PROTOCOL
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase">
            DELIVERY METHODOLOGY
          </span>
          <h2 className="font-anton text-4xl md:text-5xl tracking-tight text-brand-dark mt-2 uppercase">
            HOW WE ENGINEER &amp; SHIP
          </h2>
          <p className="font-sans text-sm text-brand-dark/70 max-w-xl mx-auto mt-3 leading-relaxed">
            A disciplined 4-stage engineering sprint structure eliminating ambiguity and technical debt.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {[
            {
              step: "01",
              title: "Discovery & System Boundary Mapping",
              summary: "We evaluate constraints, data schemas, compliance needs, and success metrics.",
              detail: "Through technical audits and scoping calls, we map out exact APIs, vector storage requirements, security boundaries, and milestone delivery dates. You receive an exhaustive technical specification document before any code is committed."
            },
            {
              step: "02",
              title: "Interactive Prototyping & Vector Grounding",
              summary: "We stand up interactive sandboxes to validate LLM accuracy and user flow.",
              detail: "We test retrieval pipelines against real business data to prove sub-second latency and zero-hallucination accuracy. In parallel, we build UI component sandboxes in Next.js to lock in responsive ergonomics."
            },
            {
              step: "03",
              title: "Production Engineering & Integration",
              summary: "Full-stack build with strict TypeScript, unit tests, and secure data pipes.",
              detail: "We write clean, composable components, build robust webhook listeners, integrate PostgreSQL databases with Prisma ORM, and implement automated error recovery routines. All work is continuously pushed to your private Git repository."
            },
            {
              step: "04",
              title: "Hardening, Deployment & 100% IP Transfer",
              summary: "Edge deployment, security audits, and complete handover with documentation.",
              detail: "We deploy on performant staging, run Lighthouse Core Web Vitals checks, configure custom domains, and hand over the keys. You own 100% of the code, documentation, and architecture with zero ongoing lock-in."
            }
          ].map((item, idx) => {
            const isOpen = activeProcessStep === idx;
            return (
              <div
                key={idx}
                className="border-2 border-brand-dark bg-brand-cream cursor-pointer overflow-hidden transition-all duration-200"
                style={{ boxShadow: isOpen ? "-5px 5px 0px 0px #1b43f4" : "-3px 3px 0px 0px #121314" }}
                onClick={() => setActiveProcessStep(idx)}
              >
                <div className="p-6 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <span className="font-anton text-2xl text-brand-cobalt">{item.step}</span>
                    <div>
                      <h3 className="font-anton text-lg md:text-xl tracking-wider text-brand-dark uppercase">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-brand-dark/70 mt-1">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span className={`inline-block font-mono-roboto text-[10px] font-bold px-3 py-1 border border-brand-dark uppercase tracking-wider ${isOpen ? "bg-brand-cobalt text-white" : "bg-white"}`}>
                      {isOpen ? "ACTIVE STAGE" : "INSPECT"}
                    </span>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-brand-dark/10 bg-white text-xs text-brand-dark/80 leading-relaxed font-sans">
                        {item.detail}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RADICAL TRUST & ACCOUNTABILITY PILLARS
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-16">
            <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase block mb-2">
              CREDIBILITY THROUGH EVIDENCE
            </span>
            <h2 className="font-anton text-4xl sm:text-6xl tracking-tight text-brand-dark uppercase">
              THE NO BLACK-BOX PRINCIPLE
            </h2>
            <p className="font-sans text-sm text-brand-dark/80 mt-4 leading-relaxed">
              We operate as a founder-led engineering studio. That means direct access to technical architects, total code ownership, and zero agency theater.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-brand-dark p-8 bg-white shadow-[-5px_5px_0px_0px_#121314]">
              <div className="w-10 h-10 border border-brand-dark bg-brand-cream flex items-center justify-center font-mono-roboto font-bold mb-6">
                01
              </div>
              <h3 className="font-anton text-xl uppercase tracking-wider mb-2 text-brand-dark">
                TOTAL IP &amp; REPO ACCESS
              </h3>
              <p className="font-sans text-xs text-brand-dark/75 leading-relaxed">
                You receive full admin rights to private Git repositories from sprint one. No hostage code, no proprietary runtime dependencies, no vendor lock-in.
              </p>
            </div>

            <div className="border-2 border-brand-dark p-8 bg-white shadow-[-5px_5px_0px_0px_#121314]">
              <div className="w-10 h-10 border border-brand-dark bg-brand-cream flex items-center justify-center font-mono-roboto font-bold mb-6">
                02
              </div>
              <h3 className="font-anton text-xl uppercase tracking-wider mb-2 text-brand-dark">
                FOUNDER-LED ACCOUNTABILITY
              </h3>
              <p className="font-sans text-xs text-brand-dark/75 leading-relaxed">
                Founded by Rishi Yadav &amp; Navdeep Bhardwaj. You collaborate directly with experienced builders who write production code, not junior account managers.
              </p>
            </div>

            <div className="border-2 border-brand-dark p-8 bg-white shadow-[-5px_5px_0px_0px_#121314]">
              <div className="w-10 h-10 border border-brand-dark bg-brand-cream flex items-center justify-center font-mono-roboto font-bold mb-6">
                03
              </div>
              <h3 className="font-anton text-xl uppercase tracking-wider mb-2 text-brand-dark">
                TRANSPARENT FIXED SCOPE
              </h3>
              <p className="font-sans text-xs text-brand-dark/75 leading-relaxed">
                Every sprint is bound by explicit deliverables and milestones. We don&apos;t bill for open-ended discovery hours or pad invoices with unnecessary bloat.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TECHNICAL FAQ
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase">
            CLEAR ANSWERS
          </span>
          <h2 className="font-anton text-4xl md:text-5xl tracking-tight text-brand-dark mt-2 uppercase">
            COMMONLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {[
            {
              q: "What is your primary engineering stack for AI & software builds?",
              a: "We work with modern, battle-tested technologies: Next.js 16 with TypeScript and Tailwind CSS on the frontend; Python (FastAPI), Node.js, LangChain, and Qdrant/PostgreSQL on the backend. For automation, we utilize native webhooks, Redis queues, and self-hosted n8n."
            },
            {
              q: "How do you ensure AI agents do not hallucinate or make critical mistakes?",
              a: "We implement deterministic guardrails, structured JSON schema outputs, and human-in-the-loop approval gates. Agents operate with strictly bounded tools rather than free-form execution."
            },
            {
              q: "How long does a typical build take?",
              a: "Scoped MVPs or focused AI agent pipelines typically take 3 to 5 weeks. End-to-end custom software platforms, deep database architectures, or multi-agent swarms take between 6 to 12 weeks."
            },
            {
              q: "What is your pricing and engagement structure?",
              a: "We operate on transparent fixed-scope milestone sprints. Project scopes generally begin from $1,000 USD (GBP / AUD equivalents accepted). Before billing, we provide an architectural brief detailing the exact scope, timeline, and cost."
            },
            {
              q: "Do you sign NDAs before initial discovery calls?",
              a: "Yes. We respect client confidentiality and regularly execute mutual NDAs prior to reviewing proprietary data architectures or strategic roadmaps."
            }
          ].map((item, idx) => {
            const isFaqOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="border-2 border-brand-dark bg-brand-cream overflow-hidden transition-all duration-200"
                style={{ boxShadow: "-3px 3px 0px 0px #121314" }}
              >
                <button
                  onClick={() => setActiveFaq(isFaqOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-6"
                  aria-expanded={isFaqOpen}
                >
                  <span className="font-mono-roboto text-xs font-black text-brand-dark uppercase tracking-wider">
                    {item.q}
                  </span>
                  <div className="bg-white border border-brand-dark w-6 h-6 flex items-center justify-center flex-shrink-0">
                    {isFaqOpen ? <Minus className="w-3.5 h-3.5 text-brand-dark" /> : <Plus className="w-3.5 h-3.5 text-brand-dark" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isFaqOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs text-brand-dark/80 leading-relaxed font-sans max-w-2xl border-t border-brand-dark/10">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CONVERSION CTA — INVITATION TO DISCUSS REAL ENGINEERING
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-24 bg-[#121314] text-brand-cream text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="font-mono-roboto text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase inline-block">
            READY TO COMMENCE SPRINT SCOPING
          </span>

          <h2 className="font-anton text-5xl sm:text-7xl lg:text-8xl tracking-tight text-brand-cream uppercase leading-[0.9]">
            LET&apos;S ENGINEER YOUR NEXT SYSTEM.
          </h2>

          <p className="font-sans text-sm sm:text-base text-brand-cream/70 max-w-xl mx-auto leading-relaxed">
            Send us your product brief or schedule an engineering scoping call. You&apos;ll receive a concrete architectural response and milestone breakdown within 24 hours.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-brand-dark font-mono-roboto text-xs font-bold tracking-widest uppercase border-2 border-white shadow-[-5px_5px_0px_0px_#1b43f4] hover:bg-brand-cobalt hover:text-white transition-all duration-200"
            >
              TRANSMIT PROJECT BRIEF ✦
            </Link>
            <a
              href="mailto:hello@reworksstudio.in"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-transparent text-brand-cream font-mono-roboto text-xs font-bold tracking-widest uppercase border-2 border-brand-cream/30 hover:border-brand-cream transition-colors"
            >
              DIRECT EMAIL: HELLO@REWORKSSTUDIO.IN
            </a>
          </div>

          <div className="pt-8 font-mono-roboto text-[11px] text-brand-cream/50 flex flex-wrap items-center justify-center gap-4">
            <span>● 24H SLA ON TECHNICAL ENQUIRIES</span>
            <span>● MUTUAL NDA READY</span>
            <span>● FOUNDER-DIRECT REVIEW</span>
          </div>
        </div>
      </section>

    </div>
  );
}
