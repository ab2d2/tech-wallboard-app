import { Chart } from "../../types";
import styled from "@emotion/styled";
import { Doughnut, PieChart } from "../Charts";
import { BarChart } from "../Charts/Bar/BarChart";
import { LineChart } from "../Charts/Line/LineChart";
import { FunnelChart } from "../Charts/Funnel/FunnelChart";
import { ChartColour, chartColours, ChartProperties } from "../Charts/contants";
import { Typography } from "@mui/material";
import { RadarChart } from "../Charts/Radar/RadarChart";

export function ChartView({
  chart,
  colour,
  animate,
}: {
  chart: Chart;
  colour?: ChartColour;
  animate?: boolean;
}) {
  return (
    <StyledChartContainer>
      {renderChart(chart, colour, animate)}
      <Typography variant="h3" component="h3">
        {chart.title}
      </Typography>
    </StyledChartContainer>
  );
}

const renderChart = (
  { data, type }: Chart,
  colour?: ChartColour,
  animate?: boolean
) => {
  const properties: ChartProperties = {
    data,
    colour: colour ?? chartColours[0],
    animate,
  };

  switch (type) {
    case "pie":
      return <PieChart {...properties} />;
    case "doughnut":
      return <Doughnut {...properties} />;
    case "bar":
      return <BarChart {...properties} />;
    case "line":
      return <LineChart {...properties} />;
    case "radar":
      return <RadarChart {...properties} />;
    case "funnel":
      return <FunnelChart {...properties} />;

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
