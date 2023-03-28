import { useState } from 'react';
import { Method } from 'axios';
import client from '@/api/client';

interface UseMutationState<K> {
  loading: boolean;
  data?: K;
  error?: object;
}

type UseMutationResult<T, K> = [(data: T) => void, UseMutationState<K>];

type HttpMethod = Method;
function useMutation<T = any, K = any>(endpoint: string, method: HttpMethod): UseMutationResult<T, K> {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function customMutation(data?: T) {
    setState(prev => ({ ...prev, loading: true }));

    client(endpoint, {
      method: method,
      data: data === undefined ? {} : data,
    })
      .then(({ data }) => {
        setState(prev => ({ ...prev, data }));
      })
      .catch(error => setState(prev => ({ ...prev, error })))
      .finally(() => setState(prev => ({ ...prev, loading: false })));
  }

  return [customMutation, state];
}

export default useMutation;
