"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, UtensilsCrossed, X, Maximize2, Wine } from "lucide-react";
import { portfolioData, CulinaryShowcaseItem } from "@/data/portfolioData";

export const Culinary: React.FC = () => {
  const { culinaryShowcase, personal } = portfolioData;
  const [selectedItem, setSelectedItem] = useState<CulinaryShowcaseItem | null>(null);

  return (
    <section id="culinary" className="relative py-28 md:py-36 bg-[#10100F] overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(200,173,124,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 05 — Culinary & Gastronomic Arts
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E9E2D5] font-light tracking-wide uppercase">
            AN APPRECIATION FOR THE ART OF CREATION.
          </h2>
        </div>

        {/* Editorial Feature Quote Banner: The Sales & Culinary Intersection */}
        <div className="mb-16 p-8 md:p-12 rounded-sm bg-gradient-to-r from-[#171715] via-[#1A1A18] to-[#171715] border border-[#C8AD7C]/30 relative overflow-hidden shadow-2xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <UtensilsCrossed className="w-4 h-4 text-[#C8AD7C]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
                The Symbiosis of Kitchen Insight & Hospitality Sales
              </span>
            </div>
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#E9E2D5] font-light leading-relaxed">
              &ldquo;{personal.culinarySalesPhilosophy}&rdquo;
            </p>
            <p className="mt-4 text-xs tracking-[0.2em] uppercase text-[#88847B] font-light">
              — Akhil Baiju · Bridging Gastronomy and Client Engagement
            </p>
          </div>
        </div>

        {/* Editorial Imagery Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {culinaryShowcase.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-sm bg-[#171715] border border-[#2F2F2A] hover:border-[#C8AD7C]/60 cursor-pointer transition-all duration-500 shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-[#10100F]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-sm bg-[#10100F]/80 backdrop-blur-md border border-[#C8AD7C]/25 text-[10px] uppercase tracking-[0.2em] text-[#C8AD7C] font-light">
                  {item.category}
                </span>
              </div>

              {/* View detail icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#10100F]/80 backdrop-blur-md border border-[#C8AD7C]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-[#C8AD7C]" />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <h3 className="font-serif text-lg sm:text-xl text-[#E9E2D5] tracking-wide uppercase font-light group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#D7CCBA]/80 font-light line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Context Note */}
        <p className="mt-8 text-center text-[11px] text-[#88847B] tracking-widest uppercase font-light">
          Editorial curation highlighting international hospitality standards, fine-dining choreography, and sensory appreciation
        </p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-[#10100F]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#171715] border border-[#C8AD7C]/40 rounded-sm overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#10100F]/80 border border-[#C8AD7C]/30 text-[#E9E2D5] hover:text-[#C8AD7C] flex items-center justify-center transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8AD7C]" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8AD7C]">
                    {selectedItem.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#E9E2D5] uppercase font-light">
                  {selectedItem.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-[#D7CCBA]/90 font-light leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

