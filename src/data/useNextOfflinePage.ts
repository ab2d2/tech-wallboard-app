import { useEffect, useRef, useState } from "react";
import { PageConfig } from "../types";
import { getLocalPages } from "./local-storage";
import { timers } from "../constants/timers";

export function useNextOfflinePage({
  initialPageIndex,
  active,
  onPageChanged,
}: OfflinePageProps): PageConfig | undefined {
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPageIndex);
  const intervalId = useRef<number | undefined>(undefined);

  const pages = getLocalPages();

  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length || 0);
      onPageChanged();

      if (!active) {
        clearInterval(intervalId.current);
      }
    }, timers.secondsPerPage * 1000);

    return () => clearInterval(intervalId.current);
  }, [pages.length, active, onPageChanged]);

  return pages[currentPageIndex];
}

type OfflinePageProps = {
  /// The index of the page in local storage to start on
  initialPageIndex: number;
  /// If the page change timer is active
  active: boolean;
  /// Runs on each page change
  onPageChanged: () => void;
};
