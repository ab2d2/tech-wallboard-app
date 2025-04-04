import type { Meta, StoryObj } from "@storybook/react";
import { AreaChart } from "./AreaChart";
import { ResponsiveContainer } from "recharts";

const meta = {
    title: "Example/Charts/AreaChart",
    component: AreaChart,
    tags: ["autodocs"],
    parameters:{
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof AreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;


const areaData = [
    { label: "A", Area1: 400, Area2: 600},
    { label: "B", Area1: 300, Area2: 500},
    { label: "C", Area1: 200, Area2: 200},
    { label: "D", Area1: 100, Area2: -100},
    { label: "E", Area1: 500, Area2: -50},
    { label: "F", Area1: 600, Area2: -200},
    { label: "G", Area1: 700, Area2: 0}
];

export const FourAreas: Story = {
    args: {
        data: areaData,
        animate: true,
    },
    render: ({ data, animate }) => (
        <ResponsiveContainer width={800} height={400}>
            <AreaChart data={data} animate={animate} />
        </ResponsiveContainer>
    ),
};