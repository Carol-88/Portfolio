/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#b74e22",
          dark: "#4a0f07",
          deep: "#711e09",
          accent: "#9c1f04",
        },
        accent: {
          DEFAULT: "#f4914b",
          warm: "#ed6a25",
          soft: "#cf7362",
        },
        surface: {
          DEFAULT: "#fbd090",
          muted: "#fef7ed",
          card: "#fffaf5",
        },
      },
      fontFamily: {
        sans: ["Lexend", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(75, 15, 7, 0.08)",
        "card-hover": "0 8px 32px rgba(75, 15, 7, 0.14)",
      },
    },
  },
  plugins: [],
};
