/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1920px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        hackingGreen: "#111827",
        offwhite: "#F9FAFB",
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

      boxShadow: {
        sameshadow: "2px 2px 50px 10px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
