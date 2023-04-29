/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      gridTemplateColumns: {
        'activity': 'repeat(2, minmax(0, auto))'
      }
    },
  },
  plugins: [],
}

