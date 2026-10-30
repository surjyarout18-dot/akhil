"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  MessageSquareQuote,
  Sparkles,
  TrendingUp,
  CalendarRange,
  Share2,
  Users2,
  Award,
  ShieldAlert,
  CheckCheck,
  LucideIcon,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  MessageSquareQuote,
  Sparkles,
  TrendingUp,
  CalendarRange,
  Share2,
  Users2,
  Award,
  ShieldAlert,
  CheckCheck,
};

export const Expertise: React.FC = () => {
  const { skills } = portfolioData;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="expertise" className="relative py-28 md:py-36 bg-[#171715] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(200,173,124,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 04 — Professional Competencies
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E9E2D5] font-light tracking-wide uppercase">
            THE SKILLS BEHIND EXCEPTIONAL SERVICE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#88847B] max-w-2xl font-light">
            Ten core disciplines bridging luxury hospitality ethics, consultative sales techniques, guest relationship management, and operational mastery.
          </p>
        </div>

        {/* 10 Premium Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => {
            const IconComponent = iconMap[skill.iconName] || Sparkles;
            const isHovered = hoveredId === skill.id;

            return (
              <motion.div
                key={skill.id}
                onMouseEnter={() => setHoveredId(skill.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`p-8 rounded-sm bg-[#10100F]/90 border transition-all duration-400 relative flex flex-col justify-between group cursor-default ${
                  isHovered
                    ? "border-[#C8AD7C] shadow-xl shadow-[#C8AD7C]/5 -translate-y-1 bg-[#1C1C19]"
                    : "border-[#2F2F2A] hover:border-[#C8AD7C]/50"
                }`}
              >
                {/* Subtle gold line on top border on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[1.5px] bg-[#C8AD7C] transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-sm border flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "border-[#C8AD7C] bg-[#C8AD7C] text-[#10100F]"
                          : "border-[#2F2F2A] bg-[#171715] text-[#C8AD7C]"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#88847B] group-hover:text-[#C8AD7C] transition-colors font-light">
                      {skill.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-[#E9E2D5] tracking-wide uppercase font-light mb-3 group-hover:text-white transition-colors">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#D7CCBA]/80 font-light leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-4 border-t border-[#22221E] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#88847B] font-light">
                    Competency 0{idx + 1}
                  </span>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 text-[#C8AD7C] transition-transform duration-300 ${
                      isHovered ? "translate-x-0.5 -translate-y-0.5 opacity-100" : "opacity-30"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Quality Standards */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#88847B] font-light">
            Refined through academic training at IHM Goa & operational immersion at Grand Hyatt Bolgatty
          </p>
        </div>
      </div>
    </section>
  );
};

