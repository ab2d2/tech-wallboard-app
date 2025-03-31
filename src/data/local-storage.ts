import { PageConfig } from "../types";
import { PageStore } from "./page-store";

const key = "pages";

export function getLocalPageStore(): PageStore | undefined {
  const data = localStorage.getItem(key);
  if (!data) return undefined;

  return JSON.parse(data);
}

export function updateLocalPageStore(newPages: PageStore) {
  const store = getLocalPageStore();

  setLocalPageStore({
    ...store,
    ...newPages,
  });
}

export function setLocalPageStore(store: PageStore) {
  localStorage.setItem(key, JSON.stringify(store));
}

export function setLocalPage(page: PageConfig) {
  const pageStore = getLocalPageStore();

  if (pageStore) {
    pageStore[page.id] = page;
    setLocalPageStore(pageStore);
  }
}
