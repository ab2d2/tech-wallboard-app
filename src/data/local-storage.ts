import { PageConfig } from "../types";

type PageStore = Record<string, PageConfig>;

const key = "pages";

export function getLocalPageStore(): PageStore | undefined {
  const data = localStorage.getItem(key);
  if (!data) return undefined;

  return JSON.parse(data);
}

export function getLocalPages(): PageConfig[] {
  const store = getLocalPageStore();

  if (!store) return [];

  return Object.values(store);
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
