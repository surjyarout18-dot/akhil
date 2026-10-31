"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Quote, Sparkles, Building2, Calendar, Globe2, Copy, Check, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const About: React.FC = () => {
  const { personal } = portfolioData;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"narrative" | "philosophy" | "objective">("narrative");

  // 3D Card tilt for the portrait
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 20 });
  const glareOpacity = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 0.25]), { damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { width, height, left, top } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Animated counter hook
  const [countMonths, setCountMonths] = useState(0);
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 4;
      const duration = 1200;
      const interval = duration / end;
      const timer = setInterval(() => {
        start += 1;
        setCountMonths(start);
        if (start >= end) clearInterval(timer);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#171715] overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8AD7C]/30 to-transparent" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(200,173,124,0.06)_0%,transparent_70%)] pointer-events-none" />

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
          {/* Left Column: Interactive 3D Cinematic Portrait Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none perspective-[1000px]">
              {/* Outer decorative gold frame border offset */}
              <div className="absolute -inset-3 border border-[#C8AD7C]/25 translate-x-3 translate-y-3 pointer-events-none rounded-sm hidden sm:block" />

              {/* Main 3D Tilted Card Container */}
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                data-cursor="PORTRAIT"
                className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#10100F] border border-[#C8AD7C]/30 shadow-2xl cursor-default group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=85"
                  alt="Akhil Baiju - Hospitality & Sales Professional Portrait Placeholder"
                  fill
                  className="object-cover object-top filter grayscale contrast-110 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                />

                {/* Dynamic light reflection glare on mouse hover */}
                <motion.div
                  style={{ opacity: glareOpacity }}
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#DFCCA7]/40 to-transparent pointer-events-none mix-blend-overlay"
                />

                {/* Dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-85 pointer-events-none" />

                {/* Bottom label on portrait */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#10100F]/90 backdrop-blur-md border border-[#C8AD7C]/30 rounded-sm">
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
              </motion.div>
            </div>

            {/* Quick Action Pill below portrait */}
            <div className="mt-6 flex items-center justify-between p-3 rounded-sm bg-[#10100F]/80 border border-[#2F2F2A] text-xs">
              <span className="text-[#88847B] font-light">Direct Contact:</span>
              <button
                onClick={copyEmail}
                data-cursor="COPY"
                className="flex items-center gap-1.5 text-[#C8AD7C] hover:text-[#DFCCA7] transition-colors font-medium"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#C8AD7C]" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Bio with Interactive Perspectives */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Perspective Switcher Tabs */}
            <div className="flex items-center gap-2 mb-8 border-b border-[#2F2F2A] pb-3">
              {[
                { id: "narrative", label: "Executive Profile" },
                { id: "philosophy", label: "Core Philosophy" },
                { id: "objective", label: "Sales & Marketing Focus" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-1.5 text-xs uppercase tracking-[0.18em] transition-all rounded-sm relative ${
                    activeTab === tab.id
                      ? "text-[#C8AD7C] bg-[#10100F] border border-[#C8AD7C]/40"
                      : "text-[#88847B] hover:text-[#E9E2D5]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Narrative */}
            {activeTab === "narrative" && (
              <motion.div
                key="narrative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-5 text-sm sm:text-base md:text-lg text-[#D7CCBA]/90 font-light leading-relaxed"
              >
                {personal.aboutBio.map((paragraph, index) => (
                  <p key={index} className="transition-opacity hover:opacity-100">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}

            {/* Tab 2: Philosophy */}
            {activeTab === "philosophy" && (
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <p className="text-sm sm:text-base text-[#D7CCBA]/90 leading-relaxed font-light">
                  {personal.philosophy}
                </p>
                <div className="p-6 bg-[#10100F] border border-[#C8AD7C]/30 rounded-sm">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8AD7C] block mb-2 font-light">
                    Brand Statement
                  </span>
                  <p className="font-serif italic text-lg sm:text-xl text-[#E9E2D5]">
                    &ldquo;{personal.statement}&rdquo;
                  </p>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Objective */}
            {activeTab === "objective" && (
              <motion.div
                key="objective"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <p className="text-sm sm:text-base text-[#D7CCBA]/90 leading-relaxed font-light">
                  &ldquo;{personal.culinarySalesPhilosophy}&rdquo;
                </p>
                <div className="p-5 bg-[#10100F] border border-[#2F2F2A] rounded-sm text-xs text-[#88847B] space-y-2">
                  <div className="flex items-center gap-2 text-[#E9E2D5]">
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8AD7C]" />
                    <span>Target Trajectory: Hospitality Sales, Guest Experience &amp; Brand Representation</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#E9E2D5]">
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8AD7C]" />
                    <span>Commercial Strategy: Consultative upselling through deep F&amp;B and culinary knowledge</span>
                  </div>
                </div>
              </motion.div>
            )}

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

            {/* Verified Statistics Strip with Animated Counters */}
            <div className="mt-10 pt-8 border-t border-[#2F2F2A] grid grid-cols-1 sm:grid-cols-3 gap-6">
              {personal.verifiedStats.map((stat, idx) => {
                const icons = [Building2, Calendar, Globe2];
                const IconComponent = icons[idx];
                const displayVal = idx === 1 ? `${countMonths}+` : stat.value;

                return (
                  <motion.div
                    key={idx}
                    whileHover={{ translateY: -4 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-sm bg-[#10100F]/60 border border-[#C8AD7C]/20 hover:border-[#C8AD7C]/50 flex flex-col transition-colors group cursor-default"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-3xl md:text-4xl text-[#C8AD7C] font-light group-hover:text-white transition-colors">
                        {displayVal}
                      </span>
                      <IconComponent className="w-4 h-4 text-[#88847B] group-hover:text-[#C8AD7C] transition-colors" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#E9E2D5]">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-[#88847B] font-light mt-1">
                      {stat.detail}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
