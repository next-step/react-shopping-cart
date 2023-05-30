import axios, { AxiosInstance } from 'axios';

class Axios {
  instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 3_000,
    });
  }
}

const axiosInstance = new Axios(import.meta.env.MSW_BASE_URL);

export default axiosInstance;
