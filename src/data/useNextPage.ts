import useWebSocket from "react-use-websocket";
import { PageConfig } from "../types";

export function useNextPage() {
  const { lastJsonMessage: nextPage } = useWebSocket<PageConfig>(
    "ws://127.0.0.1:1880/ws/data",
    {
      onError: (e) => console.error(e),
      reconnectInterval: 2000,
      shouldReconnect: () => true,
    }
  );

  return nextPage;
}
