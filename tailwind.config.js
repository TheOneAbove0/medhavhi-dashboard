/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#2BB8D6",
        RedPantone: "#E63946",
        Jet:"#30323D",
        GreyBackground:"#9A9A9A",
        DavyGray:" #565659",
       SpanishGrey:' #9A9A9A',


      },
      fontFamily: {
        'Urbanist': ['Urbanist', 'sans-serif'],
        'Figtree': ['Figtree', 'sans-serif'],
        
      }
    },
  },
  plugins: [],
}