module.exports = {
  content: [],
  purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.sass"],
  theme: {
    extend: {
      colors: {
        txt_title: "#ffffea",
        txt_subtitle: "#bc0600",
        txt_contrast: "#ff5e5b",
        txt_highlighted: "#daa520",
        txt_main: "#eee",
        txt_white: "#fff",
        txt_lightbluish: "#c7d7fa",
        txt_darkbluish: "#061424",
        txt_black: "#0e0e05",
        ivory: "#ffffea",
        lightblue: "#9aa6b5",
        metalgray: "#384753",
        redgray: "#6a5e5e",
        dark: "#090512",
      },
      fontFamily: {
        fsans: [
          "Open Sans",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        fserif: ["Noto Serif", "Georgia", "Times New Roman", "serif"],
        fhand: ["Architects Daughter", "Segoe UI"],
      },
      spacing: {
        vh90: "90vh",
      },
    },
  },
  plugins: [],
};
