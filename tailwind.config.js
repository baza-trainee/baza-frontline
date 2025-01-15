/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        inter: ['"Inter", "sans-serif'],
      },
      screens: {
        tablet: '1024px',
        mobile: '450px',
      },
    },
  },
  plugins: [],
};
