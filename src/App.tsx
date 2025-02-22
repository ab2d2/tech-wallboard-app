import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { useEffect, useState } from "react";
import { Page } from "./components/Pages/page";
import {
  screens_config_data_initial_data_backup,
  ScreensConfigData,
} from "../public/screens_config_data";
import { useStore } from "@tanstack/react-store";
import { store } from "./store/store";
import { timers } from "./constants/timers";

function App() {
  // const [config, setConfig] = useState<ScreensConfigData>(
  //   screens_config_data_initial_data_backup
  // );
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const storeObj = useStore(store, (state) => state);
  console.log("storeObj from useStore in App.tsx ", storeObj);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPageIndex(
        (prevIndex) => (prevIndex + 1) % storeObj.config.Categories.length || 0
      );
    }, timers.secondsPerPage * 1000);

    return () => clearInterval(interval);
  }, [currentPageIndex, storeObj.config.Categories.length]);

  console.log(
    "current page in App.tsx is ",
    storeObj.config.Categories[currentPageIndex]
  );
  return (
    <>
      <Layout currentPageIndex={currentPageIndex}>
        <h2>{storeObj.config.Categories[currentPageIndex].name}</h2>
        <Page currentPage={storeObj.config.Categories[currentPageIndex]} />
      </Layout>
    </>
  );
}

export default App;
