"use client";

import React, { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Culinary } from "@/components/Culinary";
import { Education } from "@/components/Education";
import { Leadership } from "@/components/Leadership";
import { Languages } from "@/components/Languages";
import { Interests } from "@/components/Interests";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CvModal } from "@/components/CvModal";

export default function Home() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#10100F] text-[#E9E2D5] overflow-x-hidden selection:bg-[#C8AD7C] selection:text-[#10100F]">
      {/* Preloader Animation */}
      <Preloader />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Luxury Navigation Bar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* SECTION 01 — CINEMATIC HERO */}
      <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* SECTION 02 — ABOUT ME */}
      <About />

      {/* SECTION 03 — PROFESSIONAL JOURNEY */}
      <Experience />

      {/* SECTION 04 — CORE EXPERTISE */}
      <Expertise />

      {/* SECTION 05 — CULINARY & HOSPITALITY */}
      <Culinary />

      {/* SECTION 06 — EDUCATION */}
      <Education />

      {/* SECTION 07 — LEADERSHIP & PERSONALITY */}
      <Leadership />

      {/* SECTION 08 — LANGUAGES */}
      <Languages />

      {/* SECTION 09 — PERSONAL INTERESTS */}
      <Interests />

      {/* SECTION 10 — CONTACT / LET'S CONNECT */}
      <Contact onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* FOOTER */}
      <Footer />

      {/* CURRICULUM VITAE MODAL & PRINT/DOWNLOAD */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </main>
  );
}

