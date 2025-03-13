import { Chart } from "../../types";
import styled from "@emotion/styled";

import { CustomDoughnut, CustomPieChart } from "../Charts";
import { CustomBarChart } from "../Charts/Bar/BarChart";
import { chartColours } from "../Charts/contants";
import { Typography } from "@mui/material";

export function ChartView({
  chart,
  colour,
}: {
  chart: Chart;
  colour?: string;
}) {
  return (
    <StyledChartContainer>
      {renderChart(chart, colour)}
      <Typography variant="h3" component="h3">
        {chart.title}
      </Typography>
    </StyledChartContainer>
  );
}

const renderChart = ({ data, type }: Chart, colour?: string) => {
  switch (type) {
    case "pie":
      return <CustomPieChart data={data} />;
    case "doughnut":
      return <CustomDoughnut data={data} />;
    case "bar":
      return <CustomBarChart data={data} colour={colour ?? chartColours[0]} />;
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
