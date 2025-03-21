import { useQuery } from "@tanstack/react-query";
import { getPages } from "../api/get-pages";
import { PageStore, pageStore } from "./store";
import { useStore } from "@tanstack/react-store";

export function usePages() {
  const { data, isPending, error } = useQuery({
    queryKey: ["config"],
    queryFn: getPages,
  });
  const store = useStore(pageStore);

  // If the api is successful, update the store
  // TODO: remove react-store, implement local file storage
  if (data) {
    pageStore.setState(() => {
      const pageMap = data.reduce((acc: PageStore, page) => {
        acc[page.id] = page;
        return acc;
      }, {});
      return pageMap;
    });
  }

  if (error) {
    console.error(error);
  }

  return {
    isPending,
    data: data ?? (store ? Object.values(store) : undefined),
    error,
  };
}
