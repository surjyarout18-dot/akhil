"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Download, Mail, Phone, MapPin, Building2, GraduationCap, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { personal, experience, education, skills, languages } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const cvContent = `
================================================================================
                                AKHIL BAIJU
              Sales & Marketing Professional | Hospitality & Culinary Arts
================================================================================
Email: ${personal.email}  |  Phone: ${personal.phone}  |  Location: ${personal.location}
LinkedIn: ${personal.socialLinks.linkedin}

--------------------------------------------------------------------------------
PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
${personal.aboutBio.join("\n\n")}

Core Philosophy: "${personal.personalPhilosophy}"

--------------------------------------------------------------------------------
PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
${experience.property.toUpperCase()} — ${experience.location}
Role: ${experience.role}
Tenure: ${experience.period} (${experience.duration})

Scope of Work & Core Pillars:
${experience.categories
  .map(
    (cat) =>
      `\n* ${cat.title} (${cat.subtitle}):\n` +
      cat.points.map((pt) => `  - ${pt}`).join("\n")
  )
  .join("\n")}

--------------------------------------------------------------------------------
EDUCATION & QUALIFICATIONS
--------------------------------------------------------------------------------
${education
  .map(
    (edu) =>
      `* ${edu.institution}\n  ${edu.degree} (${edu.board})\n  Year: ${edu.year} | Status: ${edu.status} | Score: ${edu.score} ${edu.scoreType}\n  Location: ${edu.location}\n  Overview: ${edu.description}\n`
  )
  .join("\n")}

--------------------------------------------------------------------------------
CORE COMPETENCIES
--------------------------------------------------------------------------------
${skills.map((s) => `* ${s.title}: ${s.description}`).join("\n")}

--------------------------------------------------------------------------------
LANGUAGES
--------------------------------------------------------------------------------
${languages.map((l) => `* ${l.name}: ${l.description}`).join("\n")}
================================================================================
`;

    const blob = new Blob([cvContent.trim()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Akhil_Baiju_Hospitality_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#10100F]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#171715] border border-[#C8AD7C]/40 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Modal Header Bar (Actions) */}
          <div className="no-print p-4 sm:px-8 border-b border-[#2F2F2A] bg-[#141412] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8AD7C]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
                Curriculum Vitae Document Preview
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 text-xs uppercase tracking-wider text-[#E9E2D5] bg-[#22221E] hover:bg-[#C8AD7C] hover:text-[#10100F] transition-colors rounded-sm flex items-center gap-2"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={handleDownloadText}
                className="px-3.5 py-1.5 text-xs uppercase tracking-wider text-[#10100F] bg-[#C8AD7C] hover:bg-[#DFCCA7] transition-colors rounded-sm flex items-center gap-2 font-medium"
                title="Download CV file"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download CV</span>
              </button>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-[#2F2F2A] hover:border-[#C8AD7C] text-[#88847B] hover:text-[#E9E2D5] flex items-center justify-center transition-colors"
                aria-label="Close CV Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Luxury CV Body */}
          <div className="overflow-y-auto p-6 sm:p-10 md:p-14 text-[#E9E2D5] space-y-10 bg-[#171715]">
            {/* Header Information */}
            <div className="border-b border-[#2F2F2A] pb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div>
                  <h1 className="font-serif text-3xl sm:text-4xl tracking-widest uppercase text-[#E9E2D5]">
                    {personal.name}
                  </h1>
                  <p className="text-xs tracking-[0.25em] uppercase text-[#C8AD7C] mt-1 font-light">
                    {personal.title} · {personal.specialisation}
                  </p>
                </div>
                <div className="text-xs text-[#88847B] space-y-1 sm:text-right font-light">
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C8AD7C]" />
                    {personal.email}
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C8AD7C]" />
                    {personal.phone}
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C8AD7C]" />
                    {personal.location}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-[#D7CCBA]/90 leading-relaxed font-light">
                {personal.aboutBio.join(" ")}
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#2F2F2A]">
                <Building2 className="w-4 h-4 text-[#C8AD7C]" />
                <h2 className="font-serif text-xl tracking-wider uppercase text-[#C8AD7C]">
                  Professional Experience
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-serif text-lg text-[#E9E2D5] uppercase">
                    {experience.property}
                  </h3>
                  <span className="text-xs text-[#C8AD7C]">{experience.period}</span>
                </div>
                <p className="text-xs uppercase tracking-wider text-[#88847B]">
                  {experience.role} · {experience.location}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {experience.categories.map((cat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-sm bg-[#10100F] border border-[#2F2F2A]"
                    >
                      <h4 className="font-serif text-sm text-[#DFCCA7] uppercase mb-2">
                        {cat.title}
                      </h4>
                      <ul className="space-y-2 text-xs text-[#D7CCBA]/85 font-light">
                        {cat.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-[#C8AD7C] mt-1">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#2F2F2A]">
                <GraduationCap className="w-4 h-4 text-[#C8AD7C]" />
                <h2 className="font-serif text-xl tracking-wider uppercase text-[#C8AD7C]">
                  Education & Qualifications
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-[#10100F] border border-[#2F2F2A]"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-base text-[#E9E2D5] uppercase">
                        {edu.institution}
                      </h3>
                      <span className="text-xs text-[#C8AD7C]">{edu.year}</span>
                    </div>
                    <p className="text-xs text-[#DFCCA7] mt-1">{edu.degree}</p>
                    <p className="text-[11px] text-[#88847B]">{edu.board}</p>
                    <p className="text-xs text-[#C8AD7C] font-light mt-2">
                      Score: {edu.score} ({edu.scoreType}) · {edu.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div>
                <h2 className="font-serif text-base tracking-wider uppercase text-[#C8AD7C] mb-3 pb-1 border-b border-[#2F2F2A]">
                  Core Competencies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s.id}
                      className="px-2.5 py-1 rounded-sm bg-[#10100F] border border-[#2F2F2A] text-[11px] text-[#D7CCBA]"
                    >
                      {s.title}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-base tracking-wider uppercase text-[#C8AD7C] mb-3 pb-1 border-b border-[#2F2F2A]">
                  Languages
                </h2>
                <div className="space-y-2">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-[#E9E2D5] font-medium uppercase">
                        {lang.name}:
                      </span>{" "}
                      <span className="text-[#88847B]">{lang.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

