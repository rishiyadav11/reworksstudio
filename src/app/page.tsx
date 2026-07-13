"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Plus, Minus, ArrowUpRight, Check, HelpCircle, Code, Paintbrush, Cpu, Send } from "lucide-react";

// ─── SERVICES (portfolio grid section) ──────────────────────────────────────
const SERVICES = [
  {
    id: "web-portfolio",
    label: "Portfolio Websites",
    color: "#1b43f4",
    bg: "#e8eeff",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dashboard",
    label: "SaaS Dashboards",
    color: "#7c3aed",
    bg: "#f0eaff",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "software",
    label: "Custom Software",
    color: "#f97316",
    bg: "#fff2e8",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "apps",
    label: "Mobile Apps",
    color: "#00c850",
    bg: "#e8fff2",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    color: "#ff3eda",
    bg: "#ffe8fb",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ai-workflows",
    label: "AI Workflows",
    color: "#1b43f4",
    bg: "#e8eeff",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ai-chatbots",
    label: "AI Chatbots",
    color: "#7c3aed",
    bg: "#f0eaff",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ai-tools",
    label: "Custom AI Tools",
    color: "#f97316",
    bg: "#fff2e8",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
];


// ─── SECTION 2 labels (like "Motion Designer" / "Illustrator" on Tanaya's site)
const BIG_LABELS = [
  { text: "AI Agency", color: "#ff3eda" },
  { text: "Web Studio", color: "#00c850" },
];

export default function Board() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indiaTime, setIndiaTime] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

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
    <div className="flex-grow w-full bg-brand-cream select-none">
      {/* ══════════════════════════════════════════
          SECTION 1 — DRAGGABLE BOARD CANVAS
          ══════════════════════════════════════════ */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{
          minHeight: "100vh",
          paddingTop: "56px", /* navbar height */
          backgroundImage: `
            linear-gradient(rgba(170,175,195,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(170,175,195,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundColor: "#f5f3f0",
        }}
      >
        {/* ── CENTRE HERO NAME ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <div className="text-center relative" style={{ marginTop: "-40px" }}>
            {/* "Web & Apps" — cursive top-left */}
            <div
              className="absolute font-handwriting text-2xl md:text-3xl text-brand-dark"
              style={{
                top: "-60px",
                left: "-60px",
                transform: "rotate(-8deg)",
                whiteSpace: "nowrap",
              }}
            >
              Web &amp; Apps
            </div>

            {/* "AI Agency" — cursive top-right */}
            <div
              className="absolute font-handwriting text-2xl md:text-3xl text-brand-dark"
              style={{
                top: "-45px",
                right: "-90px",
                transform: "rotate(8deg)",
                whiteSpace: "nowrap",
              }}
            >
              AI Agency
            </div>

            {/* GIANT STUDIO NAME */}
            <h1
              className="font-handwriting font-black text-brand-dark leading-[0.85] tracking-tight"
              style={{
                fontSize: "clamp(72px, 12vw, 180px)",
                textShadow: "3px 4px 0px rgba(0,0,0,0.07)",
              }}
            >
              Reworks
              <br />
              Studio
            </h1>

            {/* "Full-Stack" label below — cursive */}
            <div
              className="absolute font-handwriting text-xl md:text-2xl text-brand-dark"
              style={{
                bottom: "-48px",
                left: "40px",
                transform: "rotate(-3deg)",
                whiteSpace: "nowrap",
              }}
            >
              Full-Stack
            </div>
          </div>
        </div>

        {/* ── DRAG TO MOVE hint ── */}
        <div
          className="absolute font-mono-roboto text-[10px] font-bold tracking-[0.25em] text-[#888] pointer-events-none"
          style={{ top: "58%", left: "50%", transform: "translateX(-50%)" }}
        >
          DRAG TO MOVE
          <svg width="100" height="18" viewBox="0 0 100 18" className="block mt-1 mx-auto">
            <path d="M5 9 Q50 18 95 9" stroke="#999" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* ── DECORATIVE BRUSH STROKES ── */}
        {/* Blue stroke left */}
        <div className="absolute pointer-events-none" style={{ top: "62%", left: "5%", zIndex: 2 }}>
          <svg width="120" height="28" viewBox="0 0 120 28">
            <path d="M5 20 Q30 5 60 18 Q90 28 115 12" stroke="#1b43f4" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.9" />
          </svg>
        </div>
        {/* Green stroke center-right */}
        <div className="absolute pointer-events-none" style={{ top: "53%", left: "44%", zIndex: 2 }}>
          <svg width="180" height="26" viewBox="0 0 180 26">
            <path d="M5 20 Q45 5 90 16 Q130 26 175 10" stroke="#00c850" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.9" />
          </svg>
        </div>

        {/* ── COLOURED DOTS ── */}
        <div className="absolute w-5 h-5 rounded-full bg-[#ff3eda] pointer-events-none" style={{ top: "16%", left: "57%" }} />
        <div className="absolute w-4 h-4 rounded-full bg-[#00c850] pointer-events-none" style={{ top: "72%", right: "4%" }} />
        <div className="absolute w-4 h-4 rounded-full bg-[#7c3aed] pointer-events-none" style={{ top: "70%", right: "24%" }} />

        {/* ══ DRAGGABLE STICKERS ══ */}

        {/* 1. Blue "Hire Us" button — top-left */}
        <motion.div
          drag dragConstraints={containerRef} dragElastic={0.08} dragMomentum={false}
          whileDrag={{ scale: 1.05, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: "2%", top: "8%", zIndex: 20 }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.05 }}
        >
          <Link
            href="/connect"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center w-[90px] h-[90px] rounded-full pointer-events-auto text-center"
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

        {/* 2. "Services" card — left side, newspaper-style */}
        <motion.div
          drag dragConstraints={containerRef} dragElastic={0.08} dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: "22%", top: "16%", zIndex: 15 }}
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.12 }}
        >
          <div
            style={{
              width: "180px",
              background: "#e8dcc8",
              border: "2px solid #131415",
              boxShadow: "-5px 5px 0px 0px #131415",
              borderRadius: "4px",
              overflow: "hidden",
              transform: "rotate(-12deg)",
            }}
          >
            {/* Header */}
            <div style={{ background: "#d4c5a8", borderBottom: "1.5px solid #131415", padding: "4px 8px", textAlign: "center" }}>
              <span style={{ fontFamily: "serif", fontSize: "9px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Reworks Daily
              </span>
            </div>
            {/* Content illustration */}
            <div style={{ padding: "10px", background: "#e8dcc8" }}>
              {/* Mini service grid illustration */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "8px" }}>
                {/* 1. Web wireframe */}
                <div style={{ background: "#fff", borderRadius: "4px", padding: "6px", border: "1.5px solid #131415", height: "34px", display: "flex", flexDirection: "column", gap: "3px", justifyContent: "center" }}>
                  <div style={{ height: "4px", background: "#1b43f4", borderRadius: "1px" }} />
                  <div style={{ display: "flex", gap: "2px" }}>
                    <div style={{ width: "60%", height: "8px", background: "#13141520", borderRadius: "1px" }} />
                    <div style={{ width: "40%", height: "8px", background: "#13141510", borderRadius: "1px" }} />
                  </div>
                </div>
                {/* 2. Chart wireframe */}
                <div style={{ background: "#fff", borderRadius: "4px", padding: "6px", border: "1.5px solid #131415", height: "34px", display: "flex", alignItems: "flex-end", gap: "2px", justifyContent: "center" }}>
                  <div style={{ width: "4px", height: "10px", background: "#7c3aed", borderRadius: "1px" }} />
                  <div style={{ width: "4px", height: "18px", background: "#7c3aed", borderRadius: "1px" }} />
                  <div style={{ width: "4px", height: "6px", background: "#7c3aed", borderRadius: "1px" }} />
                </div>
                {/* 3. AI Brain wireframe */}
                <div style={{ background: "#fff", borderRadius: "4px", padding: "6px", border: "1.5px solid #131415", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff3eda" }} />
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ff3eda", position: "absolute", top: "5px", left: "5px" }} />
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ff3eda", position: "absolute", bottom: "5px", right: "5px" }} />
                </div>
                {/* 4. Mobile phone wireframe */}
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

        {/* 3. Magenta soda / "AI" can — center */}
        <motion.div
          drag dragConstraints={containerRef} dragElastic={0.08} dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: "43%", top: "19%", zIndex: 16 }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.18 }}
        >
          <div style={{ width: "78px", transform: "rotate(5deg)", border: "2px solid #131415", borderRadius: "14px", overflow: "hidden", boxShadow: "-4px 4px 0px 0px #131415" }}>
            <div style={{ background: "linear-gradient(180deg, #ff3eda 0%, #c200a8 40%, #8a009a 100%)", height: "112px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8px" }}>
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

        {/* 4. Pink hexagon shape */}
        <motion.div
          drag dragConstraints={containerRef} dragElastic={0.08} dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: "53%", top: "20%", zIndex: 8 }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.22 }}
        >
          <div style={{ width: "100px", height: "100px", background: "#ff3eda", transform: "rotate(8deg)", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
        </motion.div>

        {/* 5. "AI Chatbot" illustration card — right side */}
        <motion.div
          drag dragConstraints={containerRef} dragElastic={0.08} dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ right: "5%", top: "12%", zIndex: 12 }}
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.16 }}
        >
          <div style={{ background: "#c8d0f5", padding: "8px", border: "2px solid #131415", boxShadow: "-5px 5px 0px 0px #131415", borderRadius: "4px", transform: "rotate(6deg)", position: "relative" }}>
            {/* Pin dots */}
            {[30, "right: 30px"].map((pos, i) => (
              <div key={i} style={{ position: "absolute", top: "-10px", ...(i === 0 ? { left: "30px" } : { right: "30px" }), width: "17px", height: "17px", borderRadius: "50%", background: "linear-gradient(135deg, #4fa8e8, #1b6dc4)", border: "1.5px solid #0d4a8a", boxShadow: "0 2px 4px rgba(0,0,0,0.3)", zIndex: 20 }} />
            ))}
            {/* Chat UI illustration */}
            <div style={{ width: "175px", height: "135px", background: "#fff", borderRadius: "6px", padding: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
              {/* Bot header */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", borderBottom: "1px solid #e5e7eb", paddingBottom: "6px" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "linear-gradient(135deg, #1b43f4, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
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
              {/* Chat bubbles */}
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
              {/* Typing indicator */}
              <div style={{ display: "flex", gap: "3px", paddingLeft: "4px" }}>
                {[0,1,2].map((i) => (
                  <div key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#7c3aed", opacity: 0.5 + i * 0.2 }} />
                ))}
              </div>
            </div>
            {/* Green accent square */}
            <div style={{ position: "absolute", bottom: "-18px", right: "-22px", width: "55px", height: "55px", background: "#00c850", border: "2px solid #131415", boxShadow: "-3px 3px 0px 0px #131415" }} />
            <div style={{ fontFamily: "Caveat, cursive", fontSize: "11px", fontWeight: "700", textAlign: "center", marginTop: "6px", color: "#1a1a1a" }}>
              AI Chatbot ✦
            </div>
          </div>
        </motion.div>

        {/* 6. Top-right polaroid — abstract dashboard screenshot */}
        <motion.div
          drag dragConstraints={containerRef} dragElastic={0.08} dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ right: "1%", top: "2%", zIndex: 16 }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.08 }}
        >
          <div style={{ background: "#fff", padding: "7px 7px 20px", border: "1.5px solid #ccc", boxShadow: "0 4px 18px rgba(0,0,0,0.13)", transform: "rotate(12deg)", width: "130px" }}>
            {/* Mini dashboard illustration */}
            <svg viewBox="0 0 110 80" width="116" height="80">
              <rect width="110" height="80" fill="#0f172a" rx="4" />
              {/* Sidebar */}
              <rect x="0" y="0" width="22" height="80" fill="#1e293b" />
              {/* Nav dots */}
              {[12, 24, 36, 48].map((y) => (
                <circle key={y} cx="11" cy={y} r="4" fill="#334155" />
              ))}
              <circle cx="11" cy="12" r="4" fill="#1b43f4" />
              {/* Main area cards */}
              <rect x="28" y="8" width="38" height="20" rx="3" fill="#1e293b" />
              <rect x="28" y="8" width="8" height="20" rx="3" fill="#1b43f4" />
              <rect x="70" y="8" width="34" height="20" rx="3" fill="#1e293b" />
              <rect x="70" y="8" width="8" height="20" rx="3" fill="#7c3aed" />
              {/* Chart bars */}
              <rect x="28" y="34" width="76" height="38" rx="3" fill="#1e293b" />
              {[0,1,2,3,4].map((i) => {
                const h = [20,30,18,35,25][i];
                return <rect key={i} x={34 + i * 14} y={66 - h} width="10" height={h} rx="2" fill={["#1b43f4","#7c3aed","#ff3eda","#00c850","#f97316"][i]} />;
              })}
            </svg>
            <div style={{ fontFamily: "Caveat, cursive", fontSize: "11px", fontWeight: "700", textAlign: "center", marginTop: "6px", color: "#333" }}>
              Dashboard ✨
            </div>
            <div style={{ position: "absolute", top: "8px", right: "8px", fontFamily: "monospace", fontSize: "7px", color: "#888" }}>v2</div>
          </div>
        </motion.div>

        {/* 7. Left quote card #1 */}
        <motion.div
          drag dragConstraints={containerRef} dragElastic={0.08} dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: "2%", top: "46%", zIndex: 8 }}
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.28 }}
        >
          <div style={{ maxWidth: "268px", background: "rgba(242,242,240,0.97)", padding: "14px 16px", border: "1.5px solid rgba(0,0,0,0.12)", borderRadius: "4px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", transform: "rotate(-2deg)" }}>
            <span style={{ fontFamily: "serif", fontSize: "28px", color: "#333", lineHeight: "0", verticalAlign: "-10px", marginRight: "2px" }}>&ldquo;</span>
            <span style={{ fontFamily: "Roboto Mono, monospace", fontSize: "10.5px", lineHeight: "1.7", color: "#222" }}>
              We turn your ideas into{" "}
              <span style={{ background: "#00c850", padding: "1px 4px", borderRadius: "2px" }}>digital products</span>{" "}
              that scale. From concept to deployment — we handle every layer.
            </span>
            <span style={{ fontFamily: "serif", fontSize: "28px", color: "#333", lineHeight: "0", verticalAlign: "-10px", marginLeft: "2px" }}>&rdquo;</span>
          </div>
        </motion.div>

        {/* 8. Abstract workflow illustration — lower left */}
        <motion.div
          drag dragConstraints={containerRef} dragElastic={0.08} dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: "16%", top: "63%", zIndex: 11 }}
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.25 }}
        >
          {/* Workflow / pipeline illustration */}
          <div style={{ width: "170px", height: "150px", background: "#e2eaff", borderRadius: "50%", border: "2px solid #131415", boxShadow: "-4px 4px 0px 0px #131415", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(3deg)" }}>
            <svg viewBox="0 0 160 140" width="160" height="140">
              <rect width="160" height="140" fill="#dce8ff" />
              {/* Pipeline nodes */}
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
              {/* Arrows */}
              <line x1="34" y1="45" x2="56" y2="58" stroke="#131415" strokeWidth="2" markerEnd="url(#ar)" />
              <line x1="84" y1="58" x2="106" y2="46" stroke="#131415" strokeWidth="2" />
              <defs><marker id="ar" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto"><polygon points="0 0, 4 2, 0 4" fill="#131415" /></marker></defs>
              {/* Looping lines decoration */}
              <path d="M20 80 Q80 50 140 80" stroke="#1b43f4" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="4,4" />
              <path d="M20 95 Q80 65 140 95" stroke="#7c3aed" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="4,4" />
              {/* "n8n" label */}
              <text x="70" y="115" textAnchor="middle" fill="#7c3aed" fontSize="14" fontWeight="bold" fontFamily="Caveat, cursive">AI Workflow</text>
            </svg>
          </div>
        </motion.div>

        {/* 9. Phone mockup — center-bottom */}
        <motion.div
          drag dragConstraints={containerRef} dragElastic={0.08} dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: "38%", top: "56%", zIndex: 15 }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.2 }}
        >
          <div style={{ transform: "rotate(-5deg)" }}>
            <svg viewBox="0 0 90 160" width="90" height="160">
              {/* Phone body */}
              <rect x="5" y="5" width="80" height="150" rx="14" fill="#131415" />
              <rect x="8" y="8" width="74" height="144" rx="12" fill="#0f172a" />
              {/* Notch */}
              <rect x="30" y="10" width="30" height="6" rx="3" fill="#131415" />
              {/* Screen content */}
              <rect x="14" y="22" width="62" height="110" rx="4" fill="#1e293b" />
              {/* App header */}
              <rect x="14" y="22" width="62" height="14" rx="4" fill="#1b43f4" />
              <text x="45" y="32" textAnchor="middle" fill="#fff" fontSize="6" fontFamily="monospace" fontWeight="bold">Reworks App</text>
              {/* Content cards */}
              <rect x="18" y="42" width="54" height="28" rx="4" fill="#2d3748" />
              <circle cx="28" cy="56" r="8" fill="#7c3aed" />
              <rect x="40" y="50" width="28" height="4" rx="2" fill="#4a5568" />
              <rect x="40" y="57" width="18" height="3" rx="1" fill="#2d3748" />
              <rect x="18" y="76" width="54" height="28" rx="4" fill="#2d3748" />
              <circle cx="28" cy="90" r="8" fill="#ff3eda" />
              <rect x="40" y="84" width="28" height="4" rx="2" fill="#4a5568" />
              <rect x="40" y="91" width="18" height="3" rx="1" fill="#2d3748" />
              {/* Bottom nav */}
              <rect x="14" y="108" width="62" height="24" rx="4" fill="#1e293b" />
              {/* Home Icon (centered at x=22, y=121) */}
              <path d="M19 123 L22 120 L25 123 L25 126 L23 126 L23 124 L21 124 L21 126 L19 126 Z" fill="#fff" />
              {/* Search Icon (centered at x=38, y=123) */}
              <circle cx="37" cy="122" r="1.5" stroke="#fff" strokeWidth="0.8" fill="none" />
              <line x1="38.2" y1="123.2" x2="39.8" y2="124.8" stroke="#fff" strokeWidth="0.8" />
              {/* Robot Icon (centered at x=54, y=123) */}
              <rect x="51.5" y="121" width="5" height="4" rx="0.5" fill="none" stroke="#fff" strokeWidth="0.8" />
              <line x1="54" y1="120" x2="54" y2="121" stroke="#fff" strokeWidth="0.8" />
              {/* Settings Icon (centered at x=70, y=123) */}
              <circle cx="70" cy="123" r="1.8" stroke="#fff" strokeWidth="0.8" fill="none" />
              <circle cx="70" cy="123" r="0.5" fill="#fff" />
              {/* Home bar */}
              <rect x="30" y="143" width="30" height="3" rx="1.5" fill="#333" />
            </svg>
          </div>
        </motion.div>

        {/* 10. Right quote card #2 */}
        <motion.div
          drag dragConstraints={containerRef} dragElastic={0.08} dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ right: "4%", top: "56%", zIndex: 9 }}
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.33 }}
        >
          <div style={{ maxWidth: "275px", background: "rgba(242,242,240,0.97)", padding: "14px 16px", border: "1.5px solid rgba(0,0,0,0.10)", borderRadius: "4px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", transform: "rotate(1.5deg)", fontFamily: "Roboto Mono, monospace", fontSize: "10.5px", lineHeight: "1.7", color: "#222" }}>
            <span style={{ fontFamily: "serif", fontSize: "28px", color: "#333", lineHeight: "0", verticalAlign: "-10px", marginRight: "2px" }}>&ldquo;</span>
            We don&apos;t just build websites — we build{" "}
            <em>systems</em>. AI agents that work 24/7, workflows that save hours, apps your users love. One studio. Every layer.
            <span style={{ fontFamily: "serif", fontSize: "28px", color: "#333", lineHeight: "0", verticalAlign: "-10px", marginLeft: "2px" }}>&rdquo;</span>
          </div>
        </motion.div>

        {/* 11. DRAG DROP SHOW stamp */}
        <motion.div
          drag dragConstraints={containerRef} dragElastic={0.08} dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 100 }}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: "3%", top: "78%", zIndex: 18 }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.38 }}
        >
          <div style={{ width: "88px", height: "88px", borderRadius: "50%", background: "#131415", border: "3px solid #131415", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: "rotate(-10deg)", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}>
            <div style={{ fontFamily: "Anton, sans-serif", fontSize: "10px", color: "#adff2f", letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: "1.5", textAlign: "center" }}>
              DRAG<br />DROP<br />SHOW
            </div>
            <div style={{ fontSize: "15px", marginTop: "2px" }}>☞</div>
          </div>
        </motion.div>

        {/* Footer bar inside the canvas */}
        <div
          className="absolute bottom-0 left-0 w-full flex items-center justify-between font-mono-roboto text-xs text-[#555] z-30"
          style={{ background: "rgba(245,243,240,0.92)", backdropFilter: "blur(8px)", borderTop: "1px solid rgba(0,0,0,0.07)", padding: "10px 40px" }}
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#1b43f4]" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#7c3aed]" />
            </div>
            <span className="font-semibold">Available to build</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-3 h-3 rounded-full bg-[#7c3aed]" />
            <div className="w-3 h-3 rounded-full bg-[#7c3aed]" />
            <span className="font-semibold tracking-wider text-brand-purple">reworksstudio.in</span>
            <div className="w-3 h-3 rounded-full bg-[#ff3eda]" />
            <div className="w-3 h-3 rounded-full bg-[#7c3aed]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#00c850] animate-pulse" />
            <span className="font-semibold text-brand-dark/80">{indiaTime}</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 2 — BIG CATEGORY LABELS
          (mirrors "Motion Designer" / "Illustrator")
          ══════════════════════════════════════════ */}
      <div
        id="services"
        className="w-full flex items-stretch justify-between px-10 py-12"
        style={{ background: "#f5f3f0" }}
      >
        {BIG_LABELS.map(({ text, color }) => (
          <div
            key={text}
            style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(44px, 5.5vw, 82px)", color, lineHeight: "1", letterSpacing: "-0.01em" }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════
          SECTION 3 — SERVICES PREVIEW GRID
          ══════════════════════════════════════════ */}
      <div
        id="services-section"
        className="w-full px-6 md:px-12 py-20"
        style={{ background: "#f5f3f0" }}
      >
        <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-purple uppercase">OUR SERVICES</span>
            <h2 className="font-anton text-4xl md:text-5xl tracking-tight text-brand-dark mt-2">WHAT WE BUILD</h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono-roboto text-xs font-bold tracking-widest text-brand-dark uppercase border-2 border-brand-dark px-6 py-3 hover:bg-brand-dark hover:text-brand-cream transition-colors duration-200"
          >
            EXPLORE DETAILED SERVICES <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-brand-dark/15 shadow-sm"
              style={{ background: s.bg, cursor: "pointer", minHeight: "260px" }}
            >
              {/* Full-bleed real image with bottom gradient overlay */}
              <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-brand-dark/10">
                <img
                  src={s.image}
                  alt={s.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: s.color, mixBlendMode: "multiply" }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Visual Accent Colored Bar */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-[3px]"
                  style={{ backgroundColor: s.color }}
                />
              </div>

              {/* Text details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 
                    className="font-mono-roboto text-xs font-bold tracking-wider uppercase mb-2"
                    style={{ color: s.color }}
                  >
                    {s.label}
                  </h3>
                  <p className="font-sans text-xs text-brand-dark/70 leading-relaxed">
                    {
                      {
                        "web-portfolio": "Beautiful, fast, SEO-optimised brand, art, & studio showcase sites.",
                        dashboard: "Data-rich SaaS dashboards with live auth, analytics, & REST APIs.",
                        software: "Bespoke full-stack internal tools engineered for your workflows.",
                        apps: "Cross-platform iOS & Android apps using robust React Native.",
                        "ai-agents": "Autonomous AI agents that reason, plan, and execute tasks 24/7.",
                        "ai-workflows": "Intelligent automated pipeline connections syncing your tech stack.",
                        "ai-chatbots": "Context-aware chatbots trained securely on your own business data.",
                        "ai-tools": "Custom intelligence systems — vision, voice, parsing, & automation.",
                      }[s.id]
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 3.5 — FEATURED PROJECTS
          ══════════════════════════════════════════ */}
      <div
        id="work-section"
        className="w-full px-6 md:px-12 py-20 border-t border-brand-dark/10"
        style={{ background: "#f5f3f0" }}
      >
        <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-purple uppercase">FEATURED WORK</span>
            <h2 className="font-anton text-4xl md:text-5xl tracking-tight text-brand-dark mt-2">RECENT COLLABS</h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono-roboto text-xs font-bold tracking-widest text-brand-dark uppercase border-2 border-brand-dark px-6 py-3 hover:bg-brand-dark hover:text-brand-cream transition-colors duration-200"
          >
            VIEW PORTFOLIO GRID <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "ReviewBoost AI",
              desc: "Llama-3 powered customer sentiment evaluation and automatic response agent. Leverages vector search databases to ground replies in specific business contexts.",
              category: "SAAS & AI",
              image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
              link: "/work",
              bg: "#e0e7ff",
              accent: "#6366f1"
            },
            {
              title: "Orbis Design Compiler",
              desc: "Agentic translation engine converting layout screenshot mockups into production-ready Next.js components styled with Tailwind CSS.",
              category: "SAAS & AI",
              image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
              link: "/work",
              bg: "#ecfdf5",
              accent: "#10b981"
            },
            {
              title: "Baemark Store",
              desc: "A stylish e-commerce fashion store offering curated outfits and premium clothing collections. Focuses on clean aesthetics and smooth user flow.",
              category: "E-COMMERCE",
              image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
              link: "/work",
              bg: "#fef3c7",
              accent: "#b45309"
            },
            {
              title: "Chadni Resorts",
              desc: "A luxury hospitality portal and event booking framework. Streamlines amenities, room selections, and reservations with instant notifications.",
              category: "HOSPITALITY",
              image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
              link: "/work",
              bg: "#fdf2f8",
              accent: "#be185d"
            }
          ].map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                x: 4,
                boxShadow: "-12px 12px 0px 0px #131415"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group border-2 border-brand-dark p-6 rounded-none relative overflow-hidden flex flex-col justify-between cursor-pointer"
              style={{ background: project.bg, boxShadow: "-6px 6px 0px 0px #131415" }}
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden border-2 border-brand-dark mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-brand-dark text-brand-cream text-[9px] font-bold font-mono-roboto px-3 py-1 uppercase tracking-widest border border-brand-dark">
                    {project.category}
                  </div>
                </div>
                <h3 className="font-anton text-2xl tracking-wider text-brand-dark mb-2 uppercase">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-brand-dark/70 leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>
              <Link
                href={project.link}
                className="inline-flex items-center gap-2 font-mono-roboto text-[11px] font-bold uppercase tracking-wider text-brand-dark hover:underline"
              >
                Launch Project Space <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 4.1 — WHY REWORKS (PHILOSOPHY)
          ══════════════════════════════════════════ */}
      <div
        className="w-full px-6 md:px-12 py-24 border-t border-brand-dark/10"
        style={{ background: "#f5f3f0" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-purple uppercase">OUR PHILOSOPHY</span>
            <h2 className="font-anton text-4xl md:text-6xl tracking-tight text-brand-dark leading-none">
              PRODUCTION<br />GRADE CODE,<br />VISUAL FLAIR.
            </h2>
            <div className="w-16 h-1.5 bg-brand-purple" />
            <p className="font-sans text-sm text-brand-dark/80 leading-relaxed">
              We bridge the gap between creative visual artistry and production-grade software engineering. We don&apos;t build generic web pages. We craft tailored digital systems, custom automation pipelines, and autonomous AI agents designed to scale your business operations.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="w-6 h-6 text-brand-purple" />,
                title: "PREMIUM CODE",
                desc: "Type-safe architectures, lightning-fast static compilation, SEO optimized.",
                bg: "#eeedfd"
              },
              {
                icon: <Paintbrush className="w-6 h-6 text-rs-pink" />,
                title: "STUNNING DESIGN",
                desc: "Vivid custom typography, micro-interactions, responsive fluid grids.",
                bg: "#ffe8fb"
              },
              {
                icon: <Cpu className="w-6 h-6 text-rs-green" />,
                title: "COGNITIVE AI",
                desc: "Secure agents, LLM tool-calling automation, context-aware indexing.",
                bg: "#e8fff2"
              }
            ].map((card, i) => (
              <div
                key={i}
                className="border-2 border-brand-dark p-6 flex flex-col justify-between min-h-[220px]"
                style={{ background: card.bg, boxShadow: "-4px 4px 0px 0px #131415" }}
              >
                <div className="bg-white w-12 h-12 rounded-full border-2 border-brand-dark flex items-center justify-center shadow-[-2px_2px_0px_0px_#131415]">
                  {card.icon}
                </div>
                <div className="mt-8">
                  <h3 className="font-mono-roboto text-xs font-black tracking-widest text-brand-dark mb-2">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[11px] text-brand-dark/70 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 4.2 — OUR PROCESS TIMELINE
          ══════════════════════════════════════════ */}
      <div
        className="w-full px-6 md:px-12 py-24 border-t border-brand-dark/10"
        style={{ background: "#f5f3f0" }}
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-purple uppercase">THE ROADMAP</span>
          <h2 className="font-anton text-4xl md:text-5xl tracking-tight text-brand-dark mt-2 uppercase">HOW WE CO-CREATE</h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {[
            {
              step: "01",
              title: "Discovery & Blueprint",
              summary: "We dig deep into your product vision, system boundaries, and technology requirements.",
              detail: "Through architectural audits and alignment calls, we map out exact schemas, user stories, security models, and project deadlines. No assumptions. A solid blueprint from day one."
            },
            {
              step: "02",
              title: "Interactive Prototyping",
              summary: "We create visual and motion mocks mapping UX pathways and spatial layouts.",
              detail: "You get interactive Figma canvases, styling tokens, and micro-animation specs to review. We iterate rapidly until the aesthetics feel completely bespoke and aligned."
            },
            {
              step: "03",
              title: "Full-Stack Engineering & AI Core",
              summary: "Our developer squad builds using safe, modern stacks (NextJS, TypeScript, LangChain).",
              detail: "We write clean, composable components, build integrations, configure vector indexes, and run robust unit/integration tests to ensure flawless runtime speed."
            },
            {
              step: "04",
              title: "Deployment & Scale audit",
              summary: "We set up fast CDN edge caches, optimize build packages, and hand over the keys.",
              detail: "We deploy on performant staging, run security checklists, optimize SEO headers, configure domain names, and set up live uptime dashboards. You are ready to grow."
            }
          ].map((item, idx) => {
            const isOpen = activeProcessStep === idx;
            return (
              <div
                key={idx}
                className="border-2 border-brand-dark bg-white rounded-none cursor-pointer overflow-hidden transition-all duration-300"
                style={{ boxShadow: isOpen ? "-6px 6px 0px 0px #1b43f4" : "-3px 3px 0px 0px #131415" }}
                onClick={() => setActiveProcessStep(idx)}
              >
                <div className="p-6 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <span className="font-anton text-2xl text-brand-purple/60">{item.step}</span>
                    <div>
                      <h3 className="font-anton text-lg md:text-xl tracking-wider text-brand-dark uppercase">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-brand-dark/60 mt-1">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span className={`inline-block font-mono-roboto text-[10px] font-bold px-3 py-1 border border-brand-dark rounded-full uppercase tracking-wider ${isOpen ? "bg-brand-purple text-brand-cream" : "bg-brand-cream"}`}>
                      {isOpen ? "Active Step" : "Review"}
                    </span>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-brand-dark/10 bg-brand-cream/30 text-xs text-brand-dark/80 leading-relaxed font-sans max-w-2xl">
                        {item.detail}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 4.3 — CLIENT TESTIMONIALS
          ══════════════════════════════════════════ */}
      <div
        className="w-full px-6 md:px-12 py-24 border-t border-brand-dark/10"
        style={{ background: "#f5f3f0" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
          <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-purple uppercase">CLIENT FEEDBACK</span>
          <h2 className="font-anton text-4xl md:text-5xl tracking-tight text-brand-dark mt-2">TESTIMONIALS</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "Reworks completely revolutionized our SaaS platform. The dashboard they built is stunning and our onboarding conversion increased by 40%. The attention to responsive layouts and tiny hover effects makes the design feel premium.",
              author: "Sarah Jenkins",
              role: "Founder, ApexFlow",
              initials: "SJ",
              avatarBg: "#ff3eda",
              color: "#e8eeff"
            },
            {
              quote: "Their custom AI workflows and n8n integrations save our operations team over 15 hours a week. They wrote clean TypeScript code, and did not rely on heavy, bloated templates. An exceptional engineering team with great taste.",
              author: "David K.",
              role: "Director of Ops, Metatech",
              initials: "DK",
              avatarBg: "#00c850",
              color: "#ffe8fb"
            },
            {
              quote: "The most creative development studio we have ever worked with. They took our complex brand architecture and built a highly interactive digital portfolio that wows our high-ticket corporate clients at first glance. Highly recommended.",
              author: "Elena Rostova",
              role: "Creative Lead, Bloom Agency",
              initials: "ER",
              avatarBg: "#1b43f4",
              color: "#e8fff2"
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border-2 border-brand-dark p-8 flex flex-col justify-between"
              style={{ background: card.color, boxShadow: "-5px 5px 0px 0px #131415" }}
            >
              <div>
                <span className="font-serif text-4xl text-brand-dark/20 block leading-none mb-4">“</span>
                <p className="font-sans text-xs text-brand-dark/85 leading-relaxed italic mb-8">
                  {card.quote}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full border-2 border-brand-dark flex items-center justify-center font-mono-roboto font-bold text-xs text-white shadow-[-2px_2px_0px_0px_#131415]"
                  style={{ backgroundColor: card.avatarBg }}
                >
                  {card.initials}
                </div>
                <div>
                  <h4 className="font-mono-roboto text-[11px] font-black uppercase text-brand-dark">
                    {card.author}
                  </h4>
                  <span className="font-sans text-[10px] text-brand-dark/50 block">
                    {card.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 4.4 — FAQ ACCORDION
          ══════════════════════════════════════════ */}
      <div
        className="w-full px-6 md:px-12 py-24 border-t border-brand-dark/10"
        style={{ background: "#f5f3f0" }}
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-mono-roboto text-xs font-bold tracking-widest text-brand-purple uppercase">COMMON QUESTIONS</span>
          <h2 className="font-anton text-4xl md:text-5xl tracking-tight text-brand-dark mt-2">FAQ</h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {[
            {
              q: "What technologies do you use for web projects?",
              a: "We work primarily within the React ecosystem using Next.js for server-rendered web applications, TypeScript for type safety, and custom vanilla CSS or TailwindCSS for layout styling. For database schemas, we use PostgreSQL, Supabase, and Prisma."
            },
            {
              q: "How long does a typical custom software project take?",
              a: "Bespoke projects depend on visual complexity. A single-page brand site or simple app mockup takes 2 to 3 weeks. Complete SaaS dashboards, custom database architectures, and complex autonomous AI workflows require between 6 to 12 weeks of engineering."
            },
            {
              q: "Do you integrate with third-party automation tools like n8n or Make?",
              a: "Yes. We build custom API endpoints, webhooks, and secure database connections to link Next.js backends with platforms like n8n, Make, or Zapier, creating highly automated data pipes and agent structures."
            },
            {
              q: "What is your pricing model?",
              a: "We operate on a project-by-project fixed scope model. After mapping out requirements in Step 1 of our roadmap, we give you a transparent proposal detailing the scope, timeline, and exact cost. No hidden fees or surprise hourly invoices."
            }
          ].map((item, idx) => {
            const isFaqOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="border-2 border-brand-dark bg-white rounded-none overflow-hidden transition-all duration-300"
                style={{ boxShadow: "-4px 4px 0px 0px #131415" }}
              >
                <button
                  onClick={() => setActiveFaq(isFaqOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-6"
                >
                  <span className="font-mono-roboto text-xs font-black text-brand-dark uppercase tracking-wider">
                    {item.q}
                  </span>
                  <div className="bg-brand-cream border border-brand-dark w-6 h-6 rounded-full flex items-center justify-center">
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
                      <div className="px-6 pb-6 pt-1 text-xs text-brand-dark/70 leading-relaxed font-sans max-w-2xl border-t border-brand-dark/05">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 4 — MARQUEE STRIP
          ══════════════════════════════════════════ */}
      <div
        className="py-5 overflow-hidden"
        style={{ background: "#131415", borderTop: "2px solid #131415", borderBottom: "2px solid #131415" }}
      >
        <div className="flex">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[
              "AI Agents", "Web Apps", "Custom Software", "Mobile Apps",
              "AI Chatbots", "SaaS Dashboards", "AI Workflows", "Portfolio Sites",
              "AI Tools", "Automation", "Full-Stack Dev", "API Integration",
              "AI Agents", "Web Apps", "Custom Software", "Mobile Apps",
              "AI Chatbots", "SaaS Dashboards", "AI Workflows", "Portfolio Sites",
              "AI Tools", "Automation", "Full-Stack Dev", "API Integration",
            ].map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="text-sm font-bold px-7 text-brand-cream font-mono-roboto tracking-widest uppercase">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full" style={{ background: ["#ff3eda","#1b43f4","#00c850"][i % 3] }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 5 — CONTACT / CTA
          ══════════════════════════════════════════ */}
      <div
        id="connect"
        className="w-full px-10 py-24 flex flex-col items-center text-center"
        style={{ background: "#f5f3f0" }}
      >
        <div
          className="font-handwriting text-2xl text-brand-dark mb-3"
          style={{ transform: "rotate(-3deg)" }}
        >
          Let&apos;s build something great
        </div>
        <h2
          className="font-anton text-5xl md:text-7xl text-brand-dark mb-6 tracking-tight"
          style={{ letterSpacing: "-0.01em" }}
        >
          START A PROJECT
        </h2>
        <p className="font-mono-roboto text-sm text-brand-dark/60 max-w-md mb-8 leading-relaxed">
          Drop us a line and we&apos;ll get back within 24 hours. No fluff, just a straight conversation about your idea.
        </p>
        <Link
          href="/connect"
          className="inline-flex items-center gap-3 px-9 py-4 rounded-none font-mono-roboto text-sm font-bold tracking-widest text-brand-cream uppercase"
          style={{ background: "#131415", border: "2px solid #131415", boxShadow: "-5px 5px 0px 0px #1b43f4", transition: "box-shadow 0.2s, transform 0.2s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "-5px 5px 0px 0px #ff3eda"; (e.currentTarget as HTMLElement).style.transform = "translate(-2px, -2px)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "-5px 5px 0px 0px #1b43f4"; (e.currentTarget as HTMLElement).style.transform = "translate(0,0)"; }}
        >
          CONNECT WITH US ✦
        </Link>
      </div>
    </div>
  );
}
