/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-1": "#161F6D",
        "primary-2": "#00ABE1",
        "primary-3": "#04ADE6",
        "primary-4": "#E9EDF3",
      },
      screens:{
        'desktop-lg': '1900px',
      },
    },
    fontFamily: {
      display: ["Poppins"],
    },
   
  },
  plugins: [],
}

