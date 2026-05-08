"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Direction Artistique", level: "Expert", filled: true },
  { name: "Branding / Identity", level: "Expert", filled: true },
  { name: "Packaging Design", level: "Avancé", filled: false },
  { name: "Motion Design", level: "Intermédiaire", filled: false },
  { name: "Social Media Strategy", level: "Avancé", filled: false },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-32 px-6 md:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="section-label m-0 mb-20"
      >
        Expertise
      </motion.div>
      
      <motion.div 
        className="max-w-3xl space-y-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill, index) => (
          <motion.div
            variants={item}
            key={index}
            className="flex justify-between items-center py-4 border-b border-paper/5 group"
          >
            <span className="text-[16px] md:text-[20px] font-[var(--font-syne)] text-paper uppercase tracking-widest group-hover:text-acid transition-colors">
              {skill.name}
            </span>
            <span className={`skill-badge ${skill.filled ? 'filled' : ''}`}>
              {skill.level}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
