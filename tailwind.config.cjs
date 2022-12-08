/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      publicSans: ['Public Sans', 'sans-serif'],
    },
    colors: {
      primary: '#7269ef',
      gray: '#495057',
      'gray-light': '#7a7f9a',
    },
    extend: {},
  },
  plugins: [],
};
