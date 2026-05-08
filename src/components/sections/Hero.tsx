"use client";

import { motion } from "framer-motion";

const ANIM = {
  duration: { fast: 0.3, base: 0.7, slow: 1.0 },
  ease: [0.16, 1, 0.3, 1] as any,
  stagger: 0.08,
} as const;

export default function Hero() {
  return (
    <section className="w-full px-6 md:px-20 relative pt-32 pb-40">
      
      {/* Micro-details v4 */}
      <div className="hero-counter hidden md:flex">
        <span className="hero-counter-num">12</span>
        <span className="hero-counter-label">projets</span>
      </div>
      <div className="hero-line hidden md:block" />

      <div className="z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIM.duration.base, delay: 0.35, ease: ANIM.ease }}
          className="hero-name"
        >
          <div className="line1">DESTEG</div>
          <div className="line2">AHISSOU</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ANIM.duration.base, delay: 0.7, ease: ANIM.ease }}
            className="max-w-[340px]"
          >
            <p className="text-acid text-[12px] md:text-[13px] leading-[1.8] uppercase font-[var(--font-space-mono)]">
              Graphic Designer & Art Director. Je conçois des visuels impactants alliant stratégie et exigence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ANIM.duration.base, delay: 0.7, ease: ANIM.ease }}
            className="flex md:justify-end items-center gap-5"
          >
            <span className="text-[13px] uppercase tracking-[0.15em]">Cotonou / Conakry</span>
            <div className="flex items-center gap-2 px-3 py-1 border border-paper/10">
              <div className="availability-dot" />
              <span className="text-[10px] uppercase tracking-widest text-acid">Disponible</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
