import axios from "axios";

const fetcher = {
  get: async <T>(url: string) => {
    const response = await axios.get(url);
    return response.data as T;
  },
  post: async <T>(url: string) => {
    const response = await axios.post(url);
    return response.data as T;
  },
  put: async <T>(url: string) => {
    const response = await axios.put(url);
    return response.data as T;
  },
  patch: async <T>(url: string) => {
    const response = await axios.patch(url);
    return response.data as T;
  },
  delete: async <T>(url: string) => {
    const response = await axios.patch(url);
    return response.data as T;
  },
};

export default fetcher;
