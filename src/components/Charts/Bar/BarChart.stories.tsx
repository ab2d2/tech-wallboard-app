import type { Meta, StoryObj } from "@storybook/react";
import { BarChart } from "./BarChart";
import { ResponsiveContainer } from "recharts";

const meta = {
  title: "Example/Charts/BarChart",
  component: BarChart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { label: "A", value: 400 },
  { label: "B", value: 300 },
  { label: "C", value: 200 },
];

export const Default: Story = {
  args: {
    data,
    animate: true,
  },
  render: ({ data, animate }) => (
    <ResponsiveContainer width={800} height={300}>
      <BarChart data={data} animate={animate} />
    </ResponsiveContainer>
  ),
};
