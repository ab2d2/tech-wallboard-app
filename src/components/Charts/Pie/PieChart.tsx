import { DataPoint } from "../../../types";
import { PieChart as RechartPieChart, Pie, Cell } from "recharts";
import { baseChartProps, chartColours } from "../contants";
import { ChartContainer } from "../styles";

export function PieChart({ data }: { data: DataPoint[] }) {
  return (
    <ChartContainer width="100%" height="100%">
      <RechartPieChart>
        <Pie
          {...baseChartProps}
          label={({ name, value }) => {
            return `${name}: ${value}`;
          }}
          data={data}
        >
          {data.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColours[index % chartColours.length]}
            />
          ))}
        </Pie>
      </RechartPieChart>
    </ChartContainer>
  );
}
