import { useQuery } from "@tanstack/react-query";
import { getPages } from "./api";
import { getLocalPages, setLocalPages } from "./local-storage";

export function usePages() {
  const { data, isPending, error } = useQuery({
    queryKey: ["config"],
    queryFn: getPages,
  });
  console.log(data);
  // If the api is successful, update the store
  if (data) {
    setLocalPages(data);
  }

  if (error) {
    console.error(error);
  }

  return {
    isPending,
    data: data ?? getLocalPages(),
    error,
  };
}
