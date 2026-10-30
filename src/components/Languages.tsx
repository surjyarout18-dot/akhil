"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Languages: React.FC = () => {
  const { languages } = portfolioData;

  return (
    <section id="languages" className="relative py-24 md:py-32 bg-[#171715] overflow-hidden">
      {/* Background divider lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8AD7C]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8AD7C]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-14 md:mb-18 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-3">
            <Globe className="w-3.5 h-3.5 text-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 08 — Multilingual Fluency
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#E9E2D5] font-light tracking-wide uppercase">
            COMMUNICATION WITHOUT BOUNDARIES.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#88847B] font-light tracking-wide">
            Bridging international luxury guests, pan-Indian travelers, and regional heritage clients with cultural resonance and linguistic empathy.
          </p>
        </div>

        {/* Elegant Horizontal Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#2F2F2A] border border-[#2F2F2A] rounded-sm bg-[#10100F] shadow-2xl">
          {languages.map((lang, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 md:p-12 text-center group hover:bg-[#171715]/70 transition-colors duration-400 relative flex flex-col justify-between"
            >
              <div>
                {/* Native Script / Culture Identifier */}
                <span className="text-xs font-serif italic text-[#C8AD7C]/80 block mb-2 tracking-widest">
                  {lang.nativeScript}
                </span>

                {/* Primary Language Name */}
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#E9E2D5] tracking-widest uppercase font-light group-hover:text-[#C8AD7C] transition-colors">
                  {lang.name}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-6 text-xs sm:text-sm text-[#D7CCBA]/80 font-light leading-relaxed max-w-xs mx-auto">
                {lang.description}
              </p>

              {/* Bottom Minimal Line */}
              <div className="mt-8 mx-auto w-10 h-[1px] bg-[#C8AD7C]/30 group-hover:w-20 group-hover:bg-[#C8AD7C] transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

