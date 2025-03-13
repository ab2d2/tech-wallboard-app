import type { Meta, StoryObj } from "@storybook/react";

import { CustomPieChart } from "./PieChart";
import { ResponsiveContainer } from "recharts";

const meta = {
  title: "Example/Charts/PieChart",
  component: CustomPieChart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof CustomPieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { label: "A", value: 400 },
  { label: "B", value: 300 },
  { label: "C", value: 300 },
];

export const PieChart: Story = {
  args: {
    data,
  },
  render: ({ data }) => (
    <ResponsiveContainer width={800} height={200}>
      <CustomPieChart data={data} />
    </ResponsiveContainer>
  ),
};
