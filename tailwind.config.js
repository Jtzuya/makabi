/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './template/*.json',
    './template/*.liquid',
    './template/customers/*.json',
  ],
  theme: {
    extend: {
      width: {
        '34': '138px',
        '38': '155px',
        '58': '235.67px',
      },
      height: {
        '15': '60px'
      },
      colors: {
        'latte': '#EBE8E3',
        'dark-txt': '#161010',
        'dark-link': '#191414',
        'header-dark-txt': '#161010',
      },
      fontFamily: {
        'neue': 'neue',
        'canela': 'canela'
      },
      fontSize: {
        '4xl': '40px',
        '5xl': '46px',
        '6xl': '96px',
        '7xl': '140px',
        '8xl': '80px'
      }
    },
  },
  plugins: [],
}

