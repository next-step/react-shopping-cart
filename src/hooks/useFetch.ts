import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

function useFetch<T>(endpoint: string, deps: unknown[] = []) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<T | undefined>(undefined);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(endpoint)
      .then(({ data }) => setState(data))
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
