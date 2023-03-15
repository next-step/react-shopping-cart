import axios, { AxiosInstance } from 'axios';

class Axios {
  instance: AxiosInstance;

  constructor(private baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 5000,
    });
  }
}

const axiosInstance = new Axios(import.meta.env.VITE_BASE_URL);

export default axiosInstance;
