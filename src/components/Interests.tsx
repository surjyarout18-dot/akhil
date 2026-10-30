"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
import { portfolioData } from "@/data/portfolioData";

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

  return (
    <section id="interests" className="relative py-28 md:py-36 bg-[#10100F] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(200,173,124,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 09 — Personal Pursuits & Passions
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E9E2D5] font-light tracking-wide uppercase">
            WHAT INSPIRES ME.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#88847B] max-w-2xl font-light">
            A spectrum of creative expression, competitive athletic discipline, cultural curiosity, and acoustic appreciation shaping a well-rounded professional character.
          </p>
        </div>

        {/* Small Editorial Gallery Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {interests.map((interest, idx) => {
            const IconComp = interestIconMap[interest.icon] || Sparkles;
            const isHovered = activeInterest === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveInterest(idx)}
                onMouseLeave={() => setActiveInterest(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className={`group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#171715] border transition-all duration-500 cursor-pointer shadow-lg ${
                  isHovered ? "border-[#C8AD7C] -translate-y-1.5 shadow-xl shadow-[#C8AD7C]/10" : "border-[#2F2F2A]"
                }`}
              >
                {/* Background Imagery */}
                <Image
                  src={interest.image}
                  alt={interest.name}
                  fill
                  className="object-cover object-center filter grayscale contrast-110 brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-[#10100F]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                {/* Card Top Icon */}
                <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-[#10100F]/80 backdrop-blur-md border border-[#C8AD7C]/30 flex items-center justify-center text-[#C8AD7C]">
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
          })}
        </div>
      </div>
    </section>
  );
};

