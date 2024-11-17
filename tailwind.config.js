// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#e6f3ff", // Lighter shade
          100: "#cce7ff", // Light shade
          200: "#99ceff", // Very light shade
          300: "#66b5ff", // Light medium shade
          400: "#339cff", // Medium shade
          500: "#1A73E8", // This is your main blue color
          600: "#1557b0", // Slightly darker
          700: "#0d3b7d", // Darker
          800: "#082756", // Very dark
          900: "#041328", // Darkest
        },
        neutral: {
          850: "#1f2937",
        },
      },
      boxShadow: {
        soft: "0 2px 15px rgba(0, 0, 0, 0.05)",
        medium: "0 4px 20px rgba(0, 0, 0, 0.07)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
