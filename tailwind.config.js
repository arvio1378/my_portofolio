/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1 : "#EAD8C0",
        bg2 : "#FFE0B5",
        bg3 : "#F6F0F0",
        bg4 : "#FFDCDC"
      },
    },
  },
  plugins: [],
}
