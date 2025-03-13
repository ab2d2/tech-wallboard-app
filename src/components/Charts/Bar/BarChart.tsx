import { ResponsiveContainer, XAxis, YAxis, Bar, BarChart } from "recharts";
import { baseChartProps, colors } from "../contants";
import { Chart } from "../../../types";

export function CustomBarChart({ chart }: { chart: Chart }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart {...baseChartProps} data={chart.data}>
        <XAxis dataKey="label" tick={{ fontSize: 24, baselineShift: -8 }} />
        <YAxis tick={{ fontSize: 24 }} />
        <Bar dataKey="value" fill={colors[0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
