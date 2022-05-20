module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisiyui: {
    themes: [
      {
        mytheme: {
          primary: "#0070f3",
          secondary: "#f5f5f5",
          accent: "#37cbbe",
          neutral: "#3d4451",
          "base-100": "#f6d860",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
