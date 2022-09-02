/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#ff385c',
      },
      screens : {
        milg: '900px',
        mism :'500px'
      }
    },
  },
  plugins: [],
}