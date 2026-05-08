"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const container: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
  };

  return (
    <footer className="py-32 px-6 md:px-20 border-t border-paper/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
        className="section-label mb-20"
      >
        Contact
      </motion.div>
      
      <motion.div 
        className="flex flex-col gap-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={item} className="flex flex-col gap-6">
          <span className="text-[12px] uppercase tracking-[0.3em] text-paper/30 font-[var(--font-space-mono)]">
            Démarrer un projet
          </span>
          <a
            href="mailto:desdesteurde@gmail.com"
            className="text-[clamp(16px,8vw,60px)] font-[var(--font-syne)] text-paper hover:text-acid transition-colors leading-none uppercase border-b border-paper/10 pb-4 inline-block max-w-full break-all"
          >
            desdesteurde@gmail.com
          </a>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <FooterLink label="Instagram" href="https://www.instagram.com/desteur_design_?igsh=MWZtajlod3ZmdGI4bQ==" target="_blank" />
          <FooterLink label="LinkedIn" href="https://gn.linkedin.com/in/desteg-ahissou-717a64254" target="_blank" />
          <FooterLink label="WhatsApp" href="https://wa.me/224613993414" target="_blank" />
        </motion.div>

        <motion.div variants={item} className="pt-20 border-t border-paper/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <span className="text-[11px] text-paper/15 uppercase tracking-[0.4em]">
            © Desteg Ahissou — 2025
          </span>
          
          <div className="font-[var(--font-syne)] text-[12px] text-paper/15 border-b border-acid pb-1 px-1 tracking-widest uppercase">
            DA
          </div>

          <span className="text-[11px] text-paper/15 uppercase tracking-[0.4em]">
            Conakry / Cotonou
          </span>
        </motion.div>
      </motion.div>
    </footer>
  );
}

function FooterLink({ label, href, target }: { label: string; href: string; target?: string }) {
  return (
    <a href={href} target={target} rel="noopener noreferrer" className="group flex flex-col gap-2">
      <span className="text-[10px] uppercase tracking-widest text-paper/20 group-hover:text-acid transition-colors">
        Social
      </span>
      <span className="text-[14px] uppercase tracking-widest text-paper/50 group-hover:text-paper transition-colors font-bold">
        {label}
      </span>
    </a>
  );
}
