import { PageConfig } from "../types";
import { setLocalPage } from "./local-storage";
import { useCallback, useEffect, useRef, useState } from "react";

export function useNextOnlinePage(clientId: string): {
  page: PageConfig | undefined;
  pageIndex: number;
  isConnected: boolean;
  reconnect: () => void;
} {
  const pageIndex = useRef(0); // Storing in a ref to reduce re-renders
  const [nextPage, setNextPage] = useState<PageConfig>();
  const [isConnected, setIsConnected] = useState(false);

  const openWebsocket = useCallback(() => {
    const ws = new WebSocket("ws://127.0.0.1:1880/ws/data");

    ws.onmessage = (e) => {
      console.log("message");
      setNextPage(JSON.parse(e.data));
    };
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          clientId: clientId,
          timeStamp: new Date().getSeconds(),
        })
      );
      setIsConnected(true);
    };
    ws.onclose = () => setIsConnected(false);
  }, [clientId]);

  useEffect(() => {
    openWebsocket();
  }, [openWebsocket]);

  useEffect(() => {
    if (nextPage) {
      const nextPageIndex = setLocalPage(nextPage);
      if (nextPageIndex) pageIndex.current = nextPageIndex;
    }
  }, [nextPage]);

  return {
    page: nextPage,
    pageIndex: pageIndex.current,
    isConnected,
    reconnect: openWebsocket,
  };
}
