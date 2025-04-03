import { PageConfig } from "../types";
import { setLocalPage } from "./local-storage";
import { useCallback, useEffect, useRef, useState } from "react";

export function useNextOnlinePage(clientId: string): {
  page: PageConfig | undefined;
  pageIndex: number;
  isConnected: boolean;
  reconnect: () => void;
} {
  // Storing in refs to reduce re-renders
  const pageIndex = useRef(0);
  const socket = useRef<WebSocket>(undefined);

  const [nextPage, setNextPage] = useState<PageConfig>();
  const [isConnected, setIsConnected] = useState(false);

  const openWebsocket = useCallback(() => {
    const ws = new WebSocket("ws://127.0.0.1:1880/ws/data");
    socket.current = ws;

    ws.onmessage = (e) => setNextPage(JSON.parse(e.data));

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

    return () => socket.current?.close();
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
