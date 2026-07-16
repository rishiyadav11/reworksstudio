"use client";

import { useState, useEffect } from "react";
import { motion as framerMotion, AnimatePresence as framerAnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter, X, Cpu, ShoppingBag, Eye, ShieldAlert, Award } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filterTag: "saas-ai" | "ecommerce" | "health-edu" | "hospitality";
  year: string;
  image: string;
  bg: string;
  accent: string;
  tech: string[];
  description: string;
  badge: string;
}

const PORTFOLIO_ITEMS: ProjectItem[] = [
  {
    id: "reviewboost-ai",
    title: "ReviewBoost AI",
    category: "SaaS & AI",
    filterTag: "saas-ai",
    year: "2025",
    image: "/reviewboost_dashboard.png",
    bg: "#e0e7ff",
    accent: "#6366f1",
    tech: ["FastAPI", "Llama 3", "Qdrant Vector DB", "LangChain"],
    description: "Llama-3 powered customer sentiment evaluation and automatic response agent. Leverages vector search databases to ground replies in specific business contexts.",
    badge: "SaaS & AI"
  },
  {
    id: "vidocraft-ai",
    title: "Vidocraft AI",
    category: "SaaS & AI",
    filterTag: "saas-ai",
    year: "2025",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    bg: "#fef2f2",
    accent: "#ef4444",
    tech: ["Next.js", "GPT-4 API", "Tailwind CSS", "Vercel"],
    description: "Social media intelligence framework utilizing GPT-4 API to generate viral content scripts and data-driven creative strategies for regional brands.",
    badge: "SaaS & AI"
  },
  {
    id: "orbis-compiler",
    title: "Orbis Design Compiler",
    category: "SaaS & AI",
    filterTag: "saas-ai",
    year: "2024",
    image: "/orbis_compiler.png",
    bg: "#ecfdf5",
    accent: "#10b981",
    tech: ["React", "Vision Models", "Tailwind CSS", "TypeScript"],
    description: "Agentic translation engine converting layout screenshot mockups into production-ready Next.js components styled with Tailwind CSS.",
    badge: "SaaS & AI"
  },
  {
    id: "reworks-studio-ecom",
    title: "Reworks Retail Engine",
    category: "E-commerce & Retail",
    filterTag: "ecommerce",
    year: "2025",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    bg: "#f5f5f5",
    accent: "#131415",
    tech: ["Shopify Liquid", "Node.js", "Tailwind CSS"],
    description: "Premium digital design and e-commerce growth systems turning user attention into high-converting sales interfaces.",
    badge: "E-commerce & Retail"
  },
  {
    id: "smart-plaza",
    title: "Smart Plaza Hub",
    category: "E-commerce & Retail",
    filterTag: "ecommerce",
    year: "2024",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
    bg: "#eff6ff",
    accent: "#3b82f6",
    tech: ["React", "PostgreSQL", "AWS EC2"],
    description: "Retail operations and complex vendor inventory syncing framework, servicing luxury commercial hubs.",
    badge: "E-commerce & Retail"
  },
  {
    id: "baemark",
    title: "Baemark Store",
    category: "E-commerce & Retail",
    filterTag: "ecommerce",
    year: "2025",
    image: "/baemark_store.png",
    bg: "#fef3c7",
    accent: "#b45309",
    tech: ["Next.js", "E-commerce", "Tailwind CSS", "User Experience"],
    description: "Stylish e-commerce fashion store offering curated outfits and clothing collections with clean aesthetics and smooth flow.",
    badge: "E-commerce & Retail"
  },
  {
    id: "om-garments",
    title: "Om Garments Catalog",
    category: "E-commerce & Retail",
    filterTag: "ecommerce",
    year: "2024",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80",
    bg: "#fdf2f8",
    accent: "#db2777",
    tech: ["Shopify Integration", "Next.js", "Tailwind CSS", "Custom UI"],
    description: "An elegant e-commerce apparel catalog and retail hub custom-tailored for high-end boutique garments with lightning-fast asset views.",
    badge: "E-commerce & Retail"
  },
  {
    id: "goyal-netra",
    title: "Goyal Netra System",
    category: "Healthcare & Education",
    filterTag: "health-edu",
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    bg: "#f0fdfa",
    accent: "#0d9488",
    tech: ["HIPAA Sync", "Node.js", "PostgreSQL", "Next.js"],
    description: "HIPAA-compliant surgical tracking system and clinical database for premier eye care centers.",
    badge: "Healthcare & Education"
  },
  {
    id: "pariksha-institute",
    title: "Pariksha Career Institute",
    category: "Healthcare & Education",
    filterTag: "health-edu",
    year: "2025",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    bg: "#fffbeb",
    accent: "#d97706",
    tech: ["React.js", "Next.js", "Postgres", "Tailwind CSS"],
    description: "Coaching institute educational portal for NEET, JEE, Olympiads, and 8th–10th foundation batches.",
    badge: "Healthcare & Education"
  },
  {
    id: "stem-labs",
    title: "STEM Labs Registry",
    category: "Healthcare & Education",
    filterTag: "health-edu",
    year: "2024",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    bg: "#f0fdf4",
    accent: "#16a34a",
    tech: ["IoT WebSockets", "Hardware APIs", "Next.js", "Node"],
    description: "IoT automation console bridging physical sensors with real-time Next.js telemetry panels for school laboratories.",
    badge: "Healthcare & Education"
  },
  {
    id: "gice-academy",
    title: "GICE Academy Hub",
    category: "Healthcare & Education",
    filterTag: "health-edu",
    year: "2024",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    bg: "#eff6ff",
    accent: "#1d4ed8",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    description: "Premier training hub and resource registry for professional courses featuring batch selectors and calendar sync.",
    badge: "Healthcare & Education"
  },
  {
    id: "rb-health-club",
    title: "RB Health Club",
    category: "Hospitality & Fitness",
    filterTag: "hospitality",
    year: "2025",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    bg: "#faf5ff",
    accent: "#7e22ce",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Payments Sync"],
    description: "Modern fitness platform with customized workout plans, nutrition tracking models, and club membership checkout support.",
    badge: "Hospitality & Fitness"
  },
  {
    id: "ravi-jangid-coaching",
    title: "Ravi Jangid Coaching",
    category: "Hospitality & Fitness",
    filterTag: "hospitality",
    year: "2024",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    bg: "#fcf6f0",
    accent: "#854d0e",
    tech: ["WordPress Custom", "PHP API", "Brand Legacy"],
    description: "Elite coaching registry mapping workouts and performance summaries for national strength athletes.",
    badge: "Hospitality & Fitness"
  },
  {
    id: "chadni-resorts",
    title: "Chadni Resorts",
    category: "Hospitality & Fitness",
    filterTag: "hospitality",
    year: "2024",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    bg: "#fdf2f8",
    accent: "#be185d",
    tech: ["Next.js", "Resorts Booking Engine", "Tailwind CSS"],
    description: "Luxury hospitality portal and event booking framework streamlining amenities, room reservations, and SMS notifications.",
    badge: "Hospitality & Fitness"
  },
  {
    id: "synth-flow",
    title: "SynthFlow Automation",
    category: "SaaS & AI",
    filterTag: "saas-ai",
    year: "2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    bg: "#f3e8ff",
    accent: "#a855f7",
    tech: ["Next.js", "Node.js", "React Flow", "Tailwind CSS"],
    description: "Visual node-based automation builder allowing non-technical teams to construct complex LLM workflows and agentic pipelines in a drag-and-drop canvas.",
    badge: "SaaS & AI"
  },
  {
    id: "nexus-finance",
    title: "Nexus Finance OS",
    category: "E-commerce & Retail",
    filterTag: "ecommerce",
    year: "2024",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    bg: "#e0f2fe",
    accent: "#0ea5e9",
    tech: ["React", "TypeScript", "Prisma", "D3.js"],
    description: "Modern financial operating system for digital retail, offering real-time revenue analytics, smart inventory forecasting, and sleek dashboards.",
    badge: "FinTech & Analytics"
  },
  {
    id: "healthsync-medical",
    title: "HealthSync Medical",
    category: "Health & Education",
    filterTag: "health-edu",
    year: "2025",
    image: "/healthsync_medical.png",
    bg: "#f0fdf4",
    accent: "#22c55e",
    tech: ["Next.js", "FHIR / HL7", "Tailwind CSS", "HIPAA Compliant DB"],
    description: "HIPAA-compliant patient management dashboard with AI-driven triage and secure data pipelines for modern clinics.",
    badge: "Health & Education"
  }
];

const FILTERS = [
  { label: "ALL PRODUCTS", value: "all" },
  { label: "SAAS & AI", value: "saas-ai" },
  { label: "E-COMMERCE", value: "ecommerce" },
  { label: "HEALTH & EDUCATION", value: "health-edu" },
  { label: "HOSPITALITY & FITNESS", value: "hospitality" }
];

export default function WorkPage() {
  const router = useRouter();
  const [indiaTime, setIndiaTime] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProj, setSelectedProj] = useState<ProjectItem | null>(null);

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

  const filteredItems = activeFilter === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.filterTag === activeFilter);

  return (
    <div className="flex-grow w-full bg-[#f2ede6] text-[#131415] pt-14">
      {/* 1. Header Hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 border-b border-brand-dark/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono-roboto text-xs font-bold tracking-widest text-[#5e67e6] uppercase">OUR PORTFOLIO</span>
            <h1 className="font-anton text-5xl md:text-7xl tracking-wide uppercase mt-2">FEATURED PROJECTS</h1>
          </div>
          <p className="font-sans text-xs text-brand-dark/60 max-w-sm leading-relaxed">
            A comprehensive index of SaaS systems, e-commerce engines, custom healthcare software, and hospitality solutions engineered by our Indian creative studio.
          </p>
        </div>
      </div>

      {/* 2. Filters Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-wrap items-center justify-between gap-4 border-b border-brand-dark/05">
        <div className="flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-brand-dark/40" />
          <span className="font-mono-roboto text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest">
            FILTER SECTOR
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = f.value === activeFilter;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`font-mono-roboto text-[10px] font-bold tracking-wider px-4 py-2 border uppercase transition-colors rounded-none ${
                  isActive
                    ? "bg-brand-dark border-brand-dark text-[#f5f3f0]"
                    : "border-brand-dark/10 hover:border-brand-dark/30 text-brand-dark/70 hover:text-brand-dark bg-white/20"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

  {/* 3. Works Editorial Grid */}
<div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
  {filteredItems.map((item, idx) => (
    <framerMotion.div
      key={item.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      whileHover={{
        y: -10,
        boxShadow: "-10px 14px 0px #131415",
        transition: { type: "spring", stiffness: 400, damping: 18 },
      }}
      onClick={() => {
        const deepCaseStudies = ["reviewboost-ai", "orbis-compiler", "baemark", "synth-flow", "nexus-finance", "healthsync-medical"];
        if (deepCaseStudies.includes(item.id)) {
          router.push(`/work/${item.id}`);
        } else {
          setSelectedProj(item);
        }
      }}
      className="group w-full overflow-hidden border-2 border-[#131415] cursor-pointer relative"
      style={{
        background: item.bg,
        boxShadow: "-5px 5px 0px #131415",
      }}
    >
      {/* Accent bar that slides in on hover */}
      <div
        className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"
        style={{ background: item.accent }}
      />

      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden border-b-2 border-[#131415]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-3 right-3 bg-[#131415] text-white text-[10px] px-2 py-1 font-bold tracking-wider">
          {item.year}
        </div>

        {/* Badge that fades in on hover */}
        <div
          className="absolute bottom-3 left-3 text-white text-[9px] font-bold px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
          style={{ background: item.accent }}
        >
          {item.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
          {item.category}
        </span>

        <h3 className="mt-2 text-lg font-bold uppercase tracking-wide group-hover:tracking-widest transition-all duration-300">
          {item.title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-gray-600 line-clamp-2">
          {item.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#131415] group-hover:text-[#5e67e6] transition-colors duration-300 border-t border-[#131415]/10 pt-4">
          Live Demo / GitHub
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </framerMotion.div>
  ))}
</div>
</div>
      {/* 4. Interactive Detail Modal (Overlay) */}
      <div>
        {selectedProj && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-brand-dark/85 backdrop-blur-md">
            {/* Modal Backdrop closer */}
            <div className="absolute inset-0" onClick={() => setSelectedProj(null)} />

            <framerMotion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#fefefe] border-2 border-brand-dark rounded-none shadow-[-10px_10px_0px_0px_#131415] overflow-hidden z-10 p-6 md:p-8 flex flex-col md:flex-row gap-8"
            >
              {/* Left Column: Image Stage */}
              <div className="w-full md:w-5/12 flex flex-col justify-between">
                <div className="border-2 border-brand-dark aspect-[4/3] w-full overflow-hidden bg-brand-dark/10 relative">
                  <img src={selectedProj.image} alt={selectedProj.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-brand-dark text-brand-cream text-[8px] font-mono-roboto px-2 py-0.5 uppercase tracking-widest">
                    {selectedProj.year}
                  </span>
                </div>
                <div className="hidden md:block pt-6 border-t border-brand-dark/10 mt-6 font-mono-roboto text-[10px] text-brand-dark/50">
                  <div className="mb-2"><strong>STUDIO CLIENT:</strong></div>
                  <div className="text-brand-dark font-bold uppercase">{selectedProj.title} Hub</div>
                </div>
              </div>

              {/* Right Column: Spec content & Tech Stack */}
              <div className="w-full md:w-7/12 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Category and Close button */}
                  <div className="flex justify-between items-center">
                    <span className="font-mono-roboto text-[10px] font-bold text-[#5e67e6] tracking-widest uppercase bg-brand-purple/10 px-2 py-0.5 rounded">
                      {selectedProj.category}
                    </span>
                    <button
                      onClick={() => setSelectedProj(null)}
                      className="p-1.5 border border-brand-dark/20 hover:bg-brand-dark hover:text-brand-cream hover:border-brand-dark transition-colors"
                      aria-label="Close Case Study"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-anton text-2xl md:text-3xl tracking-wide uppercase text-brand-dark">
                    {selectedProj.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-brand-dark/85 leading-relaxed">
                    {selectedProj.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono-roboto text-[9px] font-bold text-brand-dark/50 uppercase tracking-widest block">
                      ENGINEERING STACK:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProj.tech.map((t, i) => (
                        <span key={i} className="font-mono-roboto text-[9px] font-bold border border-brand-dark/20 bg-brand-cream px-2.5 py-1 text-brand-dark uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-8 mt-6 border-t border-brand-dark/10">
                  <Link
                    href={`/connect?project=${selectedProj.id}`}
                    onClick={() => setSelectedProj(null)}
                    className="flex-grow text-center py-2.5 bg-brand-dark text-brand-cream font-mono-roboto text-[10px] font-bold tracking-widest hover:bg-brand-purple transition-colors uppercase border border-brand-dark"
                  >
                    Discuss This System
                  </Link>
                  <button
                    onClick={() => setSelectedProj(null)}
                    className="px-5 py-2.5 border-2 border-brand-dark font-mono-roboto text-[10px] font-bold hover:bg-brand-cream transition-colors uppercase"
                  >
                    Close
                  </button>
                </div>
              </div>
            </framerMotion.div>
          </div>
        )}
      </div>

      {/* 5. Bottom Sticky Status Footer Bar */}
      <div className="w-full bg-[#efeae0] border-t border-brand-dark/10 py-4 px-6 md:px-12 flex items-center justify-between font-mono-roboto text-xs text-brand-dark/70 z-30">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-pulse"></div>
          <span>Curation updated</span>
        </div>
        <div className="hidden sm:block font-bold tracking-wider text-brand-dark uppercase">
          Studio Product Index
        </div>
        <div className="font-semibold">
          {indiaTime || "India Time"}
        </div>
      </div>
    </div>
  );
}
