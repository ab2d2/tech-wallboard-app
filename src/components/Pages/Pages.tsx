import { useState, useEffect } from "react";
import { Page } from "../Page/page";
import styled from "@emotion/styled";
import { PageConfig } from "../../types";
import { Loading } from "../Loading/Loading";

export default function PageTransition({
  page: currentPage,
}: {
  page: PageConfig;
}) {
  const [previousPage, setPreviousPage] = useState<PageConfig>();

  useEffect(() => {
    if (currentPage) {
      new Promise((r) => setTimeout(r, animationDuration)).then(() =>
        setPreviousPage(currentPage)
      );
    }
  }, [currentPage]);

  if (!currentPage) {
    return <Loading />;
  }

  const animate = previousPage && previousPage.id != currentPage.id;

  return (
    <PageContainer>
      {animate && (
        <SlideOut key={`previous ${previousPage.id}`}>
          <Page page={previousPage} active={false} />
        </SlideOut>
      )}
      <SlideIn key={`current ${currentPage.id}`}>
        <Page page={currentPage} />
      </SlideIn>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  height: 100%;
  position: relative;
`;

const animationDuration = 1500;

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
