/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './_includes/*.{html,js}',
        './_layouts/*.{html,js}',
        './pages/*.html',
        './_posts/*.md',
        './*.html',
        './src/js/*.js',
    ],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
