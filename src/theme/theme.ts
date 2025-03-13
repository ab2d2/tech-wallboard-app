import { createTheme, PaletteMode, PaletteOptions } from "@mui/material";

export const pallete = {
  primary: {
    main: "#2E94FF",
  },
  secondary: {
    main: "#0E0066",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
  mode: "light" as PaletteMode,
} satisfies PaletteOptions;

export const theme = createTheme({
  palette: pallete,
  typography: {
    fontFamily: "thegymgroupsans-Bold",
    h1: {
      color:
        pallete.mode === "light" ? pallete.common.black : pallete.common.white,
      fontFamily: "thegymgroupsans-Headline",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      marginBottom: "1rem",
    },
    h2: {
      color:
        pallete.mode === "light" ? pallete.common.black : pallete.common.white,
      fontFamily: "thegymgroupsans-Headline",
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.3,
      marginBottom: "0.75rem",
    },
    h3: {
      fontFamily: "thegymgroupsans-Headline",
      color:
        pallete.mode === "light" ? pallete.common.black : pallete.common.white,
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: 1.4,
      marginBottom: "0.5rem",
    },
    h4: {
      fontFamily: "thegymgroupsans-Headline",
      color:
        pallete.mode === "light" ? pallete.common.black : pallete.common.white,
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: 1.4,
      marginBottom: "0.25rem",
    },
  },
  components: {},
});
