import { Chart } from "../../types";
import styled from "@emotion/styled";

import { CustomDoughnut, CustomPieChart } from "../Charts";
import { CustomBarChart } from "../Charts/Bar/BarChart";
import { chartColours } from "../Charts/contants";

export function ChartView({
  chart,
  colour,
}: {
  chart: Chart;
  colour?: string;
}) {
  return (
    <StyledChartContainer>{renderChart(chart, colour)}</StyledChartContainer>
  );
}

const renderChart = (chart: Chart, colour?: string) => {
  switch (chart.type) {
    case "pie":
      return <CustomPieChart chart={chart} />;
    case "doughnut":
      return <CustomDoughnut chart={chart} />;
    case "bar":
      return (
        <CustomBarChart chart={chart} colour={colour ?? chartColours[0]} />
      );
    case "line":
    default:
      return <div>Unknown chart type</div>;
  }
};

const StyledChartContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    overflow: visible;
  }
`;
