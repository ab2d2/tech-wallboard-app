import { XAxis, Bar, BarChart as RechartBarChart } from "recharts";
import {
  baseChartProps,
  chartAnimationProps,
  chartColours,
  ChartProperties,
} from "../contants";

import { ChartContainer } from "../styles";

export function BarChart({ data, colour: color, animate }: ChartProperties) {
  return (
    <ChartContainer width="100%" height="100%">
      <RechartBarChart {...baseChartProps} data={data}>
        <XAxis dataKey="label" />
        <Bar
          {...chartAnimationProps}
          isAnimationActive={animate}
          dataKey="value"
          fill={color?.hex ?? chartColours[0].hex}
          label={{ position: "top", fontSize: 32 }}
        />
      </RechartBarChart>
    </ChartContainer>
  );
}
