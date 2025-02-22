import styled from "@emotion/styled";

import Bar from "../Charts/Bar";
import { FlattenedCategoryConfig } from "../../store/utils";

export const Page = ({
  currentPage,
}: {
  currentPage: FlattenedCategoryConfig;
}) => {
  console.log("Page component, current currentPage is ", currentPage);
  return (
    <StyledContainer>
      <Bar />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;
