import { Meta, StoryObj } from "@storybook/react";
import { ChartGrid } from "./ChartGrid";
import { ResponsiveContainer } from "recharts";

const meta = {
  title: "Example/ChartGrid",
  component: ChartGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof ChartGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { label: "A", value: 400 },
  { label: "B", value: 300 },
  { label: "C", value: 200 },
];

export const Default: Story = {
  args: {
    charts: [
      {
        title: "Example Chart 1",
        type: "bar",
        data,
      },
      {
        title: "Example Chart 2",
        type: "pie",
        data,
      },
      {
        title: "Example Chart 3",
        type: "doughnut",
        data,
      },
    ],
  },
  render: ({ charts }) => (
    <ResponsiveContainer
      width={800}
      height={"100%"}
      style={{ padding: "4rem" }}
    >
      <ChartGrid charts={charts} />
    </ResponsiveContainer>
  ),
};
