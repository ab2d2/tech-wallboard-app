import {
  LineChart as RechartLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import {
  baseChartProps,
  chartAnimationProps,
  chartColours,
  ChartProperties,
} from "../contants";
import { ChartContainer } from "../styles";

export function LineChart({ data, colour, animate }: ChartProperties) {
  if (!data || data.length === 0) return null;

  const keys = Object.keys(data[0]).filter((key) => key !== "label");

  return (
    <ChartContainer width="100%" height="100%">
      <RechartLineChart {...baseChartProps} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        {keys.map((key, index) => (
          <Line
            isAnimationActive={animate}
            {...chartAnimationProps}
            key={key}
            type="monotone"
            dataKey={key}
            stroke={
              colour?.hex ?? chartColours[index % chartColours.length].hex
            }
            strokeWidth={2}
          />
        ))}
      </RechartLineChart>
    </ChartContainer>
  );
}
