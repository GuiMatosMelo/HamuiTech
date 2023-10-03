/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'principal': '#1c74ba'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
  darkMode: "class",
}

