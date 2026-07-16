"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
    <footer className="w-full bg-[#131415] text-brand-cream border-t border-brand-dark/10 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
        <div className="md:w-1/3">
          <h2 className="font-anton text-3xl md:text-4xl tracking-widest text-brand-cream uppercase mb-4">REWORKS STUDIO</h2>
          <p className="font-sans text-xs text-brand-cream/70 leading-relaxed mb-6">
            Working with founders and teams across India, the UK, Australia and the US. 
            We build custom AI agents, automation pipelines, and robust digital platforms.
          </p>
          <div className="flex flex-col gap-2">
            <a href="mailto:hello@reworksstudio.in" className="font-mono-roboto text-sm font-bold text-brand-cream hover:text-brand-purple transition-colors">
              hello@reworksstudio.in
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-mono-roboto text-sm font-bold text-brand-cream hover:text-[#00c850] transition-colors">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="md:w-1/3">
          <h3 className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cream/50 uppercase mb-4">ENGINEERING STACK</h3>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "LangChain", "OpenAI", "n8n", "PostgreSQL"].map((tech) => (
              <span key={tech} className="font-mono-roboto text-[10px] font-bold border border-brand-cream/20 bg-brand-cream/5 px-2.5 py-1 text-brand-cream uppercase">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col md:items-end">
          <h3 className="font-mono-roboto text-xs font-bold tracking-widest text-brand-cream/50 uppercase mb-4">LEGAL & LINKS</h3>
          <div className="flex flex-col gap-2 md:items-end">
            <Link href="/privacy" className="font-mono-roboto text-xs text-brand-cream/70 hover:text-brand-cream transition-colors uppercase">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-mono-roboto text-xs text-brand-cream/70 hover:text-brand-cream transition-colors uppercase">
              Terms of Service
            </Link>
            <Link href="/connect" className="font-mono-roboto text-xs text-brand-cream/70 hover:text-brand-cream transition-colors uppercase">
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between font-mono-roboto text-[10px] text-brand-cream/50">
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <span className="font-bold tracking-widest uppercase">© {new Date().getFullYear()} Reworks Studio</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#00c850] animate-pulse" />
          <span className="font-semibold uppercase tracking-widest">{indiaTime}</span>
        </div>
      </div>
    </footer>
  );
}
