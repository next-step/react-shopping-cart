import { useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

type UseMutationResult<TData, TPayload> = {
  data?: TData | null;
  error: string | null;
  isLoading: boolean;
  mutate: (payload?: TPayload) => Promise<void>;
};

const useCustomMutation = <TData, TPayload>(
  mutationFn: (payload?: TPayload) => Promise<AxiosResponse>
): UseMutationResult<TData, TPayload> => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (payload?: TPayload) => {
    setLoading(true);
    setData(null);
    setError(null);

    try {
      const response = await mutationFn(payload);
      setData(response.data);
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCustomMutation;
