/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hackingGreen: "#00FF00",
        black: "#000000",
      },
      fontFamily: {
        Outfit: ['"Outfit"'],
        roboto: "Roboto",
        cursive: "Cursive",
      },
      backgroundImage: {
        photo: "url('/public/images/photo.png')",
        coding1: "url('/public/images/coding (2).jpg')",
      },
    },
  },
  plugins: [],
};
