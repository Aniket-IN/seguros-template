const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require("tailwindcss/plugin");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'neutral-2': '#212121',
        // 'brand-accent': '#F2F8E9',
        // 'neutral': '#B5B5C3',
        // 'secondary': '#727477',
        // 'accent': '#f9faff',
        // 'secondary-accent': '#f4f6fa',
        // 'danger': '#f1416c',
      },
    },
  },
  plugins: [],
}
