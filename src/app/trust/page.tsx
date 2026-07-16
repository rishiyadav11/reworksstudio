"use client";

import { Shield, Lock, Code2, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TrustPage() {
  return (
    <div className="flex-grow w-full bg-[#fcf6f0] text-[#131415] pt-14 selection:bg-brand-purple selection:text-white">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-20 border-b border-brand-dark/10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block font-mono-roboto text-[11px] font-bold tracking-[0.2em] text-brand-purple uppercase mb-4 border border-brand-purple/20 px-3 py-1 rounded-full bg-brand-purple/5"
        >
          Accountability & Credibility
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-anton text-[10vw] md:text-[6vw] leading-[0.9] tracking-wider uppercase text-brand-dark"
        >
          The <span className="text-brand-purple">No Black-Box</span> Agency
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-brand-dark/70"
        >
          We believe high-ticket engineering should come with radical transparency. No hidden costs, no hostage codebases, and strict adherence to modern security and performance standards.
        </motion.p>
      </div>

      {/* Trust Pillars */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          {/* Pillar 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 border border-blue-200">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-anton text-2xl tracking-wide uppercase mb-3">Our Guarantee</h3>
              <p className="font-sans text-sm leading-relaxed text-brand-dark/80">
                Transparent pricing and delivery timelines. If we scope a project, we deliver it exactly on budget and on schedule. We take full responsibility for architectural decisions and code quality, ensuring you never pay for our learning curve.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-brand-purple border border-purple-200">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-anton text-2xl tracking-wide uppercase mb-3">The "No Black-Box" Promise</h3>
              <p className="font-sans text-sm leading-relaxed text-brand-dark/80">
                Clients get full intellectual property rights, unrestricted repository access from day one, and extensive documentation. We build systems you can take in-house at any time without friction or proprietary lock-in.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 border border-green-200">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-anton text-2xl tracking-wide uppercase mb-3">Engineering Standards</h3>
              <p className="font-sans text-sm leading-relaxed text-brand-dark/80">
                We design architectures ready for scale and compliance. Utilizing Next.js on Edge networks, strict TypeScript environments, and SOC2-ready database configurations, your infrastructure is built to enterprise standards from the start.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 border border-orange-200">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-anton text-2xl tracking-wide uppercase mb-3">Global Reach, Local Accountability</h3>
              <p className="font-sans text-sm leading-relaxed text-brand-dark/80">
                Operating internationally with asynchronous communication workflows. We guarantee daily progress reports, overlapping availability for core syncs, and legally binding protections for your data and equity.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="w-full bg-brand-dark text-brand-cream py-24 text-center px-6">
        <h2 className="font-anton text-3xl md:text-5xl tracking-widest uppercase mb-6">
          Ready to build with certainty?
        </h2>
        <Link 
          href="/connect"
          className="inline-flex items-center gap-2 bg-brand-purple text-white px-8 py-4 font-mono-roboto text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-colors border border-transparent"
        >
          Book a Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
