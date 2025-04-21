import "styled-components";
import { theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    typography: typeof theme.typography;
    spacing: typeof theme.spacing;
    breakpoints: typeof theme.breakpoints;
  }
}
