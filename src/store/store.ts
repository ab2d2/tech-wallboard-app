import { Store } from "@tanstack/store";
import { screens_config_data_initial_data_backup } from "../../public/screens_config_data";

export const store = new Store({
  config: screens_config_data_initial_data_backup,
});
