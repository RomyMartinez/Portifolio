/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        DarkPurple200: '#8964b0',
        DarkPurple900: '#280a48',
        DarkPurple950: '#20043d',
      },
    },
  },
  plugins: [],
}
