const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './**/*.html',
    './**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#ffad1f'
      },
      fontFamily: {
        mono: ['Cascadia', ...defaultTheme.fontFamily.mono], // font for code snippets 😎
      },
    }
  },
  variants: {},
  plugins: []
}
