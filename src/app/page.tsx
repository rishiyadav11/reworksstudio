"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Plus,
  Minus,
  Terminal,
  Cpu,
  Layers,
  Code2,
  Workflow,
  Sparkles,
  Zap,
  CheckCircle2,
  Lock,
  Globe,
  Database
} from "lucide-react";
import SystemArchitectureVisualizer from "@/components/SystemArchitectureVisualizer";

// ─── 3 CORE CAPABILITIES (PHASE 3) ───────────────────────────────────────────
const CORE_CAPABILITIES = [
  {
    id: "ai-systems-agents",
    number: "01",
    title: "AI Systems & Autonomous Agents",
    badge: "CORE CAPABILITY",
    tagline: "Autonomous multi-agent loops that execute complex business tasks with deterministic guardrails.",
    desc: "We engineer agentic architectures that ingest unstructured data, query vector knowledge bases, call deterministic tools, and automate customer support and back-office operations without hallucination.",
    tech: ["Llama 3", "LangChain", "Qdrant Vector DB", "FastAPI", "Python"],
    deliverables: [
      "Autonomous tool-calling loops with strict JSON output schemas",
      "Enterprise RAG with dense + sparse vector indexing",
      "Automated evaluation gates and human-in-the-loop fallbacks"
    ],
    color: "#1b43f4",
    link: "/services"
  },
  {
    id: "workflow-automation",
    number: "02",
    title: "Business Workflow Automation & Integrations",
    badge: "OPERATIONAL SPEED",
    tagline: "Connect legacy databases, ERPs, CRMs, and SaaS tools into resilient background pipelines.",
    desc: "Eliminate hundreds of manual hours. We architect event-driven webhooks, async queue workers, and n8n/Make orchestration pipelines that sync data bidirectionally with automatic retry protocols.",
    tech: ["n8n", "PostgreSQL", "Redis Queues", "Node.js", "Webhooks"],
    deliverables: [
      "Bidirectional sync between CRM, billing, and inventory backends",
      "Self-healing webhook pipelines with error quarantine queues",
      "Real-time alerts via Slack, email, and custom monitoring channels"
    ],
    color: "#7c3aed",
    link: "/services"
  },
  {
    id: "custom-software",
    number: "03",
    title: "Custom Software & Digital Products",
    badge: "FULL-STACK PRODUCTION",
    tagline: "Type-safe, scalable web portals, SaaS platforms, and mobile apps built with Next.js 16.",
    desc: "When off-the-shelf software fails your business model, we engineer production-ready web platforms and native mobile apps designed for high throughput, sub-second latency, and zero vendor lock-in.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    deliverables: [
      "High-concurrency SaaS dashboards with granular role-based access",
      "Cross-platform mobile applications (React Native / Expo)",
      "Headless e-commerce engines and high-conversion front-doors"
    ],
    color: "#059669",
    link: "/services"
  }
];

// ─── 3 STRONGEST VERIFIED CASE STUDIES (PHASE 4) ─────────────────────────────
const VERIFIED_CASE_STUDIES = [
  {
    id: "reviewboost-ai",
    title: "ReviewBoost AI",
    badge: "Internal Product / R&D",
    category: "Autonomous Agent & SaaS",
    heroImage: "/reviewboost_dashboard.png",
    problem: "Modern e-commerce brands receive thousands of reviews daily. Responding manually is slow, while generic copy-paste templates degrade brand loyalty.",
    solution: "We engineered a pipeline using FastAPI, LangChain, and Qdrant vector databases. When a review is received, Qdrant retrieves exact product specs, feeds it to a constrained Llama-3 prompt, and drafts a hyper-personalized response with human-in-the-loop approval.",
    contribution: "End-to-end vector pipeline, async queue architecture, and Next.js analytics dashboard.",
    outcome: "10,000+ simulated reviews processed with 99.4% context grounding and zero generic hallucinations.",
    tech: ["FastAPI", "Llama 3", "Qdrant", "LangChain", "Next.js"],
    link: "/work/reviewboost-ai"
  },
  {
    id: "orbis-compiler",
    title: "Orbis Design Compiler",
    badge: "Internal Product / R&D",
    category: "Multimodal Vision AI",
    heroImage: "/orbis_compiler.png",
    problem: "Translating static visual UI mocks and screenshots into typed, accessible React components creates days of boilerplate frontend engineering.",
    solution: "We developed an agentic compiler using multimodal vision models. The engine extracts bounding boxes and color palettes, transpiles visual hierarchies into clean Tailwind CSS classes, and validates the output in an instant sandboxed iframe.",
    contribution: "Deterministic AST parser, vision prompt constraint schema, and sandboxed preview environment.",
    outcome: "Reduced layout boilerplate scaffolding time from 4 hours to under 30 seconds per component.",
    tech: ["React", "Vision Models", "Tailwind CSS", "TypeScript", "Node.js"],
    link: "/work/orbis-compiler"
  },
  {
    id: "baemark",
    title: "Baemark Store",
    badge: "Client Production Deployment",
    category: "Headless E-Commerce System",
    heroImage: "/baemark_store.png",
    problem: "Standard monolithic Shopify themes suffered from sluggish page loads, heavy bundle bloat, and rigid template layout restrictions for a high-end fashion label.",
    solution: "We decoupled their store by building a headless Next.js frontend integrated with the Shopify Storefront API. Designed with custom Framer Motion transitions, responsive image optimization, and instant cart hydration.",
    contribution: "Complete headless frontend architecture, Storefront API synchronization, and design system.",
    outcome: "Sub-second catalog browsing with 99+ mobile Lighthouse performance and zero layout shift.",
    tech: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Framer Motion"],
    link: "/work/baemark"
  }
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indiaTime, setIndiaTime] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const update = () => {
      const opts = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      } as const;
      const dayOpts = { timeZone: "Asia/Kolkata", weekday: "short" } as const;
      setIndiaTime(
        `${new Date().toLocaleString("en-US", dayOpts)} — ${new Date().toLocaleString("en-US", opts)} — India`
      );
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex-grow w-full bg-brand-cream text-brand-dark pt-16 select-none overflow-x-hidden">
      
      {/* ══════════════════════════════════════════════════════════════════════
          PHASE 2 — RESTORED & ELEVATED REWORKS HERO BOARD CANVAS
          ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={containerRef}
        className="relative w-full overflow-hidden border-b border-brand-dark/15"
        style={{
          minHeight: "92vh",
          backgroundImage: `
            linear-gradient(rgba(18, 19, 20, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(18, 19, 20, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundColor: "#f6f5f2",
        }}
        aria-label="Reworks Studio Interactive Canvas"
      >
        
        {/* ── DRAG TO EXPLORE HINT (DESKTOP ONLY) ── */}
        <div
          className="hidden md:flex absolute font-mono-roboto text-[10px] font-bold tracking-[0.25em] text-brand-dark/40 pointer-events-none z-10 flex-col items-center"
          style={{ top: "3%", left: "50%", transform: "translateX(-50%)" }}
        >
          <span>DRAG ARTIFACTS TO EXPLORE PIPELINE</span>
          <svg width="80" height="12" viewBox="0 0 80 12" className="mt-1">
            <path d="M5 6 Q40 12 75 6" stroke="rgba(18,19,20,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* ── CENTRAL HERO IDENTITY & SHARP POSITIONING ── */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 pt-10 md:pt-16 pb-28 text-center flex flex-col items-center pointer-events-none">
          
          {/* Top Eyebrow Tag */}
          <div className="pointer-events-auto inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-dark text-[11px] font-mono-roboto font-bold tracking-[0.2em] uppercase shadow-[-2px_2px_0px_0px_#121314] mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            AI ENGINEERING &amp; PRODUCTION SOFTWARE STUDIO
          </div>

          {/* Cursive Studio Annotations */}
          <div className="relative inline-block my-2">
            <span
              className="hidden lg:block absolute font-handwriting text-2xl md:text-3xl text-brand-cobalt pointer-events-none"
              style={{
                top: "-42px",
                left: "-95px",
                transform: "rotate(-8deg)",
                whiteSpace: "nowrap",
              }}
            >
              AI Systems &amp; Agents ✦
            </span>

            <span
              className="hidden lg:block absolute font-handwriting text-2xl md:text-3xl text-emerald-600 pointer-events-none"
              style={{
                top: "-38px",
                right: "-110px",
                transform: "rotate(6deg)",
                whiteSpace: "nowrap",
              }}
            >
              Workflow Automation ⚡
            </span>

            {/* Giant Architectural Display Name */}
            <h1
              className="font-anton uppercase tracking-tight text-brand-dark leading-[0.88]"
              style={{
                fontSize: "clamp(64px, 11vw, 150px)",
                textShadow: "4px 4px 0px rgba(27, 67, 244, 0.15)",
              }}
            >
              REWORKS<br />STUDIO
            </h1>

            <span
              className="hidden lg:block absolute font-handwriting text-xl md:text-2xl text-purple-600 pointer-events-none"
              style={{
                bottom: "-32px",
                left: "30px",
                transform: "rotate(-3deg)",
                whiteSpace: "nowrap",
              }}
            >
              Custom Software &amp; Portals
            </span>
          </div>

          {/* Core Value Proposition Narrative */}
          <p className="mt-8 font-sans text-base sm:text-lg md:text-xl text-brand-dark/85 max-w-2xl leading-relaxed pointer-events-auto font-medium">
            We build AI systems and software that move real work forward. Autonomous agents, enterprise workflow automation, and custom full-stack digital products.
          </p>

          {/* Primary & Secondary Conversion Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
            <Link
              href="/connect"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark text-brand-cream font-mono-roboto text-xs font-bold tracking-widest uppercase border-2 border-brand-dark shadow-[-5px_5px_0px_0px_#1b43f4] hover:bg-brand-cobalt hover:shadow-[-5px_5px_0px_0px_#121314] transition-all duration-200 active:translate-x-0.5 active:translate-y-0.5"
            >
              BOOK AN ENGINEERING SCOPING CALL
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-dark font-mono-roboto text-xs font-bold tracking-widest uppercase border-2 border-brand-dark shadow-[-4px_4px_0px_0px_#121314] hover:bg-brand-cream hover:shadow-none transition-all duration-200"
            >
              EXPLORE VERIFIED SYSTEMS
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Metrics Bar Under CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono-roboto text-[11px] text-brand-dark/70 pointer-events-auto">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> 100% IP Ownership
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> Zero Black-Box Lock-in
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600" /> Founder-Led Delivery (Rishi &amp; Navdeep)
            </span>
          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════════════
            SIGNATURE DRAGGABLE ARTIFACTS & TACTILE STICKERS (DESKTOP)
            ════════════════════════════════════════════════════════════════════ */}

        {/* 1. Tactical "Hire Us / Start Project" Button — Top Left */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.05, zIndex: 100 }}
          className="hidden lg:block absolute cursor-grab active:cursor-grabbing z-20"
          style={{ left: "3%", top: "12%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <Link
            href="/connect"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center w-[100px] h-[100px] rounded-full pointer-events-auto text-center border-2 border-brand-dark bg-brand-cobalt text-white shadow-[-4px_4px_0px_0px_#121314] hover:bg-brand-dark transition-colors"
          >
            <div className="font-mono-roboto text-[10px] font-black uppercase tracking-widest leading-tight">
              START<br />A PROJECT<br />✦
            </div>
          </Link>
        </motion.div>

        {/* 2. Reworks Engineering Blueprint Card — Left */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden md:block absolute cursor-grab active:cursor-grabbing z-15"
          style={{ left: "2%", top: "34%" }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.1 }}
        >
          <div className="w-[210px] bg-[#e8dcc8] border-2 border-brand-dark shadow-[-5px_5px_0px_0px_#121314] rounded-sm overflow-hidden transform -rotate-6">
            <div className="bg-[#d4c5a8] border-b border-brand-dark px-3 py-1 flex items-center justify-between">
              <span className="font-mono-roboto text-[9px] font-bold uppercase tracking-wider text-brand-dark">
                ENGINEERING ARCHITECTURE
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="p-3 text-[10px] font-mono-roboto text-brand-dark space-y-2">
              <div className="p-2 bg-white border border-brand-dark text-[9px] space-y-1">
                <div className="text-brand-cobalt font-bold">1. AUTONOMOUS AGENTS</div>
                <div className="text-purple-700 font-bold">2. WORKFLOW AUTOMATION</div>
                <div className="text-emerald-700 font-bold">3. CUSTOM SOFTWARE</div>
              </div>
              <p className="font-sans text-[10px] text-brand-dark/80 leading-snug">
                Production codebases delivered with zero black-box dependencies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. Live AI Chatbot / Tool-Calling Terminal — Top Right */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden md:block absolute cursor-grab active:cursor-grabbing z-16"
          style={{ right: "3%", top: "10%" }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.15 }}
        >
          <div className="w-[220px] bg-white border-2 border-brand-dark shadow-[-6px_6px_0px_0px_#1b43f4] p-3 rounded-none transform rotate-3">
            <div className="flex items-center justify-between border-b border-brand-dark/15 pb-2 mb-2">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-cobalt" />
                <span className="font-mono-roboto text-[9px] font-bold uppercase">REWORKS AI ENGINE</span>
              </div>
              <span className="font-mono-roboto text-[8px] text-emerald-600 font-bold">● ACTIVE</span>
            </div>
            <div className="space-y-1.5 font-mono-roboto text-[9px]">
              <div className="bg-brand-cream p-1.5 border border-brand-dark/10 text-brand-dark">
                &gt; user: &quot;Sync Shopify reviews to Qdrant vector index&quot;
              </div>
              <div className="bg-[#eeedfd] p-1.5 border border-brand-cobalt/30 text-brand-cobalt font-semibold">
                &gt; agent: &quot;Extracted 1,420 items. TTFT: 142ms. Zero hallucination pass.&quot;
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-brand-dark/10 flex items-center justify-between text-[8px] font-mono-roboto text-brand-dark/50">
              <span>LATENCY: 142ms</span>
              <span>LLAMA 3 / QDRANT</span>
            </div>
          </div>
        </motion.div>

        {/* 4. Telemetry Metric Polaroid — Right */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden lg:block absolute cursor-grab active:cursor-grabbing z-14"
          style={{ right: "4%", top: "42%" }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.2 }}
        >
          <div className="w-[190px] bg-white p-3 border-2 border-brand-dark shadow-[-5px_5px_0px_0px_#121314] transform -rotate-3">
            <div className="bg-[#121314] text-white p-2 text-center mb-2">
              <span className="font-mono-roboto text-[9px] font-bold uppercase tracking-wider block">
                PRODUCTION TELEMETRY
              </span>
              <span className="font-anton text-2xl text-emerald-400 block mt-1">
                99.98% SLA
              </span>
            </div>
            <p className="font-mono-roboto text-[9px] text-brand-dark/80 text-center leading-tight">
              Type-safe Next.js 16 + FastAPI Edge pipelines with automated failover.
            </p>
          </div>
        </motion.div>

        {/* 5. Manifesto Quote Card — Left Bottom */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden md:block absolute cursor-grab active:cursor-grabbing z-12"
          style={{ left: "5%", top: "66%" }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.25 }}
        >
          <div className="max-w-[260px] bg-white/95 border-2 border-brand-dark p-3.5 shadow-[-4px_4px_0px_0px_#121314] transform rotate-2">
            <span className="font-serif text-2xl text-brand-cobalt leading-none">&ldquo;</span>
            <p className="font-mono-roboto text-[10px] text-brand-dark/90 leading-relaxed">
              We don&apos;t just build websites — we build <strong>systems</strong>. AI agents that operate 24/7, workflows that save hours, software your users trust.
            </p>
          </div>
        </motion.div>

        {/* 6. Stamp Badge — Bottom Right */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden md:block absolute cursor-grab active:cursor-grabbing z-15"
          style={{ right: "8%", top: "72%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.3 }}
        >
          <div className="w-[90px] h-[90px] rounded-full bg-brand-dark border-2 border-brand-dark flex flex-col items-center justify-center text-center transform -rotate-12 shadow-[-4px_4px_0px_0px_#1b43f4]">
            <span className="font-anton text-[10px] text-brand-cream uppercase tracking-widest leading-tight">
              PRODUCTION<br />GRADE<br />CODE
            </span>
            <span className="text-[12px] text-emerald-400 mt-0.5">✦</span>
          </div>
        </motion.div>

        {/* ── FOOTER STATUS BAR INSIDE THE CANVAS ── */}
        <div
          className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row items-center justify-between font-mono-roboto text-[11px] text-brand-dark/70 z-30 px-6 py-2.5 bg-brand-cream/95 border-t border-brand-dark/15 backdrop-blur-sm gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold uppercase tracking-wider text-brand-dark">Q2 SPRINT CAPACITY: 2 TEAMS OPEN</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-brand-dark/60">
            <span>HQ: GURUGRAM &amp; NARNAUL</span>
            <span>•</span>
            <span className="font-bold text-brand-cobalt">REWORKSSTUDIO.IN</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-brand-dark/80 uppercase">{indiaTime || "IST (UTC+5:30) • India"}</span>
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SIGNATURE TECHNICAL ARTIFACT: INTERACTIVE ARCHITECTURE CANVAS
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-20 border-b border-brand-dark/15 bg-[#121314]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono-roboto text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-400 block mb-1">
                SYSTEM BLUEPRINT
              </span>
              <h2 className="font-anton text-3xl sm:text-5xl tracking-wide uppercase text-brand-cream">
                INTERACTIVE ARCHITECTURE CANVAS
              </h2>
            </div>
            <p className="font-sans text-xs text-brand-cream/70 max-w-md">
              Inspect how Reworks Studio structures multi-agent ingestion, vector search, deterministic tool execution, and voice pipelines.
            </p>
          </div>
          <SystemArchitectureVisualizer />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PHASE 3 — SHARPENED 3 CORE CAPABILITIES SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="services" className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-brand-dark/10 pb-8">
            <div>
              <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase block mb-2">
                CORE DISCIPLINES
              </span>
              <h2 className="font-anton text-4xl sm:text-6xl tracking-tight text-brand-dark uppercase">
                WHAT WE ENGINEER
              </h2>
            </div>
            <p className="font-sans text-sm text-brand-dark/75 max-w-md leading-relaxed">
              We focus on three high-impact capabilities that materially automate operations, elevate product experience, and drive measurable business leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CORE_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="border-2 border-brand-dark p-8 flex flex-col justify-between bg-brand-cream transition-all duration-200 hover:shadow-[-8px_8px_0px_0px_#1b43f4] group"
                style={{ boxShadow: "-5px 5px 0px 0px #121314" }}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono-roboto text-[10px] font-bold tracking-widest uppercase bg-white border border-brand-dark px-2.5 py-1">
                      {cap.badge}
                    </span>
                    <span className="font-anton text-2xl text-brand-dark/40 group-hover:text-brand-cobalt transition-colors">
                      {cap.number}
                    </span>
                  </div>

                  <h3 className="font-anton text-2xl sm:text-3xl tracking-wide uppercase text-brand-dark mb-3">
                    {cap.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-brand-dark/80 leading-relaxed mb-6 font-medium">
                    {cap.tagline}
                  </p>

                  <p className="font-sans text-xs text-brand-dark/70 leading-relaxed mb-6">
                    {cap.desc}
                  </p>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-brand-dark/10">
                    <span className="text-[10px] font-mono-roboto font-bold tracking-wider text-brand-dark/60 uppercase block">
                      PRODUCTION DELIVERABLES:
                    </span>
                    {cap.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs font-sans text-brand-dark/90">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
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
                    className="font-mono-roboto text-xs font-bold tracking-wider uppercase text-brand-dark hover:text-brand-cobalt flex items-center gap-1"
                  >
                    SPECS <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Capabilities Callout */}
          <div className="mt-12 p-6 bg-brand-cream border-2 border-brand-dark flex flex-col md:flex-row items-center justify-between gap-6 shadow-[-4px_4px_0px_0px_#121314]">
            <div className="space-y-1">
              <span className="font-mono-roboto text-[10px] font-bold uppercase tracking-widest text-brand-cobalt">
                SUPPORTING CAPABILITIES
              </span>
              <p className="font-sans text-xs sm:text-sm text-brand-dark/85">
                We also engineer high-performance <strong>SaaS Dashboards</strong>, <strong>Mobile Applications</strong>, and <strong>Sub-400ms Voice Telephony Systems</strong> to support your core products.
              </p>
            </div>
            <Link
              href="/services"
              className="px-6 py-3 bg-brand-dark text-white font-mono-roboto text-xs font-bold tracking-wider uppercase flex-shrink-0 hover:bg-brand-cobalt transition-colors"
            >
              EXPLORE ALL CAPABILITIES →
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PHASE 4 — 3 STRONGEST VERIFIED CASE STUDIES & TECHNICAL PROOF
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="work" className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-brand-dark/10 pb-8">
            <div>
              <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase block mb-2">
                TECHNICAL PROOF OF WORK
              </span>
              <h2 className="font-anton text-4xl sm:text-6xl tracking-tight text-brand-dark uppercase">
                SELECTED CASE STUDIES
              </h2>
            </div>
            <p className="font-sans text-sm text-brand-dark/75 max-w-md leading-relaxed">
              Real problem statements, actual engineering solutions, and measured outcomes. We distinguish clearly between client production and internal R&amp;D.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {VERIFIED_CASE_STUDIES.map((project) => (
              <div
                key={project.id}
                className="border-2 border-brand-dark bg-white p-6 md:p-8 flex flex-col justify-between shadow-[-6px_6px_0px_0px_#121314] hover:shadow-[-8px_8px_0px_0px_#1b43f4] transition-all duration-200 group"
              >
                <div>
                  {/* Hero Screenshot */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-brand-dark mb-6 bg-gray-100">
                    <img
                      src={project.heroImage}
                      alt={`${project.title} Interface`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-dark text-brand-cream text-[9px] font-bold font-mono-roboto px-2.5 py-1 uppercase tracking-widest border border-brand-dark">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono-roboto text-[10px] font-bold text-brand-cobalt uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>

                  <h3 className="font-anton text-2xl sm:text-3xl tracking-wide uppercase text-brand-dark mb-3">
                    {project.title}
                  </h3>

                  {/* Problem & Solution Accordion-style layout */}
                  <div className="space-y-3 mb-6 text-xs font-sans">
                    <div>
                      <strong className="font-mono-roboto text-[9px] uppercase tracking-wider text-brand-dark/60 block mb-0.5">
                        THE CHALLENGE:
                      </strong>
                      <p className="text-brand-dark/80 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <strong className="font-mono-roboto text-[9px] uppercase tracking-wider text-brand-dark/60 block mb-0.5">
                        ENGINEERING SOLUTION:
                      </strong>
                      <p className="text-brand-dark/80 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    <div className="p-3 bg-brand-cream border border-brand-dark/15">
                      <strong className="font-mono-roboto text-[9px] uppercase tracking-wider text-brand-cobalt block mb-0.5">
                        MEASURED IMPACT:
                      </strong>
                      <p className="font-semibold text-brand-dark text-[11px]">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-dark/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="font-mono-roboto text-[9px] font-medium bg-brand-cream border border-brand-dark/20 px-2 py-0.5 text-brand-dark/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1 font-mono-roboto text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-cobalt"
                  >
                    READ DECK <ArrowUpRight className="w-3.5 h-3.5" />
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
              VIEW ALL 6 CASE STUDIES &amp; REPOSITORIES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          HOW REWORKS WORKS — 4-STAGE DELIVERY SPRINT
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase">
            DELIVERY PROTOCOL
          </span>
          <h2 className="font-anton text-4xl md:text-5xl tracking-tight text-brand-dark mt-2 uppercase">
            HOW WE CO-CREATE &amp; SHIP
          </h2>
          <p className="font-sans text-sm text-brand-dark/75 max-w-xl mx-auto mt-3 leading-relaxed">
            A disciplined 4-stage engineering sprint structure eliminating ambiguity, delays, and technical debt.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {[
            {
              step: "01",
              title: "Discovery & System Boundary Mapping",
              summary: "We evaluate constraints, data schemas, compliance boundaries, and success criteria.",
              detail: "Through architectural audits and alignment calls, we map out exact APIs, vector storage requirements, security boundaries, and milestone delivery dates. You receive an exhaustive technical specification document before any code is committed."
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
          RADICAL TRUST & THE NO BLACK-BOX PROMISE
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-16">
            <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase block mb-2">
              RADICAL ACCOUNTABILITY
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
                FOUNDER-LED COLLABORATION
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
          FINAL CONVERSION CTA — PROJECT BRIEF TRANSMISSION
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
