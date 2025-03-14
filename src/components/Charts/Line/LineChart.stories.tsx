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

const multiLineData = [
  { label: "Jan", Line1: 400, Line2: 350, Line3: 300, Line4: 450, Line5: 500 },
  { label: "Feb", Line1: 300, Line2: 400, Line3: 250, Line4: 500, Line5: 550 },
  { label: "Mar", Line1: 200, Line2: 300, Line3: 350, Line4: 400, Line5: 450 },
  { label: "Apr", Line1: 100, Line2: 200, Line3: 450, Line4: 350, Line5: 400 },
];

export const FiveLines: Story = {
  args: {
    data: multiLineData,
  },
  render: ({ data }) => (
    <ResponsiveContainer width={800} height={400}>
      <LineChart data={data} />
    </ResponsiveContainer>
  ),
};
