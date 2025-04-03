import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { Fonts } from "./theme/fonts";
import PageTransition from "./components/Pages/Pages";
import { Layout } from "./components/Layout/Layout";
import { useNextOnlinePage } from "./data/useNextPage";
import { useNextOfflinePage } from "./data/useNextOfflinePage";
import { v1 as uuidv1 } from "uuid";
import { Loading } from "./components/Loading/Loading";

function App() {
  const clientId = uuidv1();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Fonts />
      <Main clientId={clientId} />
    </ThemeProvider>
  );
}

export default App;

function Main({ clientId }: { clientId: string }) {
  const {
    page: onlinePage,
    isConnected,
    pageIndex,
  } = useNextOnlinePage(clientId);
  // TODO: only switch to online page after counter finishes
  const offlinePage = useNextOfflinePage(pageIndex, !isConnected);

  const page = isConnected ? onlinePage : offlinePage;

  if (!page) {
    return <Loading />;
  }

  return (
    <Layout currentPage={page} key={`connected:${isConnected}`}>
      <PageTransition page={page} />
    </Layout>
  );
}
