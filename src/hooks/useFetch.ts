import { useCallback, useEffect, useState } from 'react';
import axiosRequest from '../api/axios';
import { AxiosError } from 'axios';

const useFetch = (url: string) => {
  const [payload, setPayload] = useState<any | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axiosRequest.get(url);
      setPayload(response.data);
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, []);

  return { payload, isLoading, error };
};

export default useFetch;
