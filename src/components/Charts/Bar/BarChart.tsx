import { XAxis, Bar, BarChart } from "recharts";
import { baseChartProps, chartColours } from "../contants";
import { DataPoint } from "../../../types";
import { ChartContainer } from "../styles";

export function CustomBarChart({
  data,
  colour: color,
}: {
  data: DataPoint[];
  colour?: string;
}) {
  return (
    <ChartContainer width="100%" height="100%">
      <BarChart {...baseChartProps} data={data}>
        <XAxis dataKey="label" tick={{ fontSize: 24, baselineShift: -8 }} />
        <Bar
          dataKey="value"
          fill={color ?? chartColours[0]}
          label={{ position: "top", fontSize: 32 }}
        />
      </BarChart>
    </ChartContainer>
  );
}
