import { useCallback, useEffect, useState } from 'react';
import axiosRequest from '../api/axios';
import { AxiosError } from 'axios';

type UseQueryResult<TData> = {
  data?: TData | null;
  error: string | null;
  isLoading: boolean;
};

const useCustomQuery = <TData>(url: string): UseQueryResult<TData> => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setData(null);
    setError(null);
    try {
      const response = await axiosRequest.get(url);
      setData(response.data);
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useCustomQuery;
