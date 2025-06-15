'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '' },
  { label: 'About Us', href: 'about' },
  { label: 'Plans', href: 'plans' },
  { label: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="w-full fixed top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-cyan-400/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Reworks Studio Logo"
            width={50}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-white tracking-wide drop-shadow-md">
            Reworks studio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-[#00FFFF] transition duration-300 text-sm font-medium backdrop-blur-sm px-3 py-1 rounded-md hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-[#00FFFF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-md border-t border-[#00FFFF22] overflow-hidden"
          >
            <div className="flex flex-col items-center py-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#00FFFF] transition duration-200 text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
