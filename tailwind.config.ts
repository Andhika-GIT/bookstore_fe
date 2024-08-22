import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./containers/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#F7EBE4",
          dark: "#2779bd",
        },
        primary_green: {
          DEFAULT: "#7FBF7F",
          dark: "#72AB72",
        },
        primary_grey: {
          DEFAULT: "#cdcdcd",
          dark: "#b3b3b3",
          light: "$e6e6e6",
        },
        primary_blue: {
          DEFAULT: "#0064cc",
          dark: "#004b99",
          light: "#3297ff",
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "mona-sans": ["Mona Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
