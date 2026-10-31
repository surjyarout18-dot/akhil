"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  Linkedin,
  Instagram,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Magnetic } from "./Magnetic";

interface ContactProps {
  onOpenCvModal?: () => void;
}

const inquiryPresets = [
  {
    label: "Hospitality Management Placement",
    subject: "Opportunity: Hospitality Management & Guest Relations",
    starter: "Dear Akhil,\n\nWe were impressed by your background at Grand Hyatt Bolgatty and IHM Goa. We would like to discuss an opportunity regarding...",
  },
  {
    label: "Sales & Marketing Trainee Role",
    subject: "Opportunity: Luxury Hospitality Sales & Marketing Trainee",
    starter: "Dear Akhil,\n\nWe have an opening in our hospitality sales team and would value your culinary and client communication background...",
  },
  {
    label: "Guest Relations & F&B Executive",
    subject: "Inquiry: Guest Experience & Food & Beverage Operations",
    starter: "Dear Akhil,\n\nWe are looking for customer-centric hospitality talent with five-star brand exposure. Let's schedule a call to explore...",
  },
  {
    label: "Exploratory Conversation",
    subject: "Connecting with Akhil Baiju — Hospitality Professional",
    starter: "Hi Akhil,\n\nI came across your portfolio and would love to connect for an exploratory discussion on upcoming opportunities in...",
  },
];

export const Contact: React.FC<ContactProps> = ({ onOpenCvModal }) => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status !== "idle") setStatus("idle");
  };

  const selectPreset = (preset: typeof inquiryPresets[0]) => {
    setFormData((prev) => ({
      ...prev,
      subject: preset.subject,
      message: preset.starter,
    }));
    setStatus("idle");
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // Compose functional mailto link for direct client email delivery
    const mailSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name} via Portfolio`
    );
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${mailSubject}&body=${mailBody}`;

    setTimeout(() => {
      setStatus("success");
      // Trigger user's default email client with prefilled details
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#171715] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8AD7C]/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(200,173,124,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8AD7C] font-light">
              Section 10 — Dialogue &amp; Collaboration
            </span>
            <span className="w-8 h-[1px] bg-[#C8AD7C]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E9E2D5] font-light tracking-wide uppercase">
            LET&apos;S CREATE SOMETHING MEMORABLE.
          </h2>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-[#D7CCBA]/85 font-light leading-relaxed">
            I am open to opportunities in hospitality, sales, marketing, guest relations and customer experience. Let&apos;s connect and explore how I can contribute to your organisation.
          </p>
        </div>

        {/* Content Layout: Contact Info & Action Column (Left) + Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="p-8 rounded-sm bg-[#10100F] border border-[#C8AD7C]/30 shadow-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8AD7C] font-light block mb-6">
                Direct Channels
              </span>

              <div className="space-y-6">
                {/* Email Item with Direct Copy */}
                <div className="flex items-start justify-between p-3 -m-3 rounded-sm hover:bg-[#171715] transition-colors group">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-start gap-4 flex-grow"
                  >
                    <div className="w-10 h-10 rounded-sm bg-[#171715] border border-[#2F2F2A] group-hover:border-[#C8AD7C] flex items-center justify-center text-[#C8AD7C] shrink-0 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#88847B] font-light block">
                        Electronic Mail
                      </span>
                      <span className="text-sm md:text-base text-[#E9E2D5] font-light group-hover:text-[#C8AD7C] transition-colors break-all">
                        {personal.email}
                      </span>
                    </div>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy email"
                    className="p-2 text-[#88847B] hover:text-[#C8AD7C] transition-colors shrink-0"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#C8AD7C]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Telephone Item with Direct Copy */}
                <div className="flex items-start justify-between p-3 -m-3 rounded-sm hover:bg-[#171715] transition-colors group">
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="flex items-start gap-4 flex-grow"
                  >
                    <div className="w-10 h-10 rounded-sm bg-[#171715] border border-[#2F2F2A] group-hover:border-[#C8AD7C] flex items-center justify-center text-[#C8AD7C] shrink-0 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#88847B] font-light block">
                        Telephone / WhatsApp
                      </span>
                      <span className="text-sm md:text-base text-[#E9E2D5] font-light group-hover:text-[#C8AD7C] transition-colors">
                        {personal.phone}
                      </span>
                    </div>
                  </a>

                  <button
                    onClick={handleCopyPhone}
                    title="Copy phone"
                    className="p-2 text-[#88847B] hover:text-[#C8AD7C] transition-colors shrink-0"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#C8AD7C]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 p-3 -m-3">
                  <div className="w-10 h-10 rounded-sm bg-[#171715] border border-[#2F2F2A] flex items-center justify-center text-[#88847B] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#88847B] font-light block">
                      Geographic Base
                    </span>
                    <span className="text-sm md:text-base text-[#E9E2D5] font-light">
                      India · Mobile for Domestic &amp; International Placement
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#22221E] flex flex-col gap-3">
                <Magnetic strength={0.2} className="w-full">
                  <a
                    href={`mailto:${personal.email}`}
                    className="w-full py-3.5 px-5 rounded-sm bg-[#C8AD7C] text-[#10100F] font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#DFCCA7] transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send an Email</span>
                  </a>
                </Magnetic>

                <Magnetic strength={0.2} className="w-full">
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="w-full py-3.5 px-5 rounded-sm border border-[#C8AD7C]/40 text-[#E9E2D5] hover:text-white hover:border-[#C8AD7C] bg-[#171715] text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C8AD7C]" />
                    <span>Call Me</span>
                  </a>
                </Magnetic>

                <Magnetic strength={0.2} className="w-full">
                  <button
                    onClick={onOpenCvModal}
                    className="w-full py-3.5 px-5 rounded-sm border border-[#2F2F2A] hover:border-[#C8AD7C]/60 text-[#D7CCBA] text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-[#C8AD7C]" />
                    <span>Download My CV</span>
                  </button>
                </Magnetic>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="p-6 rounded-sm bg-[#10100F]/60 border border-[#2F2F2A]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#88847B] font-light block mb-4">
                Verified Digital Profiles
              </span>
              <div className="flex flex-wrap gap-4">
                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-sm bg-[#171715] border border-[#2F2F2A] hover:border-[#C8AD7C] text-xs text-[#E9E2D5] transition-colors group"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#C8AD7C]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[#88847B] group-hover:text-[#C8AD7C]" />
                </a>

                <a
                  href={personal.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-sm bg-[#171715] border border-[#2F2F2A] hover:border-[#C8AD7C] text-xs text-[#E9E2D5] transition-colors group"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C8AD7C]" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-[#88847B] group-hover:text-[#C8AD7C]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form with Fast-Pills */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-sm bg-[#10100F] border border-[#C8AD7C]/30 shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2F2F2A]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8AD7C] font-light block">
                    Direct Inquiry Dispatch
                  </span>
                  <h3 className="font-serif text-2xl text-[#E9E2D5] uppercase font-light mt-1">
                    Send a Direct Message
                  </h3>
                </div>
                <Sparkles className="w-5 h-5 text-[#C8AD7C]" />
              </div>

              {/* Fast Opportunity Presets */}
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#88847B] block mb-2 font-light">
                  Quick Inquiry Templates (Click to Auto-fill):
                </span>
                <div className="flex flex-wrap gap-2">
                  {inquiryPresets.map((preset, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => selectPreset(preset)}
                      className="px-3 py-1.5 rounded-sm bg-[#171715] hover:bg-[#C8AD7C]/15 border border-[#2F2F2A] hover:border-[#C8AD7C]/50 text-[11px] text-[#DFCCA7] transition-all text-left"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] uppercase tracking-[0.2em] text-[#88847B] font-light mb-2"
                    >
                      Your Full Name <span className="text-[#C8AD7C]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      required
                      className="w-full px-4 py-3 rounded-sm bg-[#171715] border border-[#2F2F2A] focus:border-[#C8AD7C] text-[#E9E2D5] text-sm font-light placeholder-[#88847B]/50 transition-colors focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] uppercase tracking-[0.2em] text-[#88847B] font-light mb-2"
                    >
                      Your Email Address <span className="text-[#C8AD7C]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. eleanor@luxurygroup.com"
                      required
                      className="w-full px-4 py-3 rounded-sm bg-[#171715] border border-[#2F2F2A] focus:border-[#C8AD7C] text-[#E9E2D5] text-sm font-light placeholder-[#88847B]/50 transition-colors focus:outline-none"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[11px] uppercase tracking-[0.2em] text-[#88847B] font-light mb-2"
                  >
                    Subject / Opportunity Title
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Hospitality Management Placement / Interview Request"
                    className="w-full px-4 py-3 rounded-sm bg-[#171715] border border-[#2F2F2A] focus:border-[#C8AD7C] text-[#E9E2D5] text-sm font-light placeholder-[#88847B]/50 transition-colors focus:outline-none"
                  />
                </div>

                {/* Message with Character Counter */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="message"
                      className="block text-[11px] uppercase tracking-[0.2em] text-[#88847B] font-light"
                    >
                      Your Message <span className="text-[#C8AD7C]">*</span>
                    </label>
                    <span className="text-[10px] text-[#88847B] font-mono">
                      {formData.message.length} characters
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the opportunity, event requirement, or collaboration concept..."
                    required
                    className="w-full px-4 py-3 rounded-sm bg-[#171715] border border-[#2F2F2A] focus:border-[#C8AD7C] text-[#E9E2D5] text-sm font-light placeholder-[#88847B]/50 transition-colors focus:outline-none resize-none"
                  />
                </div>

                {/* Status Alerts */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-sm bg-red-950/40 border border-red-500/40 flex items-center gap-3 text-red-200 text-xs"
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-sm bg-[#171715] border border-[#C8AD7C] flex items-start gap-3 text-[#E9E2D5] text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C8AD7C] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[#C8AD7C]">
                          Thank you for reaching out!
                        </p>
                        <p className="text-[#88847B] mt-0.5 font-light">
                          Your email client has been prepared with your message to akhilbaiju14@gmail.com. Akhil will review and respond promptly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-sm bg-[#C8AD7C] text-[#10100F] font-medium text-xs uppercase tracking-[0.25em] hover:bg-[#DFCCA7] disabled:opacity-50 transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {status === "submitting" ? (
                    <span>Opening Transmission...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#88847B] text-center font-light">
                  Direct client dispatch triggers automatic email client link to {personal.email}.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
