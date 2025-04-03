import { useEffect, useRef, useState } from "react";
import { PageConfig } from "../types";
import { getLocalPages } from "./local-storage";
import { timers } from "../constants/timers";

export function useNextOfflinePage(
  initialPageIndex: number,
  active: boolean
): PageConfig | undefined {
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPageIndex);
  const intervalId = useRef<NodeJS.Timeout | undefined>(undefined);

  const pages = getLocalPages();

  useEffect(() => {
    if (active) {
      intervalId.current = setInterval(() => {
        setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length || 0);
      }, timers.secondsPerPage * 1000);
    } else {
      intervalId.current?.close();
    }

    return () => {
      intervalId.current?.close();
    };
  }, [pages.length, active]);

  return pages[currentPageIndex];
}
