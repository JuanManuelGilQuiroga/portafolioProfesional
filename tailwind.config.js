/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "#BF1516",
        "custom-cream": "#E5D5C4"
      }
    },
  },
  plugins: [],
}

