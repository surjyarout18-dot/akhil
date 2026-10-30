import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#171715",
          950: "#10100F",
          900: "#171715",
          850: "#1C1C19",
          800: "#22221E",
          700: "#2F2F2A",
        },
        ivory: {
          DEFAULT: "#E9E2D5",
          light: "#F5F1EB",
          muted: "#D7CCBA",
        },
        gold: {
          DEFAULT: "#C8AD7C",
          light: "#DFCCA7",
          dark: "#9B8059",
          glow: "rgba(200, 173, 124, 0.15)",
        },
        bronze: {
          DEFAULT: "#9B8059",
          muted: "#7A6546",
        },
        stone: {
          DEFAULT: "#88847B",
          light: "#A5A198",
          dark: "#5E5A53",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Manrope'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        ultra: ".35em",
        luxury: ".18em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gold-shimmer": "goldShimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        goldShimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
