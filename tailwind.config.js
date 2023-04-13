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
      },
    },
  },
  plugins: [],
}