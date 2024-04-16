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
        text: {
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
