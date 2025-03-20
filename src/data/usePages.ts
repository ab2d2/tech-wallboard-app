import { useQuery } from "@tanstack/react-query";
import { getConfig } from "../api/get-config";
import { PageStore, pageStore } from "./store";
import { useStore } from "@tanstack/react-store";

export function usePages() {
  const { data, isPending, error } = useQuery({
    queryKey: ["config"],
    queryFn: getConfig,
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
