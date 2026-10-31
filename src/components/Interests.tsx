"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Trophy,
  Shield,
  Flame,
  PenTool,
  Theater,
  Compass,
  Music,
  LucideIcon,
  Sparkles,
} from "lucide-react";
import { portfolioData, InterestItem } from "@/data/portfolioData";

const interestIconMap: Record<string, LucideIcon> = {
  Trophy,
  Shield,
  Flame,
  PenTool,
  Theater,
  Compass,
  Music,
};

export const Interests: React.FC = () => {
  const { interests } = portfolioData;
  const [activeInterest, setActiveInterest] = useState<number | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Pursuits (7)" },
    { id: "sports", label: "Athletic & Tactical" },
    { id: "creative", label: "Creative & Performing Arts" },
    { id: "exploration", label: "Cultural Exploration" },
  ];

  const filteredInterests = interests.filter((item) => {
    if (categoryFilter === "all") return true;
    if (categoryFilter === "sports") return ["Cricket", "Football", "Kabaddi"].includes(item.name);
    if (categoryFilter === "creative") return ["Sketching", "Drama", "Music"].includes(item.name);
    if (categoryFilter === "exploration") return ["Travelling"].includes(item.name);
    return true;
  });

  return (
    <section id="interests" className="relative py-28 md:py-36 bg-[#10100F] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(200,173,124,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-14 md:mb-18">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 09 — Personal Pursuits &amp; Passions
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E9E2D5] font-light tracking-wide uppercase">
            WHAT INSPIRES ME.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#88847B] max-w-2xl font-light">
            A spectrum of creative expression, competitive athletic discipline, cultural curiosity, and acoustic appreciation shaping a well-rounded professional character.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs uppercase tracking-[0.18em] transition-all cursor-pointer ${
                  categoryFilter === cat.id
                    ? "bg-[#C8AD7C] text-[#10100F] font-medium shadow-md shadow-[#C8AD7C]/10"
                    : "bg-[#171715] text-[#88847B] border border-[#2F2F2A] hover:text-[#E9E2D5] hover:border-[#C8AD7C]/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Small Editorial Gallery Cards with Layout Transition */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredInterests.map((interest, idx) => (
              <InterestCard
                key={interest.name}
                interest={interest}
                index={idx}
                isHovered={activeInterest === idx}
                onMouseEnter={() => setActiveInterest(idx)}
                onMouseLeave={() => setActiveInterest(null)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

interface InterestCardProps {
  interest: InterestItem;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const InterestCard: React.FC<InterestCardProps> = ({
  interest,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [imgSrc, setImgSrc] = useState(interest.image);
  const IconComp = interestIconMap[interest.icon] || Sparkles;

  return (
    <motion.div
      layout
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      data-cursor="INSPECT"
      className={`group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#171715] border transition-all duration-500 cursor-pointer shadow-lg ${
        isHovered ? "border-[#C8AD7C] -translate-y-1.5 shadow-xl shadow-[#C8AD7C]/15" : "border-[#2F2F2A]"
      }`}
    >
      {/* Background Imagery */}
      <Image
        src={imgSrc}
        alt={interest.name}
        fill
        onError={() => {
          // Reliable athletics fallback
          setImgSrc("https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&w=800&q=80");
        }}
        className="object-cover object-center filter grayscale contrast-110 brightness-75 group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700 ease-out"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-[#10100F]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

      {/* Card Top Icon */}
      <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-[#10100F]/85 backdrop-blur-md border border-[#C8AD7C]/30 flex items-center justify-center text-[#C8AD7C]">
        <IconComp className="w-3.5 h-3.5" />
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#C8AD7C] font-light block mb-0.5">
          {interest.category}
        </span>
        <h3 className="font-serif text-xl sm:text-2xl text-[#E9E2D5] tracking-wide uppercase font-light group-hover:text-white transition-colors">
          {interest.name}
        </h3>
        <p className="mt-1 text-[11px] sm:text-xs text-[#D7CCBA]/80 font-light leading-snug line-clamp-2">
          {interest.description}
        </p>
      </div>
    </motion.div>
  );
};
