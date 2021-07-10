module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "animation-fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in-slow": "animation-fade-in 5s ease-in-out",
        "fade-in": "animation-fade-in 3s ease-in-out",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  plugins: [],
};
