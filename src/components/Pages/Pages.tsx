import { useState, useEffect, useCallback, useRef } from "react";
import { timers } from "../../constants/timers";
import { Layout } from "../Layout/Layout";
import { Page } from "../Page/page";
import { useStore } from "@tanstack/react-store";
import { pageStore } from "../../data/page-store";
import styled from "@emotion/styled";

export default function Pages() {
  const pages = useStore(pageStore, (state) => Object.values(state));

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  // Using a ref to store this value as we don't want to cause a rerender when it changes
  const shouldAnimate = useRef(false);

  const getNextPage = useCallback(
    (index: number) => {
      return (index + 1) % pages.length || 0;
    },
    [pages.length]
  );

  useEffect(() => {
    setCurrentPageIndex(0);
  }, [pages.length]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!shouldAnimate.current) {
        shouldAnimate.current = true;
      }
      setCurrentPageIndex(getNextPage(currentPageIndex));
    }, timers.secondsPerPage * 1000);

    return () => clearInterval(interval);
  }, [currentPageIndex, getNextPage]);

  const previousPageIndex =
    (currentPageIndex - 1 + pages.length) % pages.length;
  const previousPage = pages[previousPageIndex];
  const currentPage = pages[currentPageIndex];

  return (
    <Layout currentPage={currentPage}>
      <PageContainer>
        {shouldAnimate.current && (
          <SlideOut key={`previous ${currentPageIndex}`}>
            <Page page={previousPage} active={false} />
          </SlideOut>
        )}
        {shouldAnimate.current ? (
          <SlideIn key={`current ${currentPageIndex}`}>
            <Page page={currentPage} />
          </SlideIn>
        ) : (
          <Page page={currentPage} />
        )}
      </PageContainer>
    </Layout>
  );
}

const PageContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  height: 100%;
  position: relative;
`;

const animationDuration = 1000;

const PageWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const SlideOut = styled(PageWrapper)`
  animation: ${animationDuration}ms forwards slide-out;

  @keyframes slide-out {
    from {
      translate: 0;
    }

    to {
      translate: -100%;
    }
  }
`;

const SlideIn = styled(PageWrapper)`
  animation: ${animationDuration}ms forwards slide-in;
  position: absolute;
  height: 100%;
  width: 100%;

  @keyframes slide-in {
    from {
      translate: 100%;
    }

    to {
      translate: 0;
    }
  }
`;
