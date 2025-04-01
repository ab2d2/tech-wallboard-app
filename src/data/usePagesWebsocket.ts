import { PageConfig } from "../types";
import useWebSocket from "react-use-websocket";
import { useCallback, useEffect } from "react";
import { setPages, updatePages } from "./page-store";

type WebsocketResponse = {
  data: PageConfig[];
  overwrite?: boolean;
};

export function usePageWebsocket() {
  const { lastJsonMessage: wsResponse, sendMessage } =
    useWebSocket<WebsocketResponse>(
      "ws://127.0.0.1:1880/ws/data",
      {
        onError: (error) => console.error(error),
        shouldReconnect: () => true,
        reconnectAttempts: 10,
        reconnectInterval: 1000,
      },
      true
    );

  const requestPages = useCallback(
    () => sendMessage(new Date().toLocaleString()),
    [sendMessage]
  );

  useEffect(() => {
    requestPages();
  }, [requestPages]);

  if (wsResponse && wsResponse.data) {
    if (wsResponse.overwrite) {
      setPages(wsResponse.data);
    } else {
      updatePages(wsResponse.data);
    }
  }
}
