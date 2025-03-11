export interface ScreenItem {
  title: string;
  summaryComponent: string;
  detailsComponent: string | ScreenItem[] | null;
  dataSourceFilename: string;
}

export interface Component {
  title: string;
  type: string;
  dataPathForChart: string;
}

export interface Category {
  name: string;
  summaryComponent: Component;
  detailsComponent: Component | Component[] | null;
}

export interface ScreensConfigData {
  Categories: Category[];
}

export const screens_config_data_initial_data_backup: ScreensConfigData = {
  Categories: [
    {
      name: "Delivery",
      items: [
        {
          title: "Flow Distribution",
          summaryComponent: "donutChart",
          detailsComponent: "smallPieChart",
          dataSourceFilename: "flowDistribution.json",
        },
        {
          title: "Cycle Time",
          summaryComponent: "timeSeriesChart",
          detailsComponent: "numericGauge",
          dataSourceFilename: "cycleTime.json",
        },
        {
          title: "Velocity",
          summaryComponent: "multiLineChart",
          detailsComponent: null,
          dataSourceFilename: "velocity.json",
        },
        {
          title: "Status",
          summaryComponent: "image",
          detailsComponent: null,
          dataSourceFilename: "delivery.svg",
        },
      ],
    },
    {
      name: "Quality",
      items: [
        {
          title: "Defect Detection",
          summaryComponent: "columnChart",
          detailsComponent: "smallColumnChart",
          dataSourceFilename: "defects.json",
        },
        {
          title: "Change Failure Rate (YTD)",
          summaryComponent: "numericGauge",
          detailsComponent: "smallNumericGauge",
          dataSourceFilename: "cfr.json",
        },
        {
          title: "Mean Time to Recover (YTD)",
          summaryComponent: "numericGauge",
          detailsComponent: "smallNumericGauge",
          dataSourceFilename: "mttr.json",
        },
        {
          title: "Status",
          summaryComponent: "image",
          detailsComponent: null,
          dataSourceFilename: "quality.svg",
        },
      ],
    },
    {
      name: "Operations",
      items: [
        {
          title: "Incidents",
          summaryComponent: "donutChart",
          detailsComponent: "smallPieChart",
          dataSourceFilename: "incidents.json",
        },
        {
          title: "Availability",
          summaryComponent: "areaChart",
          detailsComponent: null,
          dataSourceFilename: "availability.json",
        },
        {
          title: "Uptime",
          summaryComponent: "areaChart",
          detailsComponent: null,
          dataSourceFilename: "uptime.json",
        },
        {
          title: "Status",
          summaryComponent: "image",
          detailsComponent: null,
          dataSourceFilename: "operations.svg",
        },
      ],
    },
  ],
};
