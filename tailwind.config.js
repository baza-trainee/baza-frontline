/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      screens: {
        xs: '320px',
        xs2: '450px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1536px',
      },
      container: {
        padding: {
          DEFAULT: '16px',
          xs: '16px',
          md: '40px',
          xl: '80px',
        },
      },
      padding: {
        container: {
          xs: '34px',
          md: '40px',
          xl: '60px',
        },
      },
      backgroundImage: {
        'custom-footer-gradient':
          'linear-gradient(180deg, rgba(252, 234, 54, 0.21) 22.9%, rgba(75, 86, 237, 0.28) 100%)',
      },
      //   keyframes: {
      //     marquee: {
      //       '0%': { transform: 'translateX(0)' },
      //       '100%': { transform: 'translateX(-50%)' },
      //     },
      //   },
      //   animation: {
      //     marquee: 'marquee 20s linear infinite',
      //   },
    },
  },
  plugins: [],
};
