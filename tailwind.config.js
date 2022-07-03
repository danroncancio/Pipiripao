/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        pipiripao: {
          primary: "#8B575C",
          secondary: "#B2A7A1",
          accent: "#85ADAC",
          neutral: "#000",
          "base-100": "#FFFDF5",
          info: "#155e75",
          success: "#059669",
          warning: "#eab308",
          error: "#c2410c",
        },
      },
    ],
  },
};
