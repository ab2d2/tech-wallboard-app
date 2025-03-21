import { Store } from "@tanstack/store";
import { PageConfig } from "../types";

export type PageStore = Record<string, PageConfig>;

export const pageStore = new Store<PageStore | undefined>(undefined);
