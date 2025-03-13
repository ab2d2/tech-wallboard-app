import type { Meta, StoryObj } from "@storybook/react";

import { PieChart } from "./PieChart";
import { ResponsiveContainer } from "recharts";

const meta = {
  title: "Example/Charts/PieChart",
  component: PieChart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { label: "A", value: 400 },
  { label: "B", value: 300 },
  { label: "C", value: 300 },
];

export const Default: Story = {
  args: {
    data,
  },
  render: ({ data }) => (
    <ResponsiveContainer width={800} height={200}>
      <PieChart data={data} />
    </ResponsiveContainer>
  ),
};
