import { Doughnut } from "react-chartjs-2";
import { Chart } from "../../../types";

export function CustomDoughnut({ chart }: { chart: Chart }) {
  return (
    <Doughnut
      data={{
        labels: chart.data.map(({ label }) => label),
        datasets: [
          {
            label: chart.title,
            data: chart.data.map(({ value }) => value),
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          datalabels: {
            display: true,
            formatter(value, context) {
              const label = context.chart.data.labels
                ? context.chart.data.labels[context.dataIndex]
                : "";
              return `${label}: ${value}`;
            },
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 5,
            font: {
              weight: "bold",
              size: 16,
            },
          },
          tooltip: {
            enabled: true,
            animation: {
              duration: 2000,
              easing: "easeOutBounce",
            },
          },
          legend: {
            display: false,
          },
        },
        animation: {
          animateRotate: true,
          animateScale: true,
          easing: "easeInOutSine",
          duration: 2000,
        },
      }}
    />
  );
}
