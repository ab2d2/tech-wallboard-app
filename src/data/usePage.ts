import { PageConfig } from "../types";
import useWebSocket from "react-use-websocket";
import { useState } from "react";

export function usePage(initialPage: PageConfig) {
  const [page, setPage] = useState(initialPage);

  useWebSocket(initialPage.webSocketUrl ?? "", {
    onMessage: (event) => {
      // TODO update local storage
      setPage(event.data);
    },
    onError: (error) => console.error(error),
  });

  return page;
}
