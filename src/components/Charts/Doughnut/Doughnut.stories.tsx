import type { Meta, StoryObj } from "@storybook/react";

import { CustomDoughnut } from "./DoughNut";

import { ResponsiveContainer } from "recharts";

const meta = {
  title: "Example/Charts/Doughnut",
  component: CustomDoughnut,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof CustomDoughnut>;

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
      <CustomDoughnut data={data} />
    </ResponsiveContainer>
  ),
};
