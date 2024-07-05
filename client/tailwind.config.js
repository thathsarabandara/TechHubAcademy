/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'saira-stencil': ['"Saira Stencil One"', 'sans-serif'],
        'sen':['Sen'],
      },
    },
  },
  plugins: [],
}