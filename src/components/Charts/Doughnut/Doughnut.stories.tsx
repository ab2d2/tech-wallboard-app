import type { Meta, StoryObj } from "@storybook/react";

import { Dougnut } from "./DoughNut";

import { ResponsiveContainer } from "recharts";

const meta = {
  title: "Example/Charts/Doughnut",
  component: Dougnut,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Dougnut>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { label: "A", value: 400 },
  { label: "B", value: 300 },
  { label: "C", value: 300 },
];

export const Doughnut: Story = {
  args: {
    data,
  },
  render: ({ data }) => (
    <ResponsiveContainer width={800} height={200}>
      <Dougnut data={data} />
    </ResponsiveContainer>
  ),
};
