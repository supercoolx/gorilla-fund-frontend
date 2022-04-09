const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,tsx}", "./public/**/*.html"],
  theme: {
    screens: {
      'xs': '450px',
      ...defaultTheme.screens
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
