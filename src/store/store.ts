import { Store } from "@tanstack/store";
import { pages } from "../data/chart_data";

export const store = new Store({
  config: pages,
});
