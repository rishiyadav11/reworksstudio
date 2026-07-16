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
        className="fixed top-0 left-0 right-0 z-50 bg-brand-cream border-b border-brand-dark/10"
        style={{ fontFamily: "var(--font-mono-roboto), monospace" }}
      >
        <div className="max-w-full px-6 md:px-10 flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-sm tracking-[0.18em] text-brand-dark uppercase hover-underline"
          >
            REWORKS STUDIO
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-semibold tracking-widest transition-colors duration-200 hover-underline relative pb-1 ${
                    isActive
                      ? "text-brand-purple font-bold border-b border-brand-purple"
                      : link.label === "CONNECT"
                      ? "text-brand-purple hover:text-brand-purple font-bold"
                      : "text-brand-dark/70 hover:text-brand-dark"
                  }`}
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
              className="hidden md:flex items-center gap-2 bg-brand-dark text-brand-cream px-4 py-2 text-xs font-bold tracking-widest uppercase hover:bg-brand-purple transition-colors border border-brand-dark"
            >
              BOOK A CALL
            </Link>
            <button
              className="md:hidden text-brand-dark/70 hover:text-brand-dark transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
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
            className="fixed top-14 left-0 right-0 z-40 md:hidden bg-brand-cream border-b border-brand-dark/10"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
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

