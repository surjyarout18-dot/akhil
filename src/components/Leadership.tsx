"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Shield, Theater, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Leadership: React.FC = () => {
  const { leadership } = portfolioData;

  const roleIcons = [Trophy, Shield, Theater, Sparkles];

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
              Section 07 — Character & Stewardship
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
          {leadership.map((item, idx) => {
            const IconComp = roleIcons[idx];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group rounded-sm bg-[#171715] border border-[#2F2F2A] hover:border-[#C8AD7C]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Visual Header with Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#10100F]">
                  <Image
                    src={item.image}
                    alt={item.activity}
                    fill
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

                  <div className="pt-4 border-t border-[#22221E] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#88847B] font-light">
                      Key Takeaway
                    </span>
                    <span className="text-xs text-[#DFCCA7] font-serif italic">
                      {item.keyTakeaway}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

