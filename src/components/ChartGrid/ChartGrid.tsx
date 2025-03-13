import { Chart } from "../../types";
import styled from "@emotion/styled";
import { ChartView } from "../ChartView/ChartView";
import { chartColours } from "../Charts/contants";

export function ChartGrid({ charts }: { charts: Chart[] }) {
  return (
    <StyledChartGrid>
      {charts.map((chart, i) => (
        <StyledChartGridItem key={`grid-chart-${i}`}>
          <ChartView
            chart={chart}
            colour={chartColours[i % chartColours.length]}
          />
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
