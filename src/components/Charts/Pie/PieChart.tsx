import { Chart } from "../../../types";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { baseChartProps, colors } from "../contants";
import { Typography } from "@mui/material";

export function CustomPieChart({ chart }: { chart: Chart }) {
  return (
    <>
      <Typography variant="h4" component="h4">
        {chart.title}
      </Typography>
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
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
