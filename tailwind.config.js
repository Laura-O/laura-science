module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'charcoal': '#264653',
        'persian-green': '#2A9D8F',
        'mayze-crayola': '#E9C46A',
        'sandy-brown': '#F4A261',
        'burnt-sienna': '#E76F51'
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
