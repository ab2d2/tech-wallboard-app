import { Chart } from "../../types";
import styled from "@emotion/styled";

import { CustomDoughnut, PieChart } from "../Charts";

export function ChartView({ chart }: { chart: Chart }) {
  return (
    <StyledChartContainer>
      {renderChart(chart)}
      <h1>{chart.title}</h1>
    </StyledChartContainer>
  );
}

const renderChart = (chart: Chart) => {
  switch (chart.type) {
    case "pie":
      return <PieChart chart={chart} />;
    case "doughnut":
      return <CustomDoughnut chart={chart} />;
    case "bar":
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
`;
