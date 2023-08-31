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
      colors: {
        'latte': '#EBE8E3'
      },
      fontFamily: {
        'neue': 'PP Neue Montreal',
        'canela': 'Canela Trial'
      }
    },
  },
  plugins: [],
}

