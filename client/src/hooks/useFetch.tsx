import axios from 'axios';
import { useState, useCallback } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('error');

  const sendRequest = useCallback(async (url: string, method = 'GET') => {
    try {
      const { data } = await axios({
        url,
        method,
      });
      setIsLoading(false);
      return data;
    } catch (err: any) {
      setError(err);
    }
  }, []);

  return { error, isLoading, sendRequest };
};
export default useFetch;
