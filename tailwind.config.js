/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        primary: "#712bda",
        secondary: "#a45deb",
        text: "#64748b",
        dark: "#334155",
        gray: "#e2e8f0",
        warning: "#f5b014",
        success: "#10b981",
        modal: "#1c1c2de6"
      },
      boxShadow: {
        main: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"
      }
    },
  },
  plugins: [],
}

