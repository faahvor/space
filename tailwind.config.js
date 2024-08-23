/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
       
       "md":'768px',
       "lg":'1300px',
    },
    extend: {
      fontFamily:{
        'barlow':['Barlow','sans-serif'],
        'con':['Barlow Condensed','sans-serif'],
        'belle':['Bellefair','sans-serif']
      },
      backgroundImage:{
        'desktop':'url("../src/assets/images/Home/bg1.jpg")',
        'tablet':'url("../src/assets/images/Home/tab.jpg")',
        'mobile':'url("../src/assets/images/Home/mob.jpg")',
        'destination-desktop':'url("../src/assets/images/destination/desDes.jpg")',
        'destination-tablet':'url("../src/assets/images/destination/desTab.jpg")',
        'destination-mobile':'url("../src/assets/images/destination/desMob.jpg")'
      }
    },
  },
  plugins: [],
}