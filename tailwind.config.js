/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {
      'lobster': "'Lobster Two', sans-serif",
      'poppins': "'Poppins', sans-serif"
    },
    colors: {
      "gra-start": '#FEBF10',
      "gra-middle": '#74CCCF',
      'gra-end': '#EF4823'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: "class"
}

