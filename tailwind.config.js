module.exports = {
  content: ["./src/**/*.{html,tsx}", "./public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
