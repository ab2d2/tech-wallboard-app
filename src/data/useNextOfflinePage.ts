import { useEffect, useRef, useState } from "react";
import { PageConfig } from "../types";
import { getLocalPages } from "./local-storage";
import { timers } from "../constants/timers";

export function useNextOfflinePage(
  initialPageIndex: number,
  active: boolean
): PageConfig | undefined {
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPageIndex);
  const intervalId = useRef<number | undefined>(undefined);

  const pages = getLocalPages();

  useEffect(() => {
    if (active) {
      intervalId.current = window.setInterval(() => {
        setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length || 0);
      }, timers.secondsPerPage * 1000);
    } else {
      clearInterval(intervalId.current);
    }

    return () => clearInterval(intervalId.current);
  }, [pages.length, active]);

  return pages[currentPageIndex];
}
