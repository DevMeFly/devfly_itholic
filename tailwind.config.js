/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  //Add the important option, using the id of your app wrapper. For example, #__next for Next.js and "#root" for CRA
  important: '#__next',
  theme: {
    extend: {},
  },
  plugins: [],

  //Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead
  corePlugins: {
    preflight: false,
  },
}
