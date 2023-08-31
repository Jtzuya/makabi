let mix = require('laravel-mix');
const tw = require('tailwindcss')
    
mix.js('src/js/jtzuya.js', 'assets')
   .sass('src/scss/jtzuya.scss', 'assets')
   .options({
        processCssUrls: false,
        postCss: [tw('tailwind.config.js')]
   });