"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.1 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    ) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        // Check for custom cursor text
        const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
        if (cursorEl) {
          const text = cursorEl.getAttribute("data-cursor");
          setCursorText(text || null);
          setIsPointer(true);
        } else {
          setCursorText(null);
          const isClickable =
            target.tagName === "BUTTON" ||
            target.tagName === "A" ||
            target.closest("button") ||
            target.closest("a") ||
            target.getAttribute("role") === "button" ||
            target.classList.contains("cursor-pointer");
          setIsPointer(!!isClickable);
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring / Dynamic Context Pill */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#C8AD7C]/60 flex items-center justify-center hidden md:flex transition-colors"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: cursorText ? "-50%" : "-50%",
          translateY: cursorText ? "-50%" : "-50%",
          width: cursorText ? 80 : isPointer ? 54 : 34,
          height: cursorText ? 80 : isPointer ? 54 : 34,
          backgroundColor: cursorText
            ? "rgba(16, 16, 15, 0.85)"
            : isPointer
            ? "rgba(200, 173, 124, 0.12)"
            : "transparent",
          backdropFilter: cursorText ? "blur(8px)" : "none",
          borderColor: cursorText ? "#C8AD7C" : isPointer ? "#DFCCA7" : "rgba(200, 173, 124, 0.5)",
        }}
      >
        {cursorText && (
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8AD7C] font-serif font-medium select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      {!cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#C8AD7C] hidden md:block"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
            width: isPointer ? 6 : 4,
            height: isPointer ? 6 : 4,
          }}
        />
      )}
    </>
  );
};
