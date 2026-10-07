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
        paper: '#FBF9F5',
        ink: '#18181B',
        accent: '#E27355',
        richBlack: '#07111D',
        arsenic: '#39444D',
        chineseWhite: '#E5E5DF',
        darkHover: '#39444D',
        darkTheme: '#07111D',
      },
      fontFamily: {
        Ovo: ["Ovo", "sans-serif"]
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}
