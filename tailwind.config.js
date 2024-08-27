/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./view/**/*.{html,js}', './node_modules/flowbite/**/*.js'],

  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#F1C21B',
        secondary: '#64748b',
        dark: '#0E0B0B',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
