"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Années d'exp.", value: "4", unit: "ans" },
  { label: "Agences", value: "3", unit: "structures" },
  { label: "Clients freelance", value: "5+", unit: "projets" },
  { label: "Pays", value: "2", unit: "Bénin / Guinée" },
];

const tools = ["Photoshop", "Illustrator", "InDesign", "Framer", "Webflow"];

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.section 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="py-32 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20" 
      id="about"
    >
      <div className="flex flex-col gap-10">
        <motion.div variants={item} className="section-label m-0">À propos</motion.div>
        
        <motion.h2 variants={item} className="text-[clamp(20px,6vw,24px)] leading-tight font-[var(--font-syne)] text-paper uppercase">
          Je conçois des visuels <span className="text-acid">impactants</span> en alliant stratégie et <span className="text-acid">exigence</span>.
        </motion.h2>
        
        <motion.p variants={item} className="text-[14px] leading-[2] text-paper/45 font-[var(--font-space-mono)] max-w-md">
          Desteg Ahissou, graphiste designer et DA. Mon approche est basée sur un équilibre radical entre esthétique électrique et cohérence fonctionnelle.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-2 mt-4">
          {tools.map((tool) => (
            <span key={tool} className="px-3 py-1 border border-paper/10 text-[11px] uppercase tracking-widest text-paper/30">
              {tool}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col">
        {stats.map((stat, i) => (
          <motion.div variants={item} key={i} className="py-6 border-b border-paper/5 flex items-end justify-between group">
            <span className="text-[13px] uppercase tracking-widest text-paper/30 group-hover:text-paper/50 transition-colors">
              {stat.label}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-[var(--font-syne)] text-acid">{stat.value}</span>
              <span className="text-[12px] font-[var(--font-space-mono)] text-acid uppercase tracking-wider">{stat.unit}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
