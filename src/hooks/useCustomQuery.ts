import { useCallback, useEffect, useState } from 'react';
import httpRequest from '../api/httpRequest';
import { AxiosError } from 'axios';

type UseQueryResult<TData> = {
  data?: TData | null;
  error: string | null;
  loading: boolean;
};

const useCustomQuery = <TData>(url: string): UseQueryResult<TData> => {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setData(null);
    setError(null);
    try {
      const response = await httpRequest.get(url);
      setData(response.data);
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useCustomQuery;
