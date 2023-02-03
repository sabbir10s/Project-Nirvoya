module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0970CD",

          "secondary": "#0198E9",

          "accent": "#FFEDD5",

          "neutral": "#333333",

          "base-100": "#FAFAFA",

          "base-200": "#E9E9E9",

          "info": "#3ABFF8",

          "warning": "#FFB340",

          "error": "#FF5D5D",
        },
        fontFamily: {
          body: ["Poppins"]
        },
      },
    ],
  },
  plugins: [require("daisyui")],

};