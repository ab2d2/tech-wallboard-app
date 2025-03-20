import type { Meta, StoryObj } from "@storybook/react";
import { RadarChart } from "./RadarChart";
import { ResponsiveContainer } from "recharts";

const meta ={
    title: "Example/Charts/RadarChart",
    component: RadarChart,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {},
} satisfies Meta<typeof RadarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const radarData = [
    { label: "A", Radar1: 400, Radar2: 350, Radar3: 300, Radar4: 450,  },
    { label: "B", Radar1: 300, Radar2: 400, Radar3: 250, Radar4: 500,  },
    { label: "C", Radar1: 200, Radar2: 300, Radar3: 350, Radar4: 400,  },
    { label: "D", Radar1: 100, Radar2: 200, Radar3: 450, Radar4: 350,  },
    { label: "E", Radar1: 500, Radar2: 450, Radar3: 400, Radar4: 350,  },
    { label: "F", Radar1: 600, Radar2: 500, Radar3: 450, Radar4: 400,  },
    { label: "G", Radar1: 700, Radar2: 600, Radar3: 500, Radar4: 450,  },
   
];

export const TwoRadar: Story = {
    args: {
        data: radarData,
        animate: true,
    },
    render: ({ data, animate }) => (
        <ResponsiveContainer width={800} height={400}>
            <RadarChart data={data} animate={animate} />
        </ResponsiveContainer>
    ),
};

