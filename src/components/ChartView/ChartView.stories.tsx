import { Meta, StoryObj } from "@storybook/react";
import { ChartView } from "./ChartView";
import { ResponsiveContainer } from "recharts";

const meta = {
  title: "Example/ChartView",
  component: ChartView,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof ChartView>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { label: "A", value: 400 },
  { label: "B", value: 300 },
  { label: "C", value: 200 },
];

export const Default: Story = {
  args: {
    chart: {
      title: "Example Chart",
      type: "bar",
      data,
    },
    animate: true,
  },
  render: ({ chart, animate }) => (
    <ResponsiveContainer width={800} height={300}>
      <ChartView chart={chart} animate={animate} />
    </ResponsiveContainer>
  ),
};
