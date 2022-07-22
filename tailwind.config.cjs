/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/**/*.{html,js}', // here
  ],
  theme: {
    extend: {
      colors: {
        baseColor: '#09558c',
      },
      screens: {
        tablet: '750px',
        pc: '960px',
      },
    },
  },
  plugins: [],
};
