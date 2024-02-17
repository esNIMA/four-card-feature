/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cRed: "#ea5353",
        cCyan: "#45d3d3",
        "cOrange": "#fcaf4a",
        cBlue: "#549ef2",
        VeryDarkBlue: "#4c4e61",
        GrayishBlue: "#a3a5ae",
        VeryLightGray: "	#fafafa",
      },
    },
  },
  plugins: [],
};
