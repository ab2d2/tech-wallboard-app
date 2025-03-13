import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import { Chart } from "../../../types";
import { baseChartProps, chartColours } from "../contants";

export function CustomLineChart({ chart }: { chart: Chart }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chart.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
          {...baseChartProps} 
          dataKey="value" 
          stroke={chartColours[0]} 
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}