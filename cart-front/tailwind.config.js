/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customTeal: "#2ac1bc",
        customGray: "#73675c",
        thingray: "#aaaaaa",
      },
      maxWidth: {
        520: "520px",
      },
      width: {
        480: "480px",
        520: "520px",
      },
      margin: {
        "1/20": "5%",
      },
    },
  },
  plugins: [],
};
