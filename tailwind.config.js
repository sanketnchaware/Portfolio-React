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
        roboto: "Roboto",
        cursive: "Cursive",
      },
    },
  },
  plugins: [],
};
