"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, x: "100%", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-20 py-8 border-b border-paper/[0.07] bg-ink/80 backdrop-blur-sm nav-line">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-[var(--font-syne)] text-[11px] md:text-[13px] font-bold uppercase tracking-widest flex items-center gap-1 z-[110]">
            <span>D</span>
            <span className="text-acid">.</span>
            <span>AHISSOU</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink label="Projets" href="/#work" />
            <NavLink label="À propos" href="/#about" />
            <a
              href="mailto:desdesteurde@gmail.com"
              className="px-5 py-2 bg-acid text-ink font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Contact ↗
            </a>
          </div>

          {/* Hamburger Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden z-[110] flex flex-col gap-1.5 w-6 group"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-full h-[1px] bg-paper origin-center transition-colors group-hover:bg-acid" 
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-[1px] bg-paper transition-colors group-hover:bg-acid" 
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-full h-[1px] bg-paper origin-center transition-colors group-hover:bg-acid" 
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-ink z-[90] flex flex-col justify-center px-10 gap-8"
          >
            <div className="flex flex-col gap-6">
              {["Projets", "À propos"].map((label, i) => (
                <motion.div key={label} custom={i} variants={linkVariants}>
                  <Link 
                    href={`/#${label === "Projets" ? "work" : "about"}`} 
                    onClick={toggleMenu}
                    className="text-[40px] font-[var(--font-syne)] font-bold uppercase tracking-tighter text-paper hover:text-acid transition-colors"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div custom={2} variants={linkVariants}>
                <a
                  href="mailto:desdesteurde@gmail.com"
                  className="text-[40px] font-[var(--font-syne)] font-bold uppercase tracking-tighter text-acid"
                >
                  Contact
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 pt-10 border-t border-paper/10 flex flex-col gap-4"
            >
              <span className="text-[10px] uppercase tracking-widest text-paper/30 font-[var(--font-space-mono)]">Social</span>
              <div className="flex gap-6">
                <a href="#" className="text-[12px] uppercase text-paper/50 hover:text-acid transition-colors">Instagram</a>
                <a href="#" className="text-[12px] uppercase text-paper/50 hover:text-acid transition-colors">LinkedIn</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="text-[11px] uppercase tracking-widest text-paper/40 hover:text-paper transition-colors font-[var(--font-space-mono)]"
    >
      {label}
    </Link>
  );
}
