import { GlobalStyles } from "@mui/material";

const getFontFaces = () => {
  const location = `src/theme/fonts`;

  return [
    {
      "@font-face": {
        fontWeight: "bold",
        fontFamily: "Futura",
        fontStyle: "normal",
        fontDisplay: "swap",
        unicodeRange: "U+000-5FF",
        src: `local('Futura-Bold'), url('${location}/Futura-Bold.woff2') format('woff2'), url('${location}/Futura-Bold.woff') format('woff');`,
      },
    },
    {
      "@font-face": {
        fontWeight: "bold",
        fontFamily: "thegymgroupsans-Bold",
        fontStyle: "normal",
        fontDisplay: "swap",
        unicodeRange: "U+000-5FF",
        src: `local('thegymgroupsans-Bold'), url('${location}/thegymgroupsans-Bold.woff2') format('woff2'), url('${location}/thegymgroupsans-Bold.woff') format('woff');`,
      },
    },
    {
      "@font-face": {
        fontWeight: "500",
        fontFamily: "thegymgroupsans-BoldItalic",
        fontStyle: "italic",
        fontDisplay: "swap",
        unicodeRange: "U+000-5FF",
        src: `local('thegymgroupsans-BoldItalic'), url('${location}/thegymgroupsans-BoldItalic.woff2') format('woff2'), url('${location}/thegymgroupsans-BoldItalic.woff') format('woff');`,
      },
    },
    {
      "@font-face": {
        fontWeight: "500",
        fontFamily: "thegymgroupsans-Headline",
        fontStyle: "normal",
        fontDisplay: "swap",
        unicodeRange: "U+000-5FF",
        src: `local('thegymgroupsans-Headline'), url('${location}/thegymgroupsans-Headline.woff2') format('woff2'), url('${location}/thegymgroupsans-Headline.woff') format('woff');`,
      },
    },
  ];
};

export const Fonts: React.FC = () => {
  const fontFaces = getFontFaces();
  return <GlobalStyles styles={{ fontFaces }} />;
};
