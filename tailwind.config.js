module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        superGlow: "superGlow 6s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "rotate(-1deg)",
          },
          "50%": {
            transform: "rotate(1deg)",
          },
          "100%": {
            transform: "rotate(-1deg)",
          },
        },
        superGlow: {
          "0%": {
            transform: "scale(120%)",
          },
          "50%": {
            transform: "scale(100%)",
          },
          "100%": {
            transform: "scale(120%)",
          },
        },
      },
    },
  },
  plugins: [],
};
