"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Hitech3DButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  variant?: "primary" | "secondary" | "glass" | "pill";
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export default function Hitech3DButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  target,
  rel,
  ariaLabel,
  disabled = false,
}: Hitech3DButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for 3D mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end organic physics (Apple / VisionOS feel)
  const springConfig = { damping: 18, stiffness: 260, mass: 0.2 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  // Glare position following the cursor
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseFromCenterX = e.clientX - rect.left - width / 2;
    const mouseFromCenterY = e.clientY - rect.top - height / 2;
    mouseX.set(mouseFromCenterX / width);
    mouseY.set(mouseFromCenterY / height);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Base sizing
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-[15px]",
  }[size];

  // Hi-Tech 3D Aesthetic variants
  const variantStyles = {
    primary: {
      base: "bg-gradient-to-b from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white border-t border-white/35 border-b border-black/30",
      shadow: "shadow-[0_8px_25px_-4px_rgba(124,58,237,0.45),0_2px_4px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.4)]",
      hoverShadow: "shadow-[0_14px_35px_-4px_rgba(124,58,237,0.65),0_4px_10px_rgba(0,0,0,0.25),inset_0_1px_2px_rgba(255,255,255,0.6)]",
      glow: "rgba(139, 92, 246, 0.4)",
    },
    secondary: {
      base: "bg-white dark:bg-[#16152B]/90 text-[#11111B] dark:text-white border border-black/15 dark:border-white/15",
      shadow: "shadow-[0_6px_20px_-2px_rgba(0,0,0,0.08),dark:0_8px_25px_-4px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.8)]",
      hoverShadow: "shadow-[0_12px_30px_-4px_rgba(124,58,237,0.25),dark:0_14px_35px_-4px_rgba(139,92,246,0.3),inset_0_1px_2px_rgba(255,255,255,1)]",
      glow: "rgba(124, 58, 237, 0.2)",
    },
    glass: {
      base: "bg-[#7C3AED]/10 dark:bg-white/5 backdrop-blur-xl text-[#7C3AED] dark:text-white border border-[#7C3AED]/25 dark:border-white/15",
      shadow: "shadow-[0_4px_16px_rgba(124,58,237,0.08),inset_0_1px_0_rgba(255,255,255,0.2)]",
      hoverShadow: "shadow-[0_8px_25px_rgba(124,58,237,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)]",
      glow: "rgba(124, 58, 237, 0.25)",
    },
    pill: {
      base: "bg-white/95 dark:bg-[#1A1A2E]/90 text-[#11111B] dark:text-white border border-black/10 dark:border-white/12",
      shadow: "shadow-[0_3px_10px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)]",
      hoverShadow: "shadow-[0_6px_20px_rgba(124,58,237,0.18),inset_0_1px_1px_rgba(255,255,255,1)]",
      glow: "rgba(124, 58, 237, 0.15)",
    },
  }[variant];

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block select-none"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97, y: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`relative inline-flex items-center justify-center gap-2.5 rounded-full font-bold cursor-pointer overflow-hidden transition-all duration-300 ${sizeClasses} ${variantStyles.base} ${
          isHovered ? variantStyles.hoverShadow : variantStyles.shadow
        } ${className}`}
      >
        {/* Ambient 3D Rim Glare highlight — Continuously alive */}
        <motion.div 
          className="pointer-events-none absolute inset-0 rounded-full"
          animate={{
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut",
          }}
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 60%)",
          }}
        />

        {/* Ambient Pulsing Aura around button perimeter (Visible without hover) */}
        {variant === "primary" && (
          <motion.div
            className="pointer-events-none absolute -inset-1.5 rounded-full opacity-60 blur-md -z-10"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [0.98, 1.03, 0.98],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.2,
              ease: "easeInOut",
            }}
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 75%)",
            }}
          />
        )}

        {/* Dynamic Holographic Specular Light (Tracks cursor position on hover) */}
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute -inset-4 rounded-full opacity-40 blur-md transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle 60px at ${glareX} ${glareY}, rgba(255,255,255,0.8), transparent 70%)`,
            }}
          />
        )}

        {/* Continuous High-Tech Laser Beam Sweep (Loops automatically every 3.5s without hover) */}
        <motion.div 
          className="pointer-events-none absolute inset-0 -skew-x-12"
          animate={{
            x: ["-140%", "160%"],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 2.2,
            duration: 1.25,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.38), transparent)",
          }}
        />

        {/* Content Floating in 3D Space (Popped forward on Z-axis) */}
        <div 
          style={{ transform: "translateZ(18px)" }} 
          className="relative z-10 flex items-center justify-center gap-2.5 whitespace-nowrap"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        onClick={onClick}
        target={target} 
        rel={rel} 
        aria-label={ariaLabel}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      type="button" 
      onClick={onClick} 
      aria-label={ariaLabel}
      disabled={disabled}
      className="inline-block bg-transparent border-none p-0 cursor-pointer"
    >
      {content}
    </button>
  );
}
