import { Chart } from "../../types";
import styled from "@emotion/styled";
import { ChartView } from "../ChartView/ChartView";

export function ChartGrid({ charts }: { charts: Chart[] }) {
  return (
    <StyledChartGrid>
      {charts.map((chart) => (
        <StyledChartGridItem key={chart.title}>
          <ChartView chart={chart} />
        </StyledChartGridItem>
      ))}
    </StyledChartGrid>
  );
}

const StyledChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  gap: 6rem;
`;

const StyledChartGridItem = styled.div`
  aspect-ratio: 1.5 / 1;
`;
