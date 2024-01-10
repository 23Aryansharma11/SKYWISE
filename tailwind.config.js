/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'COLD' : "url('./src/assets/Cold.jpg')",
      'HOT' : "url('./src/assets/HOT.jpg')"
    },
    extend: {},
  },
  plugins: [],
}

