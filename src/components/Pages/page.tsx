import styled from "@emotion/styled";

import { FlattenedCategoryConfig } from "../../store/utils";
import * as ChartComponents from "../Charts";

const ChartComponentsMap: { [key: string]: string } = {
  donutChart: "DoughNut",
  timeSeriesChart: "DoughNut",
  multiLineChart: "DoughNut",
  image: "DoughNut",
  columnChart: "DoughNut",
  numericGauge: "DoughNut",
  areaChart: "DoughNut",
  smallPieChart: "DoughNut",
  smallNumericGauge: "DoughNut",
  smallColumnChart: "DoughNut",
};

export const Page = ({
  currentPage,
}: {
  currentPage: FlattenedCategoryConfig;
}) => {
  console.log("Page component, current currentPage is ", currentPage);
  const ComponentName = ChartComponentsMap[currentPage.summaryComponent];
  const Component =
    ChartComponents[ComponentName as keyof typeof ChartComponents];

  return (
    <StyledContainer>
      <StyledCategoryOneContainer
        $hasDetailsComponent={currentPage.detailsComponent !== null}
      >
        <Component />
      </StyledCategoryOneContainer>
      <StyledCategoryTwoContainer>
        levelTwoCategoryName: <h2>{currentPage.levelTwoCategoryName}</h2>
        detailsComponent:{" "}
        <p>
          {currentPage.detailsComponent === null
            ? "Null"
            : currentPage.detailsComponent}
        </p>
        dataSourceFilename: <p>{currentPage.dataSourceFilename}</p>
      </StyledCategoryTwoContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  padding: 1rem;
`;

export const StyledCategoryOneContainer = styled.div<{
  $hasDetailsComponent: boolean;
}>`
  width: ${(props) => (props.$hasDetailsComponent ? "700px" : "1400px")};
`;
const StyledCategoryTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;
