/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nexa: ["'nexa'"],
      },
      backgroundImage: {
        'intro': "url('/public/img/intro-img.jpg')",
        'residential': "url('/public/img/residential2.png')",
        'commercial': "url('/public/img/commercial2.png')",
        'highend': "url('/public/img/high-end2.png')",
        'custom': "url('/public/img/custom2.png')",

      },
      screens: {
        'mobile': '400px',
        'notebook': '1024px',
        'desktop': '1240px',
        'big': '1366px',
        'full': '1920px',
      },
    },
  },
  plugins: [],
}