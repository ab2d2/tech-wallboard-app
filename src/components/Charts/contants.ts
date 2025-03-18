import { DataPoint } from "../../types";

export const baseChartProps = {
  dataKey: "value",
  nameKey: "label",
};

export type ChartProperties = {
  data: DataPoint[];
  animate?: boolean;
  colour?: ChartColour;
};

export type ChartColour = {
  name: string;
  hex: string;
};

export const chartColours: ChartColour[] = [
  { name: "blue", hex: "#1f77b4" },
  { name: "orange", hex: "#ff7f0e" },
  { name: "green", hex: "#2ca02c" },
  { name: "red", hex: "#d62728" },
  { name: "purple", hex: "#9467bd" },
  { name: "brown", hex: "#8c564b" },
];
