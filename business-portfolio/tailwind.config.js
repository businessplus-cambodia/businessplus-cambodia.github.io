const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        light: '#f7b962',
        DEFAULT: '#dc9d42',
        dark: '#ba6f07'
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber
    },
  },
 variants: {
  extend: {},
 },
 
 extend: {
   transitionDelay: {
     '0': '0ms',
     '2000': '2000ms',
    },
  },
  plugins: [],
}