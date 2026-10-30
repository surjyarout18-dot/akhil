"use client";

import React from "react";
import { ArrowUp, Sparkles, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#10100F] border-t border-[#22221E] text-[#88847B] py-16 md:py-20 overflow-hidden">
      {/* Subtle top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8AD7C]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-12 border-b border-[#22221E]">
          <div>
            {/* Monogram & Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-[#C8AD7C]/40 flex items-center justify-center">
                <span className="font-serif text-[#C8AD7C] text-xs font-light">AB</span>
              </div>
              <div>
                <span className="font-serif text-xl tracking-[0.2em] uppercase text-[#E9E2D5] font-light block">
                  AKHIL BAIJU
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
                  HOSPITALITY · SALES · CULINARY ARTS
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-[#D7CCBA]/80 font-light mt-4 max-w-md">
              &ldquo;Crafting experiences. Building relationships.&rdquo;
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto flex items-center gap-3 px-5 py-3 rounded-sm border border-[#2F2F2A] hover:border-[#C8AD7C] text-xs uppercase tracking-[0.2em] text-[#E9E2D5] hover:text-[#C8AD7C] transition-all group"
            aria-label="Back to Top"
          >
            <span>Back to Summit</span>
            <div className="w-6 h-6 rounded-full bg-[#171715] flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
              <ArrowUp className="w-3.5 h-3.5 text-[#C8AD7C]" />
            </div>
          </button>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <p className="text-[11px] text-[#88847B] tracking-wider">
            © {new Date().getFullYear()} Akhil Baiju. Crafted with luxury editorial art direction. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[11px] tracking-widest uppercase text-[#88847B]">
            <span>IHM Goa</span>
            <span>·</span>
            <span>Grand Hyatt Bolgatty</span>
            <span>·</span>
            <span className="text-[#C8AD7C]">India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

