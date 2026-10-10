"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const iconDimensions = {
    sm: "w-7 h-7",
    md: "w-8 h-8 sm:w-9 sm:h-9",
    lg: "w-10 h-10 sm:w-11 sm:h-11",
  }[size];

  const titleSizes = {
    sm: "text-[15px] sm:text-[16px]",
    md: "text-[17px] sm:text-[18px]",
    lg: "text-[20px] sm:text-[22px]",
  }[size];

  const subtitleSizes = {
    sm: "text-[13px] sm:text-[14px]",
    md: "text-[15px] sm:text-[16px]",
    lg: "text-[17px] sm:text-[18px]",
  }[size];

  return (
    <Link 
      href="/" 
      className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Desteg Ahissou — Accueil"
    >
      {/* Avant-Garde Minimalist Monogram Emblem for Desteg Ahissou */}
      {/* Inspired by high-end geometric identity marks: solid outer disk with a sculptured DA portal cutout */}
      <div className={`relative ${iconDimensions} shrink-0 flex items-center justify-center`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#11111B] dark:text-white transition-colors duration-300 drop-shadow-sm"
        >
          {/* Mask ensures the cutout is genuinely 100% transparent on any background */}
          <mask id="desteg-emblem-mask">
            {/* White base = fully visible */}
            <rect width="100" height="100" fill="white" />
            
            {/* Black shapes = negative space cutouts */}
            {/* 1. Architectural Central Arch / Monolith (The "A" & "D" portal) */}
            <path 
              d="M50 18 L28 82 H41 L45.5 67 H54.5 L59 82 H72 L50 18 Z M50 36 L52.8 57 H47.2 L50 36 Z" 
              fill="black" 
            />
            {/* 2. Geometric "D" outer curve accent cutout on right edge */}
            <path 
              d="M63 36 C73.5 42.5 73.5 59.5 63 66 C65.5 60.5 65.5 41.5 63 36 Z" 
              fill="black" 
            />
          </mask>

          {/* Solid circular disk rendered through the transparent mask */}
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill="currentColor" 
            mask="url(#desteg-emblem-mask)" 
          />
        </svg>
      </div>

      {/* Two-Line Typography Lockup matching Onella Agnikpe style */}
      <div className="flex flex-col justify-center leading-[1.06] tracking-tight">
        <div className="flex items-start">
          <span className={`font-extrabold ${titleSizes} tracking-[-0.03em] text-[#11111B] dark:text-white transition-colors duration-300`}>
            Desteg
          </span>
          <span className="text-[8px] sm:text-[9px] font-bold text-[#7C3AED] dark:text-[#8B5CF6] ml-0.5 leading-none mt-0.5 select-none transition-colors">
            ™
          </span>
        </div>
        <span className={`font-semibold ${subtitleSizes} tracking-[-0.02em] text-[#11111B]/85 dark:text-white/85 transition-colors duration-300`}>
          Ahissou
        </span>
      </div>
    </Link>
  );
}

