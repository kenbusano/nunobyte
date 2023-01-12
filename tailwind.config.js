/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primetime': ['Primetime', 'sans-serif'], //local font
      },
      colors: {
        'default': '#830B53',
        'aroma': '#331352',
        'art': '#100F45',
      },
    },
    screens: {
      sm: '320px',
      md: '640px',
      lg: '1020px',
      xl: '1280px',
    },
  },
  plugins: [],
};
