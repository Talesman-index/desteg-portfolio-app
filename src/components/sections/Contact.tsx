"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Hitech3DButton from "@/components/Hitech3DButton";
import { 
  MailIcon, 
  WhatsappIcon, 
  CopyIcon, 
  CheckIcon, 
  InstagramIcon, 
  LinkedinIcon 
} from "@/components/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "desdesteurde@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[var(--background)] bg-grid-pattern px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#7C3AED]/12 dark:bg-[#8B5CF6]/15 rounded-full blur-[170px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Main Glow Card matching Ornela Agnikpe Final CTA */}
        <div className="glass-card p-8 sm:p-14 text-center border-black/10 dark:border-[#8B5CF6]/30 shadow-lg dark:shadow-[0_0_50px_rgba(139,92,246,0.15)] relative overflow-hidden">
          
          {/* Subtle top edge glow line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED] dark:via-[#8B5CF6] to-transparent opacity-50" />

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-[#7C3AED]/10 dark:bg-[#8B5CF6]/15 border border-[#7C3AED]/25 dark:border-[#8B5CF6]/30 mb-6 transition-colors">
            <span className="text-xs font-semibold text-[#7C3AED] dark:text-[#8B5CF6] tracking-wide uppercase">
              Démarrer un projet
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-extrabold text-[34px] sm:text-[50px] leading-[1.1] text-[#11111B] dark:text-white max-w-2xl mx-auto mb-4 transition-colors">
            Prêt à passer à l&apos;{" "}
            <span className="gradient-violet">action</span> ?
          </h2>

          <p className="text-[16px] sm:text-[18px] text-[#57556E] dark:text-[#8888A4] max-w-xl mx-auto mb-10 leading-relaxed transition-colors">
            Donnez à votre marque l&apos;impact visuel mémorable qu&apos;elle mérite. Échangeons dès aujourd&apos;hui sur vos objectifs.
          </p>

          {/* 3D Hi-Tech Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {/* WhatsApp 3D CTA */}
            <Hitech3DButton
              href="https://wa.me/224613993414?text=Bonjour%20Desteg,%20je%20souhaite%20collaborer%20avec%20vous%20sur%20un%20projet%20de%20design."
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              <WhatsappIcon size={18} />
              <span>Discuter sur WhatsApp</span>
            </Hitech3DButton>

            {/* Email Copy 3D Button */}
            <Hitech3DButton
              onClick={handleCopyEmail}
              variant="secondary"
              size="lg"
            >
              <MailIcon size={16} className="text-[#7C3AED] dark:text-[#8B5CF6]" />
              <span>{copied ? "Email copié !" : email}</span>
              {copied ? <CheckIcon size={14} className="text-[#22C55E]" /> : <CopyIcon size={14} className="text-[#57556E] dark:text-white/40" />}
            </Hitech3DButton>
          </div>

          {/* Direct Phone & Social Links */}
          <div className="pt-8 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57556E] dark:text-[#8888A4] transition-colors">
            <div className="flex items-center gap-3">
              <span>Téléphone :</span>
              <a href="tel:+224613993414" className="text-[#11111B] dark:text-white hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] font-mono font-medium">
                +224 613 99 34 14
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/desteur_design_?igsh=MWZtajlod3ZmdGI4bQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-colors flex items-center gap-1.5"
              >
                <InstagramIcon size={15} />
                <span>Instagram</span>
              </a>
              <a 
                href="https://gn.linkedin.com/in/desteg-ahissou-717a64254" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#7C3AED] dark:hover:text-[#8B5CF6] transition-colors flex items-center gap-1.5"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
