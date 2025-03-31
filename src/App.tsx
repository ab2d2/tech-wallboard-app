import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { Fonts } from "./theme/fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pages from "./components/Pages/Pages";
import { usePageWebsocket } from "./data/usePages";

const queryClient = new QueryClient();

function App() {
  usePageWebsocket();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Fonts />
        <Pages />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
