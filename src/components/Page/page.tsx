import styled from "@emotion/styled";
import { PageData, PageElement } from "../../types";
import { ChartView } from "../ChartView/ChartView";
import { ChartGrid } from "../ChartGrid/ChartGrid";

export const Page = ({ currentPage }: { currentPage: PageData }) => {
  return (
    <StyledContainer>
      <StyledCategoryOneContainer>
        {renderElement(currentPage.primaryElement)}
      </StyledCategoryOneContainer>
      {currentPage.secondaryElement && (
        <StyledCategoryTwoContainer>
          {renderElement(currentPage.secondaryElement)}
        </StyledCategoryTwoContainer>
      )}
    </StyledContainer>
  );
};

const renderElement = (element: PageElement) => {
  if (typeof element === "string") {
    return <img src={element} />;
  } else if (Array.isArray(element)) {
    return <ChartGrid charts={element} />;
  } else {
    return <ChartView chart={element} />;
  }
};

const StyledContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  max-height: 100%;
  padding: 4rem;
  gap: 2rem;
`;

const StyledChartContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCategoryOneContainer = styled(StyledChartContainer)`
  flex: 1;
`;
const StyledCategoryTwoContainer = styled(StyledChartContainer)`
  flex: 2;
`;
