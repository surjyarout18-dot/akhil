"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Volume2, Sparkles, MessageCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const languageDetails: Record<string, { greeting: string; scriptGreeting: string; culturalRole: string }> = {
  English: {
    greeting: "Welcome to Our Table",
    scriptGreeting: "A Pleasure to Host You",
    culturalRole: "Executive negotiations, international diplomatic delegations, and multinational brand representation.",
  },
  Hindi: {
    greeting: "Aapka Swagat Hai",
    scriptGreeting: "आपका हार्दिक स्वागत है",
    culturalRole: "Seamless, warm guest rapport with domestic leisure travelers and cross-regional corporate teams across India.",
  },
  Malayalam: {
    greeting: "Namaskaram",
    scriptGreeting: "നമസ്കാരം, ഹൃദ്യമായ സ്വാഗതം",
    culturalRole: "Authentic cultural resonance in Kerala's premier luxury resorts, heritage backwater estates, and VIP patronage.",
  },
};

export const Languages: React.FC = () => {
  const { languages } = portfolioData;
  const [activeLang, setActiveLang] = useState<string | null>(null);

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
          {languages.map((lang, idx) => {
            const isSelected = activeLang === lang.name;
            const detail = languageDetails[lang.name];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={() => setActiveLang(isSelected ? null : lang.name)}
                data-cursor="LANGUAGE"
                className="p-8 md:p-12 text-center group hover:bg-[#171715]/70 transition-colors duration-400 relative flex flex-col justify-between cursor-pointer"
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

                  {/* Simulated Acoustic Audio Waveform */}
                  <div className="flex items-center justify-center gap-1 my-4 h-6">
                    {[0.4, 0.9, 0.6, 1.0, 0.5, 0.8, 0.3].map((height, barIdx) => (
                      <motion.div
                        key={barIdx}
                        animate={{
                          scaleY: isSelected ? [height, 1, 0.3, height] : [height, height * 0.7, height],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.2,
                          delay: barIdx * 0.15,
                        }}
                        className={`w-0.5 rounded-full transition-colors ${
                          isSelected ? "bg-[#C8AD7C]" : "bg-[#2F2F2A] group-hover:bg-[#C8AD7C]/60"
                        }`}
                        style={{ height: "100%" }}
                      />
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-[#D7CCBA]/80 font-light leading-relaxed max-w-xs mx-auto">
                  {lang.description}
                </p>

                {/* Interactive Hospitality Greeting Drawer */}
                <AnimatePresence>
                  {isSelected && detail && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 p-4 rounded-sm bg-[#10100F] border border-[#C8AD7C]/40 text-xs text-left"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-[#C8AD7C] block mb-1">
                        Cultural Greeting &amp; Etiquette:
                      </span>
                      <p className="font-serif italic text-sm text-[#E9E2D5] mb-1">
                        &ldquo;{detail.scriptGreeting}&rdquo;
                      </p>
                      <p className="text-[11px] text-[#88847B] font-light leading-relaxed">
                        {detail.culturalRole}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Minimal Line */}
                <div
                  className={`mt-8 mx-auto h-[1px] transition-all duration-400 ${
                    isSelected ? "w-24 bg-[#C8AD7C]" : "w-10 bg-[#C8AD7C]/30 group-hover:w-20 group-hover:bg-[#C8AD7C]"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
