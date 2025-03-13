import type { Meta, StoryObj } from "@storybook/react";

import { Doughnut } from "./Doughnut";

import { ResponsiveContainer } from "recharts";

const meta = {
  title: "Example/Charts/Doughnut",
  component: Doughnut,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Doughnut>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { label: "A", value: 400 },
  { label: "B", value: 300 },
  { label: "C", value: 300 },
];

export const DoughnutStory: Story = {
  args: {
    data,
  },
  render: ({ data }) => (
    <ResponsiveContainer width={800} height={200}>
      <Doughnut data={data} />
    </ResponsiveContainer>
  ),
};
