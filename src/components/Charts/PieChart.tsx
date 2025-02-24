import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Red", "Orange", "Blue"],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      label: "Popularity of colours",
      data: [55, 23, 96],
      // you can set indiviual colors for each bar
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(232, 102, 63, 0.6)",
        "rgba(38, 9, 181, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart({ dataPathForChart }: { dataPathForChart: string }) {
  console.log("dataPathForChart", dataPathForChart);
  return (
    <Pie
      key={dataPathForChart}
      data={data}
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
            display: true,
            position: "bottom",
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
