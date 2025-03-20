import { useQuery } from "@tanstack/react-query";
import { getConfig } from "../api/get-config";

export function usePages() {
  return useQuery({
    queryKey: ["config"],
    queryFn: getConfig,
  });
}
