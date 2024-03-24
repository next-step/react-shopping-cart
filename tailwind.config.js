/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        campton: ["Campton-Light", "sans-serif"],
        "campton-b": ["Campton-Bold", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        dimmed: "rgba(0, 0, 0, 0.2)",
        "white-dimmed": "rgba(255, 255, 255, 0.3)",
        primary: {
          50: "#f0fdfb",
          100: "#cdfaf5",
          200: "#9af5eb",
          300: "#60e8e0",
          400: "#2ac1bc",
          500: "#16b6b3",
          600: "#0f9192",
          700: "#107475",
          800: "#125b5d",
          900: "#144c4d",
          950: "#052b2e",
        },
        secondary: {
          50: "#f4f4f2",
          100: "#e4e2dd",
          200: "#cbc6bd",
          300: "#ada597",
          400: "#958a7a",
          500: "#867b6c",
          600: "#73675c",
          700: "#5d524b",
          800: "#504743",
          900: "#473f3c",
          950: "#272321",
        },
      },
    },
  },

  plugins: [],
};
