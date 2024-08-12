import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_LOCAL_DEV,
  timeout: 1000,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
