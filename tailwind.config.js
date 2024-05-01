/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        'title-color': '#7f1d1d',
        'p-color': '#e58b82',
        'bg-color': '#fff7ed',
        'nav-color': '#450a0a',
        'burguer': '#e58b82',
      },
    },
 },
  plugins: [],
}
