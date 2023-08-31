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
    extend: {},
  },
  plugins: [],
}

