import { PageConfig } from "../types";
import useWebSocket from "react-use-websocket";
import { useState } from "react";
import { setLocalPage } from "./local-storage";

export function usePage(initialPage: PageConfig) {
  const [page, setPage] = useState(initialPage);

  useWebSocket(initialPage.webSocketUrl ?? "", {
    onMessage: (event) => {
      setPage(event.data);
      setLocalPage(event.data);
    },
    onError: (error) => console.error(error),
  });

  return page;
}
