import styled from "@emotion/styled";

import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FlattenedCategoryConfig } from "../../store/utils";

export const Layout = ({
  children,
  currentPage,
}: {
  children: ReactNode;
  currentPage: FlattenedCategoryConfig;
}) => {
  return (
    <>
      <Header currentPage={currentPage} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

const StyledMain = styled.main`
  display: flex;
  flex: 1;
  height: 100%;
  overflow-y: hidden;
  flex-direction: column;
  justify-content: space-between;
`;
