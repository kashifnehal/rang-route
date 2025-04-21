export const theme = {
  colors: {
    primary: {
      ivory: "#FFFFF0",
      sandalwood: "#E8D0AA",
      terracotta: "#E2725B",
      indigo: "#284B63",
      jade: "#00A86B",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#4A4A4A",
      light: "#FFFFFF",
    },
    background: {
      primary: "#FFFFFF",
      secondary: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: {
      heading: "Playfair Display, serif",
      body: "Inter, sans-serif",
    },
    fontSize: {
      h1: "3.5rem",
      h2: "2.5rem",
      h3: "2rem",
      h4: "1.5rem",
      body: "1rem",
      small: "0.875rem",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1280px",
  },
};

export type Theme = typeof theme;
