/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#21c361",
          secondary: "#03001C",
          accent: "#ffffff",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
