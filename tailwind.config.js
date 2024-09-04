const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        titleColor: "#1a202c",
      },
      fontFamily: {
        titleFont: ["Roboto", "sans-serif"],
      },
      maxWidth: {
        "section": "1024px",
      },
      fontSize: {
        "section-title": "69px",
        "section-description": "20px",
      },
      fontWeight: {
        "section-title": "normal",
      },
      letterSpacing: {
        "section-title": "0",
      },
      lineHeight: {
        "section-title": "83px",
      },
      margin: {
        "section-title": "20px 0",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
