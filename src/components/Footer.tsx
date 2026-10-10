"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[var(--background)] border-t border-black/[0.06] dark:border-white/[0.06] py-10 px-4 sm:px-6 lg:px-8 text-xs text-[#57556E] dark:text-[#8888A4] transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <div className="hidden sm:block border-l border-black/10 dark:border-white/10 pl-3">
            <span className="text-[11px] text-[#57556E] dark:text-[#8888A4] block">Direction Artistique & Branding • Afrique de l&apos;Ouest</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-medium">
          <a href="#projets" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">Projets</a>
          <a href="#expertise" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">Expertise</a>
          <a href="#resultats" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">Résultats</a>
          <a href="#a-propos" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">À propos</a>
          <a href="#faq" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">FAQ</a>
          <Link href="/projects" className="hover:text-[#7C3AED] dark:hover:text-white transition-colors">Archives</Link>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} Desteg Ahissou.</span>
          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="w-9 h-9 rounded-full bg-white dark:bg-white/10 hover:bg-[#7C3AED] dark:hover:bg-[#8B5CF6] text-[#11111B] dark:text-white hover:text-white border border-black/15 dark:border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5 active:scale-95"
          >
            ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
