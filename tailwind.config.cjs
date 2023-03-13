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
      },
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
