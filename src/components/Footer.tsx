"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [indiaTime, setIndiaTime] = useState("");

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
    <footer
      className="w-full bg-brand-cream border-t border-brand-dark/10 py-3 px-6 md:px-12
                 flex items-center justify-between font-mono-roboto text-xs text-brand-dark/70"
    >
      {/* Left */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1b43f4]" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />
        </div>
        <span className="font-semibold tracking-wide">Available to build</span>
      </div>

      {/* Center */}
      <div className="hidden sm:flex items-center gap-6">
        <div className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />
        <span className="font-bold tracking-wider text-brand-purple">
          reworksstudio.in
        </span>
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff3eda]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#00c850] animate-pulse" />
        <span className="font-semibold text-brand-dark/80">{indiaTime}</span>
      </div>
    </footer>
  );
}
