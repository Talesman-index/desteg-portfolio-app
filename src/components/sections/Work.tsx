"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Hitech3DButton from "@/components/Hitech3DButton";
import { CloseIcon, ArrowUpRightIcon } from "@/components/Icons";

interface Project {
  id: string;
  title: string;
  category: string;
  categoryKey: string;
  client: string;
  year: string;
  desc: string;
  image: string;
  imagePosition?: string;
  tags: string[];
  gallery: string[];
}

const projects: Project[] = [
  {
    id: "presidentielle",
    title: "Présidence de la République de Guinée",
    category: "Communication Régilienne & Design d’État • Campagne & Identité Institutionnelle de la Présidence de la République de Guinée",
    categoryKey: "campagnes",
    client: "Présidence de la République de Guinée",
    year: "2024",
    desc: "Conception graphique, direction artistique des visuels de campagne et post-production des portraits officiels de la plus haute instance de l'État : le Président de la République de Guinée, le Général Mamadi Doumbouya. Ce projet de souveraineté nationale englobe à la fois la communication politique de grande diffusion et l'identité visuelle protocolaire de l'État guinéen.",
    image: "/visuels/campagne-presidentielle/pr-plan-de-travail-1-copie-8.jpg",
    tags: ["Communication Régilienne", "Design d'État", "Portraits Officiels", "Souveraineté", "Guinée"],
    gallery: [
      "/visuels/campagne-presidentielle/pr-plan-de-travail-1-copie-8.jpg",
      "/visuels/campagne-presidentielle/entree-01.jpg",
      "/visuels/campagne-presidentielle/totem-copie-01.jpg",
      "/visuels/campagne-presidentielle/totem-copie-02.jpg",
      "/visuels/campagne-presidentielle/totem-copie-03.jpg"
    ]
  },
  {
    id: "carrefour",
    title: "Carrefour Market",
    category: "Identité de Marque & Lancement • Ouverture de Carrefour Market (Conakry, Guinée)",
    categoryKey: "packaging",
    client: "Carrefour Market Guinée",
    year: "2024",
    desc: "Création de l'univers visuel et des supports de communication pour le lancement historique du tout premier supermarché Carrefour Market Guinee en République de Guinée. Un projet d'envergure marquant une nouvelle ère pour la grande distribution moderne et la valorisation du contenu local à Conakry.",
    image: "/visuels/carrefour-/img-0526.jpg",
    imagePosition: "object-top",
    tags: ["Retail", "Lancement Historique", "Affichage Urbain", "Conakry", "PLV"],
    gallery: [
      "/visuels/carrefour-/img-0526.jpg",
      "/visuels/carrefour-/3o9a3410-jpg.jpg",
      "/visuels/carrefour-/3o9a3431-jpg.jpg",
      "/visuels/carrefour-/visuel.jpg",
      "/visuels/carrefour-/102cm-x-171-cm_.jpg",
      "/visuels/carrefour-/suivez-nous.jpg",
      "/visuels/carrefour-/400cmx300cm.jpg"
    ]
  },
  {
    id: "the-box",
    title: "The Box Group",
    category: "Scénographie & Branding de Stand • The Box Group (SADEN 2026, Conakry)",
    categoryKey: "da",
    client: "The Box Group — Hôtel Kaloum",
    year: "2026",
    desc: "Conception spatiale, design d'expérience et habillage graphique (branding) du stand d'exposition de The Box Group lors de la 5ᵉ édition du Salon des Entrepreneurs et de l'Emploi de Guinée (SADEN 2026), tenue à l'Hôtel Kaloum. L'événement s'est articulé autour du thème stratégique national : « Simandou 2040, l'heure des (T)PME ».",
    image: "/visuels/the-box/the-box-01.jpg",
    tags: ["Scénographie Stand", "SADEN 2026", "Hôtel Kaloum", "Simandou 2040", "Branding"],
    gallery: [
      "/visuels/the-box/the-box-01.jpg",
      "/visuels/the-box/whatsapp-image-2026-10-13-at-14-28-37.jpg",
      "/visuels/the-box/whatsapp-image-2026-10-13-at-14-28-38.jpg",
      "/visuels/the-box/whatsapp-image-2026-10-13-at-14-28-39.jpg",
      "/visuels/the-box/whatsapp-image-2026-10-13-at-14-28-39-1.jpg",
      "/visuels/the-box/italian-collection.jpg",
      "/visuels/the-box/kakemono-led.jpg",
      "/visuels/the-box/the-box-01v-01.jpg",
      "/visuels/the-box/the-box-0s1-01.jpg",
      "/visuels/the-box/the-box-j01-01.jpg",
      "/visuels/the-box/the-box-01-1.jpg"
    ]
  },
  {
    id: "logo-decoupe-68-ans",
    title: "Logo Découpe « 68 ans de la Guinée »",
    category: "Logotype & Identité de Marque • Logo Découpe « 68 ans d’Indépendance de la Guinée »",
    categoryKey: "branding",
    client: "République de Guinée",
    year: "2024",
    desc: "Conception du logotype commémoratif officiel des 68 ans d’Indépendance de la République de Guinée et modélisation pour découpe volumique 3D. Réalisation sur mesure en enseigne lumineuse rétroéclairée et habillage scénique monumental célébrant l'histoire, la jeunesse et les bâtisseurs de la nation.",
    image: "/visuels/independance/photo-realisation-1.jpg",
    imagePosition: "object-[center_35%]",
    tags: ["Logotype Officiel", "Découpe 3D", "Enseigne Lumineuse", "Identité Nationale", "Guinée"],
    gallery: [
      "/visuels/independance/decoup-3d-logo.png",
      "/visuels/independance/photo-realisation-1.jpg",
      "/visuels/independance/photo-realisation-2.jpg",
      "/visuels/independance/decoup-3d-logo.jpg"
    ]
  },
  {
    id: "miss-guinee",
    title: "Miss Guinée 2025",
    category: "Identité de Marque & Événementiel",
    categoryKey: "branding",
    client: "Comité National Miss Guinée",
    year: "2025",
    desc: "Conception graphique et habillage visuel (branding) de l'espace pour l'édition de Miss Guinée 2025, déployé au prestigieux Chapiteau by Issa de Kipé à Conakry. Ce projet d’envergure nationale célèbre l’excellence, l'engagement culturel et le Branding National de la femme guinéenne.",
    image: "/visuels/miss-guinnee/410x290cm.jpg",
    tags: ["Logotype", "Branding Espace", "Chapiteau by Issa", "Événementiel", "Prestige"],
    gallery: [
      "/visuels/miss-guinnee/410x290cm.jpg",
      "/visuels/miss-guinnee/whatsapp-image-2026-10-13-at-15-47-01.jpg",
      "/visuels/miss-guinnee/whatsapp-image-2026-10-13-at-15-47-49.jpg",
      "/visuels/miss-guinnee/whatsapp-image-2026-10-13-at-15-48-20.jpg",
      "/visuels/miss-guinnee/43x26cm.jpg",
      "/visuels/miss-guinnee/bache-candidates.jpg",
      "/visuels/miss-guinnee/dos-chapiteau-3145x1200-cm.jpg"
    ]
  },
  {
    id: "bisikuiti",
    title: "Bisikuiti Fabric",
    category: "Packaging & Identité de Marque",
    categoryKey: "packaging",
    client: "Bisikuiti Fabric (Bénin)",
    year: "2021–2025",
    desc: "Bisikuiti Fabric est une entreprise béninoise de biscuiterie artisanale fondée le 20 mai 2021 par sa directrice et promotrice, Doris R. Adegnandjou Bide. L'entreprise se distingue par la valorisation des richesses agricoles locales à travers des recettes uniques et nutritives.",
    image: "/visuels/bisikuiti/boite-2.jpg",
    tags: ["Packaging", "Design Boîtes", "Agroalimentaire", "Édition Limitée", "Bénin"],
    gallery: [
      "/visuels/bisikuiti/boite-2.jpg",
      "/visuels/bisikuiti/boite-2s.jpg",
      "/visuels/bisikuiti/bisikuiti-8-mars-plan-de-travail-1.png",
      "/visuels/bisikuiti/patron-biskuiti-2-plan-de-travail-1.png",
      "/visuels/bisikuiti/affiche-de-porte-77-sur-166.jpg",
      "/visuels/bisikuiti/bache2.jpg",
      "/visuels/bisikuiti/bisik.jpg",
      "/visuels/bisikuiti/joyeuse-saint-valentin.jpg",
      "/visuels/bisikuiti/bisi.jpg",
      "/visuels/bisikuiti/chocolat-pack.jpg",
      "/visuels/bisikuiti/cajoux-pack.jpg",
      "/visuels/bisikuiti/cc.jpg"
    ]
  },
  {
    id: "desteur-juice",
    title: "Desteur Juice",
    category: "Packaging & Stratégie de Marque",
    categoryKey: "packaging",
    client: "Desteur Juice",
    year: "2024",
    desc: "Création de l'identité de marque et de la stratégie de communication pour Desteur Juice, une marque dynamique spécialisée dans les jus de fruits naturels.",
    image: "/visuels/desteur-juice/desteur-juice-visuel-1-ananas-pasteque.jpg",
    tags: ["Branding", "Packaging Jus", "Identité Visuelle", "Stratégie"],
    gallery: [
      "/visuels/desteur-juice/desteur-juice-visuel-1-ananas-pasteque.jpg",
      "/visuels/desteur-juice/desteur-juice-visuel2-ananas-pasteque.jpg",
      "/visuels/desteur-juice/logo-plan-de-travail-2-plan-de-travail-1.jpg",
      "/visuels/desteur-juice/ananas-2.jpg",
      "/visuels/desteur-juice/vin-de-palme-3.jpg",
      "/visuels/desteur-juice/plan-de-travail-1.jpg",
      "/visuels/desteur-juice/plan-de-travail-2.jpg",
      "/visuels/desteur-juice/plan-de-travail-3.jpg",
      "/visuels/desteur-juice/plan-de-travail-4.jpg",
      "/visuels/desteur-juice/plan-de-travail-5.jpg",
      "/visuels/desteur-juice/plan-de-travail-6.jpg"
    ]
  },
  {
    id: "bureau-veritas",
    title: "Bureau Veritas Guinée",
    category: "Direction Artistique & Design • Célébration des Trust Makers (Bureau Veritas Guinée)",
    categoryKey: "da",
    client: "Bureau Veritas Guinée",
    year: "2024",
    desc: "Conception de l'identité visuelle et des supports de communication pour la célébration des « Trust Makers » de Bureau Veritas Guinée. Cet événement d'envergure honore les collaborateurs qui incarnent au quotidien la mission mondiale du groupe : « Shaping a World of Trust » (Bâtir un monde de confiance).",
    image: "/visuels/bureau-veritas/600cmx300cm-01.jpg",
    tags: ["Direction Artistique", "Trust Makers", "Corporate", "Shaping a World of Trust"],
    gallery: [
      "/visuels/bureau-veritas/600cmx300cm-01.jpg",
      "/visuels/bureau-veritas/360cmx360cm-01.jpg",
      "/visuels/bureau-veritas/80cmx200cm-01.jpg",
      "/visuels/bureau-veritas/sans-titre-2-01.jpg"
    ]
  },
  {
    id: "union-europeenne",
    title: "Union Européenne en Guinée",
    category: "Identité Institutionnelle & Graphisme Événementiel • Délégation de l'Union européenne en Guinée",
    categoryKey: "campagnes",
    client: "Délégation de l'UE & Ministère de l'Environnement",
    year: "2024",
    desc: "Conception de la campagne visuelle et des supports de communication pour le programme d'action environnemental « Partenariat Guinée-UE pour la Nature et les Générations Futures ». Cette initiative de la Délégation de l’Union européenne en Guinée et du Ministère de l'Environnement vise à sensibiliser le public aux enjeux de la biodiversité, de la transition verte et du développement durable en République de Guinée.",
    image: "/visuels/union-europeenne/union-europeenne-copie-01.jpg",
    tags: ["Union Européenne", "Biodiversité", "Environnement", "Transition Verte"],
    gallery: [
      "/visuels/union-europeenne/union-europeenne-copie-01.jpg",
      "/visuels/union-europeenne/union-europeenne-copie-0w1-01.jpg"
    ]
  },
  {
    id: "independance",
    title: "AGL — Conakry Terminal",
    category: "Identité Événementielle & Social Media • Campagne des 68 ans de la Guinée (AGL - Conakry Terminal)",
    categoryKey: "campagnes",
    client: "Africa Global Logistics (AGL)",
    year: "2024",
    desc: "Direction artistique, campagne commémorative des 68 ans de la Guinée et conception de la scénographie événementielle pour Africa Global Logistics (AGL - Conakry Terminal). Découpe 3D du logo monumental, habillage événementiel de site et visuels d'affichage d'envergure.",
    image: "/visuels/independance/agl-main.jpg",
    tags: ["Scénographie 3D", "Événementiel", "AGL", "Campagne Nationale", "Social Media"],
    gallery: [
      "/visuels/independance/agl-main.jpg",
      "/visuels/independance/decoup-3d-logo.jpg",
      "/visuels/independance/photo-realisation-1.jpg",
      "/visuels/independance/photo-realisation-2.jpg",
      "/visuels/independance/agl-plan-1.jpg",
      "/visuels/independance/agl-plan-2.jpg",
      "/visuels/independance/agl-plan-3.jpg",
      "/visuels/independance/agl-plan-4.jpg"
    ]
  },
  {
    id: "1xbet",
    title: "1xBet & Bet224 Conakry",
    category: "Affiches en Agence (1xBet & Bet224 Conakry)",
    categoryKey: "campagnes",
    client: "1xBet & Bet224 Conakry",
    year: "2024",
    desc: "Conception et direction artistique des affiches publicitaires grand format et habillages de vitrines d'agences pour les leaders des paris sportifs 1xBet et Bet224 à Conakry.",
    image: "/visuels/1xbet/1xbet-guinee-01.jpg",
    tags: ["Affichage Agence", "1xBet", "Bet224", "Sport & Betting"],
    gallery: [
      "/visuels/1xbet/1xbet-guinee-01.jpg",
      "/visuels/1xbet/bet-224-01.jpg"
    ]
  },
  {
    id: "indigo",
    title: "Indigo Guinée",
    category: "Direction Artistique & Branding",
    categoryKey: "da",
    client: "Agence Indigo — Conakry",
    year: "2025–2026",
    desc: "Direction artistique globale et déploiement de marque pour l'agence Indigo. Conception du système graphique, habillage façades, panneaux déroulants et supports grand format.",
    image: "/visuels/indigo/facade-ramadan-3_.jpg",
    tags: ["Direction Artistique", "Identité Visuelle", "Print Grand Format", "Conakry"],
    gallery: [
      "/visuels/indigo/facade-ramadan-3_.jpg",
      "/visuels/indigo/facade-ramadan_plan-de-travail-1-copie-2.jpg"
    ]
  },
  {
    id: "freeze",
    title: "Freeze Corleone Concert",
    category: "Affiche Musique & DA",
    categoryKey: "da",
    client: "Production Concert Conakry",
    year: "2024",
    desc: "Conception de l'affiche événementielle et de la campagne digitale pour le concert de l'artiste Freeze Corleone. Esthétique sombre, typographie tranchante et composition à fort impact.",
    image: "/visuels/freeze-corleone/freeze-annonce.jpg",
    tags: ["Affiche Concert", "Typographie", "Direction Artistique", "Musique"],
    gallery: [
      "/visuels/freeze-corleone/freeze-annonce.jpg",
      "/visuels/freeze-corleone/freeze.jpg",
      "/visuels/freeze-corleone/le-she_.jpg"
    ]
  },
  {
    id: "banque",
    title: "Banque Islamique",
    category: "Édition & Identité Institutionnelle",
    categoryKey: "branding",
    client: "Banque Islamique de Guinée",
    year: "2024",
    desc: "Supports de communication institutionnelle, plaquettes corporate et visuels de présentation des offres financières.",
    image: "/visuels/la-banque-islamique/big_plan-de-travail-1.jpg",
    tags: ["Corporate", "Plaquette", "Finance", "Édition"],
    gallery: [
      "/visuels/la-banque-islamique/big_plan-de-travail-1.jpg",
      "/visuels/la-banque-islamique/big_plan-de-travail-1-copie.jpg",
      "/visuels/la-banque-islamique/big_plan-de-travail-1-copie-2.jpg"
    ]
  },
  {
    id: "suir-immobilier",
    title: "Suir Immobilier",
    category: "Identité de Marque & Totem Signalétique",
    categoryKey: "branding",
    client: "Suir Immobilier",
    year: "2024",
    desc: "Conception du logotype et du totem signalétique extérieur pour l'agence immobilière Suir Immobilier.",
    image: "/visuels/suir-immobilier/totem-ai-plan-de-travail-1.jpg",
    tags: ["Logo", "Signalétique", "Totem", "Immobilier"],
    gallery: [
      "/visuels/suir-immobilier/totem-ai-plan-de-travail-1.jpg",
      "/visuels/suir-immobilier/logo-plan-de-travail-1.jpg",
      "/visuels/suir-immobilier/whatsapp-image-2026-10-13-at-15-50-58.jpg"
    ]
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentGalleryIdx, setCurrentGalleryIdx] = useState(0);

  const categories = [
    { key: "all", label: "Tous les projets" },
    { key: "branding", label: "Branding & Logos" },
    { key: "da", label: "Direction Artistique" },
    { key: "campagnes", label: "Campagnes & Affichage" },
    { key: "packaging", label: "Retail & Print" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.categoryKey === activeCategory);

  // Body scroll lock on modal open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      setCurrentGalleryIdx(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projets" className="relative py-24 sm:py-32 bg-[var(--background)] bg-grid-pattern px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      
      {/* Ambient background blur */}
      <div 
        className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/10 rounded-full blur-[180px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/15 border border-[#7C3AED]/25 dark:border-[#8B5CF6]/30 mb-4 transition-colors">
            <span className="text-xs font-semibold text-[#7C3AED] dark:text-[#8B5CF6] tracking-wide uppercase">
              Portfolio & Réalisations
            </span>
          </div>

          <h2 className="font-extrabold text-[32px] sm:text-[44px] leading-[1.15] text-[#11111B] dark:text-white transition-colors">
            Ils m&apos;ont fait confiance. Votre marque peut rayonner{" "}
            <span className="gradient-violet">aussi</span>.
          </h2>

          <p className="mt-4 text-[16px] text-[#57556E] dark:text-[#8888A4] leading-relaxed transition-colors">
            Une sélection d&apos;identités visuelles, campagnes d&apos;affichage et directions artistiques réalisées avec soin et rigueur.
          </p>
        </div>

        {/* Category Filter Pills with Hi-Tech 3D elevation & continuous laser sweeps */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <motion.button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96, y: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`relative overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-300 cursor-pointer select-none flex items-center gap-2 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#7C3AED] border-t border-white/45 border-b border-black/35 shadow-[0_8px_25px_rgba(124,58,237,0.5),inset_0_1px_1px_rgba(255,255,255,0.6)]"
                    : "bg-white/95 dark:bg-[#1E1C38] text-[#11111B] dark:text-white hover:text-[#7C3AED] dark:hover:text-[#A78BFA] border border-black/15 dark:border-white/20 hover:border-[#7C3AED]/60 dark:hover:border-[#8B5CF6]/60 shadow-xs backdrop-blur-md"
                }`}
              >
                {/* 3D Top Bevel Glint */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Laser Shimmer Sweep (Continuous on active, responsive on hover) */}
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

                <span className="relative z-10">{cat.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card group cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100 dark:bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover ${project.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Year Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#0B0B14]/80 backdrop-blur-md border border-black/10 dark:border-white/10 text-[11px] font-mono font-medium text-[#11111B] dark:text-white/70 shadow-xs">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#7C3AED] dark:text-[#8B5CF6] font-semibold block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-xl text-[#11111B] dark:text-white group-hover:text-[#7C3AED] dark:group-hover:text-[#8B5CF6] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#57556E] dark:text-[#8888A4] line-clamp-2 leading-relaxed mb-4 transition-colors">
                    {project.desc}
                  </p>
                </div>

                {/* Footer details */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between transition-colors">
                  <span className="text-[11px] text-[#57556E]/80 dark:text-white/40 font-mono">
                    {project.client}
                  </span>
                  <span className="text-xs font-semibold text-[#7C3AED] dark:text-[#8B5CF6] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Explorer</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Archives 3D Button */}
        <div className="mt-14 text-center">
          <Hitech3DButton
            href="/projects"
            variant="secondary"
            size="md"
          >
            <span>Explorer toutes les archives du studio</span>
            <ArrowUpRightIcon size={14} />
          </Hitech3DButton>
        </div>

      </div>

      {/* ============================================================ */}
      {/* FULL LIGHTBOX DETAIL MODAL                                   */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/75 dark:bg-[#0B0B14]/90 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-white dark:bg-[#121124] border border-black/10 dark:border-[#8B5CF6]/30 rounded-2xl overflow-y-auto shadow-2xl flex flex-col lg:grid lg:grid-cols-12"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Fermer"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 dark:bg-[#0B0B14]/80 border border-black/10 dark:border-white/10 flex items-center justify-center text-[#11111B] dark:text-white/70 hover:text-white hover:bg-[#7C3AED] dark:hover:bg-[#8B5CF6] transition-colors shadow-sm"
              >
                <CloseIcon size={16} />
              </button>

              {/* Gallery View (Left) */}
              <div className="lg:col-span-7 p-6 bg-slate-100 dark:bg-black/40 flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-black/60 mb-4 flex items-center justify-center">
                  <img
                    src={selectedProject.gallery[currentGalleryIdx] || selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Thumbnails */}
                {selectedProject.gallery.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.gallery.map((img, i) => (
                      <button
                        key={img}
                        onClick={() => setCurrentGalleryIdx(i)}
                        className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                          currentGalleryIdx === i ? "border-[#7C3AED] dark:border-[#8B5CF6] scale-105" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="miniature" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Info (Right) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7C3AED] dark:text-[#8B5CF6] font-semibold block mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-extrabold text-2xl sm:text-3xl text-[#11111B] dark:text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[#57556E] dark:text-[#8888A4] mb-6">
                    <span>{selectedProject.client}</span>
                    <span>•</span>
                    <span>{selectedProject.year}</span>
                  </div>

                  <p className="text-sm text-[#33334A] dark:text-white/80 leading-relaxed mb-6">
                    {selectedProject.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-[11px] font-medium text-[#57556E] dark:text-white/60">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-black/[0.08] dark:border-white/10 flex flex-col gap-3">
                  <div className="w-full flex justify-center">
                    <Hitech3DButton
                      href={`https://wa.me/224613993414?text=Bonjour%20Desteg,%20j'ai%20vu%20votre%20projet%20${encodeURIComponent(selectedProject.title)}%20et%20je%20souhaite%20collaborer.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      className="w-full text-center"
                    >
                      <span>Démarrer un projet similaire</span>
                    </Hitech3DButton>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full text-center py-2 text-xs text-[#57556E] dark:text-[#8888A4] hover:text-[#11111B] dark:hover:text-white transition-colors cursor-pointer"
                  >
                    Fermer la vue
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
