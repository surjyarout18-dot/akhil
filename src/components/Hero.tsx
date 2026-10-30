"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

interface HeroProps {
  onOpenCvModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { personal } = portfolioData;

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#10100F]"
    >
      {/* Background Cinematic Hospitality Image with Zoom & Overlay */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury hospitality fine-dining ambiance"
          fill
          priority
          className="object-cover object-center brightness-[0.38] contrast-[1.05]"
        />

        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-[#10100F]/60 to-[#10100F]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10100F]/90 via-[#10100F]/40 to-[#10100F]/80" />
        {/* Warm ambient gold glow in center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(200,173,124,0.08)_0%,transparent_70%)]" />
      </motion.div>

      {/* Vertical Side Label (Desktop) */}
      <div className="hidden lg:flex absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 z-20 items-center gap-4 -rotate-90 origin-left">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8AD7C]/80 font-light select-none whitespace-nowrap">
          HOSPITALITY · CULINARY · EXPERIENCE
        </span>
        <div className="w-12 h-[1px] bg-[#C8AD7C]/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#C8AD7C]/25 bg-[#171715]/60 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8AD7C] animate-pulse" />
          <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#E9E2D5] font-light">
            SALES & MARKETING · HOSPITALITY PROFESSIONAL
          </span>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] md:tracking-[0.16em] uppercase text-[#E9E2D5] font-light leading-[1.05] drop-shadow-sm"
        >
          AKHIL BAIJU
        </motion.h1>

        {/* Animated Gold Divider Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "120px", opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="h-[1.5px] bg-gradient-to-r from-transparent via-[#C8AD7C] to-transparent my-6 md:my-8"
        />

        {/* Tagline / Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#DFCCA7] max-w-3xl leading-relaxed font-light"
        >
          &ldquo;{personal.tagline}&rdquo;
        </motion.h2>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-5 text-sm md:text-base text-[#D7CCBA]/85 max-w-2xl font-light leading-relaxed tracking-wide"
        >
          {personal.heroDescription}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C8AD7C] text-[#10100F] font-medium text-xs uppercase tracking-[0.22em] rounded-sm hover:bg-[#DFCCA7] transition-all duration-300 shadow-lg hover:shadow-[#C8AD7C]/20 flex items-center justify-center gap-2 group"
          >
            <span>Explore My Journey</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={onOpenCvModal}
            className="w-full sm:w-auto px-8 py-3.5 border border-[#C8AD7C]/40 text-[#E9E2D5] hover:text-white hover:border-[#C8AD7C] bg-[#171715]/40 backdrop-blur-sm text-xs uppercase tracking-[0.22em] rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <FileDown className="w-3.5 h-3.5 text-[#C8AD7C] transition-transform group-hover:-translate-y-0.5" />
            <span>Download My CV</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#88847B] font-light">
          Scroll to Discover
        </span>
        <div className="w-5 h-8 rounded-full border border-[#C8AD7C]/30 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full bg-[#C8AD7C]"
          />
        </div>
      </motion.div>
    </section>
  );
};

