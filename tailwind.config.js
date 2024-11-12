/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        albert: ["Albert Sans", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
      colors: {
        primary: {
          light: "#01684B",
          dark: "#013737",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
};
