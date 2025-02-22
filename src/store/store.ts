import { Store } from "@tanstack/store";
import { screens_config_data_initial_data_backup } from "../../public/screens_config_data";
import { flattenCategoriesConfigData } from "./utils";

export const store = new Store({
  config: flattenCategoriesConfigData(screens_config_data_initial_data_backup),
});
