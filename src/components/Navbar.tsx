'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Plans', href: '/plans' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-cyan-400/20 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={50} height={40} className="rounded-full" />
          <span className="text-2xl font-bold text-white tracking-wide drop-shadow-md">
            Reworks studio
          </span>
        </Link>

        <nav className="hidden md:flex gap-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-white hover:text-[#00FFFF] transition text-sm font-medium px-3 py-1 rounded-md hover:bg-white/10"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-[#00FFFF] focus:outline-none"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/80 backdrop-blur-md overflow-hidden border-t border-[#00FFFF22]"
          >
            <div className="flex flex-col items-center py-4 gap-4">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#00FFFF] text-base font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
