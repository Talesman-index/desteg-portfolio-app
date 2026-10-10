"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useTheme } from "@/components/ThemeProvider";
import { CloseIcon, SunIcon, MoonIcon } from "@/components/Icons";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("Tous");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { theme, toggleTheme } = useTheme();
  
  const categories = ["Tous", "Campagne", "Visual", "Print", "Édition", "Logo"];
  
  const filteredVisuals = filter === "Tous" 
    ? allVisuals 
    : allVisuals.filter(v => v.type === filter);

  const nextImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredVisuals.length);
  }, [selectedIndex, filteredVisuals]);

  const prevImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredVisuals.length) % filteredVisuals.length);
  }, [selectedIndex, filteredVisuals]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <main className="bg-[var(--background)] bg-grid-pattern selection:bg-[#7C3AED] dark:selection:bg-[#8B5CF6] selection:text-white min-h-screen text-[var(--foreground)] transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full p-4 sm:p-6 md:px-16 z-50 bg-[#F8F8FC]/85 dark:bg-[#0B0B14]/85 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/10 flex items-center justify-between transition-colors duration-300">
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/" className="text-xs font-semibold uppercase tracking-wider text-[#57556E] dark:text-white/70 hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-colors flex items-center gap-1.5">
            <span>←</span>
            <span>Studio</span>
          </Link>
          <div className="hidden sm:block border-l border-black/10 dark:border-white/10 pl-4">
            <Logo size="sm" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Basculer le thème"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 text-[#57556E] dark:text-[#8888A4] hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-all cursor-pointer"
          >
            {theme === "dark" ? <SunIcon size={14} /> : <MoonIcon size={14} />}
          </button>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/15 border border-[#7C3AED]/25 dark:border-[#8B5CF6]/30">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] dark:bg-[#8B5CF6] animate-pulse" />
            <span className="font-bold text-[#7C3AED] dark:text-[#8B5CF6] text-[11px] uppercase tracking-wider">
              Archives DA
            </span>
          </div>
        </div>
      </header>

      <section className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-12 overflow-hidden rounded-3xl border border-black/[0.08] dark:border-[#8B5CF6]/20 bg-white/90 dark:bg-[#121124]/90 p-8 sm:p-12 backdrop-blur-2xl shadow-xl dark:shadow-2xl transition-colors duration-300"
        >
          {/* Subtle decorative glow orb in corner */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/15 blur-[80px]" aria-hidden="true" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/15 border border-[#7C3AED]/25 dark:border-[#8B5CF6]/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#7C3AED] dark:text-[#8B5CF6] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] dark:bg-[#8B5CF6] animate-pulse" />
              <span>CATALOGUE & RÉTROSPECTIVE</span>
            </div>
            <h1 className="text-[clamp(34px,7vw,84px)] font-black uppercase leading-[0.95] text-[#11111B] dark:text-white tracking-tight transition-colors">
              Toutes les <br/>
              <span className="gradient-violet">
                Créations
              </span>
            </h1>
            <p className="mt-5 text-[14px] sm:text-[15px] text-[#57556E] dark:text-white/70 max-w-xl leading-relaxed transition-colors">
              Exploration exhaustive des directions artistiques, identités visuelles, packaging, affichages grand format et créations libres conçues par Desteg Ahissou.
            </p>
          </div>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-2.5 mb-14"
        >
          {categories.map(cat => {
            const isActive = filter === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setSelectedIndex(null);
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96, y: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`relative overflow-hidden px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer select-none flex items-center gap-2 ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#7C3AED] border-t border-white/45 border-b border-black/35 shadow-[0_8px_25px_rgba(124,58,237,0.5),inset_0_1px_1px_rgba(255,255,255,0.6)]' 
                    : 'bg-white/90 dark:bg-[#16152B]/85 text-[#57556E] dark:text-white/70 border border-black/10 dark:border-white/12 hover:border-[#7C3AED]/40 dark:hover:border-[#8B5CF6]/40 hover:text-[#11111B] dark:hover:text-white shadow-sm backdrop-blur-md'
                }`}
              >
                {/* 3D Top Bevel Glint */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Laser Shimmer Sweep (Continuous on active) */}
                <motion.div
                  className="pointer-events-none absolute inset-0 -skew-x-12"
                  animate={isActive ? { x: ["-140%", "160%"] } : {}}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 2.2,
                    duration: 1.25,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
                  }}
                />

                {/* Pulsing Active Indicator Dot */}
                {isActive && (
                  <span className="relative flex h-2 w-2 items-center justify-center shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                  </span>
                )}

                <span className="relative z-10">{cat}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Visuals Masonry Column Grid */}
        <motion.div layout className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVisuals.map((item, index) => (
              <motion.div
                layout
                key={item.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="break-inside-avoid relative group overflow-hidden bg-white dark:bg-[#16152B]/90 border border-black/[0.08] dark:border-white/10 hover:border-[#7C3AED]/50 dark:hover:border-[#8B5CF6]/50 rounded-2xl inline-block w-full mb-6 cursor-zoom-in shadow-md hover:shadow-xl dark:shadow-xl dark:hover:shadow-[0_20px_45px_rgba(139,92,246,0.2)] transition-all duration-300"
                onClick={() => setSelectedIndex(index)}
              >
                {/* Top subtle glare line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

                <img 
                  src={item.src} 
                  alt={`Visual ${index}`} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-[#7C3AED] dark:bg-[#8B5CF6] px-3 py-1 rounded-full shadow-md">
                    {item.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
          >
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-[110] w-11 h-11 rounded-full bg-white/10 hover:bg-[#8B5CF6] text-white flex items-center justify-center transition-all duration-200 border-t border-white/30 border-b border-black/30 shadow-[0_6px_18px_rgba(0,0,0,0.4)] active:scale-95 active:translate-y-0.5 cursor-pointer backdrop-blur-md"
              aria-label="Fermer"
            >
              <CloseIcon size={16} />
            </button>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 z-[110] pointer-events-none">
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-[#8B5CF6] text-white rounded-full transition-all duration-200 pointer-events-auto backdrop-blur-md border-t border-white/30 border-b border-black/40 shadow-[0_8px_20px_rgba(0,0,0,0.5)] active:scale-95 active:translate-y-0.5 cursor-pointer"
                aria-label="Précédent"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-[#8B5CF6] text-white rounded-full transition-all duration-200 pointer-events-auto backdrop-blur-md border-t border-white/30 border-b border-black/40 shadow-[0_8px_20px_rgba(0,0,0,0.5)] active:scale-95 active:translate-y-0.5 cursor-pointer"
                aria-label="Suivant"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-12 relative">
              <motion.img
                key={filteredVisuals[selectedIndex].src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                src={filteredVisuals[selectedIndex].src}
                className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl border border-white/15"
              />
              
              <div className="mt-4 flex items-center gap-4">
                <span className="text-[#8B5CF6] font-bold text-[11px] uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded">
                  {filteredVisuals[selectedIndex].type}
                </span>
                <span className="text-white/40 text-[11px]">
                  {selectedIndex + 1} / {filteredVisuals.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

const allVisuals = [
  { src: "/visuels/odysee/presentation_.jpg", type: "Print" },
  { src: "/visuels/odysee/invite.jpg", type: "Print" },
  { src: "/visuels/odysee/odysse.jpg", type: "Print" },
  { src: "/visuels/odysee/partenaires-sponsors.jpg", type: "Print" },
  { src: "/visuels/campagne-presidentielle/entree-01.jpg", type: "Campagne" },
  { src: "/visuels/campagne-presidentielle/entree-03.jpg", type: "Campagne" },
  { src: "/visuels/campagne-presidentielle/totem-copie-02.jpg", type: "Campagne" },
  { src: "/visuels/campagne-presidentielle/totem-copie-03.jpg", type: "Campagne" },
  { src: "/visuels/campagne-presidentielle/totem-copie-01.jpg", type: "Campagne" },
  { src: "/visuels/ctg/train_.jpg", type: "Print" },
  { src: "/visuels/barbe-a-huile/logo-13.png", type: "Logo" },
  { src: "/visuels/barbe-a-huile/logo-02.png", type: "Logo" },
  { src: "/visuels/freeze-corleone/le-she_.jpg", type: "Print" },
  { src: "/visuels/freeze-corleone/freeze.jpg", type: "Print" },
  { src: "/visuels/freeze-corleone/freeze-annonce.jpg", type: "Print" },
  { src: "/visuels/la-banque-islamique/big_plan-de-travail-1.jpg", type: "Campagne" },
  { src: "/visuels/la-banque-islamique/big_plan-de-travail-1-copie-2.jpg", type: "Campagne" },
  { src: "/visuels/la-banque-islamique/big_plan-de-travail-1-copie.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/visuel.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/400cmx300cm.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/102cm-x-171-cm_.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/300cmx-400cm.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/400cmx300cm-2.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/revelation_plan-de-travail-1.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/visuelle-3.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/cheque-factis_plan-de-travail-1.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/visuelle-2.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/700cm-x-150cm.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/marchandise.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/visuelle_.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/visuel.2-psd.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/votre-super-marche.jpg", type: "Campagne" },
  { src: "/visuels/carrefour-/suivez-nous.jpg", type: "Campagne" },
  { src: "/visuels/calendrier-cna/calendrier-mural_plan-de-travail-1.jpg", type: "Édition" },
  { src: "/visuels/calendrier-cna/calendrier-mural-2_plan-de-travail-1-copie.jpg", type: "Édition" },
  { src: "/visuels/calendrier-cna/calendrier-mural-2_plan-de-travail-1-copie-2.jpg", type: "Édition" },
  { src: "/visuels/port-autonome-/42cm-x-60cm_plan-de-travail-1-copie.jpg", type: "Print" },
  { src: "/visuels/port-autonome-/42cm-x-60cm_plan-de-travail-1.jpg", type: "Print" },
  { src: "/visuels/port-autonome-/42cm-x-60cm_plan-de-travail-1-copie-4.jpg", type: "Print" },
  { src: "/visuels/port-autonome-/42cm-x-60cm_plan-de-travail-1-copie-2.jpg", type: "Print" },
  { src: "/visuels/port-autonome-/42cm-x-60cm_plan-de-travail-1-copie-3.jpg", type: "Print" },
  { src: "/visuels/indigo/panneau-deroulant.jpg", type: "Campagne" },
  { src: "/visuels/indigo/panneau-sucette.jpg", type: "Campagne" },
  { src: "/visuels/indigo/facade-ramadan-3_.jpg", type: "Campagne" },
  { src: "/visuels/indigo/sucette.jpg", type: "Campagne" },
  { src: "/visuels/indigo/facade-ramadan_plan-de-travail-1-copie-2.jpg", type: "Campagne" },
  { src: "/visuels/indigo/deroulant.jpg", type: "Campagne" },
  { src: "/visuels/indigo/grande-facade-la-rntree_.jpg", type: "Campagne" },
  { src: "/visuels/miss-guinnee/410x290cm.jpg", type: "Campagne" },
  { src: "/visuels/miss-guinnee/43x26cm.gbgjpg.jpg", type: "Campagne" },
  { src: "/visuels/miss-guinnee/dos-chapiteau-3145x1200-cm.jpg", type: "Campagne" },
  { src: "/visuels/miss-guinnee/43x31cm.jpg", type: "Campagne" },
  { src: "/visuels/miss-guinnee/bache-candidates.jpg", type: "Campagne" },
  { src: "/visuels/miss-guinnee/43x26cm.jpg", type: "Campagne" },
  { src: "/visuels/logo/logo-burritos-png-1.png", type: "Logo" },
  { src: "/visuels/logo/logo-08.png", type: "Logo" },
  { src: "/visuels/logo/logo-09.png", type: "Logo" },
  { src: "/visuels/logo/mca_plan-de-travail-1-copie.png", type: "Logo" },
  { src: "/visuels/logo/logoooo-03.jpg", type: "Logo" },
  { src: "/visuels/logo/logoooo-01.jpg", type: "Logo" },
  { src: "/visuels/logo/logo-_plan-de-travail-1.png", type: "Logo" },
  { src: "/visuels/logo/bel-photo-et-charte-/logo-05.png", type: "Logo" },
  { src: "/visuels/logo/expert.jpg", type: "Logo" },
  { src: "/visuels/logo/meche.en.or.logo-02.jpg", type: "Logo" },
  { src: "/visuels/logo/logo-miss-guinee_plan-de-travail-1.jpg", type: "Logo" },
  { src: "/visuels/logo/logo-10.png", type: "Logo" },
  { src: "/visuels/logo/logo-04.png", type: "Logo" },
  { src: "/visuels/logo/logo-11.png", type: "Logo" },
  { src: "/visuels/logo/logo-07.png", type: "Logo" },
  { src: "/visuels/logo/logo-06.png", type: "Logo" },
  { src: "/visuels/logo/logo-03.png", type: "Logo" },
  { src: "/visuels/ministere-de-lemploie/510-cm-x-300-retenus-jpg.jpg", type: "Campagne" },
  { src: "/visuels/ministere-de-lemploie/bache-150cm-x-230cm-psb.jpg", type: "Campagne" },
  { src: "/visuels/ministere-de-lemploie/69cm-x-18-cm_.jpg", type: "Campagne" },
  { src: "/visuels/ministere-de-lemploie/visuel-700x300.-mr-mohamed-origipsd-copie-2.jpg", type: "Campagne" },
  { src: "/visuels/ministere-de-lemploie/visuel-400x800.-mr-mohamed-origipsd-copie-2.jpg", type: "Campagne" },
  { src: "/visuels/ministere-de-lemploie/visuel-400x800.-origipsd-copie.jpg", type: "Campagne" },
  { src: "/visuels/cge-gui/cge-gui-kakemono-banderole_plan-de-travail-1.jpg", type: "Édition" },
  { src: "/visuels/cge-gui/cge-gui-kakemono-banderole-02.jpg", type: "Édition" },
  { src: "/visuels/visuels/sans-titre-4-03.png", type: "Visual" },
  { src: "/visuels/visuels/sans-titre-4-02.png", type: "Visual" },
  { src: "/visuels/visuels/sans-titre-4_plan-de-travail-1.png", type: "Visual" },
  { src: "/visuels/visuels/medicament.jpg", type: "Visual" },
  { src: "/visuels/visuels/sans-titre-4-04.png", type: "Visual" },
  { src: "/visuels/visuels/peche.2-jpg.jpg", type: "Visual" },
  { src: "/visuels/visuels/ishow-speed.jpg", type: "Visual" },
  { src: "/visuels/visuels/benfica-real.jpg", type: "Visual" },
  { src: "/visuels/visuels/cigar-2.jpg", type: "Visual" },
  { src: "/visuels/visuels/real-bayer-retour.jpg", type: "Visual" },
  { src: "/visuels/visuels/meches.jpg", type: "Visual" },
  { src: "/visuels/visuels/why.jpg", type: "Visual" },
  { src: "/visuels/visuels/samou-behanzin-kessien-gaing-gaing_.jpg", type: "Visual" },
  { src: "/visuels/visuels/barca-retour_.jpg", type: "Visual" },
  { src: "/visuels/visuels/benin.-2.jpg", type: "Visual" },
  { src: "/visuels/visuels/birthday.jpg", type: "Visual" },
  { src: "/visuels/visuels/zoro-trafal.jpg", type: "Visual" },
  { src: "/visuels/visuels/jeanou.jpg", type: "Visual" },
  { src: "/visuels/visuels/tennis2.jpg", type: "Visual" },
  { src: "/visuels/visuels/curry.jpg", type: "Visual" },
  { src: "/visuels/visuels/nike-air.jpg", type: "Visual" },
  { src: "/visuels/visuels/americcccc.jpg", type: "Visual" },
  { src: "/visuels/visuels/psg-match_.jpg", type: "Visual" },
  { src: "/visuels/visuels/real-cyty_.jpg", type: "Visual" },
  { src: "/visuels/visuels/road-trip-.jpg", type: "Visual" },
  { src: "/visuels/visuels/heros.jpg", type: "Visual" },
  { src: "/visuels/visuels/real-getaf.jpg", type: "Visual" },
  { src: "/visuels/visuels/itachi.jpg", type: "Visual" },
  { src: "/visuels/visuels/real-city.jpg", type: "Visual" }
];
