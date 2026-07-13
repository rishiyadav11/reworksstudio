"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Grid, X } from "lucide-react";

interface Illustration {
  id: string;
  title: string;
  category: string;
  year: string;
  story: string;
  bgColor: string;
  textColor: string;
  image: string;
}

export default function Illustrations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showArchive, setShowArchive] = useState(false);
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

  const illustrations: Illustration[] = [
    {
      id: "shahi-dahi",
      title: "Shahi Dahi Chobani",
      category: "Collab packaging",
      year: "2025",
      bgColor: "#4f024f", // deep purple
      textColor: "text-[#fdf2e9]",
      story: "Packaging illustration concept for a Royal Indian Yogurt series. Incorporates complex floral borders, gold accents, and a central peacock graphic.",
      image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bollywood-pop",
      title: "Bollywood Pop - Spotify Poster",
      category: "Spotify editorial",
      year: "2025",
      bgColor: "#166534", // Green
      textColor: "text-[#fef3c7]",
      story: "Vibrant vector posters depicting classic cinema iconography for Spotify playlist editorial covers. Styled with high-contrast, curvy shapes and warm retro hues to mimic vintage screen prints.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "streets-ny",
      title: "Streets of New York",
      category: "Editorial concept",
      year: "2024",
      bgColor: "#7e22ce", // Lavender/purple
      textColor: "text-[#fdf4ff]",
      story: "Editorial study capturing the dense, vertical rhythm of Manhattan. Curvy, exaggerated building shapes frame a yellow cab speeding down a stylized avenue.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tiger-carpet",
      title: "Tiger on the Carpet",
      category: "Personal art study",
      year: "2024",
      bgColor: "#b45309", // Coastal Amber
      textColor: "text-[#fffbeb]",
      story: "An exploration of flow lines, texture, and organic curves. A large stylized tiger lies resting on a Persian-style carpet filled with geometric patterns.",
      image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "save-kerala",
      title: "Save Kerala Campaign",
      category: "Social advocacy",
      year: "2023",
      bgColor: "#15803d", // Green
      textColor: "text-[#f0fdf4]",
      story: "Vibrant visual contribution raising support for flood restoration, featuring traditional backwater houseboats, tall coconut palms, and flowing water textures.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === illustrations.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? illustrations.length - 1 : prev - 1));
  };

  const current = illustrations[activeIndex];

  return (
    <motion.div
      animate={{ backgroundColor: current.bgColor }}
      transition={{ duration: 0.5 }}
      className="flex-grow w-full min-h-[92vh] flex flex-col justify-between text-brand-cream relative transition-colors overflow-hidden"
    >
      {/* Intro Header */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <h1 className="font-anton text-5xl md:text-7xl leading-none tracking-wide text-center md:text-left text-brand-cream">
          Bold forms in <span className="font-handwriting font-bold lowercase text-[#d0ff71]">motion</span>,<br />
          inspired by people and <span className="font-handwriting font-bold lowercase text-[#d0ff71]">play</span>.
        </h1>
        <p className="font-mono-roboto text-xs md:text-sm text-brand-cream/70 max-w-2xl mt-6 leading-relaxed">
          Tanaya Khadke is an illustrator and motion designer based in Brooklyn. Her work is defined by bold, curvy forms and character-driven compositions inspired by people, crowds, and the playfulness of everyday life.
        </p>
      </div>

      {/* 3D Scroll Focused Showcase */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Active Slide description & Metadata (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <span className="font-mono-roboto text-[11px] font-bold text-[#d0ff71] bg-brand-cream/10 px-3 py-1 rounded-full uppercase tracking-wider">
                {current.category}
              </span>
              <h2 className="font-anton text-4xl md:text-6xl tracking-wider leading-tight text-brand-cream">
                {current.title}
              </h2>
              <p className="font-sans text-sm text-brand-cream/80 leading-relaxed max-w-md mx-auto lg:mx-0">
                {current.story}
              </p>
              <div className="flex justify-center lg:justify-start pt-2">
                <button className="flex items-center gap-1.5 font-mono-roboto text-xs font-bold text-[#d0ff71] hover:underline group">
                  <span>Know more</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center: 3D Rotated Cards (lg:col-span-7) */}
        <div className="lg:col-span-7 w-full flex flex-col items-center relative py-12">
          {/* Navigation vertical buttons next to visual stage */}
          <div className="absolute right-0 flex flex-col gap-4 z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-brand-cream/20 bg-brand-cream/10 hover:bg-[#d0ff71] hover:text-brand-dark transition-colors"
              aria-label="Previous Illustration"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-brand-cream/20 bg-brand-cream/10 hover:bg-[#d0ff71] hover:text-brand-dark transition-colors"
              aria-label="Next Illustration"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* 3D Stage Container */}
          <div className="relative w-full max-w-[340px] aspect-[3/4] flex items-center justify-center" style={{ perspective: "1000px" }}>
            
            {/* Slide Above (Tilted away) */}
            <div
              className="absolute -translate-y-[150px] opacity-35 scale-[0.75] origin-bottom pointer-events-none select-none transition-all duration-500"
              style={{ transform: "translateY(-140px) rotateX(40deg) scale(0.75)", zIndex: 1 }}
            >
              <div className="w-[240px] aspect-[3/4] border-2 border-brand-cream/10 rounded-xl overflow-hidden bg-brand-cream/5 shadow-2xl">
                <img
                  src={illustrations[(activeIndex - 1 + illustrations.length) % illustrations.length].image}
                  alt="prev-illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Active focused center slide */}
            <motion.div
              key={current.id}
              initial={{ rotateX: -20, y: 30, opacity: 0.8 }}
              animate={{ rotateX: 0, y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="absolute z-10 select-none"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-[300px] aspect-[3/4] border-2 border-brand-cream/30 rounded-2xl overflow-hidden bg-brand-cream shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)]">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Slide Below (Tilted forward) */}
            <div
              className="absolute translate-y-[150px] opacity-35 scale-[0.75] origin-top pointer-events-none select-none transition-all duration-500"
              style={{ transform: "translateY(140px) rotateX(-40deg) scale(0.75)", zIndex: 1 }}
            >
              <div className="w-[240px] aspect-[3/4] border-2 border-brand-cream/10 rounded-xl overflow-hidden bg-brand-cream/5 shadow-2xl">
                <img
                  src={illustrations[(activeIndex + 1) % illustrations.length].image}
                  alt="next-illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Floating Archive Corner button (toggles overlay) */}
      <div className="absolute bottom-16 right-0 z-30">
        <button
          onClick={() => setShowArchive(true)}
          className="flex items-center gap-2 pl-6 pr-8 py-4 bg-[#f43f5e] hover:bg-[#e11d48] border-l-2 border-y-2 border-brand-dark text-brand-cream rounded-l-full shadow-[-4px_4px_0px_0px_#131415] hover:shadow-none transition-all transform hover:-translate-x-1"
        >
          <Grid className="w-4 h-4" />
          <span className="font-anton text-xs tracking-wider uppercase">Archive</span>
        </button>
      </div>

      {/* Full Grid Archive Modal Overlay */}
      <AnimatePresence>
        {showArchive && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-dark/95 backdrop-blur-md p-6 md:p-12 flex flex-col justify-between">
            {/* Header */}
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-brand-cream/10 pb-6 mb-8">
              <div>
                <span className="font-mono-roboto text-xs text-[#d0ff71] font-bold tracking-widest uppercase">ILLUSTRATION ARCHIVE</span>
                <h3 className="font-anton text-2xl tracking-wider text-brand-cream mt-1">ALL GALLERY ITEMS</h3>
              </div>
              <button
                onClick={() => setShowArchive(false)}
                className="p-3 rounded-full border-2 border-brand-cream/20 bg-brand-cream/5 hover:bg-[#f43f5e] hover:border-[#f43f5e] transition-colors"
                aria-label="Close archive"
              >
                <X className="w-5 h-5 text-brand-cream" />
              </button>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {illustrations.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setShowArchive(false);
                  }}
                  className="group cursor-pointer rounded-xl border border-brand-cream/10 p-3 bg-brand-cream/5 hover:bg-brand-cream/10 transition-colors flex flex-col justify-between"
                >
                  <div className="aspect-[3/4] border border-brand-cream/10 rounded-lg overflow-hidden bg-brand-cream/5 relative mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-anton text-sm tracking-wide text-brand-cream uppercase group-hover:text-[#d0ff71] transition-colors">
                      {item.title}
                    </h4>
                    <span className="font-mono-roboto text-[10px] text-brand-cream/50">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom info */}
            <div className="max-w-7xl mx-auto w-full border-t border-brand-cream/10 pt-6 text-center font-mono-roboto text-xs text-brand-cream/40">
              © {new Date().getFullYear()} Tanaya Khadke • Recreated in NextJS
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Sticky Status Footer Bar */}
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
