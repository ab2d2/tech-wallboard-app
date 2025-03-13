import styled from "@emotion/styled";
import { PageData, PageElement } from "../../types";
import { ChartView } from "../ChartView/ChartView";
import { ChartGrid } from "../ChartGrid/ChartGrid";
import { chartColours } from "../Charts/contants";

export const Page = ({ currentPage }: { currentPage: PageData }) => {
  return (
    <StyledContainer>
      <StyledCategoryOneContainer>
        {renderElement(currentPage.primaryElement, "primary")}
      </StyledCategoryOneContainer>
      {currentPage.secondaryElement && (
        <StyledCategoryTwoContainer
          hasMultipleCharts={Array.isArray(currentPage.secondaryElement)}
        >
          {renderElement(currentPage.secondaryElement, "secondary")}
        </StyledCategoryTwoContainer>
      )}
    </StyledContainer>
  );
};

const renderElement = (element: PageElement, position: ElementPosition) => {
  if (typeof element === "string") {
    return <img src={element} />;
  } else if (Array.isArray(element)) {
    return <ChartGrid charts={element} />;
  } else {
    let colour;
    switch (position) {
      case "primary":
        colour = chartColours[0];
        break;
      case "secondary":
        colour = chartColours[1];
        break;
    }
    return <ChartView chart={element} colour={colour} />;
  }
};

export type ElementPosition = "primary" | "secondary";

const StyledContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  max-height: 100%;
  padding: 6rem;
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
const StyledCategoryTwoContainer = styled(StyledChartContainer)<{
  hasMultipleCharts?: boolean;
}>`
  flex: ${({ hasMultipleCharts }) => (hasMultipleCharts ? 2 : 1)};
`;
