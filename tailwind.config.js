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
        'primary': '#1555ED',
        'success': '#00A74F',
        'warning': '#f19938',
        'danger': '#fb4922',

        'accent': '#F8F8F8',

        'neutral': '#F1F2F3',
        'neutral-2': '#212121',

        'secondary': '#636363',
        'secondary-2': '#F0EFF4',
        'secondary-3': '#8E8E91',
        'secondary-4': '#242424',



        // 'brand-accent': '#F2F8E9',
        // 'secondary-accent': '#f4f6fa',
        // 'danger': '#f1416c',
      },
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("sidebar-expanded", ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        );
      });
    }),
  ],
}
