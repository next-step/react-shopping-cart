import axios, { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from "axios";

const axiosParams: CreateAxiosDefaults = {
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
};

const axiosInstance = axios.create(axiosParams);

const api = (axiosInstance: AxiosInstance) => ({
  get<T>(url: string, config: AxiosRequestConfig = {}) {
    return axiosInstance.get<T>(url, config);
  },
  post<T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
    return axiosInstance.post<T>(url, body, config);
  },
  delete<T>(url: string, config: AxiosRequestConfig = {}) {
    return axiosInstance.delete<T>(url, config);
  },
});

export default api(axiosInstance);
