import { PageConfig } from "../types";
import { mockPages } from "./mock_chart_data";

type PageStore = Record<string, PageConfig>;

const key = "pages";

export function getLocalPageStore(): PageStore | undefined {
  const data = localStorage.getItem(key);
  if (!data) return undefined;

  return JSON.parse(data);
}

export function getLocalPages(): PageConfig[] {
  const store = getLocalPageStore();

  // A temporary measure for development purposes to show pages even if there's nothing in local storage
  if (!store) return mockPages;

  return Object.values(store);
}

export function setLocalPages(pages: PageConfig[]) {
  const pageStore: PageStore = pages.reduce((store, page) => {
    store[page.id] = page;
    return store;
  }, {} as PageStore);

  setLocalPageStore(pageStore);
}

export function setLocalPageStore(store: PageStore) {
  localStorage.setItem(key, JSON.stringify(store));
}

export function setLocalPage(page: PageConfig) {
  let pageStore = getLocalPageStore();

  if (pageStore) {
    pageStore[page.id] = page;
    setLocalPageStore(pageStore);
  } else {
    pageStore = {
      [page.id]: page,
    };
    setLocalPageStore(pageStore);
  }

  return Object.keys(pageStore).indexOf(page.id);
}
