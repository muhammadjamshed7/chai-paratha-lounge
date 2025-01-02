module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFC107', // Yellow
        secondary: '#000000', // Black
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};