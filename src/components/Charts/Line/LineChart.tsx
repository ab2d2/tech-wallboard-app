import { LineChart as RechartLineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { baseChartProps, ChartColour, chartColours } from "../contants";
import { DataPoint } from "../../../types";
import { ChartContainer } from "../styles";

export function LineChart({
  data,
  colour: color,
}: {
  data: DataPoint[];
  colour?: ChartColour;
}) {
  return (
    <ChartContainer width="100%" height="100%">
      <RechartLineChart {...baseChartProps} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
          {...baseChartProps} 
          dataKey="value" 
          stroke={color?.hex ?? chartColours[0].hex} 
          strokeWidth={2}
        />
      </RechartLineChart>
    </ChartContainer>
  );
}