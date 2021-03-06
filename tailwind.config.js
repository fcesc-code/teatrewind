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
      fontSize: {
        xs: ".85rem",
        sm: ".95rem",
        base: "1rem",
        m: "1.2rem",
        l: "1.7rem",
        xl: "2.3rem",
        xxl: "3.9rem",
        card: "1.9rem",
        h1: "clamp(3.9rem, 2.3rem + 2.8vw, 5.5rem)",
        h2: "clamp(2.3rem, 1.7rem + 2.2vw, 3.9rem)",
        h3: "clamp(1.7rem, 1.2rem + 1.8vw, 2.3rem)",
        h4: "clamp(1.2rem, 1rem + 1.2vw, 1.7rem)",
        h5: "clamp(1rem, .95rem + 1vw, 1.2rem + .25rem)",
        h6: "clamp(1rem, .95rem + 1vw, 1.2rem + .25rem)",
        general: "clamp(1rem, .95rem + 1vw, 1.1rem + .25rem)",
        reduce: ".85em",
        increase: "1.2em",
        root: "14px",
      },
      spacing: {
        vh90: "90vh",
      },
      lineHeight: {
        12: "3rem",
        14: "3.5rem",
      },
      zIndex: { 2: "2" },
      borderRadius: {
        none: "0",
        2: ".25rem",
        4: "1rem",
        6: "1.5rem",
        50: "50%",
        "10px": "10px",
        full: "9999px",
      },
      width: {
        minQuote: "min(80%,30rem)",
        "15%": "15%",
        container_s: "min(100vw,75rem)",
        container_md: "min(85vw,90rem)",
        container_2xl: "min(76vw,110rem)",
        container_huge: "min(62vw,160rem)",
        "80%": "80%",
        card: "min(60vh,25rem)",
      },
      height: {
        card: "min(calc(60vh + 5rem),30rem)",
      },
      maxHeight: {
        card: "min(60vh,25rem)",
      },
      screens: {
        huge: "3859px",
      },
      margin: {
        icons: "calc(3rem*.35)",
        icons_left: "calc(3rem*1.5)",
      },
      grayscale: {
        1: "100%",
      },
    },
  },
  plugins: [],
};
