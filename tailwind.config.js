/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors:{
        white06: "rgba(255,255,255,0.6)",
        white03: "rgba(255,255,255,0.3)",
        black06: "rgba(0,0,0,0.6)",
        black03: "rgba(0,0,0,0.3)",
        red01: "#E92A31",
        gray08: "rgba(144,144,149,0.8)",
        bglight: "#8C9D9C",
      }
    },
  },
  plugins: [],
}