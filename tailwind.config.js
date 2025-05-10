/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "#FF6B00",
      },
      fontFamily: {
        custom: ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

