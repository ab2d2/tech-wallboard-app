import { createTheme } from "@mui/material";
import TheGymGroupSansBold from "./fonts/thegymgroupsans-Bold.ttf";
import TheGymGroupSansHeadline from "./fonts/thegymgroupsans-Headline.ttf";

export const pallete = {
  primary: {
    main: "#2E94FF",
  },
  secondary: {
    main: "#0E0066",
  },
};

export const theme = createTheme({
  palette: pallete,
  typography: {
    fontFamily: "thegymgroupsans-Bold",
    h1: {
      fontFamily: "thegymgroupsans-Headline",
    },
    h2: {
      fontFamily: "thegymgroupsans-Headline",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'thegymgroupsans-Bold';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('thegymgroupsans-Bold'), url(${TheGymGroupSansBold}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },
        @font-face {
          font-family: 'thegymgroupsans-Headline';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('thegymgroupsans-Headline'), url(${TheGymGroupSansHeadline}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
