/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      "hdrNavCl": "#1F1534",
      "hdrNavClHvr": "#2E4E92",
      "hdrBdrCl": "#2E4E92",
    },
    fontSize: {
      "txtSizPrm": "18px",
    },
    extend: {},
  },
  plugins: [],
}