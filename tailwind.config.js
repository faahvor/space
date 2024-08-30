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
        'destinationDesktop':'url("../src/assets/images/destination/desDesk.jpg")',
        'destinationTablet':'url("../src/assets/images/destination/desTab.jpg")',
        'destinationMobile':'url("../src/assets/images/destination/desMob.jpg")',
        'crewDesktop':'url("../src/assets/images/image/background-crew-desktop.jpg")',
        'crewTablet':'url("../src/assets/images/image/background-crew-tablet.jpg")',
        'crewMobile':'url("../src/assets/images/image/background-crew-mobile.jpg")',
        'techDesktop':'url("../src/assets/images/tecknology/background-technology-desktop.jpg")',
        'techTablet':'url("../src/assets/images/tecknology/background-technology-tablet.jpg")',
        'techMobile':'url("../src/assets/images/tecknology/background-technology-mobile.jpg")'
      }
    },
  },
  plugins: [],
}