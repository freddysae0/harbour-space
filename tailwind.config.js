/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#685DC5",
        secondary: "#4fa16c",
        box: "#FBFBFB",
        border: "#DADADA",
        text: {
          400: "#b3b3b3",
          300: "#959595",
          200: "#6A6A6A",
          100: "#535353",
        },
      },
      fontFamily: {
        apercu: ["Apercu Pro"],
      },
    },
  },
  plugins: [],
};
