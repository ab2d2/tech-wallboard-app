import { pages } from "../data/chart_data";
import { PageConfig } from "../types";

export async function getConfig(): Promise<PageConfig[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pages);
    }, 3000);
  });
}
