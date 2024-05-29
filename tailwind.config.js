/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 10px 30px -10px rgba(0,0,0,0.7)",
        xxxl: "0px 3px 16px 5px rgba(0,0,0,0.3)",
        stylish: "0px 5px 20px 1px rgba(0,0,0,0.4)",
      },
      colors: {
        primary: "#111111",
        secondary: "#FFFF00",
        tertiary: "#DE00E0",
        primary_dark: "#000000",
        primary_light: "#222222",
        brackets: "#73DACA",
        text: "#9ECE6A",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
