import styled from "@emotion/styled";

import { FlattenedCategoryConfig } from "../../store/utils";
import * as ChartComponents from "../Charts";

const ChartComponentsMap: { [key: string]: string } = {
  donutChart: "DoughNut",
  timeSeriesChart: "PieChart",
  multiLineChart: "PieChart",
  image: "CustomImage",
  columnChart: "DoughNut",
  numericGauge: "PieChart",
  areaChart: "PieChart",
  smallPieChart: "PieChart",
  smallNumericGauge: "PieChart",
  smallColumnChart: "PieChart",
};

export const Page = ({
  currentPage,
}: {
  currentPage: FlattenedCategoryConfig;
}) => {
  console.log("Page component, currentPage is ", currentPage);
  const ComponentName = ChartComponentsMap[currentPage.summaryComponent];
  const Component =
    ChartComponents[ComponentName as keyof typeof ChartComponents];

  // pass data as prop to the component
  const dataPathForChart = currentPage.dataSourceFilename;

  let DetailsComponent = null;
  if (currentPage.detailsComponent) {
    const DetailsComponentName =
      ChartComponentsMap[currentPage.detailsComponent];
    DetailsComponent =
      ChartComponents[DetailsComponentName as keyof typeof ChartComponents];
  }

  return (
    <StyledContainer>
      <StyledCategoryOneContainer
        $hasDetailsComponent={currentPage.detailsComponent !== null}
      >
        <Component dataPathForChart={dataPathForChart} />
      </StyledCategoryOneContainer>
      {currentPage.detailsComponent !== null && DetailsComponent !== null && (
        <StyledCategoryTwoContainer>
          <>
            <h2>{currentPage.levelTwoCategoryName}</h2>
            <DetailsComponent
              dataPathForChart={currentPage.dataSourceFilename}
            />
            <p>{currentPage.dataSourceFilename}</p>
          </>
        </StyledCategoryTwoContainer>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
`;

export const StyledCategoryOneContainer = styled.div<{
  $hasDetailsComponent: boolean;
}>`
  // width: ${(props) => (props.$hasDetailsComponent ? "700px" : "1400px")};
  // width: 50%;
  width: 700px;
  height: 500px;
  // height: 80%;
`;
const StyledCategoryTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;
