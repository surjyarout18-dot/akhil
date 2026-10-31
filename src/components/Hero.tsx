"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, FileDown, Sparkles, Compass, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Magnetic } from "./Magnetic";

interface HeroProps {
  onOpenCvModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { personal } = portfolioData;
  const heroRef = useRef<HTMLDivElement>(null);

  // Mouse perspective parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);
  const translateImageX = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const translateImageY = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const { width, height, left, top } = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#10100F] perspective-[1200px]"
    >
      {/* Background Cinematic Hospitality Image with Parallax & Overlays */}
      <motion.div
        style={{
          x: translateImageX,
          y: translateImageY,
        }}
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-[-40px] z-0 pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2200&q=90"
          alt="Luxury hospitality fine-dining ambiance"
          fill
          priority
          className="object-cover object-center brightness-[0.35] contrast-[1.08]"
        />

        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-[#10100F]/65 to-[#10100F]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10100F]/90 via-[#10100F]/40 to-[#10100F]/85" />
        {/* Warm ambient gold glow in center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(200,173,124,0.12)_0%,transparent_65%)]" />
      </motion.div>

      {/* Subtle Ambient Gold Dust Particles (Delicate Luxury Ambiance) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${(i * 7.5 + 4) % 100}%`,
              y: "105%",
              opacity: 0,
            }}
            animate={{
              y: "-10%",
              opacity: [0, 0.4, 0.7, 0.3, 0],
            }}
            transition={{
              duration: 12 + (i % 6) * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.9,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#C8AD7C]/40 blur-[1px]"
          />
        ))}
      </div>

      {/* Vertical Side Label (Desktop Left) */}
      <div className="hidden lg:flex absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 z-20 items-center gap-4 -rotate-90 origin-left">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8AD7C]/80 font-light select-none whitespace-nowrap flex items-center gap-2">
          <Compass className="w-3 h-3 text-[#C8AD7C]" />
          HOSPITALITY · CULINARY · EXPERIENCE
        </span>
        <div className="w-12 h-[1px] bg-[#C8AD7C]/40" />
      </div>

      {/* Live Status Pill (Desktop Right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:flex absolute right-8 xl:right-12 top-1/3 z-20 items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#171715]/80 border border-[#C8AD7C]/30 backdrop-blur-md shadow-xl"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8AD7C] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8AD7C]" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#E9E2D5] font-light">
          Active for Sales &amp; Brand Roles
        </span>
      </motion.div>

      {/* Main Hero Content with 3D Tilt */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-28 pb-16 flex flex-col items-center"
      >
        {/* Eyebrow Tag with Subtle Shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#C8AD7C]/30 bg-[#171715]/80 backdrop-blur-md mb-8 group hover:border-[#C8AD7C] transition-colors cursor-default"
        >
          <Sparkles className="w-3 h-3 text-[#C8AD7C] animate-pulse" />
          <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#E9E2D5] font-light">
            SALES &amp; MARKETING · HOSPITALITY PROFESSIONAL
          </span>
        </motion.div>

        {/* Large Editorial Name with Masked Stagger Reveal */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] md:tracking-[0.18em] uppercase text-[#E9E2D5] font-light leading-[1.05] drop-shadow-md select-none"
          >
            AKHIL BAIJU
          </motion.h1>
        </div>

        {/* Animated Gold Divider Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "140px", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
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

        {/* Quick Credential Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-[#88847B] font-light"
        >
          <span className="px-3 py-1 rounded-sm bg-[#171715]/70 border border-[#2F2F2A] text-[#DFCCA7] flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#C8AD7C]" />
            Grand Hyatt Bolgatty Experience
          </span>
          <span className="px-3 py-1 rounded-sm bg-[#171715]/70 border border-[#2F2F2A] text-[#DFCCA7] flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#C8AD7C]" />
            IHM Goa Pursuing
          </span>
          <span className="px-3 py-1 rounded-sm bg-[#171715]/70 border border-[#2F2F2A] text-[#DFCCA7] flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#C8AD7C]" />
            3 Fluent Languages
          </span>
        </motion.div>

        {/* Call to Action Buttons with Magnetic Physics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Magnetic strength={0.3}>
            <button
              onClick={scrollToAbout}
              data-cursor="EXPLORE"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C8AD7C] text-[#10100F] font-medium text-xs uppercase tracking-[0.22em] rounded-sm hover:bg-[#DFCCA7] transition-all duration-300 shadow-xl hover:shadow-[#C8AD7C]/25 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Explore My Journey</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
            </button>
          </Magnetic>

          <Magnetic strength={0.3}>
            <button
              onClick={onOpenCvModal}
              data-cursor="VIEW CV"
              className="w-full sm:w-auto px-8 py-3.5 border border-[#C8AD7C]/40 text-[#E9E2D5] hover:text-white hover:border-[#C8AD7C] bg-[#171715]/60 backdrop-blur-sm text-xs uppercase tracking-[0.22em] rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-[#C8AD7C] transition-transform group-hover:-translate-y-1" />
              <span>Download My CV</span>
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator with Magnetic Pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={scrollToAbout}
        data-cursor="SCROLL"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#88847B] font-light group-hover:text-[#C8AD7C] transition-colors">
          Scroll to Discover
        </span>
        <div className="w-5 h-8 rounded-full border border-[#C8AD7C]/30 flex justify-center p-1 group-hover:border-[#C8AD7C] transition-colors">
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
