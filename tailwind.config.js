/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx,js,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [  require('flowbite/plugin') ],
}
