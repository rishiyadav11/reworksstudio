"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Sparkles, Code, Cpu, Activity, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const SERVICES_DETAIL = [
  {
    id: "web-portfolio",
    title: "Portfolio & Brand Sites",
    tagline: "High-performance brand front-doors that capture attention.",
    color: "#1b43f4",
    bgGradient: "from-blue-600/20 to-transparent",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS", "SEO Headers"],
    deliverables: [
      "Custom layout and responsive structures",
      "Tailored micro-interactions and page transitions",
      "Full SEO setup and performance optimization",
      "Contentful / Sanity CMS integration"
    ],
    timeline: "2-3 Weeks",
    baseCost: 2500
  },
  {
    id: "dashboard",
    title: "SaaS Dashboards",
    tagline: "Secure, data-driven applications built on robust backends.",
    color: "#7c3aed",
    bgGradient: "from-purple-600/20 to-transparent",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tech: ["React / Next.js", "Prisma", "PostgreSQL", "Recharts", "NextAuth"],
    deliverables: [
      "Dynamic interactive charting and analytics",
      "Secure user roles and access control",
      "Stripe payment gateway subscription flows",
      "Optimized query performance and caching"
    ],
    timeline: "6-8 Weeks",
    baseCost: 6500
  },
  {
    id: "software",
    title: "Custom Software",
    tagline: "Tailor-made software built to run your core business operations.",
    color: "#f97316",
    bgGradient: "from-orange-600/20 to-transparent",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
    tech: ["TypeScript", "Node.js", "GraphQL", "Docker", "AWS Stack"],
    deliverables: [
      "Custom internal tooling and data management",
      "Third-party system API synchronizations",
      "Automated reports and batch processing engines",
      "Full testing coverage and support documentation"
    ],
    timeline: "8-10 Weeks",
    baseCost: 8000
  },
  {
    id: "apps",
    title: "Mobile Applications",
    tagline: "Native iOS and Android apps crafted from a single codebase.",
    color: "#00c850",
    bgGradient: "from-green-600/20 to-transparent",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    tech: ["React Native", "Expo", "Redux Toolkit", "Native APIs", "Push Notifications"],
    deliverables: [
      "App Store and Google Play deployment",
      "Offline cache support and storage systems",
      "Biometric login configurations (FaceID/Fingerprint)",
      "Cross-platform component optimization"
    ],
    timeline: "6-8 Weeks",
    baseCost: 7000
  },
  {
    id: "ai-agents",
    title: "Autonomous AI Agents",
    tagline: "Intelligent digital operators that handle complex workflows.",
    color: "#ff3eda",
    bgGradient: "from-pink-600/20 to-transparent",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    tech: ["LangChain", "OpenAI / Claude API", "FastAPI", "Python", "Vector Indexes"],
    deliverables: [
      "Multi-agent collaborative structures",
      "Custom tool-calling definitions and sandbox environments",
      "Feedback loop auditing interfaces",
      "Memory management and semantic caching"
    ],
    timeline: "4-6 Weeks",
    baseCost: 5500
  },
  {
    id: "ai-workflows",
    title: "AI Automation Workflows",
    tagline: "Connect your business stack to background intelligence loops.",
    color: "#1b43f4",
    bgGradient: "from-blue-600/20 to-transparent",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tech: ["n8n", "Make.com", "Vector Databases", "REST Webhooks", "Cron Engines"],
    deliverables: [
      "Automated document processing pipelines",
      "Intelligent lead enrichment and dispatch flows",
      "Custom slack/email system alert triggers",
      "Failover error handling configurations"
    ],
    timeline: "3-4 Weeks",
    baseCost: 3500
  },
  {
    id: "ai-chatbots",
    title: "Context-Aware Chatbots",
    tagline: "Chat bots that respond with secure database context.",
    color: "#7c3aed",
    bgGradient: "from-purple-600/20 to-transparent",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    tech: ["Pinecone / Qdrant", "Retrieval Augmented Generation (RAG)", "React Chat UI", "Node.js"],
    deliverables: [
      "PDF, markdown, and Notion document ingestion pipelines",
      "Custom system prompt testing frameworks",
      "Clean widget embeds for web landing pages",
      "Conversational analytics and feedback collection"
    ],
    timeline: "3-5 Weeks",
    baseCost: 4000
  },
  {
    id: "ai-tools",
    title: "Bespoke AI Engineering",
    tagline: "Visions, voice synthesis, and specialized AI utilities.",
    color: "#f97316",
    bgGradient: "from-orange-600/20 to-transparent",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tech: ["Whisper / TTS APIs", "Computer Vision models", "Hugging Face APIs", "Python Core"],
    deliverables: [
      "Custom video/audio parsing structures",
      "OCR scanning and formatting engines",
      "Fine-tuned small language model endpoints",
      "Custom visual generator UI panels"
    ],
    timeline: "5-7 Weeks",
    baseCost: 5000
  }
];

export default function ServicesPage() {
  const [indiaTime, setIndiaTime] = useState("");
  const [selectedService, setSelectedService] = useState(SERVICES_DETAIL[0].id);
  const [calcScope, setCalcScope] = useState(5); // 1 to 10 scale (simple -> complex)
  const [addons, setAddons] = useState<string[]>([]);

  // Live India Time Clock
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      } as const;
      const dateStr = new Date().toLocaleString("en-US", options);
      const dayOptions = { timeZone: "Asia/Kolkata", weekday: "short" } as const;
      const dayStr = new Date().toLocaleString("en-US", dayOptions);
      setIndiaTime(`${dayStr} - ${dateStr} - India`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeService = SERVICES_DETAIL.find((s) => s.id === selectedService) || SERVICES_DETAIL[0];

  const handleAddonClick = (addonId: string) => {
    if (addons.includes(addonId)) {
      setAddons(addons.filter((id) => id !== addonId));
    } else {
      setAddons([...addons, addonId]);
    }
  };

  // Pricing math: baseCost * (scope multiplier) + addon costs
  const calculateEstimate = () => {
    const multiplier = 0.6 + (calcScope * 0.15); // ranges from 0.75x to 2.1x base cost
    const addonPrice = addons.reduce((sum, current) => {
      if (current === "ai-agents") return sum + 2000;
      if (current === "speed") return sum + 1200;
      if (current === "seo") return sum + 800;
      return sum;
    }, 0);

    return Math.round(activeService.baseCost * multiplier + addonPrice);
  };

  return (
    <div className="flex-grow w-full bg-[#0a0a0c] text-[#f5f3f0] pt-14">
      {/* 1. Header Hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10">
        <div>
          <span className="font-mono-roboto text-xs font-black tracking-widest text-[#5e67e6] uppercase">OUR ENGINE</span>
          <h1 className="font-anton text-5xl md:text-7xl tracking-wide uppercase mt-2">SERVICES &amp;<br />CAPABILITIES</h1>
        </div>
        <p className="font-sans text-sm text-[#f5f3f0]/60 max-w-md mt-6 md:mt-0 leading-relaxed">
          We combine cutting-edge software engineering with modern visual taste. No templates, no bloat. Just production-ready software and intelligence workflows built specifically for your brand.
        </p>
      </div>

      {/* 2. Interactive Services Explorer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Services Toggles (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <span className="font-mono-roboto text-[10px] font-bold text-white/40 tracking-wider uppercase mb-2">CAPABILITY DIRECTORY</span>
          {SERVICES_DETAIL.map((s) => {
            const isActive = s.id === selectedService;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedService(s.id)}
                className={`text-left p-5 border transition-all duration-200 relative group flex items-center justify-between ${
                  isActive
                    ? "bg-[#131415] border-white text-white shadow-[-4px_4px_0px_0px_rgba(94,103,230,0.5)]"
                    : "border-white/10 hover:border-white/30 text-[#f5f3f0]/70 hover:text-white"
                }`}
              >
                <div>
                  <h3 className="font-mono-roboto text-xs font-black uppercase tracking-wider">{s.title}</h3>
                  <span className="font-sans text-[10px] opacity-50 block mt-1 line-clamp-1">{s.tagline}</span>
                </div>
                <ArrowUpRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? "text-[#5e67e6] scale-110" : "opacity-0 group-hover:opacity-100"}`} />
              </button>
            );
          })}
        </div>

        {/* Right Side: Active Service Details Panel (lg:col-span-8) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-white bg-[#0e0e11] p-8 relative overflow-hidden flex flex-col justify-between"
              style={{ boxShadow: `-6px 6px 0px 0px ${activeService.color}` }}
            >
              {/* Colored ambient glow */}
              <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] bg-gradient-to-br ${activeService.bgGradient} opacity-50 pointer-events-none`} />

              <div>
                {/* Visual Cover Image */}
                <div className="relative aspect-[21/9] w-full overflow-hidden border-2 border-white/10 mb-8 rounded-lg shadow-2xl">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 font-mono-roboto text-[10px] font-bold text-white tracking-widest bg-[#0a0a0c] px-3 py-1 uppercase rounded-full">
                    TYPICAL TIMELINE: {activeService.timeline}
                  </div>
                </div>

                <span className="font-mono-roboto text-[10px] font-bold px-3 py-1 bg-white/10 text-white rounded-full uppercase tracking-widest inline-block mb-3">
                  FEATURE DETAIL
                </span>
                <h2 className="font-anton text-3xl md:text-5xl tracking-wide uppercase mb-3">
                  {activeService.title}
                </h2>
                <p className="font-sans text-sm text-[#f5f3f0]/80 leading-relaxed mb-8 max-w-xl">
                  {activeService.tagline}
                </p>

                {/* Grid info: Tech stack vs Deliverables */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-white/10 pt-8">
                  <div>
                    <h4 className="font-mono-roboto text-[11px] font-bold tracking-wider text-white/40 uppercase mb-4 flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5" /> STACK &amp; TECH
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeService.tech.map((t) => (
                        <span key={t} className="font-mono-roboto text-[10px] font-bold border border-white/15 px-3 py-1 rounded bg-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono-roboto text-[11px] font-bold tracking-wider text-white/40 uppercase mb-4 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> KEY DELIVERABLES
                    </h4>
                    <ul className="space-y-3.5">
                      {activeService.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#f5f3f0]/85 font-sans">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Start Project CTA inside active panel */}
              <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <span className="font-sans text-[10px] text-white/40 block">Estimated Starting Investment</span>
                  <span className="font-anton text-2xl tracking-wider text-white">
                    ${activeService.baseCost.toLocaleString()} USD
                  </span>
                </div>
                <Link
                  href="/connect"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono-roboto text-xs font-bold tracking-wider text-[#0a0a0c] bg-white border border-white px-8 py-4 uppercase hover:bg-transparent hover:text-white transition-colors duration-200"
                >
                  DISCUSS THIS BUILD <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Interactive Pricing Cost Calculator */}
      <div className="w-full px-6 md:px-12 py-24 bg-[#0e0e11] border-t border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-mono-roboto text-xs font-bold tracking-widest text-[#5e67e6] uppercase">BUDGET ESTIMATOR</span>
          <h2 className="font-anton text-4xl md:text-5xl tracking-tight text-white mt-2 uppercase">INTERACTIVE CALCULATOR</h2>
          <p className="font-sans text-xs text-white/50 max-w-md mx-auto mt-3 leading-relaxed">
            Adjust the sliders and add premium configurations to estimate a scope matching your business requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 border-2 border-white p-8 bg-[#0a0a0c] shadow-[0px_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Controls Column (md:col-span-7) */}
          <div className="md:col-span-7 space-y-8">
            {/* 1. Selected Service */}
            <div className="space-y-3">
              <label className="font-mono-roboto text-[11px] font-bold text-white/40 tracking-wider uppercase block">
                1. SELECT SERVICE PROFILE
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-[#131415] border border-white/15 px-4 py-3 font-mono-roboto text-xs text-white focus:outline-none focus:border-[#5e67e6] rounded cursor-pointer transition-colors"
              >
                {SERVICES_DETAIL.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} (Starts ${s.baseCost.toLocaleString()})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Scope Complexity Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-mono-roboto text-[11px] font-bold text-white/40 tracking-wider uppercase">
                  2. PROJECT SCOPE &amp; COMPLEXITY
                </label>
                <span className="font-mono-roboto text-xs font-bold text-[#5e67e6]">
                  {
                    {
                      1: "Simple MVP",
                      2: "Simple MVP",
                      3: "Standard Scale",
                      4: "Standard Scale",
                      5: "Recommended Scale",
                      6: "Recommended Scale",
                      7: "High-Traffic Custom",
                      8: "High-Traffic Custom",
                      9: "Enterprise Core",
                      10: "Enterprise Core"
                    }[calcScope]
                  } (x{(0.6 + calcScope * 0.15).toFixed(2)})
                </span>
              </div>

              {/* Custom styled range slider */}
              <div className="relative w-full">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={calcScope}
                  onChange={(e) => setCalcScope(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#5e67e6]"
                  style={{
                    background: `linear-gradient(to right, #5e67e6 ${(calcScope - 1) * 11.1}%, rgba(255,255,255,0.1) ${(calcScope - 1) * 11.1}%)`,
                  }}
                />
                {/* Scale markers */}
                <div className="flex justify-between mt-2">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                        i + 1 <= calcScope ? "bg-[#5e67e6]" : "bg-white/15"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between font-mono-roboto text-[9px] text-white/30">
                <span>BASIC SCRATCHPAD</span>
                <span>PRODUCTION CORE</span>
                <span>GLOBAL ARCHITECTURE</span>
              </div>
            </div>

            {/* 3. Add-on Systems */}
            <div className="space-y-3">
              <label className="font-mono-roboto text-[11px] font-bold text-white/40 tracking-wider uppercase block">
                3. INTEGRATE PREMIUM ADD-ONS
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "ai-agents", label: "Autonomous Agent AI", price: 2000, details: "Self-reasoning loops" },
                  { id: "speed", label: "Express Delivery", price: 1200, details: "Shaved 35% time" },
                  { id: "seo", label: "Advanced SEO Pack", price: 800, details: "Microdata schema build" }
                ].map((addon) => {
                  const isChecked = addons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => handleAddonClick(addon.id)}
                      className={`text-left p-4 border transition-all duration-200 relative flex flex-col justify-between min-h-[90px] rounded ${
                        isChecked
                          ? "border-[#5e67e6] bg-[#5e67e6]/10 text-white shadow-[0_0_15px_rgba(94,103,230,0.15)]"
                          : "border-white/10 bg-[#131415] hover:border-white/20 text-white/70 hover:bg-[#131415]/80"
                      }`}
                    >
                      <div className="flex items-start justify-between w-full">
                        <div>
                          <h4 className="font-mono-roboto text-[10px] font-bold block">{addon.label}</h4>
                          <span className="font-sans text-[9px] text-white/40 block mt-0.5">{addon.details}</span>
                        </div>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                          isChecked ? "bg-[#5e67e6] border-[#5e67e6]" : "border-white/20"
                        }`}>
                          {isChecked && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>
                      </div>
                      <span className="font-mono-roboto text-[10px] font-black text-[#5e67e6] block mt-2">
                        +${addon.price.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Estimate Display Column (md:col-span-5) */}
          <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-white/15 p-2 md:p-6 flex flex-col justify-between items-center text-center">
            <div className="space-y-2 mt-4">
              <Sparkles className="w-6 h-6 text-[#5e67e6] mx-auto animate-pulse" />
              <span className="font-mono-roboto text-[10px] font-bold tracking-widest text-white/40 uppercase block">
                ESTIMATED RANGE
              </span>
              <motion.div
                key={calculateEstimate()}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="font-anton text-4xl lg:text-5xl text-white tracking-widest pt-2"
              >
                ${calculateEstimate().toLocaleString()}
              </motion.div>
              <span className="font-sans text-[10px] text-white/40 block">
                *Subject to requirement roadmap discovery.
              </span>
            </div>

            <div className="w-full space-y-3 mt-8">
              <div className="border-t border-white/10 pt-4 w-full text-left space-y-2.5">
                <div className="flex justify-between text-[11px] font-sans text-white/60">
                  <span>Base Service Tier:</span>
                  <span>${activeService.baseCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[11px] font-sans text-white/60">
                  <span>Scope Multiplier:</span>
                  <span>x{(0.6 + calcScope * 0.15).toFixed(2)}</span>
                </div>
                {addons.length > 0 && (
                  <div className="flex justify-between text-[11px] font-sans text-white/60">
                    <span>Add-on Subtotal:</span>
                    <span>
                      +${
                        addons.reduce((sum, curr) => {
                          if (curr === "ai-agents") return sum + 2000;
                          if (curr === "speed") return sum + 1200;
                          if (curr === "seo") return sum + 800;
                          return sum;
                        }, 0).toLocaleString()
                      }
                    </span>
                  </div>
                )}
              </div>

              <Link
                href={{
                  pathname: "/connect",
                  query: { service: selectedService, complexity: calcScope, addons: addons.join(",") }
                }}
                className="w-full inline-flex items-center justify-center gap-2 font-mono-roboto text-xs font-black tracking-widest text-[#0a0a0c] bg-white border border-white py-4 uppercase hover:bg-transparent hover:text-white transition-colors duration-200"
              >
                REQUEST SCOPE QUOTE <Zap className="w-3.5 h-3.5 fill-current" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Sticky Status Footer Bar */}
      <div className="w-full bg-[#0e0e11] border-t border-white/10 py-4 px-6 md:px-12 flex items-center justify-between font-mono-roboto text-xs text-[#f5f3f0]/70 z-30">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <span>Engine online &amp; booking</span>
        </div>
        <div className="hidden sm:block font-bold tracking-wider text-[#5e67e6] uppercase">
          Build for scale
        </div>
        <div className="font-semibold">
          {indiaTime || "India Time"}
        </div>
      </div>
    </div>
  );
}
