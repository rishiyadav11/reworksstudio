"use client";

import { useState, useEffect } from "react";
import { Play, X, Disc } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FilmProject {
  id: string;
  title: string;
  client: string;
  role: string;
  year: string;
  tools: string;
  description: string;
  badge: string;
  image: string;
}

export default function MotionFilms() {
  const [activeVideo, setActiveVideo] = useState<FilmProject | null>(null);
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

  const films: FilmProject[] = [
    {
      id: "workcation",
      title: "Workcation",
      client: "SCAD Motion festival",
      role: "Solo Director & Animator",
      year: "2024",
      tools: "TVPaint, After Effects, Illustrator",
      badge: "Motion Short",
      description: "A playful character-driven narrative loop examining the blend of work and travel. Highlighted by curvy desk elements and flowing window landscapes.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "postcards-ny",
      title: "Postcards from New York",
      client: "New Yorker concept",
      role: "Cel Animator",
      year: "2024",
      tools: "After Effects, Photoshop",
      badge: "Editorial Reel",
      description: "A kinetic postcard series illustrating the hustle and colorful signboards of Times Square, New York.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "travel-journal",
      title: "A Travel Journal",
      client: "Personal Short",
      role: "Solo animator",
      year: "2023",
      tools: "After Effects, Cinema 4D",
      badge: "Motion Loop",
      description: "Contributed loops showcasing journeys through Paris, Japan, and India. Filled with moving backdrops and train window viewpoints.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="flex-grow w-full min-h-[92vh] bg-brand-cream text-brand-dark relative select-none pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 text-center">
        <h1 className="font-anton text-6xl md:text-8xl tracking-widest text-[#1b43f4] uppercase">
          Motion Films
        </h1>
        <p className="font-mono-roboto text-xs text-brand-dark/50 mt-4 tracking-widest uppercase">
          selected motion shorts, commercial title cards & cel loops.
        </p>
      </div>

      {/* Vertical Stacked Cards */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-16">
        {films.map((film) => (
          <div
            key={film.id}
            className="group rounded-2xl border-2 border-brand-dark bg-brand-cream overflow-hidden shadow-[-8px_8px_0px_0px_#131415] hover:shadow-[-12px_12px_0px_0px_#131415] transition-all duration-300"
          >
            {/* Visual stage with Centered Play overlay */}
            <div className="relative w-full aspect-video bg-brand-dark flex items-center justify-center border-b-2 border-brand-dark overflow-hidden">
              <img
                src={film.image}
                alt={film.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Centered Large Title in Video Stage */}
              <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors pointer-events-none">
                <h2 className="font-anton text-4xl md:text-7xl text-brand-cream tracking-widest drop-shadow-md select-none">
                  {film.title.toUpperCase()}
                </h2>
              </div>

              {/* Clickable Play trigger button overlay */}
              <div
                onClick={() => setActiveVideo(film)}
                className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="p-6 rounded-full border-2 border-brand-dark bg-brand-cream text-brand-dark hover:bg-brand-purple hover:text-brand-cream hover:border-brand-purple transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-xl">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>

              <span className="absolute top-4 left-4 font-mono-roboto text-[10px] font-bold text-brand-dark bg-brand-cream border border-brand-dark px-3 py-1 rounded-md shadow">
                {film.badge}
              </span>
            </div>

            {/* Spec descriptions */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8 space-y-2">
                <h4 className="font-anton text-lg tracking-wider text-brand-dark uppercase">
                  PROJECT SPECIFICATIONS
                </h4>
                <p className="font-sans text-sm text-brand-dark/80 leading-relaxed">
                  {film.description}
                </p>
              </div>

              {/* Metadata specs table (md:col-span-4) */}
              <div className="md:col-span-4 space-y-2 border-l border-brand-dark/10 pl-6 font-mono-roboto text-xs">
                <div>
                  <span className="text-brand-dark/50">Client:</span>{" "}
                  <strong className="text-brand-dark font-bold">{film.client}</strong>
                </div>
                <div>
                  <span className="text-brand-dark/50">Role:</span>{" "}
                  <strong className="text-brand-dark font-bold">{film.role}</strong>
                </div>
                <div>
                  <span className="text-brand-dark/50">Year:</span>{" "}
                  <strong className="text-brand-dark font-bold">{film.year}</strong>
                </div>
                <div>
                  <span className="text-brand-dark/50">Tools:</span>{"  "}
                  <strong className="text-brand-dark font-bold">{film.tools}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simulated Player Modal overlay */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-brand-dark/85 backdrop-blur-md">
            <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-brand-cream border-2 border-brand-dark rounded-2xl shadow-[-10px_10px_0px_0px_#131415] overflow-hidden z-10 p-4"
            >
              {/* Header inside modal */}
              <div className="flex items-center justify-between pb-3 border-b border-brand-dark/10 mb-4">
                <div>
                  <span className="font-mono-roboto text-[10px] font-bold text-brand-purple bg-brand-purple/10 px-2.5 py-0.5 rounded">
                    {activeVideo.client}
                  </span>
                  <h3 className="font-anton text-lg tracking-wider text-brand-dark mt-1">
                    {activeVideo.title.toUpperCase()}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-2 rounded-full border-2 border-brand-dark bg-brand-cream hover:bg-brand-purple hover:text-brand-cream hover:border-brand-purple transition-colors"
                  aria-label="Close video player"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video visual area */}
              <div className="w-full aspect-video border-2 border-brand-dark rounded-xl bg-brand-dark flex flex-col items-center justify-center overflow-hidden relative">
                <img
                  src={activeVideo.image}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute bottom-6 flex flex-col items-center gap-1.5 text-center text-brand-cream z-10">
                  <Disc className="w-8 h-8 text-[#d0ff71] animate-spin-slow" />
                  <span className="font-mono-roboto text-xs font-bold tracking-widest text-[#d0ff71]">
                    PLAYING SIMULATED FILM STREAM
                  </span>
                  <p className="font-sans text-[10px] text-brand-cream/60 max-w-sm">
                    Plays high-resolution Vimeo/YouTube embedding source or raw MP4 files.
                  </p>
                </div>
              </div>

              {/* Close Button below */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setActiveVideo(null)}
                  className="flex items-center gap-1.5 px-5 py-2.5 border-2 border-brand-dark rounded-full bg-brand-dark text-brand-cream font-mono-roboto text-xs font-bold hover:bg-brand-purple hover:border-brand-purple transition-colors shadow"
                >
                  CLOSE PLAYER
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Sticky Status Footer Bar (Grid Aligned) */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-cream border-t border-brand-dark/10 py-3 px-6 md:px-12 flex items-center justify-between font-mono-roboto text-xs text-brand-dark/70 z-30">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse"></div>
          <span>Available to work</span>
        </div>
        <div className="hidden sm:block font-bold tracking-wider text-brand-purple">
          Connect the dots
        </div>
        <div className="font-semibold">
          {indiaTime || "India Time"}
        </div>
      </div>
    </div>
  );
}
