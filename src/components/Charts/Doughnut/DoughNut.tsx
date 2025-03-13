import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Chart } from "../../../types";
import { baseChartProps, colors } from "../contants";
import { Typography } from "@mui/material";

export function CustomDoughnut({ chart }: { chart: Chart }) {
  return (
    <>
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
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Typography variant="h3" component="h3">
        {chart.title}
      </Typography>
    </>
  );
}
