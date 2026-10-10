"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      value: "+50",
      label: "Projets livrés avec succès",
      description: "Identités de marque complètes, packaging, key visuals et supports print déployés.",
      color: "#8B5CF6",
    },
    {
      value: "+15",
      label: "Marques & Institutions",
      description: "Miss Guinée, CTG, Carrefour Market, Indigo et entreprises leaders en Afrique de l'Ouest.",
      color: "#06B6D4",
    },
    {
      value: "4+",
      label: "Années d'expérience active",
      description: "De la conception graphique à la direction artistique de campagnes à fort impact.",
      color: "#F59E0B",
    },
    {
      value: "100%",
      label: "Rigueur & Satisfaction",
      description: "Respect strict des délais, finitions soignées pour l'impression et les supports numériques.",
      color: "#22C55E",
    },
  ];

  return (
    <section id="resultats" className="relative py-20 sm:py-24 bg-[var(--background)] px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      
      {/* Background ambient light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/15 border border-[#7C3AED]/25 dark:border-[#8B5CF6]/30 mb-4 transition-colors">
            <span className="text-xs font-semibold text-[#7C3AED] dark:text-[#8B5CF6] tracking-wide uppercase">
              Résultats concrets
            </span>
          </div>

          <h2 className="font-extrabold text-[32px] sm:text-[42px] leading-[1.15] text-[#11111B] dark:text-white transition-colors">
            Des chiffres, pas des{" "}
            <span className="gradient-violet">promesses</span>.
          </h2>

          <p className="mt-4 text-[16px] text-[#57556E] dark:text-[#8888A4] leading-relaxed transition-colors">
            Chaque identité visuelle est conçue pour marquer les esprits, asseoir votre crédibilité et générer de la valeur commerciale réelle.
          </p>
        </div>

        {/* Stats 4-Grid in Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <span 
                  className="font-extrabold text-4xl sm:text-5xl tracking-tight block mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
                <h3 className="font-bold text-lg text-[#11111B] dark:text-white mb-2 group-hover:text-[#7C3AED] dark:group-hover:text-[#8B5CF6] transition-colors">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-[#57556E] dark:text-[#8888A4] leading-relaxed mt-2 border-t border-black/[0.06] dark:border-white/[0.06] pt-3 transition-colors">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
