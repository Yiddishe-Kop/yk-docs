const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        mono: ['Cascadia', ...defaultTheme.fontFamily.mono], // font for code snippets 😎
      },
    }
  },
  variants: {},
  plugins: []
}
