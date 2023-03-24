import axios from 'axios';
import { useEffect, useState } from 'react';

import type { ResponseReturn } from '@/api';
import type { AxiosError } from 'axios';

function useFetch<T>(endpoint: string, deps: unknown[] = []) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<ResponseReturn<T> | undefined>(undefined);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get<ResponseReturn<T>>(endpoint)
      .then(({ data }) => {
        console.log(data);
        setState(data);
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint, ...deps]);

  return {
    state,
    loading,
    error,
  };
}

export default useFetch;
