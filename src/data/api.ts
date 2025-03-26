import { PageConfig } from "../types";

export async function getPages(): Promise<PageConfig[]> {
  const response = await fetch("http://127.0.0.1:1880/config");

  return await response.json();
}
