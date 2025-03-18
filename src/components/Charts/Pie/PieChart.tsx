import { PieChart as RechartPieChart, Pie, Cell } from "recharts";
import {
  baseChartProps,
  chartAnimationProps,
  chartColours,
  ChartProperties,
} from "../contants";
import { ChartContainer } from "../styles";

export function PieChart({ data, animate }: ChartProperties) {
  return (
    <ChartContainer width="100%" height="100%">
      <RechartPieChart>
        <Pie
          isAnimationActive={animate}
          {...baseChartProps}
          {...chartAnimationProps}
          label={({ name, value }) => {
            return `${name}: ${value}`;
          }}
          data={data}
        >
          {data.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColours[index % chartColours.length].hex}
            />
          ))}
        </Pie>
      </RechartPieChart>
    </ChartContainer>
  );
}
