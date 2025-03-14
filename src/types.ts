export interface DataPoint {
  label: string;
  value: number;
}

export interface MultiLineDataPoint {
  label: string;
  [key: string]: string | number; 
}

export type ChartType = "bar" | "pie" | "line" | "doughnut";

export interface Chart {
  title: string;
  type: ChartType;
  data: DataPoint[] | MultiLineDataPoint[];
}

export type PageElement = Chart | Chart[] | string;

export interface PageData {
  categories: string[];
  primaryElement: PageElement;
  secondaryElement?: PageElement;
}
