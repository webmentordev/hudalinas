/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        colors: {
          "light-blue": "#6A9DBD",
          "light-orange": "#E5753E",
          "light-purple": "#7069BD",
          "dark": "#0F0F10",
          "dark-100": "#252527"
        }
      },
    },
    plugins: [],
  }