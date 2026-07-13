"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

interface CollabProject {
  id: string;
  title: string;
  role: string;
  year: string;
  description: string;
  bullets?: string[];
  bgColor: string;
  fgColor: string;
  image: string;
}

export default function Collabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indiaTime, setIndiaTime] = useState("");

  // Live India Time Clock (IST: UTC+5:30)
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

      const dayOptions = {
        timeZone: "Asia/Kolkata",
        weekday: "short",
      } as const;
      const dayStr = new Date().toLocaleString("en-US", dayOptions);

      setIndiaTime(`${dayStr} - ${dateStr} - India`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const projects: CollabProject[] = [
    {
      id: "charlie-fund",
      title: "Charlie Fund",
      role: "Website Motion Designer",
      year: "2025",
      bgColor: "bg-[#1b8a5a]", // green
      fgColor: "text-[#dcfce7]",
      description: "Designed and animated motion for web landing page, micro interactions and loading screens.",
      bullets: [
        "Collaborated on visual systems for mental health awareness campaigns.",
        "Built interactive workbook guides with custom SVG illustrations."
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "broth-vertex",
      title: "Broth x Vertex",
      role: "Motion Designer & Illustrator",
      year: "2025",
      bgColor: "bg-[#4a1d12]", // brown/burgundy
      fgColor: "text-[#ffedd5]",
      description: "Motion designer for the branding team for pharmaceutical products: Casgevy – Vertex Pharmaceuticals, and Qivigy. Illustrator for branding billboards – Vertex Pharmaceuticals.",
      bullets: [
        "Crafted botanical vector art representing organic wellness compounds.",
        "Built responsive 3D billboard assets for regional campaign tours."
      ],
      image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "brewed-coast",
      title: "Brewed by the Coast",
      role: "Packaging Illustrator",
      year: "2024",
      bgColor: "bg-[#78350f]", // Coastal amber
      fgColor: "text-[#fef3c7]",
      description: "Designed the retro can series illustrations showcasing vibrant beach scenes and surfers. Balanced typography with custom hand-carved lino-print texture aesthetics.",
      bullets: [
        "Designed the full wrap-around can packaging.",
        "Carved customized linocut vector styles for the typography headers."
      ],
      image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "wix-studio",
      title: "Wix Studio",
      role: "Motion Design Contributor",
      year: "2024",
      bgColor: "bg-[#1e1b4b]", // Navy
      fgColor: "text-[#e0e7ff]",
      description: "Designed high-fidelity animated vector assets, loaders, and micro-interactions for Wix Studio's designer library. Tailored to provide sleek web interactions.",
      bullets: [
        "Built responsive interface assets for web designers.",
        "Delivered lightweight vector loading scripts and micro-animations."
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ar-vr-meta",
      title: "AR VR Meta",
      role: "Lead Illustrator",
      year: "2024",
      bgColor: "bg-[#4c1d95]", // Purple
      fgColor: "text-[#f5f3ff]",
      description: "Drafted onboarding interface flow visuals and character assets for Meta's Reality Labs VR guides.",
      bullets: [
        "Illustrated UI panels and avatars for VR tutorial interfaces.",
        "Storybounded multi-phase gesture guidance layouts."
      ],
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const current = projects[activeIndex];

  return (
    <motion.div
      animate={{ backgroundColor: current.bgColor }}
      transition={{ duration: 0.5 }}
      className="flex-grow w-full min-h-[92vh] flex flex-col justify-between text-brand-cream relative transition-colors"
    >
      {/* Top Collab Heading intro */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <h1 className="font-anton text-5xl md:text-7xl leading-none text-brand-cream tracking-wide text-center md:text-left">
          Made to move <span className="font-handwriting font-bold lowercase text-[#d0ff71]">ideas</span>,<br />
          Shaped by <span className="font-handwriting font-bold lowercase text-[#d0ff71]">intent</span>.
        </h1>
        <p className="font-mono-roboto text-xs md:text-sm text-brand-cream/70 max-w-2xl mt-6 leading-relaxed">
          From independent fashion labels to cultural publications and mindful lifestyle brands, she lends her distinct illustrative voice to projects that deserve more than just visuals—they deserve feeling. Each collaboration is a dialogue, not a transaction.
        </p>
      </div>

      {/* Main Split Grid Workarea */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Visual frame with Next/Prev margins (lg:col-span-6) */}
        <div className="lg:col-span-6 flex items-center justify-between w-full">
          {/* Vertical margins next/prev control */}
          <div className="flex flex-col items-center gap-6 font-mono-roboto text-xs font-bold mr-4 select-none">
            <button
              onClick={handlePrev}
              className="flex flex-col items-center gap-1 hover:text-[#d0ff71] transition-colors"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="rotate-[-90deg] translate-y-3 origin-center">PREVIOUS</span>
            </button>
            <div className="my-8 text-[11px] text-brand-cream/60">
              {activeIndex + 1}/{projects.length}
            </div>
            <button
              onClick={handleNext}
              className="flex flex-col items-center gap-1 hover:text-[#d0ff71] transition-colors"
            >
              <span className="rotate-[-90deg] -translate-y-3 origin-center">NEXT</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Large Sticky Preview Stage */}
          <div className="flex-grow aspect-square max-w-[420px] mx-auto border-2 border-brand-cream/20 bg-brand-cream/5 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <div className="w-full h-full rounded-xl overflow-hidden border border-brand-dark/20 relative">
                  <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-mono-roboto text-[10px] font-bold text-white tracking-widest bg-brand-dark/80 backdrop-blur-sm px-3 py-1 uppercase rounded border border-white/10">
                    {current.role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Scroll-focus Projects detail list (lg:col-span-6) */}
        <div className="lg:col-span-6 space-y-8 max-h-[50vh] lg:max-h-none overflow-y-auto lg:overflow-visible pr-2">
          {projects.map((proj, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <div
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer border-b border-brand-cream/10 pb-6 transition-all duration-300 ${
                  isSelected ? "opacity-100 scale-100" : "opacity-40 hover:opacity-60 scale-98"
                }`}
              >
                <h3 className="font-anton text-3xl md:text-5xl tracking-wide text-brand-cream">
                  {proj.title}
                </h3>
                
                {/* Expands details if selected */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-3 space-y-3 text-sm"
                    >
                      <span className="font-mono-roboto text-[11px] font-bold text-[#d0ff71] bg-brand-cream/10 px-2.5 py-1 rounded">
                        {proj.role} • {proj.year}
                      </span>
                      <p className="font-sans leading-relaxed text-brand-cream/90">
                        {proj.description}
                      </p>
                      {proj.bullets && (
                        <ul className="font-sans space-y-1.5 pl-4 list-disc text-brand-cream/80 text-xs">
                          {proj.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Sticky Status Footer Bar (Grid Aligned) */}
      <div className="w-full bg-brand-cream/10 border-t border-brand-cream/15 py-3 px-6 md:px-12 flex items-center justify-between font-mono-roboto text-xs text-brand-cream/70 z-30">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse"></div>
          <span>Available to work</span>
        </div>
        <div className="hidden sm:block font-bold tracking-wider text-[#d0ff71]">
          Connect the dots
        </div>
        <div className="font-semibold">
          {indiaTime || "India Time"}
        </div>
      </div>
    </motion.div>
  );
}
