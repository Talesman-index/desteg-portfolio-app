"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

// ... (allVisuals array remains the same, I'll use a placeholder for brevety in thought but I must include the whole file since I'm using replace_file_content)
// I will fetch the file content to ensure I have all the visuals.
// Actually, I just read it, I have it in context.

export default function ProjectsPage() {
  const [filter, setFilter] = useState("Tous");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
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
    <main className="bg-ink selection:bg-acid selection:text-ink min-h-screen">
      <header className="fixed top-0 left-0 w-full p-6 md:px-20 z-50 mix-blend-difference flex items-center justify-between">
        <Link href="/" className="text-[12px] font-[var(--font-space-mono)] uppercase tracking-widest text-paper hover:text-acid transition-colors">
          ← Retour à l'accueil
        </Link>
        <div className="font-[var(--font-syne)] font-bold text-paper text-[14px]">
          ARCHIVES
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h1 className="text-[clamp(40px,8vw,100px)] font-[var(--font-syne)] uppercase leading-none text-paper tracking-tighter">
            Tous les <br/><span className="text-acid">Projets</span>
          </h1>
          <p className="mt-6 text-[14px] text-paper/40 font-[var(--font-space-mono)] max-w-lg">
            Une collection étendue de directions artistiques, identités visuelles, créations print et concepts packaging.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setSelectedIndex(null);
              }}
              className={`px-6 py-2 rounded-full border text-[11px] font-[var(--font-space-mono)] uppercase tracking-widest transition-all duration-300 ${
                filter === cat 
                  ? 'bg-acid text-ink border-acid shadow-[0_0_15px_rgba(232,255,0,0.4)]' 
                  : 'bg-transparent text-paper/60 border-paper/10 hover:border-acid/50 hover:text-acid'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVisuals.map((item, index) => (
              <motion.div
                layout
                key={item.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="break-inside-avoid relative group overflow-hidden bg-mid border border-paper/5 inline-block w-full mb-6 cursor-zoom-in"
                onClick={() => setSelectedIndex(index)}
              >
                <img 
                  src={item.src} 
                  alt={`Visual ${index}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-acid font-[var(--font-space-mono)] text-[11px] uppercase tracking-widest border border-acid/20 bg-ink/80 px-3 py-1 backdrop-blur-md">
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/98 backdrop-blur-xl"
          >
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-8 right-8 z-[110] text-paper/50 hover:text-acid transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 z-[110] pointer-events-none">
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="p-4 bg-paper/5 hover:bg-acid hover:text-ink text-paper rounded-full transition-all pointer-events-auto backdrop-blur-md border border-paper/10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="p-4 bg-paper/5 hover:bg-acid hover:text-ink text-paper rounded-full transition-all pointer-events-auto backdrop-blur-md border border-paper/10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-20 relative">
              <motion.img
                key={filteredVisuals[selectedIndex].src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                src={filteredVisuals[selectedIndex].src}
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
              
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-acid font-[var(--font-space-mono)] text-[11px] uppercase tracking-[0.3em]">
                  {filteredVisuals[selectedIndex].type}
                </span>
                <span className="text-paper/20 text-[10px] font-[var(--font-space-mono)]">
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
  { src: "/visuels/ODYSÉÉ/Présentation_.jpg", type: "Print" },
  { src: "/visuels/ODYSÉÉ/INVITÉ.jpg", type: "Print" },
  { src: "/visuels/ODYSÉÉ/Odyssé.jpg", type: "Print" },
  { src: "/visuels/ODYSÉÉ/PARTENAIRES SPONSORS.jpg", type: "Print" },
  { src: "/visuels/CAMPAGNE PRÉSIDENTIELLE/ENTRÉÉ-01.jpg", type: "Campagne" },
  { src: "/visuels/CAMPAGNE PRÉSIDENTIELLE/ENTRÉÉ-03.jpg", type: "Campagne" },
  { src: "/visuels/CAMPAGNE PRÉSIDENTIELLE/TOTEM copie-02.jpg", type: "Campagne" },
  { src: "/visuels/CAMPAGNE PRÉSIDENTIELLE/TOTEM copie-03.jpg", type: "Campagne" },
  { src: "/visuels/CAMPAGNE PRÉSIDENTIELLE/TOTEM copie-01.jpg", type: "Campagne" },
  { src: "/visuels/CTG/train_.jpg", type: "Print" },
  { src: "/visuels/BARBE À HUILE/LOGO -13.png", type: "Logo" },
  { src: "/visuels/BARBE À HUILE/LOGO -02.png", type: "Logo" },
  { src: "/visuels/FREEZE CORLEONE/LE SHE_.jpg", type: "Print" },
  { src: "/visuels/FREEZE CORLEONE/Freeze.jpg", type: "Print" },
  { src: "/visuels/FREEZE CORLEONE/FREEZE ANNONCE.jpg", type: "Print" },
  { src: "/visuels/LA BANQUE ISLAMIQUE/BIG_Plan de travail 1.jpg", type: "Campagne" },
  { src: "/visuels/LA BANQUE ISLAMIQUE/BIG_Plan de travail 1 copie 2.jpg", type: "Campagne" },
  { src: "/visuels/LA BANQUE ISLAMIQUE/BIG_Plan de travail 1 copie.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /VISUEL.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /400cmx300cm.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /102cm x 171 cm_.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /300cmx 400cm.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /400cmx300cm 2.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /Révélation_Plan de travail 1.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /Visuelle 3.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /Chèque Factis_Plan de travail 1.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /Visuelle 2.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /700cm x 150cm.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /MARCHANDISE.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /Visuelle_.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /VISUEL.2 psd.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /Votre super marché.jpg", type: "Campagne" },
  { src: "/visuels/CARREFOUR /Suivez nous.jpg", type: "Campagne" },
  { src: "/visuels/CALENDRIER CNA/Calendrier mural_Plan de travail 1.jpg", type: "Édition" },
  { src: "/visuels/CALENDRIER CNA/Calendrier mural 2_Plan de travail 1 copie.jpg", type: "Édition" },
  { src: "/visuels/CALENDRIER CNA/Calendrier mural 2_Plan de travail 1 copie 2.jpg", type: "Édition" },
  { src: "/visuels/PORT AUTONOME /42cm x 60cm_Plan de travail 1 copie.jpg", type: "Print" },
  { src: "/visuels/PORT AUTONOME /42cm x 60cm_Plan de travail 1.jpg", type: "Print" },
  { src: "/visuels/PORT AUTONOME /42cm x 60cm_Plan de travail 1 copie 4.jpg", type: "Print" },
  { src: "/visuels/PORT AUTONOME /42cm x 60cm_Plan de travail 1 copie 2.jpg", type: "Print" },
  { src: "/visuels/PORT AUTONOME /42cm x 60cm_Plan de travail 1 copie 3.jpg", type: "Print" },
  { src: "/visuels/INDIGO/PANNEAU DÉROULANT.jpg", type: "Campagne" },
  { src: "/visuels/INDIGO/PANNEAU SUCETTE.jpg", type: "Campagne" },
  { src: "/visuels/INDIGO/Façade Ramadan 3_.jpg", type: "Campagne" },
  { src: "/visuels/INDIGO/SUCETTE.jpg", type: "Campagne" },
  { src: "/visuels/INDIGO/Façade Ramadan_Plan de travail 1 copie 2.jpg", type: "Campagne" },
  { src: "/visuels/INDIGO/DÉROULANT.jpg", type: "Campagne" },
  { src: "/visuels/INDIGO/GRANDE FAÇADE LA RNTRÉE_.jpg", type: "Campagne" },
  { src: "/visuels/MISS GUINNÉE/410x290cm.jpg", type: "Campagne" },
  { src: "/visuels/MISS GUINNÉE/43x26cm.GBGjpg.jpg", type: "Campagne" },
  { src: "/visuels/MISS GUINNÉE/DOS CHAPITEAU 3145X1200 cm.jpg", type: "Campagne" },
  { src: "/visuels/MISS GUINNÉE/43x31cm.jpg", type: "Campagne" },
  { src: "/visuels/MISS GUINNÉE/bache candidates.jpg", type: "Campagne" },
  { src: "/visuels/MISS GUINNÉE/43x26cm.jpg", type: "Campagne" },
  { src: "/visuels/LOGO/Logo Burritos PNG (1).png", type: "Logo" },
  { src: "/visuels/LOGO/LOGO -08.png", type: "Logo" },
  { src: "/visuels/LOGO/LOGO -09.png", type: "Logo" },
  { src: "/visuels/LOGO/MCA_Plan de travail 1 copie.png", type: "Logo" },
  { src: "/visuels/LOGO/LOGOOOO-03.jpg", type: "Logo" },
  { src: "/visuels/LOGO/LOGOOOO-01.jpg", type: "Logo" },
  { src: "/visuels/LOGO/LOGO _Plan de travail 1.png", type: "Logo" },
  { src: "/visuels/LOGO/BEL PHOTO ET CHARTE /LOGO -05.png", type: "Logo" },
  { src: "/visuels/LOGO/EXPERT.jpg", type: "Logo" },
  { src: "/visuels/LOGO/MÈCHE.EN.OR.LOGO -02.jpg", type: "Logo" },
  { src: "/visuels/LOGO/LOGO MISS GUINÉE_Plan de travail 1.jpg", type: "Logo" },
  { src: "/visuels/LOGO/LOGO -10.png", type: "Logo" },
  { src: "/visuels/LOGO/LOGO -04.png", type: "Logo" },
  { src: "/visuels/LOGO/LOGO -11.png", type: "Logo" },
  { src: "/visuels/LOGO/LOGO -07.png", type: "Logo" },
  { src: "/visuels/LOGO/LOGO -06.png", type: "Logo" },
  { src: "/visuels/LOGO/LOGO -03.png", type: "Logo" },
  { src: "/visuels/MINISTÈRE DE L'EMPLOIE/510 cm x 300 RETENUS jpg.jpg", type: "Campagne" },
  { src: "/visuels/MINISTÈRE DE L'EMPLOIE/BACHE 150cm X 230cm psb.jpg", type: "Campagne" },
  { src: "/visuels/MINISTÈRE DE L'EMPLOIE/69cm x 18 cm_.jpg", type: "Campagne" },
  { src: "/visuels/MINISTÈRE DE L'EMPLOIE/VISUEL 700X300. MR MOHAMED origipsd copie 2.jpg", type: "Campagne" },
  { src: "/visuels/MINISTÈRE DE L'EMPLOIE/VISUEL 400X800. MR MOHAMED origipsd copie 2.jpg", type: "Campagne" },
  { src: "/visuels/MINISTÈRE DE L'EMPLOIE/VISUEL 400X800. origipsd copie.jpg", type: "Campagne" },
  { src: "/visuels/CGE-GUI/CGE-GUI KAKEMONO, BANDEROLE_Plan de travail 1.jpg", type: "Édition" },
  { src: "/visuels/CGE-GUI/CGE-GUI KAKEMONO, BANDEROLE-02.jpg", type: "Édition" },
  { src: "/visuels/VISUELS/Sans titre - 4-03.png", type: "Visual" },
  { src: "/visuels/VISUELS/Sans titre - 4-02.png", type: "Visual" },
  { src: "/visuels/VISUELS/Sans titre - 4_Plan de travail 1.png", type: "Visual" },
  { src: "/visuels/VISUELS/Médicament.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/Sans titre - 4-04.png", type: "Visual" },
  { src: "/visuels/VISUELS/Pêche.2 jpg.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/ISHOW SPEED.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/Benfica real.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/CIGAR 2.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/Real Bayer retour.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/Mèches.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/Why.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/SAMOU BÉHANZIN KÉSSIEN GAING GAING_.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/Barça Retour_.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/BÉNIN. 2.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/BIRTHDAY.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/ZORO TRAFAL.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/JEANOU.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/TENNIS2.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/CURRY.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/NIKE AIR.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/AMERICCCCC.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/PSG MATCH_.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/REAL CYTY_.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/ROAD TRIP .jpg", type: "Visual" },
  { src: "/visuels/VISUELS/HEROS.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/real getaf.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/ITACHI.jpg", type: "Visual" },
  { src: "/visuels/VISUELS/REAL CITY.jpg", type: "Visual" }
];
