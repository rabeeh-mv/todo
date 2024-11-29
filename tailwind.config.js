/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          inter: ['"Inter"', 'sans-serif'], // Reference Google Font
        }
      },
    },
  },
  plugins: [],
}

