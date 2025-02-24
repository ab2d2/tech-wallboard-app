import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function DoughNut({ dataPathForChart }: { dataPathForChart: string }) {
  return (
    <Doughnut
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
