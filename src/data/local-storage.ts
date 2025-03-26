import { PageConfig } from "../types";

const key = "pages";

type PageStore = Record<string, PageConfig>;

function getPageStore(): PageStore | undefined {
  const data = localStorage.getItem(key);
  if (!data) return undefined;

  return JSON.parse(data);
}

function setPageStore(store: PageStore) {
  localStorage.setItem(key, JSON.stringify(store));
}

export function getLocalPages(): PageConfig[] | undefined {
  const pageStore = getPageStore();
  if (!pageStore) return undefined;

  return Object.values(pageStore);
}

export function setLocalPages(pages: PageConfig[]) {
  const pageMap = pages.reduce((acc: PageStore, page) => {
    acc[page.id] = page;
    return acc;
  }, {});

  setPageStore(pageMap);
}

export function getLocalPage(id: string): PageConfig | undefined {
  const pageStore = getPageStore();
  if (!pageStore) return undefined;

  return pageStore[id];
}

export function setLocalPage(page: PageConfig) {
  const pageStore = getPageStore();

  if (pageStore) {
    pageStore[page.id] = page;
    setPageStore(pageStore);
  }
}
