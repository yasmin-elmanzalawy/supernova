export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // 👈 Inter is now default
        robotoone: ['"Roboto One"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playwrite: ['"Playwrite DK Loopet"', 'cursive'],
        russo: ['"Russo One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
