const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        burtons: "burtons",
        robotomono: "Roboto+Mono",
      },
      textShadow: {
        // Define your text shadows here
        default: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        md: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        lg: "6px 6px 6px rgba(0, 0, 0, 0.25)",
        // ... other sizes
      },
      keyframes: {
        textEffect: {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        textEffect2: {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        textEffect2Bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            opacity: "0",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(0)",
            opacity: "1",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        "text-effect": "textEffect 4s ease forwards",
        "text-effect2": "textEffect 8s ease forwards",
        "text-effect2-bounce": "textEffect2Bounce 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("@tailwindcss/aspect-ratio"),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
