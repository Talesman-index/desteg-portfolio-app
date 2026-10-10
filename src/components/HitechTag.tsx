"use client";

import React from "react";
import { motion } from "framer-motion";

interface HitechTagProps {
  children: React.ReactNode;
  color?: string; // hex or CSS color
  icon?: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md";
  pulseDot?: boolean;
}

export default function HitechTag({
  children,
  color = "#8B5CF6",
  icon,
  className = "",
  size = "sm",
  pulseDot = true,
}: HitechTagProps) {
  const sizeClasses = {
    xs: "px-2.5 py-0.5 text-[10px]",
    sm: "px-3 py-1 text-[11px]",
    md: "px-3.5 py-1.5 text-xs",
  }[size];

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`relative inline-flex items-center gap-1.5 rounded-full font-bold uppercase tracking-wider overflow-hidden backdrop-blur-md cursor-default select-none border transition-all duration-300 shadow-sm ${sizeClasses} ${className}`}
      style={{
        color: color,
        borderColor: `${color}40`,
        background: `linear-gradient(135deg, ${color}18 0%, ${color}08 100%)`,
        boxShadow: `0 2px 10px ${color}15, inset 0 1px 1px rgba(255, 255, 255, 0.25)`,
      }}
    >
      {/* 3D Top-bevel highlight */}
      <div 
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)`,
        }}
      />

      {/* Continuous High-Tech Micro Laser Sweep (Runs automatically without hover) */}
      <motion.div
        className="pointer-events-none absolute inset-0 -skew-x-20"
        animate={{
          x: ["-150%", "170%"],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 2.5,
          duration: 1.2,
          ease: "easeInOut",
        }}
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)`,
        }}
      />

      {/* Ambient Pulsing Aura (Continuous neon breathing glow) */}
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-full opacity-40 blur-sm -z-10"
        animate={{
          opacity: [0.25, 0.65, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle, ${color}60 0%, transparent 70%)`,
        }}
      />

      {/* Optional Pulsing Status Dot */}
      {pulseDot && (
        <span className="relative flex h-2 w-2 items-center justify-center shrink-0">
          <motion.span
            animate={{
              scale: [1, 2, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeOut",
            }}
            className="absolute inline-flex h-full w-full rounded-full"
            style={{ backgroundColor: color }}
          />
          <span 
            className="relative inline-flex rounded-full h-1.5 w-1.5"
            style={{ backgroundColor: color }}
          />
        </span>
      )}

      {/* Optional Icon */}
      {icon && (
        <span className="shrink-0 flex items-center justify-center relative z-10" style={{ color }}>
          {icon}
        </span>
      )}

      {/* Tag Label */}
      <span className="relative z-10 font-bold whitespace-nowrap">
        {children}
      </span>
    </motion.div>
  );
}
