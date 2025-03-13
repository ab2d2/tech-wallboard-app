import type { Meta, StoryObj } from "@storybook/react";
import { CustomBarChart } from "./BarChart";
import { ResponsiveContainer } from "recharts";

const meta = {
  title: "Example/Charts/BarChart",
  component: CustomBarChart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof CustomBarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { label: "A", value: 400 },
  { label: "B", value: 300 },
  { label: "C", value: 200 },
];

export const BarChart: Story = {
  args: {
    data,
  },
  render: ({ data }) => (
    <ResponsiveContainer width={800} height={300}>
      <CustomBarChart data={data} />
    </ResponsiveContainer>
  ),
};
