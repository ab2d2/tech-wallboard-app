export interface DataPoint {
  label: string;
  [key: string]: string | number;
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
