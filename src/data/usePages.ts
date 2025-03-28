import { getLocalPages, setLocalPages } from "./local-storage";
import { PageConfig } from "../types";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useCallback, useEffect } from "react";

export function usePages(): {
  pages: PageConfig[] | undefined;
  isLoading: boolean;
} {
  const { lastJsonMessage, sendMessage, readyState } = useWebSocket<
    PageConfig[]
  >(
    "ws://127.0.0.1:1880/ws/config",
    {
      onError: (error) => console.error(error),
      shouldReconnect: () => true,
      reconnectAttempts: 10,
      reconnectInterval: 1000,
    },
    true
  );

  const requestPages = useCallback(() => sendMessage(""), [sendMessage]);

  useEffect(() => {
    requestPages();
  }, [requestPages]);

  let data: PageConfig[] | undefined = lastJsonMessage;

  if (data) {
    setLocalPages(data);
  } else {
    data = getLocalPages();
  }

  return {
    pages: data,
    isLoading: readyState === ReadyState.CONNECTING,
  };
}
