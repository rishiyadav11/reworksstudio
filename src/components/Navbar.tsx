"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "HOME",     href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "WORK",     href: "/work" },
  { label: "ABOUT",    href: "/about" },
  { label: "TRUST",    href: "/trust" },
  { label: "CONNECT",  href: "/connect" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/95 backdrop-blur-md border-b border-brand-dark/10 transition-colors"
        style={{ fontFamily: "var(--font-mono-roboto), monospace" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* Logo & Studio Identifier */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-bold text-sm tracking-[0.2em] text-brand-dark uppercase hover:text-brand-cobalt transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cobalt flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 bg-brand-dark inline-block" />
              REWORKS STUDIO
            </Link>
            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-brand-dark/15 text-[10px] text-brand-dark/60 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>SYSTEMS ACTIVE • Q2 ADVISORY OPEN</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-semibold tracking-widest transition-colors duration-150 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cobalt ${
                    isActive
                      ? "text-brand-cobalt font-bold border-b-2 border-brand-cobalt"
                      : "text-brand-dark/70 hover:text-brand-dark"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/connect"
              className="hidden md:inline-flex items-center gap-2 bg-brand-dark text-brand-cream px-4 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-cobalt transition-all duration-200 border border-brand-dark shadow-[-2px_2px_0px_0px_#121314] active:translate-x-0.5 active:translate-y-0.5"
            >
              BOOK SCOPING CALL
            </Link>
            <button
              className="md:hidden p-2 text-brand-dark/80 hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cobalt"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-brand-cream border-b border-brand-dark/15 shadow-xl"
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-semibold tracking-widest py-2 border-b border-brand-dark/05 ${
                      isActive ? "text-brand-purple font-bold" : "text-brand-dark/70"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/connect"
                className="mt-4 text-center text-sm font-bold tracking-widest py-3 bg-brand-dark text-brand-cream border border-brand-dark uppercase"
                onClick={() => setMobileOpen(false)}
              >
                BOOK A CALL
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

