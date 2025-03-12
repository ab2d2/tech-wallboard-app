import type { Meta } from "@storybook/react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

import { CustomDoughnut } from "./DoughNut";

import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ChartDataLabels);

const meta = {
  title: "Example/DoughNut",
  component: CustomDoughnut,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof CustomDoughnut>;

export default meta;
