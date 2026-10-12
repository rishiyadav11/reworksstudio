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
    <footer className="w-full bg-[#121314] text-brand-cream border-t border-brand-dark/10 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand & Positioning */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 bg-brand-cream inline-block" />
            <span className="font-anton text-3xl tracking-widest text-brand-cream uppercase">REWORKS STUDIO</span>
          </div>
          <p className="font-sans text-xs text-brand-cream/70 leading-relaxed max-w-sm">
            Autonomous AI systems, multi-agent pipelines, and production software engineering. 
            Partnering with high-growth companies across the US, UK, Australia, and India.
          </p>
          <div className="pt-2 text-[11px] font-mono-roboto text-brand-cream/60 space-y-1">
            <p>HQ: Gurugram &amp; Narnaul, Haryana, India</p>
            <p>Leadership: Rishi Yadav (Founder) • Navdeep Bhardwaj (Co-Founder)</p>
          </div>
          <div className="flex items-center gap-4 pt-3">
            <a href="mailto:hello@reworksstudio.in" className="font-mono-roboto text-xs font-bold text-brand-cream hover:text-brand-cobalt transition-colors underline underline-offset-4">
              hello@reworksstudio.in
            </a>
            <span className="text-brand-cream/30">•</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-mono-roboto text-xs font-bold text-brand-cream/80 hover:text-emerald-400 transition-colors">
              LinkedIn
            </a>
            <span className="text-brand-cream/30">•</span>
            <a href="https://github.com/rishiyadav11" target="_blank" rel="noopener noreferrer" className="font-mono-roboto text-xs font-bold text-brand-cream/80 hover:text-brand-cobalt transition-colors">
              GitHub
            </a>
          </div>
        </div>

        {/* Navigation & Services */}
        <div className="md:col-span-4 grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-mono-roboto text-[11px] font-bold tracking-widest text-brand-cream/40 uppercase mb-4">CAPABILITIES</h3>
            <ul className="space-y-2.5 font-mono-roboto text-xs text-brand-cream/70">
              <li><Link href="/services" className="hover:text-brand-cream transition-colors">AI Agents &amp; Swarms</Link></li>
              <li><Link href="/services" className="hover:text-brand-cream transition-colors">Workflow Automation</Link></li>
              <li><Link href="/services" className="hover:text-brand-cream transition-colors">SaaS Dashboards</Link></li>
              <li><Link href="/services" className="hover:text-brand-cream transition-colors">Custom Software</Link></li>
              <li><Link href="/services" className="hover:text-brand-cream transition-colors">RAG &amp; Vector Search</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono-roboto text-[11px] font-bold tracking-widest text-brand-cream/40 uppercase mb-4">DIRECTORY</h3>
            <ul className="space-y-2.5 font-mono-roboto text-xs text-brand-cream/70">
              <li><Link href="/work" className="hover:text-brand-cream transition-colors">Selected Work</Link></li>
              <li><Link href="/about" className="hover:text-brand-cream transition-colors">About Studio</Link></li>
              <li><Link href="/trust" className="hover:text-brand-cream transition-colors">Trust &amp; Security</Link></li>
              <li><Link href="/connect" className="hover:text-brand-cream transition-colors">Project Brief</Link></li>
              <li><Link href="/capabilities.pdf" target="_blank" className="hover:text-emerald-400 transition-colors flex items-center gap-1">Deck (PDF)</Link></li>
            </ul>
          </div>
        </div>

        {/* Engineering Protocols */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="font-mono-roboto text-[11px] font-bold tracking-widest text-brand-cream/40 uppercase">PRODUCTION STACK</h3>
          <div className="flex flex-wrap gap-1.5">
            {["Next.js 16", "TypeScript", "LangChain", "FastAPI", "Python", "Llama 3", "Qdrant", "PostgreSQL", "Tailwind"].map((tech) => (
              <span key={tech} className="font-mono-roboto text-[10px] font-medium border border-brand-cream/15 bg-brand-cream/5 px-2 py-1 text-brand-cream/80">
                {tech}
              </span>
            ))}
          </div>
          <div className="pt-3 border-t border-brand-cream/10 flex flex-col gap-1.5 font-mono-roboto text-[11px] text-brand-cream/50">
            <Link href="/privacy" className="hover:text-brand-cream transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="max-w-7xl mx-auto border-t border-brand-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between font-mono-roboto text-[11px] text-brand-cream/50 gap-4">
        <div className="flex items-center gap-4">
          <span className="font-bold tracking-wider uppercase">© {new Date().getFullYear()} REWORKS STUDIO. ALL RIGHTS RESERVED.</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium tracking-wider uppercase">{indiaTime || "IST (UTC+5:30) • India"}</span>
        </div>
      </div>
    </footer>
  );
}
