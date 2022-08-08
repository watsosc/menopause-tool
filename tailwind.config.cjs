/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'primary': 'rgb(199,216,254)',
      'title': 'rgb(103,153,255)',
      'secondary': 'rgb(107,107,107)',
      'grey': 'rgb(235,234,234)',
      'white': 'rgb(255,255,255)',
      'green': '#98F5E1',
      'orange': '#fde4cf',
      'error': '#db2777'
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
