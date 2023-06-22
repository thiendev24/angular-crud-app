const { transform } = require("typescript");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "Nunito-San": ["Nunito Sans", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translate(-100%)" },
          "100%": { transform: "translate(0)" },
        },
        fadeIn: { form: { opacity: 0 }, to: { opacity: 1 } },
      },
      animation: {
        slideDown: "slideDown .5s ease-in-out",
        fadeIn: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
