import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          1000: "#05070E", 950: "#080C18", 900: "#0B1424",
          850: "#111A2E", 800: "#18233A", 700: "#2A3653",
          600: "#3E4A6B", 500: "#626B85", 400: "#8A92A6",
          300: "#B1B7C5", 200: "#D4D8E0", 100: "#EDEFF3",
        },
        brand: {
          blue: "#2B5FFF", blueSoft: "#5B82FF",
          violet: "#7C3AED", violetSoft: "#A78BFA",
          copper: "#E08B63", mint: "#7ED4B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        float: "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(255,255,255,0.06), 0 30px 60px -20px rgba(0,0,0,0.6), 0 50px 120px -40px rgba(43,95,255,0.25)",
        floatHi: "0 1px 0 0 rgba(255,255,255,0.12) inset, 0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px -20px rgba(0,0,0,0.7), 0 60px 140px -40px rgba(124,58,237,0.35)",
        glow: "0 40px 100px -40px rgba(43,95,255,0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
