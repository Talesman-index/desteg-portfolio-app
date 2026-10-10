"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  PenNibIcon, 
  PaletteIcon, 
  PackageIcon, 
  TrendingUpIcon, 
  GlobeIcon, 
  AwardIcon 
} from "@/components/Icons";

export default function Hero() {
  const [hoveredTag, setHoveredTag] = useState<number | null>(null);

  const tags = [
    {
      id: 0,
      label: "Branding & Identité",
      icon: PenNibIcon,
      color: "#22C55E",
      side: "left",
      desktopPos: "top-[40%] left-[3%] xl:left-[8%]",
      floatDelay: 0,
    },
    {
      id: 1,
      label: "Direction Artistique",
      icon: PaletteIcon,
      color: "#F59E0B",
      side: "left",
      desktopPos: "top-[56%] left-[1.5%] xl:left-[5%]",
      floatDelay: 0.4,
    },
    {
      id: 2,
      label: "Packaging & Print",
      icon: PackageIcon,
      color: "#EC4899",
      side: "left",
      desktopPos: "top-[72%] left-[3%] xl:left-[8%]",
      floatDelay: 0.8,
    },
    {
      id: 3,
      label: "Stratégie de Marque",
      icon: TrendingUpIcon,
      color: "#06B6D4",
      side: "right",
      desktopPos: "top-[40%] right-[3%] xl:right-[8%]",
      floatDelay: 0.2,
    },
    {
      id: 4,
      label: "Design Digital & Web",
      icon: GlobeIcon,
      color: "#8B5CF6",
      side: "right",
      desktopPos: "top-[56%] right-[1.5%] xl:right-[5%]",
      floatDelay: 0.6,
    },
    {
      id: 5,
      label: "+50 Projets Livrés",
      icon: AwardIcon,
      color: "#8B5CF6",
      side: "right",
      desktopPos: "top-[72%] right-[3%] xl:right-[8%]",
      floatDelay: 1.0,
    },
  ];

  return (
    <section className="relative h-[100dvh] min-h-[680px] max-h-[960px] w-full bg-[var(--background)] bg-grid-pattern overflow-hidden flex flex-col items-center justify-between pt-24 sm:pt-28 select-none transition-colors duration-300">
      
      {/* Ambient Radial Violet Lighting */}
      <div 
        className="absolute top-1/4 -left-36 w-[420px] h-[420px] bg-[#7C3AED]/12 dark:bg-[#8B5CF6]/15 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-36 w-[450px] h-[450px] bg-[#7C3AED]/15 dark:bg-[#8B5CF6]/20 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#7C3AED]/15 dark:bg-[#8B5CF6]/22 rounded-full blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Decorative Organic Watermarks */}
      <svg 
        className="absolute top-28 left-12 w-28 h-28 text-black/[0.035] dark:text-white/[0.025] pointer-events-none hidden md:block" 
        viewBox="0 0 100 100" 
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M50 0 C50 30 70 50 100 50 C70 50 50 70 50 100 C50 70 30 50 0 50 C30 50 50 30 50 0 Z" />
      </svg>
      <svg 
        className="absolute top-36 right-16 w-32 h-32 text-black/[0.03] dark:text-white/[0.02] pointer-events-none hidden md:block" 
        viewBox="0 0 100 100" 
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M50 5 C50 35 65 50 95 50 C65 50 50 65 50 95 C50 65 35 50 5 50 C35 50 50 35 50 5 Z" />
      </svg>

      {/* ============================================================ */}
      {/* TOP CONTENT: AIRY BADGE & TWO-LINE HEADLINE                  */}
      {/* ============================================================ */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-4 flex flex-col items-center text-center mt-1 sm:mt-3">
        
        {/* Top Capsule Badge with generous bottom spacing */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 sm:px-4 py-1.5 bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/15 border border-[#7C3AED]/25 dark:border-[#8B5CF6]/30 shadow-sm dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-colors max-w-[94vw]">
            <span className="text-[10px] sm:text-xs font-semibold text-[#7C3AED] dark:text-[#8B5CF6] tracking-wide whitespace-nowrap">
              Directeur Artistique • Graphic Designer • Créateur Visuel
            </span>
          </div>
        </motion.div>

        {/* Punchy Main Headline strictly on 2 lines, responsive without mobile overflow */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-extrabold text-[clamp(16px,4.6vw,22px)] sm:text-[clamp(24px,3.2vw,48px)] tracking-[-0.03em] text-[#11111B] dark:text-white w-full text-center transition-colors"
        >
          <span 
            className="flex flex-col gap-2 sm:gap-3.5"
          >
            <span className="block whitespace-nowrap leading-[1.25]">
              J&apos;accompagne les <span className="gradient-violet italic">marques</span> à vivre
            </span>
            <span className="block whitespace-nowrap leading-[1.25]">
              de leur <span className="gradient-violet italic">impact visuel</span>
            </span>
          </span>
        </motion.h1>

        {/* Mobile Badges Row — Descended into the space with elegant breathing room */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:hidden w-full px-2 mt-6 sm:mt-8 z-20 flex flex-wrap justify-center gap-2 max-w-md mx-auto"
        >
          {tags.slice(0, 4).map((tag) => {
            const IconComp = tag.icon;
            return (
              <motion.div
                key={tag.id}
                animate={{
                  y: [0, -3.5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.4,
                  delay: tag.id * 0.4,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden flex items-center gap-2 rounded-full px-3.5 py-1.5 border text-xs font-semibold bg-white/95 dark:bg-[#1A1A2E]/90 text-[#11111B] dark:text-white border-black/[0.08] dark:border-white/[0.12] backdrop-blur-md shadow-xs transition-all hover:scale-105 active:scale-95"
              >
                {/* Continuous micro glint */}
                <motion.div 
                  className="pointer-events-none absolute inset-0 -skew-x-12"
                  animate={{
                    x: ["-150%", "160%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 3 + tag.id * 0.8,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)",
                  }}
                />
                <span style={{ color: tag.color }} className="shrink-0 flex items-center justify-center relative z-10">
                  <IconComp size={13} />
                </span>
                <span className="whitespace-nowrap relative z-10">{tag.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* ============================================================ */}
      {/* CENTER PORTRAIT & 6 FLOATING PILLS                           */}
      {/* ============================================================ */}
      <div className="relative w-full max-w-7xl mx-auto flex-1 flex items-end justify-center min-h-[380px] mt-4 sm:mt-6 overflow-visible">
        
        {/* Floating Capsule Badges (Desktop & Tablet Placement) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
          {tags.map((tag) => {
            const isHovered = hoveredTag === tag.id;
            const IconComponent = tag.icon;
            return (
              <motion.div
                key={tag.id}
                className={`absolute ${tag.desktopPos} pointer-events-auto`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -6, 0] 
                }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.2 + tag.id * 0.08 },
                  y: {
                    repeat: Infinity,
                    duration: 3.6,
                    ease: "easeInOut",
                    delay: tag.floatDelay,
                  },
                }}
              >
                <div
                  onMouseEnter={() => setHoveredTag(tag.id)}
                  onMouseLeave={() => setHoveredTag(null)}
                  style={{
                    boxShadow: isHovered 
                      ? `0 6px 20px ${tag.color}40` 
                      : undefined,
                  }}
                  className={`flex items-center gap-2.5 rounded-full px-3.5 py-1.5 border transition-all duration-300 cursor-default hover:-translate-y-1 select-none backdrop-blur-md ${
                    isHovered
                      ? "border-current"
                      : "border-black/[0.08] dark:border-white/[0.12] shadow-sm dark:shadow-[0_4px_15px_rgba(0,0,0,0.35)]"
                  } bg-white/95 dark:bg-[#1A1A2E]/88`}
                >
                  <span style={{ color: tag.color }} className="shrink-0 flex items-center justify-center">
                    <IconComponent size={14} />
                  </span>
                  <span className="text-xs font-semibold text-[#11111B] dark:text-white tracking-tight whitespace-nowrap transition-colors">
                    {tag.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center Transparent Cutout Portrait (Scaled bigger to fill frame) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex justify-center items-end"
        >
          {/* Ambient glow behind Desteg */}
          <div 
            className="absolute bottom-12 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-[#7C3AED]/15 dark:bg-[#8B5CF6]/22 blur-[100px] pointer-events-none" 
            aria-hidden="true" 
          />

          <img
            src="/desteg-photos/Desteg_hero.png"
            alt="Desteg Ahissou - Directeur Artistique et Designer Graphique"
            className="relative z-10 h-[62vh] sm:h-[65vh] md:h-[68vh] lg:h-[72vh] max-h-[680px] w-auto max-w-[96vw] sm:max-w-none object-contain object-bottom scale-120 sm:scale-120 lg:scale-125 origin-bottom filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
            draggable={false}
          />

          {/* Smooth bottom fade into next section in both light and dark modes */}
          <div 
            className="pointer-events-none absolute -bottom-1 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/85 to-transparent z-20 transition-colors duration-300" 
            aria-hidden="true" 
          />
        </motion.div>

      </div>

    </section>
  );
}
