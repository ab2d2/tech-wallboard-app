import type { Meta, StoryObj } from "@storybook/react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

import { DoughNut } from "./DoughNut";

import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ChartDataLabels);

const meta = {
  title: "Example/DoughNut",
  component: DoughNut,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof DoughNut>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SixItems: Story = {
  args: {
    dataPathForChart: "data/6-items.json",
  },
};
