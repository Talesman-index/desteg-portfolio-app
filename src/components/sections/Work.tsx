"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const projects = [
  { id: "01", title: "Branding Indigo", category: "Identité visuelle", desc: "Direction artistique complète pour l'agence Indigo — Conakry. Identité visuelle, système graphique, déclinaisons print.", tags: ["Branding", "DA", "2025"], year: "2025", image: "/visuels/INDIGO/DÉROULANT.jpg", gridClass: "card-a" },
  { id: "02", title: "Campagne Présidentielle", category: "Communication", desc: "Campagne de communication stratégique, affichage et réseaux sociaux.", tags: ["Campagne", "Print", "2024"], year: "2024", image: "/visuels/CAMPAGNE PRÉSIDENTIELLE/ENTRÉÉ-01.jpg", gridClass: "card-b" },
  { id: "03", title: "Campagne Carrefour", category: "Publicité", desc: "Campagne publicitaire et habillage pour Carrefour. Concept, direction artistique et déclinaison.", tags: ["Print", "Publicité", "2023"], year: "2023", image: "/visuels/CARREFOUR /VISUEL.jpg", gridClass: "card-c" },
  { id: "04", title: "Affiche Freeze", category: "Print", desc: "Création d'affiche promotionnelle et visuels d'annonce de concert.", tags: ["Print", "DA", "2024"], year: "2024", image: "/visuels/FREEZE CORLEONE/FREEZE ANNONCE.jpg", gridClass: "card-d" },
  { id: "05", title: "Logo Miss Guinée", category: "Branding", desc: "Création de l'identité visuelle et du logotype pour le comité Miss Guinée.", tags: ["Logo", "Branding", "2023"], year: "2023", image: "/visuels/LOGO/LOGO MISS GUINÉE_Plan de travail 1.jpg", gridClass: "card-e" },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-32 px-6 md:px-20" id="work">
      <div className="section-label m-0 mb-20">Projets</div>
      
      <div className="work-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any, delay: index * 0.1 }}
            className={`wcard ${project.gridClass}`}
            data-id={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <div className="wcard-bg" style={{ backgroundImage: `url("${project.image}")` }}>
              {/* Fallback SVG logic just in case image is missing */}
              {!project.image && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-20 opacity-[0.18]">
                  <svg width="100%" height="100%" viewBox="0 0 320 140" fill="none" preserveAspectRatio="xMidYMid meet">
                    <rect x="20" y="20" width={120 + parseInt(project.id) * 10} height="100" stroke="var(--acid)" strokeWidth="0.5"/>
                    <rect x="80" y="40" width={160 - parseInt(project.id) * 5} height="70" stroke="var(--paper)" strokeWidth="0.5"/>
                    <line x1="20" y1="120" x2={240 + parseInt(project.id) * 5} y2="20" stroke="var(--paper)" strokeWidth="0.5"/>
                  </svg>
                </div>
              )}
            </div>
            
            <div className="wcard-meta">
              <span className="wcard-cat">{project.category}</span>
              <span className="wcard-index">{project.id}</span>
            </div>
            
            <div className="wcard-hover">
              <div className="wcard-info">
                <div className="wcard-title">{project.title}</div>
                <div className="wcard-year">{project.year}</div>
              </div>
              <button className="wcard-view-btn">
                Voir
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 flex justify-center">
        <Link href="/projects" passHref>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-paper/10 text-paper font-[var(--font-space-mono)] uppercase tracking-widest text-[13px] px-10 py-5 hover:bg-paper hover:text-ink transition-colors duration-300"
          >
            Voir tous les projets
          </motion.button>
        </Link>
      </div>

      {/* MODAL */}
      <div 
        className={`modal-overlay ${selectedProject ? "open" : ""}`} 
        id="modal" 
        aria-hidden={!selectedProject}
      >
        <div className="modal-bg" onClick={() => setSelectedProject(null)} />
        
        {selectedProject && (
          <div className="modal-panel">
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="#F2EFE9" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="modal-visual flex items-center justify-center bg-black">
              <img 
                id="modal-img" 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="modal-info">
              <div className="modal-cat" id="modal-cat">{selectedProject.category}</div>
              <div className="modal-title" id="modal-title">{selectedProject.title}</div>
              <div className="modal-desc" id="modal-desc">{selectedProject.desc}</div>
              <div className="modal-tags" id="modal-tags">
                {selectedProject.tags.map((tag: string, i: number) => (
                  <span key={i} className="modal-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
