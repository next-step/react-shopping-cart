import { axiosInstance } from 'apis';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface ReturnType<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | AxiosError | unknown;
  fetchData: <K>(
    payload?: K & AxiosRequestConfig<K>
  ) => Promise<AxiosResponse<T> | undefined>;
}

interface useAxiosProps {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  immediate?: boolean;
}

const useAxios = <T,>({
  url,
  method = 'get',
  immediate = true,
}: useAxiosProps): ReturnType<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown>(null);

  const fetchData = async <K,>(payload?: K & AxiosRequestConfig<K>) => {
    try {
      const response: AxiosResponse<T> = await axiosInstance[method](
        url,
        payload
      );
      setIsLoading(false);
      setData(response.data);
      return response;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setIsLoading(false);
        const errorMessage = err.response
          ? err.response.data.message
          : err.message;
        setError(errorMessage);
      } else {
        setIsLoading(false);

        throw new Error('axios error가 아닌 다른 에러가 발생했습니다.');
      }
    }
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [immediate]);

  return { isLoading, data, error, fetchData };
};

export default useAxios;
