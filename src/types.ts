export interface DataPoint {
  label: string;
  [key: string]: string | number;
}
export type ChartType = "bar" | "pie" | "line" | "doughnut"| "radar";

export interface Chart {
  title: string;
  type: ChartType;
  data: DataPoint[];
}

export type PageElement = Chart | Chart[] | string;

export interface PageConfig {
  id: string;
  webSocketUrl?: string;
  categories: string[];
  primaryElement: PageElement;
  secondaryElement?: PageElement;
}
