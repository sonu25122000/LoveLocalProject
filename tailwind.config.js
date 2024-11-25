/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all React components for classes
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
