import { Store } from "@tanstack/react-store";
import { PageConfig } from "../types";
import {
  getLocalPageStore,
  setLocalPageStore,
  updateLocalPageStore,
} from "./local-storage";

export type PageStore = Record<string, PageConfig>;

export const pageStore = new Store<PageStore>(getLocalPageStore() ?? {});

function createPageStore(pages: PageConfig[]) {
  return pages.reduce((acc: PageStore, page) => {
    acc[page.id] = page;
    return acc;
  }, {});
}

export const updatePages = (pages: PageConfig[]) => {
  const newPages = createPageStore(pages);

  pageStore.setState((store) => {
    return {
      ...store,
      ...newPages,
    };
  });
  updateLocalPageStore(newPages);
};

export const setPages = (pages: PageConfig[]) => {
  const newStore = createPageStore(pages);

  pageStore.setState(() => newStore);
  setLocalPageStore(newStore);
};
