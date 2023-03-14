/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(221, 100%, 96%)',
        'primary-light': 'hsla(221, 100%, 96%, 0.3)',
        secondary: 'hsl(241, 100%, 89%)',
        'secondary-dark': '#5C3EF9',
        'secondary-light': '#4927D4',
        'background-light': 'hsl(252, 100%, 67%)',
        'background-dark': 'hsl(241, 81%, 54%)',
        'circle-light': 'hsla(256, 72%, 46%, 1)',
        'circle-dark': 'hsla(241, 72%, 46%, 0)',
      },
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
