"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { Magnetic } from "./Magnetic";

interface NavbarProps {
  onOpenCvModal?: () => void;
}

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Culinary", href: "#culinary" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#10100F]/92 backdrop-blur-md py-4 border-b border-[#C8AD7C]/15 shadow-2xl"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Mark with Magnetic Hover */}
          <Magnetic strength={0.25}>
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              data-cursor="HOME"
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full border border-[#C8AD7C]/40 flex items-center justify-center transition-colors group-hover:border-[#C8AD7C] group-hover:bg-[#C8AD7C]/10">
                <span className="font-serif text-[#C8AD7C] text-xs font-medium">AB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm md:text-base tracking-[0.25em] uppercase text-[#E9E2D5] font-light group-hover:text-white transition-colors">
                  AKHIL BAIJU
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#C8AD7C]/80 font-light">
                  Hospitality &amp; Sales
                </span>
              </div>
            </a>
          </Magnetic>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-xs uppercase tracking-[0.2em] font-light transition-colors py-1 ${
                    isActive
                      ? "text-[#C8AD7C]"
                      : "text-[#E9E2D5]/70 hover:text-[#E9E2D5]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8AD7C]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <Magnetic strength={0.2}>
              <button
                onClick={onOpenCvModal}
                data-cursor="CV"
                className="px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#C8AD7C] border border-[#C8AD7C]/30 hover:border-[#C8AD7C] hover:bg-[#C8AD7C]/10 transition-all rounded-sm flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </button>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                data-cursor="CONNECT"
                className="px-5 py-2 text-xs uppercase tracking-[0.18em] bg-[#C8AD7C] text-[#10100F] font-medium hover:bg-[#DFCCA7] transition-all rounded-sm flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#E9E2D5] hover:text-[#C8AD7C] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#C8AD7C]" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#10100F]/98 backdrop-blur-xl flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8AD7C]">
                Navigation
              </span>
              <div className="flex flex-col gap-4">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1 }}
                      className={`text-2xl font-serif tracking-wider uppercase transition-colors flex items-center justify-between py-2 border-b border-[#22221E] ${
                        isActive ? "text-[#C8AD7C]" : "text-[#E9E2D5]/80 hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#C8AD7C]" />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer Actions */}
            <div className="flex flex-col gap-4 pt-8">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal?.();
                }}
                className="w-full py-3.5 text-center text-xs uppercase tracking-[0.2em] text-[#C8AD7C] border border-[#C8AD7C]/40 rounded-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Curriculum Vitae</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full py-3.5 text-center text-xs uppercase tracking-[0.2em] bg-[#C8AD7C] text-[#10100F] font-semibold rounded-sm"
              >
                Get In Touch
              </a>
              <p className="text-center text-[10px] tracking-[0.2em] text-[#88847B] uppercase mt-2">
                Akhil Baiju · Hospitality &amp; Sales
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
