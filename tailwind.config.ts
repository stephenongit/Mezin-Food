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
        cream: {
          50: "#FDFAF6",
          100: "#FAF7F2",
          200: "#F5EFE6",
          300: "#ECE2D2",
          DEFAULT: "#FAF7F2",
        },
        beige: {
          50: "#FAF6EE",
          100: "#F4EDE0",
          200: "#EBDDC7",
          300: "#DEC7A5",
          DEFAULT: "#F4EDE0",
        },
        brown: {
          50: "#F7F3F0",
          100: "#EDE4DE",
          200: "#D6C0B4",
          300: "#B89684",
          400: "#9A7560",
          500: "#7A5239",
          600: "#5E3924",
          700: "#4A2C1B",
          800: "#382013",
          900: "#27150C",
          950: "#1A0E08",
          DEFAULT: "#2C1810",
        },
        olive: {
          50: "#F4F7F1",
          100: "#E6EDE1",
          200: "#CFDDC4",
          300: "#A9C196",
          400: "#7F9B67",
          500: "#5D7A46",
          600: "#496335",
          700: "#3B512A",
          800: "#2E4020",
          900: "#22301A",
          DEFAULT: "#496335",
        },
        gold: {
          50: "#FDF9EE",
          100: "#FAF1D6",
          200: "#F3DEAA",
          300: "#E4C173",
          400: "#D9A94F",
          500: "#C89539",
          600: "#B37E28",
          700: "#94631D",
          800: "#74490F",
          900: "#5A380B",
          DEFAULT: "#C89539",
        },
        terracotta: {
          50: "#FAF1EE",
          100: "#F4DDD6",
          500: "#B24C33",
          600: "#983C25",
          700: "#7C2D1B",
          DEFAULT: "#983C25",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "var(--font-tamil)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "var(--font-tamil)", "Georgia", "serif"],
        tamil: ["var(--font-tamil)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        warm: "0 4px 20px -2px rgba(44, 24, 16, 0.08)",
        "warm-lg": "0 10px 30px -4px rgba(44, 24, 16, 0.12)",
        "warm-xl": "0 20px 40px -6px rgba(44, 24, 16, 0.16)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "zoom-in-95": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-bottom-4": {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out forwards",
        "zoom-in-95": "zoom-in-95 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-from-top": "slide-in-from-top 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-from-right": "slide-in-from-right 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-from-bottom-4": "slide-in-from-bottom-4 0.25s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
