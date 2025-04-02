import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { Fonts } from "./theme/fonts";
import PageTransition from "./components/Pages/Pages";
import { Layout } from "./components/Layout/Layout";
import { useNextPage } from "./data/useNextPage";

function App() {
  const nextPage = useNextPage();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Fonts />
      <Layout currentPage={nextPage}>
        <PageTransition page={nextPage} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
