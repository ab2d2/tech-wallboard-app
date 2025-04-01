import { useState, useEffect, useCallback } from "react";
import { timers } from "../../constants/timers";
import { Layout } from "../Layout/Layout";
import { Page } from "../Page/page";
import { useStore } from "@tanstack/react-store";
import { pageStore } from "../../data/page-store";
import styled from "@emotion/styled";

export default function Pages() {
  const pages = useStore(pageStore, (state) => Object.values(state));

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

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
      setCurrentPageIndex(getNextPage(currentPageIndex));
    }, timers.secondsPerPage * 1000);

    return () => clearInterval(interval);
  }, [pages, currentPageIndex, getNextPage]);

  // TODO: currentPage is actually previous page, next page is actually current page. Fix naming/logic
  const nextPageIndex = getNextPage(currentPageIndex);
  const currentPage = pages[currentPageIndex];
  const nextPage = pages[nextPageIndex];

  return (
    <Layout currentPage={nextPage}>
      <PageContainer>
        <SlideOut key={currentPageIndex}>
          <Page page={currentPage} active={false} />
        </SlideOut>
        <SlideIn key={nextPageIndex}>
          <Page page={nextPage} />
        </SlideIn>
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
