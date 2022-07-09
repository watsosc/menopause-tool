/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'text-title': 'rgb(199,216,254)',
      'primary': 'rgb(103,153,255)',
      'secondary': 'rgb(107,107,107)',
      'grey': 'rgb(235,234,234)'
    },
    fontFamily: {
      'title': ['Nunito'],
      'body': ['Roboto'],
    },
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
