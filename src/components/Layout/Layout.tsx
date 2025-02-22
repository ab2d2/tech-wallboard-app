import styled from "@emotion/styled";

import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  children,
  currentPageIndex,
}: {
  children: ReactNode;
  currentPageIndex: number;
}) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer currentPageIndex={currentPageIndex} />
    </>
  );
};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
