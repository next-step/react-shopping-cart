import { fetchUrl } from './fetchUrl';

export function useSuspenseFetch<T>(url: string, asyncFunction: () => Promise<T>) {
  return fetchUrl<T>(url, asyncFunction);
}
