import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { Fonts } from "./theme/fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pages from "./components/Pages/Pages";
import { usePages } from "./data/usePages";
import { useStore } from "@tanstack/react-store";
import { PageStore, pageStore } from "./data/store";

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
  const { data, error, isPending } = usePages();
  const store = useStore(pageStore);

  // If the api is successful, render the pages and update the store
  if (data) {
    pageStore.setState(() => {
      const pageMap = data.reduce((acc: PageStore, page) => {
        acc[page.id] = page;
        return acc;
      }, {});
      return pageMap;
    });
    return <Pages pages={data} />;
  }

  // If the request is loading or unsuccessful and we have data in the store, render the stored pages
  if (store) {
    const pagesArray = Object.values(store);
    return <Pages pages={pagesArray} />;
  }

  if (isPending) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error {error.message}</div>;
  }
}
