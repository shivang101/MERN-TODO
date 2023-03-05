/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        fontFamily: {
          VesperLibre: ['Vesper Libre', 'serif'],
          hello: ['Tilt Warp', 'cursive'],
          ab:['Loto','sans-serif']
       },
      
    },
  },
  plugins: [],
};
