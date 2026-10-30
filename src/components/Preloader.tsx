"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant luxury entrance timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#10100F] text-[#E9E2D5]"
        >
          {/* Subtle ambient gold radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,173,124,0.08)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Monogram emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-14 h-14 rounded-full border border-[#C8AD7C]/30 flex items-center justify-center mb-6 relative"
            >
              <div className="w-11 h-11 rounded-full border border-[#C8AD7C]/15 flex items-center justify-center">
                <span className="font-serif text-[#C8AD7C] tracking-widest text-sm font-light">
                  AB
                </span>
              </div>
            </motion.div>

            {/* Primary Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden text-center"
            >
              <h1 className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase text-[#E9E2D5] font-light">
                AKHIL BAIJU
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-3 text-[11px] md:text-xs tracking-[0.35em] text-[#C8AD7C] uppercase font-light"
            >
              HOSPITALITY · SALES · CULINARY
            </motion.p>

            {/* Gold Progress line */}
            <div className="w-36 h-[1px] bg-[#22221E] mt-8 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  ease: "easeInOut",
                }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#C8AD7C] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

