import { useEffect, useReducer } from 'react';

import { getCachedData, isOverCacheTime, setCachedData } from 'storages/memory';

interface State<T> {
  data?: T;
  isLoading: boolean;
  error?: Error;
}

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error };

interface UseFetchProps {
  url: string;
  options?: RequestInit;
  cacheTime?: number;
  key?: string;
}

function useFetch<T = unknown>({ url, options, cacheTime, key }: UseFetchProps): State<T> {
  const cacheKey = key ?? url;

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    isLoading: false,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, isLoading: true };
      case 'fetched':
        return { ...initialState, data: action.payload };
      case 'error':
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    const abortController = new AbortController();

    const fetchData = async () => {
      dispatch({ type: 'loading' });

      const cachedData = getCachedData<T>(cacheKey);

      if (cachedData && !isOverCacheTime(cacheKey)) {
        dispatch({ type: 'fetched', payload: cachedData });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;

        setCachedData({ key: cacheKey, data, cacheTime });

        dispatch({ type: 'fetched', payload: data });
      } catch (error: unknown) {
        if (isError(error) && error.name === 'AbortError') {
          return;
        }

        dispatch({ type: 'error', payload: error as Error });
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
}

const isError = (args: any): args is Error => args !== undefined;

export default useFetch;
