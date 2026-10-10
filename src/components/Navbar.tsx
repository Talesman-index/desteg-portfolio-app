"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Hitech3DButton from "@/components/Hitech3DButton";
import { useTheme } from "@/components/ThemeProvider";
import { 
  InstagramIcon, 
  LinkedinIcon, 
  WhatsappIcon,
  SunIcon,
  MoonIcon
} from "@/components/Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projets", href: "#projets" },
    { label: "Expertise", href: "#expertise" },
    { label: "Résultats", href: "#resultats" },
    { label: "À propos", href: "#a-propos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-[#F8F8FC]/85 dark:bg-[#0B0B14]/85 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.06] shadow-sm dark:shadow-lg dark:shadow-black/30" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Left: Onella Agnikpe Style Brand Logo Lockup */}
          <Logo />

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[15px] font-semibold text-[#11111B] dark:text-[#8888A4] hover:text-[#7C3AED] dark:hover:text-white transition-colors group py-1"
              >
                <span>{link.label}</span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#7C3AED] dark:bg-[#8B5CF6] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right: Social Handles, Theme Toggle & "Me contacter" Button */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            {/* Social Icons */}
            <div className="flex items-center gap-2 text-[#57556E] dark:text-[#8888A4]">
              <a
                href="https://www.instagram.com/desteur_design_?igsh=MWZtajlod3ZmdGI4bQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Desteg"
                className="hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-colors p-1.5 hover:scale-110"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="https://gn.linkedin.com/in/desteg-ahissou-717a64254"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Desteg"
                className="hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-colors p-1.5 hover:scale-110"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href="https://wa.me/224613993414"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Desteg"
                className="hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-colors p-1.5 hover:scale-110"
              >
                <WhatsappIcon size={17} />
              </a>
            </div>

            {/* Theme Toggle Button (Light / Dark) */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 hover:border-[#7C3AED]/50 dark:hover:border-[#8B5CF6]/50 text-[#11111B] dark:text-white hover:scale-105"
              title={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {theme === "dark" ? (
                <SunIcon size={16} className="text-amber-400" />
              ) : (
                <MoonIcon size={16} className="text-[#7C3AED]" />
              )}
            </button>

            {/* 3D Hi-Tech CTA Button */}
            <Hitech3DButton
              href="https://wa.me/224613993414"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
            >
              <span>Me contacter</span>
            </Hitech3DButton>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Changer de thème"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground"
            >
              {theme === "dark" ? <SunIcon size={15} className="text-amber-400" /> : <MoonIcon size={15} className="text-[#7C3AED]" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="text-[#11111B] dark:text-white p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 top-16 z-[60] flex flex-col justify-between p-6 bg-[#F8F8FC] dark:bg-[#0B0B14] border-t border-black/10 dark:border-[#8B5CF6]/15"
          >
            <div className="flex flex-col gap-6 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-[#57556E] dark:text-[#8888A4] hover:text-[#11111B] dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-[#57556E] dark:text-[#8888A4] hover:text-[#11111B] dark:hover:text-white transition-colors"
              >
                Archives visuelles
              </Link>
            </div>

            <div className="flex flex-col gap-4 pb-8 border-t border-black/10 dark:border-white/10 pt-6">
              <a
                href="https://wa.me/224613993414"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-full bg-[#7C3AED] dark:bg-[#8B5CF6] text-white font-medium text-base shadow-lg shadow-purple-600/25"
              >
                Me contacter sur WhatsApp
              </a>

              <div className="flex justify-center gap-6 pt-2 text-[#57556E] dark:text-[#8888A4]">
                <a href="https://www.instagram.com/desteur_design_?igsh=MWZtajlod3ZmdGI4bQ==" target="_blank" rel="noopener noreferrer" className="hover:text-[#7C3AED] dark:hover:text-[#8B5CF6]">
                  Instagram
                </a>
                <a href="https://gn.linkedin.com/in/desteg-ahissou-717a64254" target="_blank" rel="noopener noreferrer" className="hover:text-[#7C3AED] dark:hover:text-[#8B5CF6]">
                  LinkedIn
                </a>
                <a href="mailto:desdesteurde@gmail.com" className="hover:text-[#7C3AED] dark:hover:text-[#8B5CF6]">
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
