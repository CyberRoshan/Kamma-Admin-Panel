/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['"Nunito Sans"','"sans-serif"']
      },
      colors: {
        'coral' : '#FF4D72',
        'theme-black': '#20262C',
        'grey-1': '#8F948F',
        'grey-2': '#D9DED9',
        'grey-3': '#6C726C',
        'grey-4': '#C1C1C1',
        'grey-5': '#EDF0ED',
        'back-grey':'#F4F6F8',
        'turquoise': '#19D3C5',
        'Midnight_Blue': '#34485C',


      }
    },
  },
  plugins: [],
}