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
import { useCallback, useState } from "react";

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

enum Mode {
  online = "Online",
  offline = "Offline",
}

function Main({ clientId }: { clientId: string }) {
  const [mode, setMode] = useState<Mode>(Mode.offline);

  const {
    page: onlinePage,
    isConnected,
    pageIndex,
  } = useNextOnlinePage(clientId);

  const checkConnection = useCallback(() => {
    setMode(isConnected ? Mode.online : Mode.offline);
  }, [isConnected]);

  const offlinePage = useNextOfflinePage({
    initialPageIndex: pageIndex,
    active: !isConnected,
    onTick: checkConnection,
  });

  const page = mode === Mode.online ? onlinePage : offlinePage;

  if (!page) {
    return <Loading />;
  }

  return (
    <Layout currentPage={page} key={mode}>
      <PageTransition page={page} />
    </Layout>
  );
}
