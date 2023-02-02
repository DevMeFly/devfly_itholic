/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  //Add the important option, using the id of your app wrapper. For example, #__next for Next.js and "#root" for CRA
  important: '#__next',
  theme: {
    extend: {
      colors: {
        primary: '#162359',
        text: '#E1EFFF',
        secondary: '#1F1F39',
        purple: '#503391',
        lpurple: '#262A31',
        white: '#FFFFFF',
        black: '#000000',
        yellow: '#FFD054',
      },
    },
  },
  plugins: [],

  //Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead
  corePlugins: {
    preflight: false,
  },
}
