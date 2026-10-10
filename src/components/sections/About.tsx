"use client";

import { motion } from "framer-motion";
import HitechTag from "@/components/HitechTag";
import { TargetIcon, RulerIcon, SparklesIcon } from "@/components/Icons";

export default function About() {
  const pillars = [
    {
      title: "Vision Stratégique",
      desc: "Chaque choix typographique, palette de couleurs et composition répond à un objectif précis pour votre marque.",
      icon: TargetIcon,
    },
    {
      title: "Rigueur Technique",
      desc: "Une exécution irréprochable, du pixel numérique aux profils colorimétriques CMJN pour l'impression grand format.",
      icon: RulerIcon,
    },
    {
      title: "Impact Contemporain",
      desc: "Une esthétique moderne et audacieuse qui capte l'attention et traverse le temps sans se démoder.",
      icon: SparklesIcon,
    },
  ];

  const tools = [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
    "Direction Artistique",
    "Blender 3D",
    "Typographie",
    "Chaîne Graphique Print",
  ];

  return (
    <section id="a-propos" className="relative py-24 sm:py-32 bg-[var(--background)] px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/10 rounded-full blur-[170px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/15 border border-[#7C3AED]/25 dark:border-[#8B5CF6]/30 mb-4 transition-colors">
            <span className="text-xs font-semibold text-[#7C3AED] dark:text-[#8B5CF6] tracking-wide uppercase">
              À propos de Desteg
            </span>
          </div>

          <h2 className="font-extrabold text-[32px] sm:text-[46px] leading-[1.12] text-[#11111B] dark:text-white transition-colors">
            Un directeur artistique qui{" "}
            <span className="text-[#57556E] dark:text-white/45">
              donne vie à vos ambitions
            </span>.
          </h2>

          <p className="mt-4 text-[17px] text-[#57556E] dark:text-[#8888A4] leading-relaxed transition-colors">
            Basé en Afrique de l&apos;Ouest, j&apos;accompagne les institutions, marques ambitieuses et créateurs à s&apos;imposer visuellement grâce à des identités percutantes.
          </p>
        </div>

        {/* Split Content: Portrait & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Card with Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-card p-4 sm:p-5 relative group overflow-hidden">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-200 dark:bg-black/40">
                <img
                  src="/desteg-photos/Desteg_hero2.png"
                  alt="Desteg Ahissou"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-75" />

                {/* Status Indicator */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-[#0B0B14]/85 backdrop-blur-md border border-black/10 dark:border-white/10 text-xs font-medium text-[#11111B] dark:text-white flex items-center gap-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  <span>Disponible pour projets</span>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-white/90 dark:bg-[#0B0B14]/85 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-xs">
                  <span className="text-[11px] uppercase tracking-wider text-[#7C3AED] dark:text-[#8B5CF6] font-semibold block">
                    Directeur Artistique & Designer
                  </span>
                  <span className="text-xs text-[#57556E] dark:text-white/70">
                    Conakry, Guinée • Bénin • International
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Pillars & Tools */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <h3 className="font-bold text-2xl text-[#11111B] dark:text-white mb-4 transition-colors">
                La créativité au service de l&apos;impact concret
              </h3>
              <p className="text-[15px] text-[#57556E] dark:text-[#8888A4] leading-relaxed mb-4 transition-colors">
                Depuis plus de 4 ans, je conçois des systèmes visuels cohérents et engageants. Du branding officiel de <strong className="text-[#11111B] dark:text-white font-bold">Miss Guinée</strong> aux campagnes pour de grands réseaux de distribution comme <strong className="text-[#11111B] dark:text-white font-bold">Carrefour</strong> ou des agences comme <strong className="text-[#11111B] dark:text-white font-bold">Indigo</strong>, je transforme des idées complexes en identités mémorables.
              </p>
              <p className="text-[15px] text-[#57556E] dark:text-[#8888A4] leading-relaxed transition-colors">
                Mon travail combine sens esthétique pointu, maîtrise des contraintes de production et écoute bienveillante de vos objectifs.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div key={pillar.title} className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.025] border border-black/[0.06] dark:border-white/[0.06] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/15 border border-[#7C3AED]/25 dark:border-[#8B5CF6]/30 flex items-center justify-center text-[#7C3AED] dark:text-[#8B5CF6] mb-3 transition-colors">
                      <IconComp size={16} />
                    </div>
                    <h4 className="font-bold text-sm text-[#11111B] dark:text-white mb-1 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#57556E] dark:text-[#8888A4] leading-relaxed transition-colors">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Tools Pill Cloud */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#57556E]/80 dark:text-white/40 block mb-3">
                Outils & Compétences Clés
              </span>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <HitechTag
                    key={tool}
                    color="#8B5CF6"
                    size="sm"
                    pulseDot={false}
                  >
                    {tool}
                  </HitechTag>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
