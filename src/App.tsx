import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { Page } from "./components/Page/page";

import { useStore } from "@tanstack/react-store";
import { store } from "./store/store";
import { timers } from "./constants/timers";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ChartDataLabels);

function App() {
  // const [config, setConfig] = useState<ScreensConfigData>(
  //   screens_config_data_initial_data_backup
  // );

  // API call to get config data - needs to be handled properly
  // need caching etc to avoid multiple calls
  // need to handle error scenarios
  // need to handle resorting to default data if API call fails
  // use SWR or react-query for this
  // useEffect(() => {
  //   fetch("../../public/config.json")
  //     .then((response) => response.json())
  //     .then((data) => setConfig(data))
  //     .catch((error) => console.error("Error fetching config:", error));
  // }, []);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const storeObj = useStore(store, (state) => state);
  console.log("storeObj from useStore in App.tsx ", storeObj);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPageIndex(
        (prevIndex) => (prevIndex + 1) % storeObj.config.length || 0
      );
    }, timers.secondsPerPage * 1000);

    return () => clearInterval(interval);
  }, [currentPageIndex, storeObj.config.length]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout currentPage={storeObj.config[currentPageIndex]}>
        <Page currentPage={storeObj.config[currentPageIndex]} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
