/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // here
  ],
  theme: {
    extend: {},
    screens: {
      tablet: '750px',
      pc: '960px',
    },
  },
  plugins: [],
};
