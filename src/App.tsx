import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { Fonts } from "./theme/fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pages from "./components/Pages/Pages";
import { usePages } from "./data/usePages";
import { Loading } from "./components/Loading/Loading";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Fonts />
        <Main />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

function Main() {
  const { pages, isLoading } = usePages();

  if (pages) {
    return <Pages pages={pages} />;
  }
  if (isLoading) {
    return <Loading />;
  }
}
