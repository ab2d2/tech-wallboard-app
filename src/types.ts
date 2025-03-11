export interface DataPoint {
  label: string;
  value: number;
}

export type ChartType = "bar" | "pie" | "line" | "doughnut";

export interface Chart {
  title: string;
  type: ChartType;
  data: DataPoint[];
}

export type PageElement = Chart | Chart[] | string;

export interface PageData {
  categories: string[];
  primaryElement: PageElement;
  secondaryElement?: PageElement;
}
