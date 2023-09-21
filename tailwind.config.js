/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white_02: "rgba(255,255,255,0.2)"
      }
    },
  },
  plugins: [],
}