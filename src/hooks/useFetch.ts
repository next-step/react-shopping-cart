import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(endpoint: string, deps: unknown[] = []) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({});
  const [error, setError] = useState('');

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
