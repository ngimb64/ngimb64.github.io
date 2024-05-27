/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './_includes/*.{html,js}',
        './_layouts/*.{html,js}',
        './pages/*.html',
        './_posts/*.md',
        './*.html',
        './src/js/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
