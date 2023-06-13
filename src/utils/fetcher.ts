import axios from "axios";

const fetcher = {
  get: async <T>(url: string) => {
    const response = await axios.get(url);
    return response.data as T;
  },
};

export default fetcher;
