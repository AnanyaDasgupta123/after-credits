
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        cinema: {
          bg: "#0B0B0D",
          panel: "#151518",
          muted: "#A3A3AA",
          accent: "#D6A85F",
          line: "#29292E",
        },
      },
    },
  },
  plugins: [],
};

