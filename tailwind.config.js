/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        navColor: '#244886',
        backgroundColor: '#1d183b',
        background: '#e0e0e0',
        yellowColor: '#ffcc00',
        greenColor: '#256525',
        redColor: '#f70000',
        sideNav: '#1b2435',
        color: '#141529'
      },
    },
  },
  plugins: [],
}