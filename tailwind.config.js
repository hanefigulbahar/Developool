/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homeBg': "url('./image/homeBg.jpeg')",
        'logo':"url('./image/homeBg.jpeg')",
      },
    },
    fontFamily: {
      body: ["EB Garamond", "serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'backround': '#e9e8ee',
      'primaryBlue': '#101b39',
      'secondaryBlue': '#333136',
      'primaryPink': '#6f6d72',
      'secondaryPink': '#b4b1b8',
      'swiftIcon': '#EA580C',
      'swiftUI':'#0369A1',
      'reactIcon': '#22D3EE',
      'jsIcon': '#FACC15',
      'dotNetIcon': '#60A5FA',
      'white': '#ffffff',
      'blue': '#1d4ed8',
      'instagramIcon': '#fb3958',
      'mailIcon': '#4B8673',


    },
  },
  plugins: [],
}
