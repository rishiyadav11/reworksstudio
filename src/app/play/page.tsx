"use client";

import { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface PlayItem {
  id: string;
  title: string;
  category: string;
  bgColor: string;
  graphic: React.ReactNode;
}

export default function PlayArchive() {
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

  const items: PlayItem[] = [
    {
      id: "char-relaxed",
      title: "Character illustration - relaxed",
      category: "Cel loop",
      bgColor: "bg-[#fbcfe8]",
      graphic: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-pink-700">
          <rect width="200" height="200" rx="16" fill="#fce7f3" />
          <path d="M 40 140 C 40 140 100 20 160 140" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round">
            <animate attributeName="stroke-width" dur="2s" repeatCount="indefinite" values="12; 18; 12" />
          </path>
          <circle cx="100" cy="80" r="16" fill="#ec4899" />
          <circle cx="95" cy="76" r="2" fill="#fff" />
          <circle cx="105" cy="76" r="2" fill="#fff" />
        </svg>
      ),
    },
    {
      id: "payment-wave",
      title: "Riding the payment wave",
      category: "Fintech concept",
      bgColor: "bg-[#cffafe]",
      graphic: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-cyan-600">
          <rect width="200" height="200" rx="16" fill="#ecfeff" />
          {/* Animated receipt paper */}
          <path d="M 40 40 L 40 160 L 160 160 Z" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M 20 100 Q 60 70, 100 100 T 180 100 L 180 200 L 20 200 Z" fill="#22d3ee">
            <animate attributeName="d" dur="3s" repeatCount="indefinite"
              values="
                M 20 100 Q 60 70, 100 100 T 180 100 L 180 200 L 20 200 Z;
                M 20 100 Q 60 130, 100 100 T 180 100 L 180 200 L 20 200 Z;
                M 20 100 Q 60 70, 100 100 T 180 100 L 180 200 L 20 200 Z
              "
            />
          </path>
          <circle cx="100" cy="80" r="8" fill="#eab308">
            <animate attributeName="cy" dur="1.5s" repeatCount="indefinite" values="80; 60; 80" />
          </circle>
        </svg>
      ),
    },
    {
      id: "travel-illus",
      title: "Travel illustration",
      category: "Landscape Vector",
      bgColor: "bg-[#d9f99d]",
      graphic: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#3f6212]">
          <rect width="200" height="200" rx="16" fill="#f7fee7" />
          <polygon points="100,40 40,160 160,160" fill="currentColor" opacity="0.8" />
          <polygon points="100,40 80,80 120,80" fill="#f7fee7" />
          <line x1="20" y1="160" x2="180" y2="160" stroke="currentColor" strokeWidth="4" />
        </svg>
      ),
    },
    {
      id: "kungfu-grandma",
      title: "Grandma's Kung fu kick",
      category: "Character short",
      bgColor: "bg-[#ffedd5]",
      graphic: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-orange-600">
          <rect width="200" height="200" rx="16" fill="#fff7ed" />
          <g transform="translate(100, 100)">
            <circle cx="0" cy="-20" r="18" fill="currentColor" />
            <circle cx="0" cy="-40" r="6" fill="#4b5563" />
            {/* Kicking leg loop */}
            <path d="M 0 10 L 40 10 L 60 -10" stroke="currentColor" strokeWidth="10" strokeLinecap="round" fill="none">
              <animateTransform attributeName="transform" type="rotate" dur="1.2s" repeatCount="indefinite"
                values="0 0 10; -30 0 10; 0 0 10" />
            </path>
          </g>
        </svg>
      ),
    },
    {
      id: "google-logo",
      title: "Google logo animation",
      category: "Brand motion",
      bgColor: "bg-[#dbeafe]",
      graphic: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-blue-600">
          <rect width="200" height="200" rx="16" fill="#eff6ff" />
          <g transform="translate(100, 100)">
            <animateTransform attributeName="transform" type="rotate" dur="2.5s" repeatCount="indefinite" values="0; 360" />
            <text x="0" y="25" textAnchor="middle" className="font-anton text-7xl fill-current">G</text>
          </g>
        </svg>
      ),
    },
    {
      id: "wfh-loop",
      title: "Work from home",
      category: "Interactive Cel",
      bgColor: "bg-[#f5f3ff]",
      graphic: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-purple-700">
          <rect width="200" height="200" rx="16" fill="#f5f3ff" />
          {/* Sleeping character on space office chair */}
          <circle cx="100" cy="80" r="22" fill="#a78bfa" />
          <path d="M70 120 Q100 90 130 120" stroke="currentColor" strokeWidth="8" fill="none" />
          <rect x="75" y="125" width="50" height="30" rx="6" fill="#1e1b4b" />
          <span className="text-xs absolute bottom-12 left-12">💻</span>
        </svg>
      ),
    },
    {
      id: "govt-choir",
      title: "Goverment's choir",
      category: "Audio Visual",
      bgColor: "bg-[#ffe4e6]",
      graphic: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-rose-600">
          <rect width="200" height="200" rx="16" fill="#fff1f2" />
          <g transform="translate(40, 100)">
            <rect x="0" y="-30" width="15" height="60" fill="currentColor">
              <animate attributeName="height" dur="1s" repeatCount="indefinite" values="60; 20; 60" />
            </rect>
            <rect x="30" y="-45" width="15" height="90" fill="currentColor">
              <animate attributeName="height" dur="0.8s" repeatCount="indefinite" values="30; 90; 30" />
            </rect>
            <rect x="60" y="-20" width="15" height="40" fill="currentColor">
              <animate attributeName="height" dur="1.2s" repeatCount="indefinite" values="40; 10; 40" />
            </rect>
            <rect x="90" y="-40" width="15" height="80" fill="currentColor">
              <animate attributeName="height" dur="0.9s" repeatCount="indefinite" values="80; 30; 80" />
            </rect>
          </g>
        </svg>
      ),
    },
    {
      id: "bloom-flower",
      title: "Bloom",
      category: "Morphing Vector",
      bgColor: "bg-[#e0f2fe]",
      graphic: (
        <svg viewBox="0 0 200 200" className="w-full h-full text-sky-600">
          <rect width="200" height="200" rx="16" fill="#f0f9ff" />
          <circle cx="100" cy="100" r="25" fill="#fde047" />
          {/* Flower petals scaling */}
          <circle cx="100" cy="70" r="18" fill="currentColor" opacity="0.8">
            <animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="18; 26; 18" />
          </circle>
          <circle cx="100" cy="130" r="18" fill="currentColor" opacity="0.8">
            <animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="18; 26; 18" />
          </circle>
          <circle cx="70" cy="100" r="18" fill="currentColor" opacity="0.8">
            <animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="18; 26; 18" />
          </circle>
          <circle cx="130" cy="100" r="18" fill="currentColor" opacity="0.8">
            <animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="18; 26; 18" />
          </circle>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex-grow w-full min-h-[92vh] bg-[#050505] text-[#fffbeb] relative select-none pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 text-center">
        <h1 className="font-anton text-6xl md:text-8xl tracking-widest text-[#fffbeb] uppercase">
          Play
        </h1>
        <p className="font-mono-roboto text-xs text-[#fffbeb]/50 mt-4 tracking-widest uppercase">
          cel animations, audio loops, & interactive bumpers.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl border-2 border-brand-dark bg-[#1a1a1b] p-4 flex flex-col justify-between shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Visual Screen */}
            <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-4 flex items-center justify-center">
              {item.graphic}
              <div className="absolute top-2 right-2 flex items-center gap-1 font-mono-roboto text-[8px] font-bold text-brand-dark bg-[#d0ff71] px-2 py-0.5 rounded-full">
                <Play className="w-2.5 h-2.5 fill-current" />
                <span>LOOP</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="border-t border-brand-cream/10 pt-3">
              <span className="font-mono-roboto text-[10px] text-brand-cream/40 uppercase tracking-widest block">
                {item.category}
              </span>
              <h3 className="font-anton text-base tracking-wider text-[#fffbeb] mt-0.5 uppercase">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Sticky Status Footer Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-cream/10 border-t border-[#fffbeb]/15 py-3 px-6 md:px-12 flex items-center justify-between font-mono-roboto text-xs text-[#fffbeb]/70 z-30">
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
  );
}
