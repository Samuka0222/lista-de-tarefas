/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '7/20': '35%'
      },
      spacing: {
        '5.5': '1.35rem'
      },
      colors: {
        roxo: {
          light: '#D4ADFC',
          suave: '#793FDF',
          padrao: '#9400FF',
          dark: '#27005D',
          bg: '#12002b'
        },
        azul: {
          light: '#72FFFF',
          suave: '#00D7FF',
          padrao: '#0096FF',
          dark: '#5800FF' 
        }
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

