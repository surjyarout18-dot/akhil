"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-28 md:py-36 bg-[#171715] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8AD7C]/30 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[radial-gradient(circle,rgba(200,173,124,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 06 — Academic Qualifications
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E9E2D5] font-light tracking-wide uppercase">
            THE FOUNDATION OF MY JOURNEY.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#88847B] max-w-2xl font-light">
            Verified academic background grounded in premier national hospitality education and rigorous foundational schooling.
          </p>
        </div>

        {/* Academic Timeline Cards */}
        <div className="space-y-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 md:p-12 rounded-sm bg-[#10100F] border border-[#C8AD7C]/25 hover:border-[#C8AD7C]/50 transition-all duration-400 relative overflow-hidden group shadow-xl"
            >
              {/* Left Accent Bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C8AD7C] to-[#9B8059]" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="max-w-3xl">
                  {/* Status Tag & Year */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#C8AD7C]/10 border border-[#C8AD7C]/30 text-[#C8AD7C] text-[10px] md:text-xs tracking-[0.2em] uppercase font-light flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{item.status}</span>
                    </span>

                    <span className="text-xs text-[#88847B] tracking-wider uppercase flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C8AD7C]" />
                      {item.year}
                    </span>
                  </div>

                  {/* Institution Name */}
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#E9E2D5] tracking-wide uppercase font-light">
                    {item.institution}
                  </h3>

                  {/* Degree & Board */}
                  <div className="mt-2 text-sm sm:text-base text-[#DFCCA7] font-light">
                    <span className="font-medium text-[#E9E2D5]">{item.degree}</span>
                    <span className="mx-2 text-[#88847B]">·</span>
                    <span className="text-[#88847B]">Board/University: {item.board}</span>
                  </div>

                  {/* Location */}
                  <p className="flex items-center gap-1.5 text-xs text-[#88847B] font-light mt-2">
                    <MapPin className="w-3 h-3 text-[#C8AD7C]" />
                    {item.location}
                  </p>

                  {/* Description */}
                  <p className="mt-5 text-sm md:text-base text-[#D7CCBA]/85 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Score / Performance Highlight */}
                <div className="shrink-0 p-6 rounded-sm bg-[#171715] border border-[#2F2F2A] lg:text-right min-w-[200px] flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#88847B] block mb-1">
                    Academic Evaluation
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl text-[#C8AD7C] font-light">
                    {item.score}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#E9E2D5] font-light mt-1">
                    {item.scoreType}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

