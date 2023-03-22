import { fetchUrl } from './fetchUrl';

export function useSuspenseFetch(url: string, asyncFunction: () => Promise<any>) {
  return fetchUrl(url, asyncFunction);
}
