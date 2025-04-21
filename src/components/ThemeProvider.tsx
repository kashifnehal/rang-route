"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

const theme = {
  colors: {
    primary: {
      ivory: "#FFFFF0",
      sandalwood: "#E8D0AA",
      terracotta: "#E2725B",
      indigo: "#284B63",
      jade: "#00A86B",
    },
    text: {
      primary: "#2C2C2C",
      secondary: "#666666",
      light: "#FFFFFF",
    },
    background: {
      primary: "#F7F3EE",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: {
      heading: "var(--font-playfair)",
      body: "var(--font-inter)",
    },
    fontSize: {
      h1: "4.5rem",
      h2: "3rem",
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
} as const;

export type Theme = typeof theme;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
