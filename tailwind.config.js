/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "360px",
      lp: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
      mlg: "1450px",
    },
  },
  plugins: [],
};
