import { Cell, Pie, PieChart } from "recharts";
import { DataPoint } from "../../../types";
import { baseChartProps, chartColours } from "../contants";
import { ChartContainer } from "../styles";

export function Dougnut({ data }: { data: DataPoint[] }) {
  return (
    <ChartContainer width="100%" height="100%">
      <PieChart>
        <Pie
          {...baseChartProps}
          label={({ name, value }) => {
            return `${name}: ${value}`;
          }}
          data={data}
          innerRadius="50%"
          outerRadius="80%"
        >
          {data.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColours[index % chartColours.length].hex}
            />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
