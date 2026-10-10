"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@/components/Icons";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  status: string;
  isCurrent: boolean;
  desc: string;
  deliverables: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "2025 – 2026",
    role: "Responsable Créatif & Directeur Artistique",
    company: "Agence Indigo",
    location: "Conakry, Guinée",
    status: "EN ACTIVITÉ",
    isCurrent: true,
    desc: "Pilotage créatif de l'agence. Direction artistique globale des campagnes d'envergure, conception des habillages monumentaux de façades, mobilier urbain et coordination d'équipe graphique.",
    deliverables: ["Façades événementielles grand format", "Panneaux déroulants 4x3m", "Campagnes 360°"]
  },
  {
    period: "2024 – 2025",
    role: "Adjoint Directeur Artistique",
    company: "GCAR Services",
    location: "Cotonou, Bénin",
    status: "VALIDÉ",
    isCurrent: false,
    desc: "Supervision graphique des comptes clients d'entreprise, élaboration de chartes de marque, suivi rigoureux de la photogravure, épreuves contractuelles et conformité d'impression.",
    deliverables: ["Chartes graphiques complètes", "Catalogues de marque", "Packaging retail"]
  },
  {
    period: "2023 – 2024",
    role: "Directeur Artistique Indépendant",
    company: "Desteg Design Studio",
    location: "Afrique de l'Ouest & International",
    status: "PROJETS CLÉS",
    isCurrent: false,
    desc: "Création d'affiches événementielles percutantes (notamment pour l'artiste Freeze Corleone), direction graphique de campagnes de communication stratégique et création de logotypes.",
    deliverables: ["Affiches de concert", "Communication de campagne", "Identités visuelles"]
  },
  {
    period: "2021 – 2023",
    role: "Formation Supérieure en Design Graphique",
    company: "EIGB — École d'Imprimerie et des Arts Graphiques",
    location: "Cotonou, Bénin",
    status: "DIPLÔME D'ÉTAT",
    isCurrent: false,
    desc: "Formation technique et artistique approfondie : typographie, composition modulaire, théorie de la couleur, techniques d'impression offset et sérigraphie, sémiologie de l'image.",
    deliverables: ["Diplôme de Graphiste Designer", "Major de projets", "Maîtrise prépresse"]
  }
];

export default function Timeline() {
  return (
    <section className="relative w-full bg-[#ECE7DE] py-28 px-6 md:px-12 lg:px-20 overflow-hidden text-[#141414] select-none border-t border-black/10" id="experience">
      
      {/* Studio Top Tag / Header Stamp */}
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-black/10 pb-6 mb-16">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF4422]" />
          <span className="text-[12px] font-[var(--font-space-mono)] font-bold uppercase tracking-widest text-[#141414]/70">
            Registre du Parcours & Jalons Professionnels
          </span>
        </div>
        <div className="rubber-stamp">
          ARCHIVE OFFICIELLE DU STUDIO
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Kev Luna Style Technical Title & Overview */}
        <div className="lg:col-span-5 flex flex-col gap-8 sticky top-28">
          
          <div className="rounded-3xl p-8 sm:p-10 bg-white/80 backdrop-blur-xl border border-black/10 shadow-lg relative overflow-hidden">
            {/* Top subtle glare */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

            <span className="text-[10px] font-[var(--font-space-mono)] uppercase font-bold text-[#FF4422] tracking-widest">
              CHRONOLOGIE DU PARCOURS
            </span>

            <h2 className="font-[var(--font-syne)] font-black text-[clamp(28px,4.5vw,48px)] text-[#141414] leading-[1.05] uppercase tracking-tight mt-2">
              4+ Années d&apos;impact <br/>
              <span className="text-[#FF4422]">en agence & studio</span>
            </h2>

            <p className="mt-4 text-[13px] sm:text-[14px] text-[#333] font-[var(--font-space-mono)] leading-[1.8]">
              Un itinéraire forgé entre Cotonou et Conakry, au carrefour de la rigueur de l&apos;imprimerie et de la direction créative contemporaine pour des marques régionales et des artistes majeurs.
            </p>

            <div className="mt-6 pt-6 border-t border-black/10 flex flex-wrap gap-2.5">
              <span className="px-3.5 py-1 bg-white border border-black/15 text-[11px] font-mono font-bold uppercase rounded-full shadow-2xs">
                Cotonou [Bénin]
              </span>
              <span className="px-3.5 py-1 bg-[#FF4422]/10 border border-[#FF4422]/30 text-[#FF4422] text-[11px] font-mono font-bold uppercase rounded-full shadow-2xs">
                Conakry [Guinée]
              </span>
            </div>
          </div>

          {/* Availability Status Card */}
          <div className="p-6 bg-white/90 border border-black/10 rounded-2xl flex items-center justify-between shadow-sm">
            <div className="flex flex-col font-mono text-[11px]">
              <span className="text-black/50 uppercase font-bold">Disponibilité actuelle</span>
              <span className="text-black font-bold text-[13px] mt-0.5">Missions de Direction Artistique & Print</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#FF4422] text-white flex items-center justify-center font-[var(--font-syne)] font-black text-[12px] shadow">
              DA
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Logbook Milestone Cards */}
        <div className="lg:col-span-7 flex flex-col gap-8 relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-[2px] bg-black/10 z-0" aria-hidden="true" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 sm:pl-16 z-10 group"
            >
              {/* Timeline Pin Node */}
              <div 
                className={`absolute left-2 sm:left-4 top-5 w-4 h-4 rounded-full -translate-x-1/2 border-2 transition-transform duration-300 group-hover:scale-125 ${
                  exp.isCurrent 
                    ? "bg-[#FF4422] border-[#141414] shadow-md shadow-[#FF4422]/50" 
                    : "bg-white border-black/40"
                }`}
                aria-hidden="true"
              />

              {/* Docket Milestone Card with spring hover */}
              <motion.div 
                whileHover={{ x: 6, scale: 1.01 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/80 hover:bg-white transition-all p-6 sm:p-8 rounded-2xl border border-black/15 shadow-sm hover:shadow-xl relative overflow-hidden group cursor-default"
              >
                
                {/* Header: Period & Stamp */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] sm:text-[15px] font-[var(--font-syne)] font-black text-[#141414] tracking-tight">
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-mono text-black/40">•</span>
                    <span className="text-[11px] font-mono font-bold text-black/60 uppercase">
                      {exp.location}
                    </span>
                  </div>

                  <span 
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                      exp.isCurrent 
                        ? "bg-[#FF4422] text-white shadow-sm" 
                        : "bg-black/5 text-black/70 border border-black/10"
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="font-[var(--font-syne)] font-black text-[20px] sm:text-[22px] text-[#141414] leading-snug uppercase tracking-tight group-hover:text-[#FF4422] transition-colors">
                  {exp.role}
                </h3>
                <div className="text-[12px] font-mono font-bold text-[#FF4422] uppercase tracking-wider mt-1">
                  {exp.company}
                </div>

                {/* Description */}
                <p className="mt-3 text-[13px] text-[#333] font-[var(--font-space-mono)] leading-relaxed">
                  {exp.desc}
                </p>

                {/* Deliverables Chips with hover lift */}
                <div className="mt-5 pt-4 border-t border-black/10 flex flex-wrap gap-2">
                  {exp.deliverables.map((del) => (
                    <motion.span
                      key={del}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-2.5 py-1 bg-black/5 hover:bg-black/10 text-[#222] font-mono text-[10px] font-bold rounded uppercase tracking-wider cursor-default transition-colors shadow-2xs flex items-center gap-1.5"
                    >
                      <CheckIcon size={11} className="text-[#FF4422]" />
                      <span>{del}</span>
                    </motion.span>
                  ))}
                </div>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
