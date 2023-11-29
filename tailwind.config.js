/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx}",
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
        neon: {
          primaria: '#9400FF',
          secundaria: '#793FDF',
          light: '#D4ADFC',
          dark: '#27005D',
          complementar: '#00D7FF',
          complementarLight: '#72FFFF',
          complementarDark: '#0264b0',
          bg: '#12002b',
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
})

