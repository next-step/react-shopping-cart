import { axiosInstance } from 'apis';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface ReturnType<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | AxiosError | unknown;
}

interface useAxiosProps {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
}

const useAxios = <T,>({
  url,
  method = 'get',
}: useAxiosProps): ReturnType<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown>(null);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<T> = await axiosInstance[method](url);
      setIsLoading(false);
      setData(response.data);
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
    fetchData();
  }, []);

  return { isLoading, data, error };
};

export default useAxios;
