/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/**/*.{html,js}', // here
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      colors:{
        baseColor: '#09558c',
      }
=======
      colors: {
        baseColor: '#09558c',
      },
>>>>>>> 1aba0263a0b4a33d102f1b1c9166a5293c5e7fb0
      screens: {
        tablet: '750px',
        pc: '960px',
      },
    },
  },
  plugins: [],
};
