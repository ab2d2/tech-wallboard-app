import type { Meta, StoryObj } from "@storybook/react";
import { LineChart } from "./LineChart";
import { ResponsiveContainer } from "recharts";

const meta = {
  title: "Example/Charts/LineChart",
  component: LineChart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof LineChart>;

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
  },
  render: ({ data }) => (
    <ResponsiveContainer width={800} height={300}>
      <LineChart data={data} />
    </ResponsiveContainer>
  ),
};