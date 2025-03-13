import { XAxis, Bar, BarChart as RechartBarChart } from "recharts";
import { baseChartProps, ChartColour, chartColours } from "../contants";
import { DataPoint } from "../../../types";
import { ChartContainer } from "../styles";

export function BarChart({
  data,
  colour: color,
}: {
  data: DataPoint[];
  colour?: ChartColour;
}) {
  return (
    <ChartContainer width="100%" height="100%">
      <RechartBarChart {...baseChartProps} data={data}>
        <XAxis dataKey="label" />
        <Bar
          dataKey="value"
          fill={color?.hex ?? chartColours[0].hex}
          label={{ position: "top", fontSize: 32 }}
        />
      </RechartBarChart>
    </ChartContainer>
  );
}
