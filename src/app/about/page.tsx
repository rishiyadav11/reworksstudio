"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Track scroll inside the container to trigger 3D perspective rotation on the center card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to 3D rotation, y translations, and scale for the center card
  const cardRotateY = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 15, -15]);
  const cardRotateX = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 8, -8]);
  const cardScale = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 1.05, 0.95]);

  // Which center card to display based on scroll progress
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest < 0.35) {
        setActiveCardIndex(0);
      } else if (latest < 0.7) {
        setActiveCardIndex(1);
      } else {
        setActiveCardIndex(2);
      }
    });
  }, [scrollYProgress]);

  return (
    <div
      ref={containerRef}
      className="flex-grow w-full min-h-[150vh] bg-[#3a3bf7] text-[#fffbeb] relative select-none"
    >
      {/* Sticky Hero section */}
      <div className="sticky top-0 h-[100vh] w-full flex flex-col justify-between overflow-hidden py-16 px-6 md:px-12">
        {/* Header Title */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between pointer-events-none">
          <span className="font-mono-roboto text-xs font-bold tracking-widest text-[#fffbeb]/60">ABOUT THE STUDIO</span>
          <span className="font-anton text-lg tracking-wider text-[#d0ff71]">CREATIVE ENGINE</span>
        </div>

        {/* 3D Visual Centerpiece Layout */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-grow">
          {/* Left Text Detail Column */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left z-10">
            <h1 className="font-anton text-6xl md:text-[7vw] lg:text-[6vw] leading-none text-[#fffbeb] tracking-widest">
              CREATIVE
            </h1>
            <div className="max-w-xs mx-auto lg:mx-0 font-sans text-xs md:text-sm leading-relaxed text-[#fffbeb]/85">
              <p>
                <strong>Reworks Studio</strong> is an India-based design and development studio. Founded by <strong>Rishi Yadav</strong> and later joined by <strong>Navdeep Bhardwaj</strong>, we have grown into a high-octane team of designers, engineers, and creatives crafting state-of-the-art digital interfaces.
              </p>
            </div>
          </div>

          {/* Center Card with 3D Scrolling Perspective (lg:col-span-4) */}
          <div className="lg:col-span-4 flex items-center justify-center py-6 md:py-12 z-20" style={{ perspective: "1200px" }}>
            <motion.div
              style={{
                rotateY: cardRotateY,
                rotateX: cardRotateX,
                scale: cardScale,
                transformStyle: "preserve-3d",
              }}
              className="w-[240px] md:w-[300px] aspect-[3/4] border-2 border-[#fffbeb]/20 bg-brand-cream/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.6)] relative cursor-grab active:cursor-grabbing"
            >
              {/* Card 1: Rishi Yadav */}
              {activeCardIndex === 0 && (
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/rishi.png')" }}>
                  <div className="absolute inset-0 bg-black/15" />
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-dark/80 backdrop-blur-sm text-brand-cream border border-brand-cream/20 text-[9px] px-3 py-2 font-mono-roboto tracking-wider uppercase text-center rounded">
                    Rishi Yadav • Founder
                  </div>
                </div>
              )}

              {/* Card 2: Navdeep Bhardwaj */}
              {activeCardIndex === 1 && (
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5635AQHhXoNOYvxmCA/profile-framedphoto-shrink_200_200/B56ZjiYCfKG0AY-/0/1756144609520?e=1784829600&v=beta&t=Oaj8RHCfhqLwSxifCJi517lp-4APYPTc6umZQ-1vD8Y')" }}>
                  <div className="absolute inset-0 bg-black/15" />
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-dark/80 backdrop-blur-sm text-brand-cream border border-brand-cream/20 text-[9px] px-3 py-2 font-mono-roboto tracking-wider uppercase text-center rounded">
                    Navdeep Bhardwaj • Co-Founder
                  </div>
                </div>
              )}

              {/* Card 3: The Reworks Team */}
              {activeCardIndex === 2 && (
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')" }}>
                  <div className="absolute inset-0 bg-black/15" />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#131415]/80 backdrop-blur-sm text-brand-cream border border-brand-cream/20 text-[9px] px-3 py-2 font-mono-roboto tracking-wider uppercase text-center rounded">
                    The Reworks Team
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Text Detail Column */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-right flex flex-col items-center lg:items-end z-10">
            <h1 className="font-anton text-6xl md:text-[7vw] lg:text-[6vw] leading-none text-[#fffbeb] tracking-widest">
              STUDIO
            </h1>
            <div className="max-w-xs font-sans text-xs md:text-sm leading-relaxed text-[#fffbeb]/85 lg:text-right">
              <p>
                Our team blends creative coding, motion design, and UI architecture to shape digital ecosystems. By engineering responsive interfaces and interactive designs, we make brand experiences feel premium, responsive, and alive.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Green Capabilities Brochure button */}
        <div className="absolute bottom-16 right-0 z-30">
          <a
            href="/capabilities.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 pl-6 pr-8 py-4 bg-[#10b981] hover:bg-[#059669] border-l-2 border-y-2 border-brand-dark text-brand-dark rounded-l-full shadow-[-4px_4px_0px_0px_#131415] hover:shadow-none transition-all transform hover:-translate-x-1 font-mono-roboto text-xs font-bold tracking-widest uppercase"
          >
            <FileText className="w-4 h-4" />
            Capabilities Deck
          </a>
        </div>

        {/* Bottom Sticky Status Footer Bar (Grid Aligned) */}
        <div className="w-full bg-brand-cream/10 border-t border-[#fffbeb]/15 py-3 px-6 md:px-12 flex items-center justify-between font-mono-roboto text-xs text-[#fffbeb]/70 z-30">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#d0ff71] animate-pulse"></div>
            <span>Available to work</span>
          </div>
          <div className="hidden sm:block font-bold tracking-wider text-[#d0ff71]">
            Connect the dots
          </div>
          <div className="font-semibold">
            {indiaTime || "India Time"}
          </div>
        </div>
      </div>
    </div>
  );
}
