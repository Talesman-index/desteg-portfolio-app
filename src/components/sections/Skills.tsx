"use client";

import { motion } from "framer-motion";
import Hitech3DButton from "@/components/Hitech3DButton";
import HitechTag from "@/components/HitechTag";
import { CheckIcon, PenNibIcon, PaletteIcon, PackageIcon } from "@/components/Icons";

export default function Skills() {
  const services = [
    {
      title: "Identité Visuelle & Branding",
      badge: "La plus demandée",
      badgeColor: "#8B5CF6",
      tagline: "Donnez une personnalité inoubliable à votre marque dès le premier regard.",
      features: [
        "Création de logotypes originaux & intemporels",
        "Charte graphique complète (couleurs, typographies, grilles)",
        "Guide d'usage de la marque (Brand Guidelines PDF)",
        "Déclinaisons réseaux sociaux & templates éditables",
        "Cartes de visite & papeterie d'entreprise",
      ],
      idealFor: "Startups, entreprises, créateurs & marques en refonte.",
      icon: PenNibIcon,
    },
    {
      title: "Direction Artistique & Campagnes",
      badge: "Stratégique & Événementiel",
      badgeColor: "#F59E0B",
      tagline: "Un univers visuel sur mesure pour vos lancements, festivals et grands rendez-vous.",
      features: [
        "Key visuals & visuels de campagne percutants",
        "Affiches institutionnelles & événementielles (ex: Miss Guinée)",
        "Scénographie digitale, bannières & habillages média",
        "Storytelling graphique & composition photo avancée",
        "Cohérence esthétique sur l'ensemble des points de contact",
      ],
      idealFor: "Événements majeurs, marques FMCG, institutions culturelles.",
      icon: PaletteIcon,
    },
    {
      title: "Packaging, Édition & Print",
      badge: "Haute Fidélité Print",
      badgeColor: "#EC4899",
      tagline: "Des emballages et supports imprimés qui attirent immédiatement en rayon.",
      features: [
        "Design de packaging produits & étiquettes de qualité supérieure",
        "Catalogues d'entreprise, magazines & rapports annuels",
        "PLV, rollups, affichage urbain grand format (4x3)",
        "Préparation de fichiers haute résolution 300 DPI pour imprimeur",
        "Conseil en matières, vernis sélectif et finitions de luxe",
      ],
      idealFor: "Produits de grande consommation, agroalimentaire, cosmétiques.",
      icon: PackageIcon,
    },
  ];

  return (
    <section id="expertise" className="relative py-20 sm:py-28 bg-[var(--background)] bg-grid-pattern px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/12 rounded-full blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/15 border border-[#7C3AED]/25 dark:border-[#8B5CF6]/30 mb-4 transition-colors">
            <span className="text-xs font-semibold text-[#7C3AED] dark:text-[#8B5CF6] tracking-wide uppercase">
              Expertise & Savoir-faire
            </span>
          </div>

          <h2 className="font-extrabold text-[32px] sm:text-[44px] leading-[1.15] text-[#11111B] dark:text-white transition-colors">
            Je conçois ce que je{" "}
            <span className="gradient-violet">maîtrise</span> au quotidien.
          </h2>

          <p className="mt-4 text-[16px] text-[#57556E] dark:text-[#8888A4] leading-relaxed transition-colors">
            Une approche centrée sur la pertinence visuelle, l&apos;élégance graphique et l&apos;efficacité commerciale de votre communication.
          </p>
        </div>

        {/* 3 Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card p-7 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <motion.div 
                      animate={{
                        scale: [1, 1.06, 1],
                        boxShadow: [
                          `0 0 0px ${service.badgeColor}00`,
                          `0 0 18px ${service.badgeColor}60`,
                          `0 0 0px ${service.badgeColor}00`
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3 + idx * 0.5,
                        ease: "easeInOut",
                      }}
                      className="relative overflow-hidden w-11 h-11 rounded-xl flex items-center justify-center border shadow-sm backdrop-blur-md"
                      style={{ 
                        color: service.badgeColor, 
                        borderColor: `${service.badgeColor}45`,
                        background: `linear-gradient(135deg, ${service.badgeColor}25 0%, ${service.badgeColor}08 100%)`,
                        boxShadow: `0 4px 14px ${service.badgeColor}20, inset 0 1px 1px rgba(255,255,255,0.4)`
                      }}
                    >
                      {/* Top bevel glint */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
                      <IconComp size={20} />
                    </motion.div>

                    <HitechTag color={service.badgeColor} size="sm" pulseDot>
                      {service.badge}
                    </HitechTag>
                  </div>

                  {/* Service Title & Tagline */}
                  <h3 className="font-bold text-xl sm:text-2xl text-[#11111B] dark:text-white mb-2 group-hover:text-[#7C3AED] dark:group-hover:text-[#8B5CF6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#57556E] dark:text-[#8888A4] mb-6 leading-relaxed transition-colors">
                    {service.tagline}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8 border-t border-black/[0.06] dark:border-white/[0.06] pt-6 transition-colors">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#222238] dark:text-white/80 transition-colors">
                        <span className="mt-0.5 text-[#7C3AED] dark:text-[#8B5CF6] shrink-0">
                          <CheckIcon size={14} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Ideal for note & CTA */}
                <div className="pt-5 border-t border-black/[0.06] dark:border-white/[0.06] transition-colors">
                  <span className="text-[11px] uppercase tracking-wider text-[#57556E]/80 dark:text-white/40 block mb-3 font-mono">
                    Recommandé pour : {service.idealFor}
                  </span>
                  <div className="w-full flex justify-center">
                    <Hitech3DButton
                      href="https://wa.me/224613993414"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="glass"
                      size="sm"
                      className="w-full text-center"
                    >
                      <span>Demander un devis</span>
                      <span>→</span>
                    </Hitech3DButton>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
