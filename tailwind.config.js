/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0000FF',
      },
      scale: {
        '101': '1.01', // Adds scale-102 to your Tailwind classes
      }
    },
  },
  plugins: [],
}