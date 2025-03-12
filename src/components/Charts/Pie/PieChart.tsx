import { Chart } from "../../../types";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { baseChartProps, colors } from "../contants";

export function CustomPieChart({ chart }: { chart: Chart }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          {...baseChartProps}
          label={({ name, value }) => {
            return `${name}: ${value}`;
          }}
          data={chart.data}
        >
          {chart.data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
