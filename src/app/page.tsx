"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import SystemArchitectureVisualizer from "@/components/SystemArchitectureVisualizer";

// ─── 3 CORE CAPABILITIES ─────────────────────────────────────────────────────
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

// ─── 3 STRONGEST VERIFIED CASE STUDIES ───────────────────────────────────────
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

  const prefersReduced = useReducedMotion();
  const shouldReduceMotion = prefersReduced ?? false;

  // Pointer-responsive parallax values for desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 24 });

  const parallaxStrokeX1 = useTransform(springX, [-20, 20], [12, -12]);
  const parallaxStrokeY1 = useTransform(springY, [-20, 20], [8, -8]);
  const parallaxStrokeX2 = useTransform(springX, [-20, 20], [-14, 14]);
  const parallaxStrokeY2 = useTransform(springY, [-20, 20], [-10, 10]);
  const parallaxDotX = useTransform(springX, [-20, 20], [10, -10]);
  const parallaxDotY = useTransform(springY, [-20, 20], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 24);
    mouseY.set(y * 24);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
        `${new Date().toLocaleString("en-US", dayOpts)} — ${new Date().toLocaleString(
          "en-US",
          opts
        )} — India`
      );
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex-grow w-full bg-brand-cream text-brand-dark select-none overflow-x-hidden">
      
      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — DRAGGABLE BOARD CANVAS (RESTORED ORIGINAL COMPOSITION)
          ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full overflow-hidden border-b border-brand-dark/15 select-none"
        style={{
          height: "100vh",
          minHeight: "740px",
          maxHeight: "1000px",
          paddingTop: "64px",
          backgroundImage: `
            linear-gradient(rgba(170,175,195,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(170,175,195,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundColor: "#f5f3f0",
        }}
        aria-label="Reworks Studio Interactive Canvas"
      >
        
        {/* ── CENTRE HERO NAME (VISUALLY CENTERED ORIGINAL COMPOSITION) ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[40]">
          <motion.div
            className="text-center relative"
            style={{ marginTop: "-20px" }}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* "Web & Apps" — cursive top-left */}
            <motion.div
              className="absolute font-handwriting text-2xl md:text-3xl text-brand-dark select-none"
              style={{
                top: "-55px",
                left: "-50px",
                transform: "rotate(-8deg)",
                whiteSpace: "nowrap",
              }}
              initial={{ opacity: 0, x: -16, rotate: -14 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Web &amp; Apps
            </motion.div>

            {/* "AI Agency" — cursive top-right */}
            <motion.div
              className="absolute font-handwriting text-2xl md:text-3xl text-brand-dark select-none"
              style={{
                top: "-42px",
                right: "-80px",
                transform: "rotate(8deg)",
                whiteSpace: "nowrap",
              }}
              initial={{ opacity: 0, x: 16, rotate: 14 }}
              animate={{ opacity: 1, x: 0, rotate: 8 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              AI Agency
            </motion.div>

            {/* GIANT STUDIO NAME */}
            <h1
              className="font-handwriting font-black text-brand-dark leading-[0.85] tracking-tight select-none"
              style={{
                fontSize: "clamp(64px, 11vw, 170px)",
                textShadow: "3px 4px 0px rgba(0,0,0,0.07)",
              }}
            >
              Reworks
              <br />
              Studio
            </h1>

            {/* "Full-Stack" label below — cursive */}
            <motion.div
              className="absolute font-handwriting text-xl md:text-2xl text-brand-dark select-none"
              style={{
                bottom: "-44px",
                left: "35px",
                transform: "rotate(-3deg)",
                whiteSpace: "nowrap",
              }}
              initial={{ opacity: 0, y: 16, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              Full-Stack
            </motion.div>

            {/* "DRAG TO MOVE" hint integrated beneath center composition */}
            <motion.div
              className="absolute font-mono-roboto text-[9px] font-bold tracking-[0.25em] text-[#888] pointer-events-none select-none"
              style={{
                bottom: "-88px",
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              DRAG TO MOVE
              <svg width="84" height="14" viewBox="0 0 100 18" className="block mt-1 mx-auto">
                <path d="M5 9 Q50 18 95 9" stroke="#999" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* ── DECORATIVE BRUSH STROKES ── */}
        {/* Blue stroke lower-left */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            top: "65%",
            left: "5%",
            zIndex: 2,
            x: shouldReduceMotion ? undefined : parallaxStrokeX1,
            y: shouldReduceMotion ? undefined : parallaxStrokeY1,
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <svg width="120" height="28" viewBox="0 0 120 28">
            <path d="M5 20 Q30 5 60 18 Q90 28 115 12" stroke="#1b43f4" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.9" />
          </svg>
        </motion.div>

        {/* Green stroke lower-right (non-colliding perimeter position) */}
        <motion.div
          className="hidden md:block absolute pointer-events-none"
          style={{
            top: "72%",
            right: "18%",
            zIndex: 2,
            x: shouldReduceMotion ? undefined : parallaxStrokeX2,
            y: shouldReduceMotion ? undefined : parallaxStrokeY2,
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <svg width="170" height="26" viewBox="0 0 180 26">
            <path d="M5 20 Q45 5 90 16 Q130 26 175 10" stroke="#00c850" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.9" />
          </svg>
        </motion.div>

        {/* ── COLOURED ACCENT DOTS ── */}
        <motion.div
          className="absolute w-5 h-5 rounded-full bg-[#ff3eda] pointer-events-none"
          style={{
            top: "14%",
            left: "32%",
            x: shouldReduceMotion ? undefined : parallaxDotX,
            y: shouldReduceMotion ? undefined : parallaxDotY,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
        />
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-[#00c850] pointer-events-none"
          style={{ top: "72%", right: "6%" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.35 }}
        />
        <motion.div
          className="hidden md:block absolute w-4 h-4 rounded-full bg-[#7c3aed] pointer-events-none"
          style={{ top: "74%", right: "30%" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
        />

        {/* ════════════════════════════════════════════════════════════════════
            ALL 11 RESTORED DRAGGABLE STICKERS (PRECISE PERIMETER LAYOUT)
            ════════════════════════════════════════════════════════════════════ */}

        {/* 1. Blue "Hire Us" button — top-left */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.05, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: "3%", top: "10%", zIndex: 25 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.05 }}
        >
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -6, 0],
                    rotate: [0, -2, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 4.8,
              ease: "easeInOut",
            }}
          >
            <Link
              href="/connect"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-[85px] sm:w-[95px] h-[85px] sm:h-[95px] rounded-full pointer-events-auto text-center transition-transform hover:scale-105 active:scale-95"
              style={{
                background: "#1b43f4",
                color: "#fff",
                fontFamily: "Caveat, cursive",
                fontSize: "22px",
                fontWeight: "700",
                border: "2.5px solid #131415",
                boxShadow: "-4px 4px 0px 0px #131415",
              }}
            >
              Hire Us
            </Link>
          </motion.div>
        </motion.div>

        {/* 2. "Services" card — left flank, newspaper-style */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden md:block absolute cursor-grab active:cursor-grabbing"
          style={{ left: "5%", top: "19%", zIndex: 15 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.12 }}
        >
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 7, 0],
                    rotate: [0, 1.5, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 5.4,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <div
              style={{
                width: "175px",
                background: "#e8dcc8",
                border: "2px solid #131415",
                boxShadow: "-5px 5px 0px 0px #131415",
                borderRadius: "4px",
                overflow: "hidden",
                transform: "rotate(-12deg)",
              }}
            >
              <div style={{ background: "#d4c5a8", borderBottom: "1.5px solid #131415", padding: "4px 8px", textAlign: "center" }}>
                <span style={{ fontFamily: "serif", fontSize: "9px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Reworks Daily
                </span>
              </div>
              <div style={{ padding: "10px", background: "#e8dcc8" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "8px" }}>
                  <div style={{ background: "#fff", borderRadius: "4px", padding: "6px", border: "1.5px solid #131415", height: "34px", display: "flex", flexDirection: "column", gap: "3px", justifyContent: "center" }}>
                    <div style={{ height: "4px", background: "#1b43f4", borderRadius: "1px" }} />
                    <div style={{ display: "flex", gap: "2px" }}>
                      <div style={{ width: "60%", height: "8px", background: "#13141520", borderRadius: "1px" }} />
                      <div style={{ width: "40%", height: "8px", background: "#13141510", borderRadius: "1px" }} />
                    </div>
                  </div>
                  <div style={{ background: "#fff", borderRadius: "4px", padding: "6px", border: "1.5px solid #131415", height: "34px", display: "flex", alignItems: "flex-end", gap: "2px", justifyContent: "center" }}>
                    <div style={{ width: "4px", height: "10px", background: "#7c3aed", borderRadius: "1px" }} />
                    <div style={{ width: "4px", height: "18px", background: "#7c3aed", borderRadius: "1px" }} />
                    <div style={{ width: "4px", height: "6px", background: "#7c3aed", borderRadius: "1px" }} />
                  </div>
                  <div style={{ background: "#fff", borderRadius: "4px", padding: "6px", border: "1.5px solid #131415", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff3eda" }} />
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ff3eda", position: "absolute", top: "5px", left: "5px" }} />
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ff3eda", position: "absolute", bottom: "5px", right: "5px" }} />
                  </div>
                  <div style={{ background: "#fff", borderRadius: "4px", padding: "6px", border: "1.5px solid #131415", height: "34px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "12px", height: "20px", border: "1px solid #00c850", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", background: "#e8fff2" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#00c850" }} />
                    </div>
                  </div>
                </div>
                <div style={{ fontFamily: "serif", fontSize: "6.5px", color: "#3a3020", lineHeight: "1.5", textTransform: "uppercase", fontWeight: "700" }}>
                  WE BUILD WEBSITES, APPS, SOFTWARE &amp; AI TOOLS
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3. Magenta soda / "AI" can — right flank perimeter */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden lg:block absolute cursor-grab active:cursor-grabbing"
          style={{ right: "19%", top: "25%", zIndex: 16 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.18 }}
        >
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -7, 0],
                    rotate: [0, -2, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 4.4,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            <div style={{ width: "76px", transform: "rotate(5deg)", border: "2px solid #131415", borderRadius: "14px", overflow: "hidden", boxShadow: "-4px 4px 0px 0px #131415" }}>
              <div style={{ background: "linear-gradient(180deg, #ff3eda 0%, #c200a8 40%, #8a009a 100%)", height: "108px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8px" }}>
                <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "6px", padding: "4px 8px", textAlign: "center", border: "1px solid rgba(255,255,255,0.3)" }}>
                  <div style={{ fontFamily: "Anton, sans-serif", fontSize: "7px", color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: "1.3" }}>
                    AI<br />POWER
                  </div>
                </div>
                <div style={{ fontFamily: "Caveat, cursive", fontSize: "12px", color: "#fff", fontWeight: "700", marginTop: "5px", textAlign: "center" }}>
                  Reworks
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 4. Pink hexagon shape — top center-right sky */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden md:block absolute cursor-grab active:cursor-grabbing"
          style={{ right: "32%", top: "8%", zIndex: 5 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.22 }}
        >
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 6, 0],
                    rotate: [0, 3, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 6.0,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <div style={{ width: "90px", height: "90px", background: "#ff3eda", transform: "rotate(8deg)", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
          </motion.div>
        </motion.div>

        {/* 5. "AI Chatbot" illustration card — top-right */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden md:block absolute cursor-grab active:cursor-grabbing"
          style={{ right: "12%", top: "14%", zIndex: 12 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.16 }}
        >
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -8, 0],
                    rotate: [0, -1.5, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 5.6,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <div style={{ background: "#c8d0f5", padding: "8px", border: "2px solid #131415", boxShadow: "-5px 5px 0px 0px #131415", borderRadius: "4px", transform: "rotate(6deg)", position: "relative" }}>
              {[30, 120].map((pos, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: "-10px",
                    ...(i === 0 ? { left: "30px" } : { right: "30px" }),
                    width: "17px",
                    height: "17px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #4fa8e8, #1b6dc4)",
                    border: "1.5px solid #0d4a8a",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    zIndex: 20
                  }}
                />
              ))}
              <div style={{ width: "170px", height: "130px", background: "#fff", borderRadius: "6px", padding: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", borderBottom: "1px solid #e5e7eb", paddingBottom: "6px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "linear-gradient(135deg, #1b43f4, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <circle cx="8.5" cy="16.5" r="1.5" fill="currentColor" />
                      <circle cx="15.5" cy="16.5" r="1.5" fill="currentColor" />
                      <path d="M12 2v4M12 6H8m4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "monospace", fontSize: "8px", fontWeight: "700" }}>Reworks AI</div>
                    <div style={{ fontFamily: "monospace", fontSize: "6px", color: "#00c850" }}>● Online</div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ background: "#e8eeff", borderRadius: "8px 8px 2px 8px", padding: "4px 8px", fontSize: "7px", maxWidth: "75%", fontFamily: "monospace", color: "#1b43f4" }}>
                    Hello! Build me an app ✦
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ background: "#f3f4f6", borderRadius: "8px 8px 8px 2px", padding: "4px 8px", fontSize: "7px", maxWidth: "80%", fontFamily: "monospace", color: "#555" }}>
                    On it! What kind of app? ⚡
                  </div>
                </div>
                <div style={{ display: "flex", gap: "3px", paddingLeft: "4px" }}>
                  {[0,1,2].map((i) => (
                    <div key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#7c3aed", opacity: 0.5 + i * 0.2 }} />
                  ))}
                </div>
              </div>
              <div style={{ position: "absolute", bottom: "-16px", right: "-20px", width: "50px", height: "50px", background: "#00c850", border: "2px solid #131415", boxShadow: "-3px 3px 0px 0px #131415" }} />
              <div style={{ fontFamily: "Caveat, cursive", fontSize: "11px", fontWeight: "700", textAlign: "center", marginTop: "6px", color: "#1a1a1a" }}>
                AI Chatbot ✦
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 6. Top-right polaroid — abstract dashboard screenshot */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden sm:block absolute cursor-grab active:cursor-grabbing"
          style={{ right: "3%", top: "8%", zIndex: 18 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.08 }}
        >
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 6, 0],
                    rotate: [0, 2, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 5.0,
              ease: "easeInOut",
              delay: 0.15,
            }}
          >
            <div style={{ background: "#fff", padding: "7px 7px 18px", border: "1.5px solid #ccc", boxShadow: "0 4px 18px rgba(0,0,0,0.13)", transform: "rotate(12deg)", width: "125px", position: "relative" }}>
              <svg viewBox="0 0 110 80" width="111" height="76">
                <rect width="110" height="80" fill="#0f172a" rx="4" />
                <rect x="0" y="0" width="22" height="80" fill="#1e293b" />
                {[12, 24, 36, 48].map((y) => (
                  <circle key={y} cx="11" cy={y} r="4" fill="#334155" />
                ))}
                <circle cx="11" cy="12" r="4" fill="#1b43f4" />
                <rect x="28" y="8" width="38" height="20" rx="3" fill="#1e293b" />
                <rect x="28" y="8" width="8" height="20" rx="3" fill="#1b43f4" />
                <rect x="70" y="8" width="34" height="20" rx="3" fill="#1e293b" />
                <rect x="70" y="8" width="8" height="20" rx="3" fill="#7c3aed" />
                <rect x="28" y="34" width="76" height="38" rx="3" fill="#1e293b" />
                {[20, 30, 18, 35, 25].map((h, i) => (
                  <rect key={i} x={34 + i * 14} y={66 - h} width="10" height={h} rx="2" fill={["#1b43f4","#7c3aed","#ff3eda","#00c850","#f97316"][i]} />
                ))}
              </svg>
              <div style={{ fontFamily: "Caveat, cursive", fontSize: "11px", fontWeight: "700", textAlign: "center", marginTop: "5px", color: "#333" }}>
                Dashboard ✦
              </div>
              <div style={{ position: "absolute", top: "7px", right: "7px", fontFamily: "monospace", fontSize: "7px", color: "#888" }}>v2</div>
            </div>
          </motion.div>
        </motion.div>

        {/* 7. Left quote card #1 */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden md:block absolute cursor-grab active:cursor-grabbing"
          style={{ left: "3%", top: "45%", zIndex: 14 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.28 }}
        >
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -6, 0],
                    rotate: [0, -1, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 6.2,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div style={{ maxWidth: "250px", background: "rgba(242,242,240,0.97)", padding: "12px 14px", border: "1.5px solid rgba(0,0,0,0.12)", borderRadius: "4px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", transform: "rotate(-2deg)" }}>
              <span style={{ fontFamily: "serif", fontSize: "24px", color: "#333", lineHeight: "0", verticalAlign: "-8px", marginRight: "2px" }}>&ldquo;</span>
              <span style={{ fontFamily: "Roboto Mono, monospace", fontSize: "10px", lineHeight: "1.65", color: "#222" }}>
                We turn your ideas into{" "}
                <span style={{ background: "#00c850", padding: "1px 4px", borderRadius: "2px" }}>digital products</span>{" "}
                that scale. From concept to deployment — we handle every layer.
              </span>
              <span style={{ fontFamily: "serif", fontSize: "24px", color: "#333", lineHeight: "0", verticalAlign: "-8px", marginLeft: "2px" }}>&rdquo;</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 8. Abstract workflow illustration — lower left */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden md:block absolute cursor-grab active:cursor-grabbing"
          style={{ left: "14%", top: "58%", zIndex: 12 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.25 }}
        >
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 7, 0],
                    rotate: [0, 2, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 5.5,
              ease: "easeInOut",
              delay: 0.35,
            }}
          >
            <div style={{ width: "155px", height: "135px", background: "#e2eaff", borderRadius: "50%", border: "2px solid #131415", boxShadow: "-4px 4px 0px 0px #131415", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(3deg)" }}>
              <svg viewBox="0 0 160 140" width="155" height="135">
                <rect width="160" height="140" fill="#dce8ff" />
                {[
                  { x: 20, y: 40, color: "#1b43f4", label: "Input" },
                  { x: 70, y: 65, color: "#7c3aed", label: "AI" },
                  { x: 120, y: 40, color: "#00c850", label: "Output" },
                ].map((n) => (
                  <g key={n.label}>
                    <circle cx={n.x} cy={n.y} r="14" fill={n.color} opacity="0.9" />
                    <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold" fontFamily="monospace">{n.label}</text>
                  </g>
                ))}
                <line x1="34" y1="45" x2="56" y2="58" stroke="#131415" strokeWidth="2" markerEnd="url(#ar2)" />
                <line x1="84" y1="58" x2="106" y2="46" stroke="#131415" strokeWidth="2" />
                <defs><marker id="ar2" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto"><polygon points="0 0, 4 2, 0 4" fill="#131415" /></marker></defs>
                <path d="M20 80 Q80 50 140 80" stroke="#1b43f4" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="4,4" />
                <path d="M20 95 Q80 65 140 95" stroke="#7c3aed" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="4,4" />
                <text x="70" y="115" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="bold" fontFamily="Caveat, cursive">AI Workflow</text>
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* 9. Phone mockup — lower right flank */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden md:block absolute cursor-grab active:cursor-grabbing"
          style={{ right: "14%", top: "56%", zIndex: 15 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.2 }}
        >
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -7, 0],
                    rotate: [0, -1.5, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 4.6,
              ease: "easeInOut",
              delay: 0.45,
            }}
          >
            <div style={{ transform: "rotate(-5deg)" }}>
              <svg viewBox="0 0 90 160" width="85" height="150">
                <rect x="5" y="5" width="80" height="150" rx="14" fill="#131415" />
                <rect x="8" y="8" width="74" height="144" rx="12" fill="#0f172a" />
                <rect x="30" y="10" width="30" height="6" rx="3" fill="#131415" />
                <rect x="14" y="22" width="62" height="110" rx="4" fill="#1e293b" />
                <rect x="14" y="22" width="62" height="14" rx="4" fill="#1b43f4" />
                <text x="45" y="32" textAnchor="middle" fill="#fff" fontSize="6" fontFamily="monospace" fontWeight="bold">Reworks App</text>
                <rect x="18" y="42" width="54" height="28" rx="4" fill="#2d3748" />
                <circle cx="28" cy="56" r="8" fill="#7c3aed" />
                <rect x="40" y="50" width="28" height="4" rx="2" fill="#4a5568" />
                <rect x="40" y="57" width="18" height="3" rx="1" fill="#2d3748" />
                <rect x="18" y="76" width="54" height="28" rx="4" fill="#2d3748" />
                <circle cx="28" cy="90" r="8" fill="#ff3eda" />
                <rect x="40" y="84" width="28" height="4" rx="2" fill="#4a5568" />
                <rect x="40" y="91" width="18" height="3" rx="1" fill="#2d3748" />
                <rect x="14" y="108" width="62" height="24" rx="4" fill="#1e293b" />
                <path d="M19 123 L22 120 L25 123 L25 126 L23 126 L23 124 L21 124 L21 126 L19 126 Z" fill="#fff" />
                <circle cx="37" cy="122" r="1.5" stroke="#fff" strokeWidth="0.8" fill="none" />
                <line x1="38.2" y1="123.2" x2="39.8" y2="124.8" stroke="#fff" strokeWidth="0.8" />
                <rect x="51.5" y="121" width="5" height="4" rx="0.5" fill="none" stroke="#fff" strokeWidth="0.8" />
                <line x1="54" y1="120" x2="54" y2="121" stroke="#fff" strokeWidth="0.8" />
                <circle cx="70" cy="123" r="1.8" stroke="#fff" strokeWidth="0.8" fill="none" />
                <circle cx="70" cy="123" r="0.5" fill="#fff" />
                <rect x="30" y="143" width="30" height="3" rx="1.5" fill="#333" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* 10. Right quote card #2 — middle right flank */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="hidden md:block absolute cursor-grab active:cursor-grabbing"
          style={{ right: "4%", top: "42%", zIndex: 14 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.33 }}
        >
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 6, 0],
                    rotate: [0, 1, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 5.8,
              ease: "easeInOut",
              delay: 0.25,
            }}
          >
            <div style={{ maxWidth: "260px", background: "rgba(242,242,240,0.97)", padding: "12px 14px", border: "1.5px solid rgba(0,0,0,0.10)", borderRadius: "4px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", transform: "rotate(1.5deg)", fontFamily: "Roboto Mono, monospace", fontSize: "10px", lineHeight: "1.65", color: "#222" }}>
              <span style={{ fontFamily: "serif", fontSize: "24px", color: "#333", lineHeight: "0", verticalAlign: "-8px", marginRight: "2px" }}>&ldquo;</span>
              We don&apos;t just build websites — we build{" "}
              <em>systems</em>. AI agents that work 24/7, workflows that save hours, apps your users love. One studio. Every layer.
              <span style={{ fontFamily: "serif", fontSize: "24px", color: "#333", lineHeight: "0", verticalAlign: "-8px", marginLeft: "2px" }}>&rdquo;</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 11. DRAG DROP SHOW stamp — lower left */}
        <motion.div
          drag={!isMobile}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: "4%", top: "74%", zIndex: 22 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.38 }}
        >
          <motion.div
            initial={{ y: 0, rotate: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -5, 0],
                    rotate: [0, -2, 0],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div style={{ width: "84px", height: "84px", borderRadius: "50%", background: "#131415", border: "3px solid #131415", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: "rotate(-10deg)", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}>
              <div style={{ fontFamily: "Anton, sans-serif", fontSize: "10px", color: "#adff2f", letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: "1.4", textAlign: "center" }}>
                DRAG<br />DROP<br />SHOW
              </div>
              <div style={{ fontSize: "14px", marginTop: "2px" }}>☞</div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FOOTER STATUS BAR INSIDE THE CANVAS ── */}
        <div
          className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row items-center justify-between font-mono-roboto text-xs text-[#555] z-30 px-6 sm:px-10 py-2.5 gap-2 border-t border-black/10 backdrop-blur-md"
          style={{ background: "rgba(245,243,240,0.92)" }}
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1b43f4]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />
            <span className="font-semibold text-brand-dark/80">Available to build</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wider text-brand-cobalt">reworksstudio.in</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3eda]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00c850] animate-pulse" />
            <span className="font-semibold text-brand-dark/80">{indiaTime || "IST (UTC+5:30) • India"}</span>
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SIGNATURE TECHNICAL ARTIFACT: INTERACTIVE ARCHITECTURE CANVAS
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-20 border-b border-brand-dark/15 bg-[#121314]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
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
          </motion.div>
          <SystemArchitectureVisualizer />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PHASE 3 — 3 CORE CAPABILITIES SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="services" className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-brand-dark/10 pb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
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
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CORE_CAPABILITIES.map((cap, idx) => (
              <motion.div
                key={cap.id}
                className="border-2 border-brand-dark p-8 flex flex-col justify-between bg-brand-cream group"
                style={{ boxShadow: "-5px 5px 0px 0px #121314" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{
                  y: -6,
                  boxShadow: "-8px 8px 0px 0px #1b43f4",
                  transition: { duration: 0.2 },
                }}
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
                    className="font-mono-roboto text-xs font-bold tracking-wider uppercase text-brand-dark hover:text-brand-cobalt flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    SPECS <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Supporting Capabilities Callout */}
          <motion.div
            className="mt-12 p-6 bg-brand-cream border-2 border-brand-dark flex flex-col md:flex-row items-center justify-between gap-6 shadow-[-4px_4px_0px_0px_#121314]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
              className="px-6 py-3 bg-brand-dark text-white font-mono-roboto text-xs font-bold tracking-wider uppercase flex-shrink-0 hover:bg-brand-cobalt transition-colors active:translate-y-0.5"
            >
              EXPLORE ALL CAPABILITIES →
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PHASE 4 — 3 STRONGEST VERIFIED CASE STUDIES & TECHNICAL PROOF
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="work" className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-brand-dark/10 pb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
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
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {VERIFIED_CASE_STUDIES.map((project, idx) => (
              <motion.div
                key={project.id}
                className="border-2 border-brand-dark bg-white p-6 md:p-8 flex flex-col justify-between group"
                style={{ boxShadow: "-6px 6px 0px 0px #121314" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{
                  y: -6,
                  boxShadow: "-8px 8px 0px 0px #1b43f4",
                  transition: { duration: 0.2 },
                }}
              >
                <div>
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
                    className="inline-flex items-center gap-1 font-mono-roboto text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-cobalt group-hover:translate-x-1 transition-transform"
                  >
                    READ DECK <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono-roboto text-xs font-bold tracking-widest uppercase px-8 py-4 bg-brand-dark text-brand-cream border-2 border-brand-dark shadow-[-4px_4px_0px_0px_#1b43f4] hover:bg-brand-cobalt transition-colors active:translate-y-0.5"
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
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase">
            DELIVERY PROTOCOL
          </span>
          <h2 className="font-anton text-4xl md:text-5xl tracking-tight text-brand-dark mt-2 uppercase">
            HOW WE CO-CREATE &amp; SHIP
          </h2>
          <p className="font-sans text-sm text-brand-dark/75 max-w-xl mx-auto mt-3 leading-relaxed">
            A disciplined 4-stage engineering sprint structure eliminating ambiguity, delays, and technical debt.
          </p>
        </motion.div>

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
              <motion.div
                key={idx}
                className="border-2 border-brand-dark bg-brand-cream cursor-pointer overflow-hidden transition-all duration-200"
                style={{ boxShadow: isOpen ? "-5px 5px 0px 0px #1b43f4" : "-3px 3px 0px 0px #121314" }}
                onClick={() => setActiveProcessStep(idx)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
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
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RADICAL TRUST & THE NO BLACK-BOX PROMISE
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            className="max-w-3xl mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase block mb-2">
              RADICAL ACCOUNTABILITY
            </span>
            <h2 className="font-anton text-4xl sm:text-6xl tracking-tight text-brand-dark uppercase">
              THE NO BLACK-BOX PRINCIPLE
            </h2>
            <p className="font-sans text-sm text-brand-dark/80 mt-4 leading-relaxed">
              We operate as a founder-led engineering studio. That means direct access to technical architects, total code ownership, and zero agency theater.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "TOTAL IP & REPO ACCESS",
                desc: "You receive full admin rights to private Git repositories from sprint one. No hostage code, no proprietary runtime dependencies, no vendor lock-in."
              },
              {
                num: "02",
                title: "FOUNDER-LED COLLABORATION",
                desc: "Founded by Rishi Yadav & Navdeep Bhardwaj. You collaborate directly with experienced builders who write production code, not junior account managers."
              },
              {
                num: "03",
                title: "TRANSPARENT FIXED SCOPE",
                desc: "Every sprint is bound by explicit deliverables and milestones. We don't bill for open-ended discovery hours or pad invoices with unnecessary bloat."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={pillar.num}
                className="border-2 border-brand-dark p-8 bg-white shadow-[-5px_5px_0px_0px_#121314]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -4, boxShadow: "-7px 7px 0px 0px #1b43f4" }}
              >
                <div className="w-10 h-10 border border-brand-dark bg-brand-cream flex items-center justify-center font-mono-roboto font-bold mb-6">
                  {pillar.num}
                </div>
                <h3 className="font-anton text-xl uppercase tracking-wider mb-2 text-brand-dark">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs text-brand-dark/75 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TECHNICAL FAQ
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-12 py-24 border-b border-brand-dark/15 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cobalt uppercase">
            CLEAR ANSWERS
          </span>
          <h2 className="font-anton text-4xl md:text-5xl tracking-tight text-brand-dark mt-2 uppercase">
            COMMONLY ASKED QUESTIONS
          </h2>
        </motion.div>

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
              <motion.div
                key={idx}
                className="border-2 border-brand-dark bg-brand-cream overflow-hidden transition-all duration-200"
                style={{ boxShadow: "-3px 3px 0px 0px #121314" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
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
              </motion.div>
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

        <motion.div
          className="max-w-4xl mx-auto relative z-10 space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
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
              className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-white text-brand-dark font-mono-roboto text-xs font-bold tracking-widest uppercase border-2 border-white shadow-[-5px_5px_0px_0px_#1b43f4] hover:bg-brand-cobalt hover:text-white transition-all duration-200 active:translate-y-0.5"
            >
              TRANSMIT PROJECT BRIEF ✦
            </Link>
            <a
              href="mailto:hello@reworksstudio.in"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-transparent text-brand-cream font-mono-roboto text-xs font-bold tracking-widest uppercase border-2 border-brand-cream/30 hover:border-brand-cream transition-colors active:translate-y-0.5"
            >
              DIRECT EMAIL: HELLO@REWORKSSTUDIO.IN
            </a>
          </div>

          <div className="pt-8 font-mono-roboto text-[11px] text-brand-cream/50 flex flex-wrap items-center justify-center gap-4">
            <span>● 24H SLA ON TECHNICAL ENQUIRIES</span>
            <span>● MUTUAL NDA READY</span>
            <span>● FOUNDER-DIRECT REVIEW</span>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
