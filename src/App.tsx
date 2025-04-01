import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { Fonts } from "./theme/fonts";
import Pages from "./components/Pages/Pages";
import { usePageWebsocket } from "./data/usePagesWebsocket";

function App() {
  usePageWebsocket();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Fonts />
      <Pages />
    </ThemeProvider>
  );
}

export default App;
