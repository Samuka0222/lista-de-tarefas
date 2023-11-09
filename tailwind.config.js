/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        roxo: {
          light: '#D4ADFC',
          suave: '#793FDF',
          padrao: '#9400FF',
          dark: '#27005D',
          bg: '#12002b'
        }
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

