import { ReadyState } from "react-use-websocket";
import useWebSocket from "react-use-websocket";
import { PageConfig } from "../types";
import { setLocalPage } from "./local-storage";
import { useCallback, useEffect, useRef } from "react";
import { timers } from "../constants/timers";

export function useNextOnlinePage(clientId: string): {
  page: PageConfig;
  pageIndex: number;
  isConnected: boolean;
} {
  const pageIndex = useRef(0); // Storing in a ref to reduce re-renders
  const {
    lastJsonMessage: nextPage,
    readyState,
    sendJsonMessage,
  } = useWebSocket<PageConfig>("ws://127.0.0.1:1880/ws/data", {
    onError: (e) => console.error(e),
    shouldReconnect: () => true,
    reconnectInterval: timers.secondsPerPage * 1500,
  });

  const requestPage = useCallback(() => {
    sendJsonMessage({
      clientId: clientId,
      timeStamp: new Date().getSeconds(),
    });
  }, [sendJsonMessage, clientId]);

  useEffect(() => {
    requestPage();
  }, [requestPage]);

  useEffect(() => {
    if (nextPage) {
      const nextPageIndex = setLocalPage(nextPage);
      if (nextPageIndex) pageIndex.current = nextPageIndex;
    }
  }, [nextPage]);

  return {
    page: nextPage,
    pageIndex: pageIndex.current,
    isConnected: readyState === ReadyState.OPEN,
  };
}
