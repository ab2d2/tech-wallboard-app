import { Chart } from "../../types";
import styled from "@emotion/styled";
import { DataPoint, MultiLineDataPoint } from "../../types"; 
import { Doughnut, PieChart } from "../Charts";
import { BarChart } from "../Charts/Bar/BarChart";
import { LineChart } from "../Charts/Line/LineChart";

import { ChartColour, chartColours } from "../Charts/contants";
import { Typography } from "@mui/material";

export function ChartView({
  chart,
  colour,
}: {
  chart: Chart;
  colour?: ChartColour;
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

const renderChart = ({ data, type }: Chart, colour?: ChartColour) => {
  switch (type) {
    case "pie":
      return <PieChart data={data as DataPoint[]} />;
    case "doughnut":
      return <Doughnut data={data as DataPoint[]} />;
    case "bar":
      return <BarChart data={data as DataPoint[]} colour={colour ?? chartColours[0]} />;
    case "line":
      return <LineChart data={data as MultiLineDataPoint[]} />;

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
