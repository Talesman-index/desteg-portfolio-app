"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Quels types de projets réalises-tu principalement ?",
      a: "J'interviens sur la création d'identités visuelles complètes (logos, chartes graphiques, typographies), la direction artistique de campagnes publicitaires ou événementielles (affiches, scénographie), ainsi que le design de packaging et supports print grand format.",
    },
    {
      q: "Comment se déroule le processus de travail ?",
      a: "Le processus commence par un briefing approfondi pour comprendre vos objectifs, vos cibles et vos valeurs. Ensuite, j'explore plusieurs pistes créatives (moodboards et concepts), nous affinons la direction choisie avec vos retours, puis je livre l'ensemble des fichiers sources et prêts pour l'impression ou le web.",
    },
    {
      q: "Quels sont les délais pour une identité de marque ?",
      a: "Pour une identité visuelle complète (logo, charte, déclinaisons), comptez généralement entre 2 et 4 semaines selon la complexité du projet et la réactivité des échanges. Pour des campagnes événementielles urgentes, un calendrier accéléré peut être convenu.",
    },
    {
      q: "Quels fichiers vais-je recevoir à la livraison finale ?",
      a: "Vous recevrez un pack complet et organisé : fichiers vectoriels originaux (.AI, .EPS, .SVG, .PDF haute définition 300 DPI pour l'impression), exports web transparents (.PNG, .WebP, .JPG), ainsi qu'un Brand Guidelines clair expliquant comment utiliser votre nouvelle identité sans faire d'erreur.",
    },
    {
      q: "Travailles-tu avec des clients à l'international ?",
      a: "Absolument. Je travaille régulièrement avec des clients basés en Guinée, au Bénin, en Côte d'Ivoire, en France et au Canada. Tous les échanges se font de manière fluide via WhatsApp, Google Meet et email.",
    },
    {
      q: "Comment démarrer un projet ensemble ?",
      a: "Il vous suffit de me contacter directement sur WhatsApp ou par email via le bouton 'Me contacter'. Nous échangerons rapidement sur votre vision, vos besoins et je vous transmettrai un devis clair et détaillé sous 24 à 48 heures.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[var(--background)] px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      
      {/* Background ambient light */}
      <div 
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/10 rounded-full blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/15 border border-[#7C3AED]/25 dark:border-[#8B5CF6]/30 mb-4 transition-colors">
            <span className="text-xs font-semibold text-[#7C3AED] dark:text-[#8B5CF6] tracking-wide uppercase">
              Questions Fréquentes
            </span>
          </div>

          <h2 className="font-extrabold text-[32px] sm:text-[44px] leading-[1.15] text-[#11111B] dark:text-white transition-colors">
            Tu te poses des{" "}
            <span className="gradient-violet">questions</span> ? Normal.
          </h2>

          <p className="mt-4 text-[16px] text-[#57556E] dark:text-[#8888A4] leading-relaxed transition-colors">
            Toutes les réponses pour aborder notre future collaboration en toute sérénité.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="glass-card transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-[#11111B] dark:text-white transition-colors">
                    {faq.q}
                  </span>
                  <div 
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen 
                        ? "bg-[#7C3AED] dark:bg-[#8B5CF6] border-transparent text-white rotate-45 shadow-sm" 
                        : "bg-purple-50 dark:bg-white/5 border-purple-200/60 dark:border-white/10 text-[#11111B] dark:text-white/60"
                    }`}
                  >
                    <span className="text-lg leading-none font-bold">+</span>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm text-[#57556E] dark:text-[#8888A4] leading-relaxed border-t border-black/[0.06] dark:border-white/[0.06] pt-4 transition-colors">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
