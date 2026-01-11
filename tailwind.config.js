/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        'nawasena-brown': '#4D2F25',
        'nawasena-lime': '#B8D12A',
        'nawasena-cream': '#FFF8E7',
      },
    },
  },
  plugins: [],
}
