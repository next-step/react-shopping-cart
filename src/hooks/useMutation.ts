import { useState } from 'react';
import { AxiosError, Method } from 'axios';
import client from '@/api/client';

type FetchStatus = 'IDLE' | 'FETCHING' | 'SUCCESS' | 'FAIL' | 'END';
interface UseMutationState<K> {
  fetchStatus?: FetchStatus;
  loading: boolean;
  data?: K;
  error?: AxiosError<{ ok: false; message?: string }>;
}

type UseMutationResult<T, K> = [(data: T) => void, UseMutationState<K>];

type HttpMethod = Method;
function useMutation<T = any, K = any>(endpoint: string, method: HttpMethod): UseMutationResult<T, K> {
  const [state, setState] = useState<UseMutationState<K>>({
    fetchStatus: 'IDLE',
    loading: false,
    data: undefined,
    error: undefined,
  });

  function customMutation(data?: T) {
    setState(prev => ({ ...prev, loading: true, fetchStatus: 'FETCHING' }));

    client(endpoint, {
      method: method,
      data: data === undefined ? {} : data,
    })
      .then(({ data }) => {
        setState(prev => ({ ...prev, data, fetchStatus: 'SUCCESS' }));
      })
      .catch(error => setState(prev => ({ ...prev, error, fetchStatus: 'FAIL' })))
      .finally(() => setState(prev => ({ ...prev, loading: false, FetchStatus: 'END' })));
  }

  return [customMutation, state];
}

export default useMutation;
