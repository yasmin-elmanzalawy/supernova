// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto One"', 'sans-serif'], // 👈 now Roboto One is default
        robotoone: ['"Roboto One"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playwrite: ['"Playwrite DK Loopet"', 'cursive'],
        russo: ['"Russo One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
