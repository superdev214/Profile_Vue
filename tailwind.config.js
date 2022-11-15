/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,vue,js}"],
  theme: {

    extend: {
      screen:{
        '2xl' : { 'col' : '(min-width:1400px'},
      },
      colors:{
        "head-color" : "$bg-classroom"
      }
    },
  },
  plugins: [],
}
