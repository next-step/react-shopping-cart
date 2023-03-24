import axios from 'axios';
import { useState } from 'react';
import { reportError } from 'utils/error';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>('error');

  const sendRequest = async (url: string, method = 'GET') => {
    try {
      const { data } = await axios({
        url,
        method,
      });
      setIsLoading(false);
      return data;
    } catch (err) {
      reportError(err);
      setError(err);
    }
  };

  return { error, isLoading, sendRequest };
};
export default useFetch;
