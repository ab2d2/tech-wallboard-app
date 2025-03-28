import { PageConfig } from "../types";
import useWebSocket from "react-use-websocket";
import { setLocalPage } from "./local-storage";

export function usePage(initialPage: PageConfig) {
  const { lastJsonMessage } = useWebSocket<PageConfig>(
    initialPage.webSocketUrl
      ? `ws://127.0.0.1:1880/${initialPage.webSocketUrl}`
      : "",
    {
      onError: (error) => console.error(error),
    }
  );

  if (lastJsonMessage) {
    setLocalPage(lastJsonMessage);
    return lastJsonMessage;
  }

  return initialPage;
}
