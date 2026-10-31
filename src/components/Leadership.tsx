"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Trophy, Shield, Theater, Sparkles, ArrowRight, LucideIcon } from "lucide-react";
import { portfolioData, LeadershipItem } from "@/data/portfolioData";

const translations: Record<string, string> = {
  Cricket: "Fosters strategic field placement, team morale orchestration, and patient tactical execution—vital for managing client account lifecycles and sales campaigns.",
  "Football Team": "Demands split-second decision-making, vocal spatial command, and total accountability as the final line of defense—mirroring crisis resolution in luxury front-of-house operations.",
  "Drama Competitions & Stage Plays": "Instills unshakeable public presence, vocal projection, and audience emotional connection—indispensable for pitch presentations and brand representation.",
  "School & College Dance Ensembles": "Hones rhythmic discipline, non-verbal synchronization, and stage poise—aligning with the choreography of Michelin-grade fine dining service.",
};

export const Leadership: React.FC = () => {
  const { leadership } = portfolioData;
  const roleIcons = [Trophy, Shield, Theater, Sparkles];

  const [activeTranslation, setActiveTranslation] = useState<string | null>(null);

  return (
    <section id="leadership" className="relative py-28 md:py-36 bg-[#10100F] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(200,173,124,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 07 — Character &amp; Stewardship
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E9E2D5] font-light tracking-wide uppercase">
            BEYOND PROFESSIONAL EXPERIENCE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#88847B] max-w-2xl font-light">
            Competitive captaincy, stage storytelling, and team performance that forged strategic thinking, high-pressure composure, and interpersonal confidence.
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((item, idx) => (
            <LeadershipCard
              key={idx}
              item={item}
              index={idx}
              icon={roleIcons[idx]}
              isSelected={activeTranslation === item.activity}
              onToggle={() =>
                setActiveTranslation(activeTranslation === item.activity ? null : item.activity)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface LeadershipCardProps {
  item: LeadershipItem;
  index: number;
  icon: LucideIcon;
  isSelected: boolean;
  onToggle: () => void;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({
  item,
  index,
  icon: IconComp,
  isSelected,
  onToggle,
}) => {
  const [imgSrc, setImgSrc] = useState(item.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-cursor="LEADER"
      className="group rounded-sm bg-[#171715] border border-[#2F2F2A] hover:border-[#C8AD7C] transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl cursor-default"
    >
      {/* Visual Header with Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#10100F]">
        <Image
          src={imgSrc}
          alt={item.activity}
          fill
          onError={() => {
            // High-res football goalkeeper fallback if primary is blocked
            setImgSrc("https://images.unsplash.com/photo-1543195113-69fa486a957b?auto=format&fit=crop&w=1000&q=85");
          }}
          className="object-cover object-center filter grayscale contrast-110 brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171715] via-transparent to-transparent" />

        {/* Role Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#10100F]/85 backdrop-blur-md border border-[#C8AD7C]/30">
          <IconComp className="w-3.5 h-3.5 text-[#C8AD7C]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#E9E2D5] font-light">
            {item.role}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light block mb-0.5">
            {item.activity}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-[#E9E2D5] tracking-wide uppercase font-light">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <p className="text-xs sm:text-sm text-[#D7CCBA]/85 font-light leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Interactive Operational Parallel Strip */}
        <div className="pt-4 border-t border-[#22221E] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#88847B] font-light">
              Key Takeaway
            </span>
            <span className="text-xs text-[#DFCCA7] font-serif italic">
              {item.keyTakeaway}
            </span>
          </div>

          <button
            onClick={onToggle}
            className="w-full py-2 px-3 rounded-sm bg-[#10100F] border border-[#2F2F2A] hover:border-[#C8AD7C]/40 text-[11px] text-[#C8AD7C] flex items-center justify-between transition-colors cursor-pointer"
          >
            <span>
              {isSelected ? "Hide Sales Translation" : "Explore Transferable Sales Skill"}
            </span>
            <ArrowRight className={`w-3 h-3 transition-transform ${isSelected ? "rotate-90" : ""}`} />
          </button>

          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-3 bg-[#10100F] border border-[#C8AD7C]/30 rounded-sm text-xs text-[#D7CCBA] font-light leading-relaxed"
              >
                <span className="text-[10px] uppercase tracking-wider text-[#C8AD7C] block mb-1">
                  Executive Hospitality Parallels:
                </span>
                {translations[item.activity] || "Cultivates leadership agility, active listening, and high-stakes performance."}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
