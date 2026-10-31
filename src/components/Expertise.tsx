"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartHandshake,
  MessageSquareQuote,
  Sparkles,
  TrendingUp,
  CalendarRange,
  Share2,
  Users2,
  Award,
  ShieldAlert,
  CheckCheck,
  LucideIcon,
  ArrowUpRight,
  X,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { portfolioData, SkillItem } from "@/data/portfolioData";

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  MessageSquareQuote,
  Sparkles,
  TrendingUp,
  CalendarRange,
  Share2,
  Users2,
  Award,
  ShieldAlert,
  CheckCheck,
};

// Realistic operational contexts for the deep dive modal
const skillContexts: Record<string, { scenario: string; impact: string }> = {
  crm: {
    scenario: "Engaged VIP guests at Grand Hyatt Bolgatty, noting individual preferences for dining, beverage pairings, and room ambiance.",
    impact: "Fostered immediate trust, repeated dining covers, and enthusiastic guest feedback.",
  },
  communication: {
    scenario: "Presented curated degustation and beverage offerings, articulately explaining preparation methods, provenance, and flavor pairings.",
    impact: "Elevated average cover revenue and enhanced guest appreciation for fine-dining craftsmanship.",
  },
  "brand-storytelling": {
    scenario: "Articulated Hyatt's culinary ethos and local Kerala spice heritage to international convention delegates and luxury leisure travelers.",
    impact: "Transformed ordinary dining into an evocative cultural hospitality experience.",
  },
  "market-research": {
    scenario: "Monitored emerging preferences in organic, plant-based, and wellness gastronomy across hospitality industry publications.",
    impact: "Formulated proactive recommendations for contemporary guest dietary expectations.",
  },
  "event-upselling": {
    scenario: "Assisted in high-capacity banquet and private event setups, recommending premium beverage enhancements and bespoke dessert courses.",
    impact: "Drove incremental banquet revenue while maintaining impeccable service choreography.",
  },
  "digital-awareness": {
    scenario: "Studied modern guest discovery patterns, social check-ins, and luxury hotel reputation metrics on global review platforms.",
    impact: "Understood the critical link between on-premise service perfection and digital brand prestige.",
  },
  "team-collaboration": {
    scenario: "Maintained continuous coordination between kitchen brigade, front desk PMS, and housekeeping during peak occupancy periods.",
    impact: "Guaranteed seamless service delivery without departmental bottlenecks or delays.",
  },
  "guest-experience": {
    scenario: "Anticipated unspoken guest needs, providing tailored assistance before formal requests were voiced.",
    impact: "Consistently delivered the hallmark intuitive service expected of five-star luxury hospitality.",
  },
  "problem-solving": {
    scenario: "Resolved fast-paced operational adjustments during high-volume banquet service with composed, courteous problem-solving.",
    impact: "Preserved guest tranquility and seamless service flow during unexpected operational shifts.",
  },
  "quality-assurance": {
    scenario: "Inspected table arrangements, silverware alignment, linen presentation, and culinary mise en place before service commencement.",
    impact: "Ensured 100% adherence to Hyatt's global five-star service and hygiene standards.",
  },
};

export const Expertise: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalSkill, setActiveModalSkill] = useState<SkillItem | null>(null);

  // Grouping tags
  const categories = [
    { id: "all", label: "All Competencies (10)" },
    { id: "sales", label: "Client Relations & Sales" },
    { id: "operations", label: "Operations & Agility" },
    { id: "strategy", label: "Brand & Leadership" },
  ];

  const filteredSkills = skills.filter((skill) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "sales") {
      return ["crm", "communication", "event-upselling", "guest-experience"].includes(skill.id);
    }
    if (selectedCategory === "operations") {
      return ["team-collaboration", "problem-solving", "quality-assurance"].includes(skill.id);
    }
    if (selectedCategory === "strategy") {
      return ["brand-storytelling", "market-research", "digital-awareness"].includes(skill.id);
    }
    return true;
  });

  return (
    <section id="expertise" className="relative py-28 md:py-36 bg-[#171715] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(200,173,124,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-14 md:mb-18">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 04 — Professional Competencies
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E9E2D5] font-light tracking-wide uppercase">
            THE SKILLS BEHIND EXCEPTIONAL SERVICE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#88847B] max-w-2xl font-light">
            Ten core disciplines bridging luxury hospitality ethics, consultative sales techniques, guest relationship management, and operational mastery.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs uppercase tracking-[0.18em] transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#C8AD7C] text-[#10100F] font-medium shadow-md shadow-[#C8AD7C]/10"
                    : "bg-[#10100F] text-[#88847B] border border-[#2F2F2A] hover:text-[#E9E2D5] hover:border-[#C8AD7C]/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Premium Skill Cards Grid with Spotlight Hover */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => {
              const IconComponent = iconMap[skill.iconName] || Sparkles;

              return (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  index={idx}
                  icon={IconComponent}
                  onSelect={() => setActiveModalSkill(skill)}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Note on Quality Standards */}
        <div className="mt-14 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#88847B] font-light">
            Refined through academic training at IHM Goa &amp; operational immersion at Grand Hyatt Bolgatty
          </p>
        </div>
      </div>

      {/* Interactive Skill Deep-Dive Modal */}
      <AnimatePresence>
        {activeModalSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalSkill(null)}
            className="fixed inset-0 z-50 bg-[#10100F]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-[#171715] border border-[#C8AD7C]/40 rounded-sm p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setActiveModalSkill(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#2F2F2A] hover:border-[#C8AD7C] text-[#88847B] hover:text-[#E9E2D5] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#C8AD7C] text-[#10100F] flex items-center justify-center">
                  {React.createElement(iconMap[activeModalSkill.iconName] || Sparkles, {
                    className: "w-5 h-5",
                  })}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8AD7C] font-light">
                    {activeModalSkill.tag}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#E9E2D5] uppercase font-light">
                    {activeModalSkill.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#D7CCBA]/90 font-light leading-relaxed mb-6 border-b border-[#2F2F2A] pb-4">
                {activeModalSkill.description}
              </p>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-sm bg-[#10100F] border border-[#2F2F2A]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8AD7C] block mb-1 font-light flex items-center gap-1.5">
                    <Building2 className="w-3 h-3" />
                    Practical Hospitality Application (Grand Hyatt)
                  </span>
                  <p className="text-[#E9E2D5] font-light leading-relaxed">
                    {skillContexts[activeModalSkill.id]?.scenario}
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-[#10100F] border border-[#2F2F2A]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8AD7C] block mb-1 font-light flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3" />
                    Sales &amp; Service Impact
                  </span>
                  <p className="text-[#E9E2D5] font-light leading-relaxed">
                    {skillContexts[activeModalSkill.id]?.impact}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2F2F2A] flex justify-end">
                <button
                  onClick={() => setActiveModalSkill(null)}
                  className="px-5 py-2 text-xs uppercase tracking-[0.2em] bg-[#C8AD7C] text-[#10100F] font-medium rounded-sm hover:bg-[#DFCCA7] transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface SkillCardProps {
  skill: SkillItem;
  index: number;
  icon: LucideIcon;
  onSelect: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, icon: IconComponent, onSelect }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onSelect}
      data-cursor="EXPAND"
      className="p-8 rounded-sm bg-[#10100F]/90 border border-[#2F2F2A] hover:border-[#C8AD7C] transition-all duration-300 relative flex flex-col justify-between group cursor-pointer shadow-lg overflow-hidden"
    >
      {/* Dynamic Gold Spotlight Hover Glare */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 173, 124, 0.12), transparent 40%)`,
          }}
        />
      )}

      {/* Top Gold Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1.5px] bg-[#C8AD7C] transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative z-10">
        {/* Top Bar with Icon & Tag */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-12 h-12 rounded-sm border flex items-center justify-center transition-all duration-300 ${
              isHovered
                ? "border-[#C8AD7C] bg-[#C8AD7C] text-[#10100F]"
                : "border-[#2F2F2A] bg-[#171715] text-[#C8AD7C]"
            }`}
          >
            <IconComponent className="w-5 h-5" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-[#88847B] group-hover:text-[#C8AD7C] transition-colors font-light">
            {skill.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl text-[#E9E2D5] tracking-wide uppercase font-light mb-3 group-hover:text-white transition-colors">
          {skill.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#D7CCBA]/80 font-light leading-relaxed">
          {skill.description}
        </p>
      </div>

      {/* Bottom Card Footer */}
      <div className="mt-8 pt-4 border-t border-[#22221E] flex items-center justify-between relative z-10">
        <span className="text-[10px] uppercase tracking-widest text-[#88847B] font-light group-hover:text-[#C8AD7C] transition-colors">
          Inspect Case Study
        </span>
        <ArrowUpRight
          className={`w-3.5 h-3.5 text-[#C8AD7C] transition-transform duration-300 ${
            isHovered ? "translate-x-0.5 -translate-y-0.5 opacity-100" : "opacity-40"
          }`}
        />
      </div>
    </motion.div>
  );
};
