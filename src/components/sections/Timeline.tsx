"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "2025–26",
    role: "Responsable Créatif",
    company: "Indigo — Conakry, Guinée",
    active: true
  },
  {
    year: "2024–25",
    role: "Adj. Directeur Artistique",
    company: "GCAR Services — Bénin",
    active: false
  },
  {
    year: "2023–24",
    role: "Freelance",
    company: "Bénin / International",
    active: false
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as any,
    }
  })
};

const dotVariants = {
  hidden: { scale: 0.6 },
  visible: (i: number) => ({
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.12 + 0.2,
      type: 'spring', stiffness: 260, damping: 18
    }
  })
};

const textVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.12 + 0.2,
      ease: "easeOut"
    }
  })
};

export default function Timeline() {
  const sectionRef = useRef(null);
  
  // Line drawing progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 px-6 md:px-20 overflow-hidden" id="experience">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
        className="section-label m-0 mb-20"
      >
        Expérience
      </motion.div>
      
      <div className="max-w-4xl relative" ref={sectionRef}>
        {/* The drawing vertical line - positioned relative to the grid gap */}
        <div className="absolute left-[72px] md:left-[140px] top-0 bottom-0 w-[1px] bg-paper/5 z-0" />
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute left-[72px] md:left-[140px] top-0 w-[1px] bg-acid/40 z-0 origin-top"
        />

        <div className="space-y-20 md:space-y-24">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index }: { exp: typeof experiences[0], index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="grid grid-cols-[70px_1fr] md:grid-cols-[130px_1fr] gap-6 md:gap-12 items-start">
      {/* Year */}
      <motion.span 
        variants={itemVariants}
        custom={index}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`text-[14px] md:text-[16px] font-[var(--font-syne)] font-bold transition-colors duration-500 pt-1 ${inView ? 'text-acid' : 'text-paper/20'}`}
      >
        {exp.year}
      </motion.span>
      
      <div className="relative pl-6 md:pl-10">
        {/* Dot */}
        <motion.div 
          variants={dotVariants}
          custom={index}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`absolute left-[-24px] md:left-[-35px] top-3 w-[8px] h-[8px] rounded-full z-10 transition-colors duration-500
          ${inView ? 'bg-acid shadow-[0_0_12px_rgba(232,255,0,0.4)]' : 'bg-ink border border-paper/15'}`} 
        />
        
        {/* Active Pulse Effect for current role */}
        {exp.active && inView && (
          <div className="absolute left-[-24px] md:left-[-35px] top-3 w-[8px] h-[8px] rounded-full bg-acid animate-ping opacity-50 z-0" />
        )}
        
        <motion.div
          variants={textVariants}
          custom={index}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className={`text-[18px] md:text-[24px] font-[var(--font-syne)] uppercase leading-tight mb-2 ${exp.active ? 'text-acid' : 'text-paper hover:text-acid transition-colors'}`}>
            {exp.role}
          </h3>
          <p className="text-[11px] md:text-[12px] font-[var(--font-space-mono)] text-paper/40 uppercase tracking-widest">
            {exp.company}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
