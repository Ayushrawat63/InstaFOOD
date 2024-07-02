/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-black':'rgba(0,0,0,0.6)',
      },
      backgroundImage:{
        'light-pattern':"linear-gradient(to bottom , rgba(255,0,0,0), rgba(0,0,0,1))",
      }
    },
  },
  plugins: [],
}