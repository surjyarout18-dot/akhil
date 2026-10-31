"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Award,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Experience: React.FC = () => {
  const { experience } = portfolioData;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  const categoryIcons = [Sparkles, Layers, Award];

  const operationalHighlights = [
    {
      title: "VIP & Convention Delegation Protocol",
      context: "Grand Hyatt Kochi Bolgatty Lulu International Convention Centre",
      description:
        "Facilitated personalized greeting choreography, individual preference logging, and seamless liaison with banquet coordinators during high-profile corporate conventions.",
    },
    {
      title: "Consultative F&B Upselling & Pairing",
      context: "Fine Dining & Waterfront Lounge",
      description:
        "Transformed standard dining orders into multi-course curated experiences by recommending regional spice-infused culinary creations paired with selected beverages.",
    },
    {
      title: "Cross-Departmental Synergy (PMS Integration)",
      context: "Front Office, Concierge & Culinary Brigade",
      description:
        "Operated as a responsive communication bridge between reception desk, kitchen mise en place, and housekeeping to resolve guest requirements in real time.",
    },
  ];

  return (
    <section id="experience" className="relative py-28 md:py-36 bg-[#10100F] overflow-hidden">
      {/* Background ambient gold gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(200,173,124,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 03 — Operational Journey
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E9E2D5] font-light tracking-wide uppercase">
            EXPERIENCE THAT SHAPED MY PERSPECTIVE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#88847B] max-w-2xl font-light">
            Hands-on luxury hospitality immersion at a five-star international waterfront resort, integrating guest relationship sales, front-of-house operations, and culinary presentation.
          </p>
        </div>

        {/* Feature Hotel Card: Grand Hyatt Bolgatty */}
        <div className="p-8 md:p-12 rounded-sm bg-gradient-to-br from-[#1C1C19] to-[#141412] border border-[#C8AD7C]/30 shadow-2xl relative overflow-hidden mb-12">
          {/* Subtle gold accent corner line */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_top_right,rgba(200,173,124,0.18)_0%,transparent_70%)] pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#2F2F2A]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8AD7C]/10 border border-[#C8AD7C]/30 text-[#C8AD7C] text-[10px] md:text-xs tracking-[0.2em] uppercase font-light mb-3">
                <Building2 className="w-3 h-3" />
                <span>Luxury Resort &amp; International Convention Centre</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#E9E2D5] tracking-wide uppercase font-light">
                {experience.property}
              </h3>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-3 text-xs sm:text-sm text-[#88847B] font-light">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8AD7C]" />
                  {experience.location}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#88847B]" />
                <span className="flex items-center gap-1.5 text-[#C8AD7C]">
                  <Calendar className="w-3.5 h-3.5" />
                  {experience.period}
                </span>
              </div>
            </div>

            <div className="lg:text-right">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#88847B] block mb-1">
                Designation
              </span>
              <p className="text-xs sm:text-sm md:text-base font-medium text-[#E9E2D5] tracking-wide uppercase">
                {experience.role}
              </p>
              <p className="text-xs text-[#C8AD7C] font-light tracking-wider mt-1">
                {experience.duration}
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm md:text-base text-[#D7CCBA]/85 font-light leading-relaxed">
            {experience.overview}
          </p>

          {/* Interactive Operational Scenarios Strip */}
          <div className="mt-8 pt-6 border-t border-[#2F2F2A]/70">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8AD7C] block mb-3 font-light">
              Select Operational Case Studies:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {operationalHighlights.map((op, opIdx) => (
                <button
                  key={opIdx}
                  onClick={() => setSelectedScenario(selectedScenario === opIdx ? null : opIdx)}
                  className={`text-left p-3.5 rounded-sm border transition-all text-xs ${
                    selectedScenario === opIdx
                      ? "bg-[#C8AD7C]/15 border-[#C8AD7C] text-[#E9E2D5]"
                      : "bg-[#10100F]/60 border-[#2F2F2A] text-[#88847B] hover:border-[#C8AD7C]/40 hover:text-[#E9E2D5]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-[#DFCCA7]">{op.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#C8AD7C] shrink-0" />
                  </div>
                  <p className="text-[11px] text-[#88847B] font-light line-clamp-1">
                    {op.context}
                  </p>
                </button>
              ))}
            </div>

            {/* Expanded Scenario Details */}
            <AnimatePresence>
              {selectedScenario !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 rounded-sm bg-[#10100F] border border-[#C8AD7C]/30 text-xs text-[#D7CCBA]"
                >
                  <p className="font-serif italic text-sm text-[#C8AD7C] mb-1">
                    {operationalHighlights[selectedScenario].title}
                  </p>
                  <p className="font-light leading-relaxed">
                    {operationalHighlights[selectedScenario].description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 3 Interactive Categories with Smooth Tab Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Tabs / Selectors (Left 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8AD7C] mb-2 font-light">
              Select Competency Pillar:
            </span>
            {experience.categories.map((category, idx) => {
              const IconComp = categoryIcons[idx];
              const isActive = activeCategoryIndex === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategoryIndex(idx)}
                  data-cursor="PILLAR"
                  className={`text-left p-5 rounded-sm transition-all duration-300 relative border flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-[#1C1C19] border-[#C8AD7C] shadow-lg shadow-[#C8AD7C]/5"
                      : "bg-[#171715]/60 border-[#2F2F2A] hover:border-[#C8AD7C]/40 hover:bg-[#1C1C19]/40"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-9 h-9 rounded-sm flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#C8AD7C] text-[#10100F]"
                          : "bg-[#22221E] text-[#88847B] group-hover:text-[#C8AD7C]"
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8AD7C]/90 font-light block mb-1">
                        Pillar 0{idx + 1} · {category.tag}
                      </span>
                      <h4
                        className={`font-serif text-base sm:text-lg tracking-wide uppercase transition-colors ${
                          isActive ? "text-[#E9E2D5]" : "text-[#D7CCBA]/70 group-hover:text-[#E9E2D5]"
                        }`}
                      >
                        {category.title}
                      </h4>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive
                        ? "text-[#C8AD7C] translate-x-1"
                        : "text-[#88847B] group-hover:translate-x-1"
                    }`}
                  />

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activePillarTab"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#C8AD7C]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Expanded Detail Panel (Right 8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategoryIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-10 rounded-sm bg-[#171715] border border-[#C8AD7C]/30 shadow-2xl relative min-h-[380px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#2F2F2A]">
                    <div>
                      <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
                        {experience.categories[activeCategoryIndex].tag}
                      </span>
                      <h4 className="font-serif text-2xl sm:text-3xl text-[#E9E2D5] tracking-wide uppercase font-light mt-1">
                        {experience.categories[activeCategoryIndex].title}
                      </h4>
                    </div>
                    <span className="font-serif text-3xl sm:text-4xl text-[#C8AD7C]/30 font-light select-none">
                      0{activeCategoryIndex + 1}
                    </span>
                  </div>

                  <p className="text-sm text-[#DFCCA7] italic font-light mb-6">
                    {experience.categories[activeCategoryIndex].subtitle}
                  </p>

                  {/* Detailed points list with hover interaction */}
                  <ul className="space-y-4">
                    {experience.categories[activeCategoryIndex].points.map((point, pIdx) => (
                      <motion.li
                        key={pIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: pIdx * 0.08 }}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-3.5 text-sm md:text-base text-[#D7CCBA]/90 font-light leading-relaxed group p-2 -m-2 rounded-sm hover:bg-[#10100F]/40 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C8AD7C] shrink-0 mt-1 transition-transform group-hover:scale-110" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#2F2F2A]/80 flex flex-wrap items-center justify-between gap-4 text-xs text-[#88847B]">
                  <span className="uppercase tracking-widest text-[10px] text-[#C8AD7C]">
                    Verified Hyatt Internship Competency
                  </span>
                  <span>Grand Hyatt Bolgatty · Sales &amp; F&amp;B Operations</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
