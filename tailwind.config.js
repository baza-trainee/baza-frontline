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
      backgroundImage: {
        'custom-footer-gradient':
          'linear-gradient(180deg, rgba(252, 234, 54, 0.21) 22.9%, rgba(75, 86, 237, 0.28) 100%)',
      },
    },
  },
  plugins: [],
};
