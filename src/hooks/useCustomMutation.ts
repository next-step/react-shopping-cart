import { useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

type UseMutationResultType<TData, TPayload> = {
  data?: TData | null;
  error: string | null;
  loading: boolean;
  mutate: (payload?: TPayload) => Promise<void>;
};

const useCustomMutation = <TData, TPayload>(
  mutationFn: (payload?: TPayload) => Promise<AxiosResponse>
): UseMutationResultType<TData, TPayload> => {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(true);
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
    loading,
    mutate,
  };
};

export default useCustomMutation;
