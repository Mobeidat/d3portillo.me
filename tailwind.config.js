const dark = { full: "black" }
;[...Array(19)].map((_, i) => {
  const amount = (0.05 + i * 0.05).toFixed(2)
  dark[amount.split(".")[1]] = `rgba(0,0,0,${amount})`
})
module.exports = {
  purge: ["./pages/**/*.vue", "./pages/index.vue"],
  theme: {
    fontFamily: {
      poppins: ["'Poppins', sans-serif"],
      monoton: ["'Monoton', cursive"],
      sans: [
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      ],
    },
    colors: {
      yellow: "#E0D501",
      cyan: "#00E0E3",
      white: "white",
      black: "black",
      dark,
      transparent: "rgba(0,0,0,0)",
    },
    extend: {
      zIndex: {
        "-1": -1,
      },
      fontSize: {
        xxl: "10rem",
        "7xl": "5rem",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover"],
    borderColor: ["responsive", "hover"],
  },
  plugins: [],
}
