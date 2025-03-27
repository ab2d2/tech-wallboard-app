import type { Meta , StoryObj } from "@storybook/react";
import { FunnelChart } from "./FunnelChart";
import { ResponsiveContainer } from "recharts";

const meta = {
  title: "Example/Charts/FunnelChart",
  component: FunnelChart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof FunnelChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { label: "Impressions", value: 1230 },
  { label: "Clicks", value: 920 },
  { label: "Visits", value: 569 },
  { label: "Orders", value: 400 },
  { label: "Revenue", value: 283 },
];

export const SingleFunnel: Story = {
  args: {
    data,
    animate: false,
  },
  render: ({ data, animate }) => (
    <ResponsiveContainer width={800} height={400}>
      <FunnelChart data={data} animate={animate} />
    </ResponsiveContainer>
  ),
};