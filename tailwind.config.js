/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["'Lato'"],
      },
      backgroundImage: {
        'intro': "url('/public/img/intro-img.jpg')",
        'residential': "url('/public/img/residential.jpg')",
        'commercial': "url('/public/img/commercial.jpg')",
        'highend': "url('/public/img/high-end.jpg')",
        'custom': "url('/public/img/custom.jpg')",

      },
      screens: {
        'mobile': '400px',
        'notebook': '1024px',
        'desktop': '1240px',
        'bigdesktop': '1366px',
        'full': '1920px',
      },
    },
  },
  plugins: [],
}