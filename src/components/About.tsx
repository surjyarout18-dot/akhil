"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Sparkles, Building2, Calendar, Globe2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#171715] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8AD7C]/30 to-transparent" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(200,173,124,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 02 — Editorial Profile
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E9E2D5] font-light tracking-wide uppercase">
            THE PERSON BEHIND THE EXPERIENCE.
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Cinematic Portrait Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame border offset */}
              <div className="absolute -inset-3 border border-[#C8AD7C]/25 translate-x-3 translate-y-3 pointer-events-none rounded-sm hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#10100F] border border-[#C8AD7C]/30 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=85"
                  alt="Akhil Baiju - Hospitality & Sales Professional Portrait Placeholder"
                  fill
                  className="object-cover object-top filter grayscale contrast-110 brightness-90 hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-80" />

                {/* Bottom label on portrait */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#10100F]/85 backdrop-blur-md border border-[#C8AD7C]/20 rounded-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-sm text-[#E9E2D5] tracking-widest uppercase">
                        AKHIL BAIJU
                      </p>
                      <p className="text-[10px] tracking-[0.18em] uppercase text-[#C8AD7C] font-light mt-0.5">
                        IHM GOA · GRAND HYATT ALUM
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-[#C8AD7C]/40 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-[#C8AD7C]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline / Subtitle */}
            <p className="text-xs uppercase tracking-[0.3em] text-[#C8AD7C] font-light mb-6">
              Perspective · Service Artistry · Commercial Acumen
            </p>

            {/* Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base md:text-lg text-[#D7CCBA]/90 font-light leading-relaxed">
              {personal.aboutBio.map((paragraph, index) => (
                <p key={index} className="transition-opacity hover:opacity-100">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Personal Philosophy Callout */}
            <div className="mt-8 p-6 md:p-8 bg-[#10100F]/70 border-l-2 border-[#C8AD7C] rounded-r-sm backdrop-blur-sm relative">
              <Quote className="w-8 h-8 text-[#C8AD7C]/20 absolute top-4 right-4" />
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#E9E2D5] font-light leading-snug">
                &ldquo;{personal.personalPhilosophy}&rdquo;
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C8AD7C] mt-3 font-light">
                Core Hospitality Philosophy
              </p>
            </div>

            {/* Minimal Verified Statistics Strip */}
            <div className="mt-10 pt-8 border-t border-[#2F2F2A] grid grid-cols-1 sm:grid-cols-3 gap-6">
              {personal.verifiedStats.map((stat, idx) => {
                const icons = [Building2, Calendar, Globe2];
                const IconComponent = icons[idx];
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-[#10100F]/40 border border-[#C8AD7C]/15 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-3xl md:text-4xl text-[#C8AD7C] font-light">
                        {stat.value}
                      </span>
                      <IconComponent className="w-4 h-4 text-[#88847B]" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#E9E2D5]">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-[#88847B] font-light mt-1">
                      {stat.detail}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

