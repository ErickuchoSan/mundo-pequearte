/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lavender: '#B08EC2',
          coral: '#E8896A',
          teal: '#7ECEC4',
          purple: '#9B7BB8',
          yellow: '#F5C842',
          peach: '#F2C4A8',
          white: '#F7F4FF',
          dark: '#7B5EA7',
        }
      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
