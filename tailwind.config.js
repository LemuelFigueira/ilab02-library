/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{html, ts, js, tsx, jsx}',
      './src/**/*'
  ],
  theme: {
    fontSize: {
      'h-lg': '2.5rem',
      'h-md': '1.5rem',
      'h-sm': '2.5rem',
      'lg': '18px',
      'md': '16px',
      'sm': '14px',
    },
    extend: {
      colors: {
        cyan: {
          500: '#81D8F7',
          300: '#A1E1F9'
        },
        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7C7CBA',
          200: '#C4C4CC',
          100: '#E1E1E6'
        }
      }
    },
  },
}
