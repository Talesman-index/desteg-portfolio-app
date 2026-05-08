"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-hover]")) {
        setIsHovered(true);
        setCursorText(target.closest("[data-cursor-hover]")?.getAttribute("data-cursor-label") || "View");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY, isHovered]);

  return (
    <motion.div
      className="custom-cursor hidden md:flex items-center justify-center pointer-events-none"
      style={{
        x: cursorX,
        y: cursorY,
        width: isHovered ? 36 : 5,
        height: isHovered ? 36 : 5,
        backgroundColor: "var(--acid)",
      }}
    >
      {isHovered && (
        <span className="text-[9px] font-bold text-[var(--ink)] uppercase tracking-wider">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
