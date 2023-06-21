/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export interface IFetcherResponse<T> {
  data: T;
  status: number;
}

const fetcher = {
  get: async <T>(url: string) => {
    return axios.get(url) as Promise<IFetcherResponse<T>>;
  },
  post: async <T>(url: string, data: any) => {
    return axios.post(url, { data }) as Promise<IFetcherResponse<T>>;
  },
  put: async <T>(url: string, data: any) => {
    return axios.put(url, { data }) as Promise<IFetcherResponse<T>>;
  },
  patch: async <T>(url: string, data: any) => {
    return axios.patch(url, { data }) as Promise<IFetcherResponse<T>>;
  },
  delete: async <T>(url: string, data: any) => {
    return axios.delete(url, { data }) as Promise<IFetcherResponse<T>>;
  },
};

export default fetcher;
