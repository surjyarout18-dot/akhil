"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, UtensilsCrossed, X, Maximize2, Wine, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { portfolioData, CulinaryShowcaseItem } from "@/data/portfolioData";

// Enhanced sensory analysis and sales communication notes
const culinaryDetails: Record<string, { sensory: string; salesTip: string }> = {
  "Artisanal Plating & Presentation": {
    sensory: "Negative-space choreography, micro-herb elevation, and high-contrast saucing emphasizing lightness and refined balance.",
    salesTip: "Communicates contemporary luxury; ideal for enticing high-tier corporate banquets seeking bespoke gastronomic presentation.",
  },
  "The Alchemy of Patisserie": {
    sensory: "Geometric tempering, velvet textures, and layered acidity cutting through rich cocoa and seasonal fruits.",
    salesTip: "Memorable conclusion anchor; upselling signature dessert degustations elevates average guest check spend by 18-25%.",
  },
  "Atmospheric Dining Architecture": {
    sensory: "Warm 2700K low-kelvin ambient illumination, acoustic discretion, and natural stone and dark timber textures.",
    salesTip: "Selling ambiance is as vital as selling cuisine; frames the setting for executive negotiations and landmark personal celebrations.",
  },
  "Precision in Mise En Place": {
    sensory: "Military-grade kitchen choreography, razor knife discipline, and temperature-controlled ingredient stations.",
    salesTip: "Operational consistency guarantees flawless service velocity during high-volume 300+ delegate convention dinners.",
  },
  "The Art of Sommelier & Beverage Pairing": {
    sensory: "Old-world mineral acidity and new-world fruit tannins balanced with indigenous spices and delicate seafood notes.",
    salesTip: "Consultative pairings enhance guest trust and maximize high-margin cellar revenue.",
  },
  "Tablescape Choreography": {
    sensory: "Millimeter-level silverware alignment, hand-blown crystal clarity, and crisp Egyptian cotton table linens.",
    salesTip: "First physical contact point for luxury diners; immediately establishes the venue's five-star pedigree.",
  },
};

export const Culinary: React.FC = () => {
  const { culinaryShowcase, personal } = portfolioData;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Works (6)" },
    { id: "craft", label: "Plating & Technique" },
    { id: "ambiance", label: "Ambiance & Atmosphere" },
    { id: "service", label: "Choreography & Pairing" },
  ];

  const filteredItems = culinaryShowcase.filter((item) => {
    if (filter === "all") return true;
    if (filter === "craft") return ["Artisanal Plating & Presentation", "The Alchemy of Patisserie", "Precision in Mise En Place"].includes(item.title);
    if (filter === "ambiance") return ["Atmospheric Dining Architecture"].includes(item.title);
    if (filter === "service") return ["The Art of Sommelier & Beverage Pairing", "Tablescape Choreography"].includes(item.title);
    return true;
  });

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % culinaryShowcase.length);
  };

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + culinaryShowcase.length) % culinaryShowcase.length);
  };

  const selectedItem = selectedIdx !== null ? culinaryShowcase[selectedIdx] : null;

  return (
    <section id="culinary" className="relative py-28 md:py-36 bg-[#10100F] overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(200,173,124,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-14 md:mb-18">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 05 — Culinary &amp; Gastronomic Arts
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E9E2D5] font-light tracking-wide uppercase">
            AN APPRECIATION FOR THE ART OF CREATION.
          </h2>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs uppercase tracking-[0.18em] transition-all cursor-pointer ${
                  filter === cat.id
                    ? "bg-[#C8AD7C] text-[#10100F] font-medium shadow-md shadow-[#C8AD7C]/10"
                    : "bg-[#171715] text-[#88847B] border border-[#2F2F2A] hover:text-[#E9E2D5] hover:border-[#C8AD7C]/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Feature Quote Banner: The Sales & Culinary Intersection */}
        <div className="mb-14 p-8 md:p-12 rounded-sm bg-gradient-to-r from-[#171715] via-[#1A1A18] to-[#171715] border border-[#C8AD7C]/30 relative overflow-hidden shadow-2xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <UtensilsCrossed className="w-4 h-4 text-[#C8AD7C]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
                The Symbiosis of Kitchen Insight &amp; Hospitality Sales
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              const originalIndex = culinaryShowcase.findIndex((c) => c.title === item.title);

              return (
                <motion.div
                  layout
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  onClick={() => setSelectedIdx(originalIndex)}
                  data-cursor="VIEW"
                  className="group relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-sm bg-[#171715] border border-[#2F2F2A] hover:border-[#C8AD7C] cursor-pointer transition-all duration-500 shadow-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center filter brightness-90 contrast-105 group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-[#10100F]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-sm bg-[#10100F]/85 backdrop-blur-md border border-[#C8AD7C]/30 text-[10px] uppercase tracking-[0.2em] text-[#C8AD7C] font-light">
                      {item.category}
                    </span>
                  </div>

                  {/* View detail icon */}
                  <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#10100F]/85 backdrop-blur-md border border-[#C8AD7C]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Context Note */}
        <p className="mt-10 text-center text-[11px] text-[#88847B] tracking-widest uppercase font-light">
          Editorial curation highlighting international hospitality standards, fine-dining choreography, and sensory appreciation
        </p>
      </div>

      {/* Enhanced Lightbox Modal with Controls & Sensory Analysis */}
      <AnimatePresence>
        {selectedItem && selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 bg-[#10100F]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#171715] border border-[#C8AD7C]/40 rounded-sm overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
              <div className="p-4 px-6 border-b border-[#2F2F2A] bg-[#141412] flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C8AD7C]">
                  Curated Work {selectedIdx + 1} of {culinaryShowcase.length}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full border border-[#2F2F2A] hover:border-[#C8AD7C] text-[#88847B] hover:text-[#E9E2D5] flex items-center justify-center transition-colors"
                    title="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full border border-[#2F2F2A] hover:border-[#C8AD7C] text-[#88847B] hover:text-[#E9E2D5] flex items-center justify-center transition-colors"
                    title="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedIdx(null)}
                    className="w-8 h-8 rounded-full border border-[#2F2F2A] hover:border-[#C8AD7C] text-[#88847B] hover:text-[#E9E2D5] flex items-center justify-center transition-colors ml-2"
                    aria-label="Close Preview"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  <div>
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

                  {/* Sensory & Sales Insight Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-sm bg-[#10100F] border border-[#2F2F2A]">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8AD7C] block mb-1 font-light flex items-center gap-1.5">
                        <Wine className="w-3 h-3" />
                        Sensory Profile &amp; Texture
                      </span>
                      <p className="text-xs text-[#E9E2D5] font-light leading-relaxed">
                        {culinaryDetails[selectedItem.title]?.sensory || "Refined balance of flavor harmony and aesthetic precision."}
                      </p>
                    </div>

                    <div className="p-4 rounded-sm bg-[#10100F] border border-[#2F2F2A]">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8AD7C] block mb-1 font-light flex items-center gap-1.5">
                        <Layers className="w-3 h-3" />
                        Commercial Hospitality Sales Impact
                      </span>
                      <p className="text-xs text-[#E9E2D5] font-light leading-relaxed">
                        {culinaryDetails[selectedItem.title]?.salesTip || "Elevates guest satisfaction and unlocks high-tier banquet upselling."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
