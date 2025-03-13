import { ResponsiveContainer, XAxis, Bar, BarChart } from "recharts";
import { baseChartProps, chartColours } from "../contants";
import { Chart } from "../../../types";

export function CustomBarChart({
  chart,
  colour: color,
}: {
  chart: Chart;
  colour?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart {...baseChartProps} data={chart.data}>
        <XAxis dataKey="label" tick={{ fontSize: 24, baselineShift: -8 }} />
        <Bar
          dataKey="value"
          fill={color ?? chartColours[0]}
          label={{ position: "top", fontSize: 32 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
