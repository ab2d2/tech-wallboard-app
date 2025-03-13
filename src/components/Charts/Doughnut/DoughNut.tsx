import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Chart } from "../../../types";
import { baseChartProps, chartColours } from "../contants";

export function CustomDoughnut({ chart }: { chart: Chart }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          {...baseChartProps}
          label={({ name, value }) => {
            return `${name}: ${value}`;
          }}
          data={chart.data}
          innerRadius="50%"
          outerRadius="80%"
        >
          {chart.data.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColours[index % chartColours.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
