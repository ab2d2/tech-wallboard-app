import { Chart } from "../../types";
import styled from "@emotion/styled";

import { CustomDoughnut, CustomPieChart } from "../Charts";
import { CustomBarChart } from "../Charts/Bar/BarChart";

export function ChartView({ chart }: { chart: Chart }) {
  return <StyledChartContainer>{renderChart(chart)}</StyledChartContainer>;
}

const renderChart = (chart: Chart) => {
  switch (chart.type) {
    case "pie":
      return <CustomPieChart chart={chart} />;
    case "doughnut":
      return <CustomDoughnut chart={chart} />;
    case "bar":
      return <CustomBarChart chart={chart} />;
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
