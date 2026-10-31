"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

const sections = [
  { id: "hero", label: "Hero", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "experience", label: "Experience", num: "03" },
  { id: "expertise", label: "Expertise", num: "04" },
  { id: "culinary", label: "Culinary", num: "05" },
  { id: "education", label: "Education", num: "06" },
  { id: "leadership", label: "Leadership", num: "07" },
  { id: "languages", label: "Languages", num: "08" },
  { id: "interests", label: "Interests", num: "09" },
  { id: "contact", label: "Contact", num: "10" },
];

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState(sections[0]);
  const [showHud, setShowHud] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      if (window.scrollY > 400) {
        setShowHud(true);
      } else {
        setShowHud(false);
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Gold Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DFCCA7] via-[#C8AD7C] to-[#9B8059] origin-left z-[60] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Floating Luxury Section Indicator HUD (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: showHud ? 1 : 0, x: showHud ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-6 md:right-8 z-40 hidden md:flex items-center gap-3 p-2 pr-3.5 rounded-full bg-[#171715]/90 border border-[#C8AD7C]/30 backdrop-blur-md shadow-2xl"
      >
        <button
          onClick={scrollToTop}
          className="w-8 h-8 rounded-full bg-[#10100F] border border-[#C8AD7C]/40 text-[#C8AD7C] hover:bg-[#C8AD7C] hover:text-[#10100F] transition-all flex items-center justify-center group"
          title="Return to top"
        >
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-serif text-[#C8AD7C] tracking-widest font-medium">
              {activeSection.num}
            </span>
            <span className="text-[9px] text-[#88847B]">/</span>
            <span className="text-[9px] text-[#88847B]">10</span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#E9E2D5] font-light">
            {activeSection.label}
          </span>
        </div>
      </motion.div>
    </>
  );
};

