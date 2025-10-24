/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        richBlack: '#07111D',
        arsenic: '#39444D',
        davyGray: '#5D5D5D',
        chineseWhite: '#E5E5DF',
        tigerEye: '#DB9941',
        chineseRed: '#AE2C11',
        lightHover: '#E5E5E5',
        darkHover: '#39444D',
        darkTheme: '#07111D',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "sans-serif"]
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'lightBlack': '2px 2px 0 #000',
        'white': '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}
