// tailwind.config.js
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
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        neutral: {
          850: "#1f2937",
        },
      },
      boxShadow: {
        soft: "0 2px 15px rgba(0, 0, 0, 0.05)",
        medium: "0 4px 20px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
