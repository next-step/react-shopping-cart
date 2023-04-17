import { useEffect, useReducer, useState } from 'react';

import { getCachedData, isOverCacheTime, setCachedData } from 'storages/memory';
import { PaginationParams, BasePagination } from 'types/api';

type Status = 'init' | 'loading' | 'pending' | 'fetched' | 'error';

interface State<T> {
  data?: BasePagination<T>[];
  status: Status;
  promise?: Promise<void>;
  error?: Error;
}

type Action<T> =
  | { type: 'loading' }
  | { type: 'pending'; payload: any }
  | { type: 'fetched'; payload: BasePagination<T>[] }
  | { type: 'error'; payload: Error };

interface UseFetchProps<T> {
  fetcher: (params: PaginationParams) => Promise<BasePagination<T>>;
  size?: number;
  cacheTime?: number;
  cacheKey: string;
  onSuccess?: (data: BasePagination<T>) => void;
  onError?: (error: Error) => void;
}

function useInfiniteFetch<T = unknown>({
  fetcher,
  size = 10,
  cacheKey,
  cacheTime,
  onSuccess,
  onError,
}: UseFetchProps<T>) {
  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    status: 'init',
    promise: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, status: 'loading' };
      case 'pending': {
        return { ...initialState, status: 'pending', promise: action.payload };
      }
      case 'fetched':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'error':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [page, setPage] = useState<number | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  function refetch() {
    setShouldRefetch((prevState) => !prevState);
  }

  function resolvePromise(data: BasePagination<T>) {
    const newData = state.data ? [...state.data, data] : [data];

    setCachedData({ key: cacheKey, data: newData, cacheTime });
    setPage(data.pageNumber);
    setHasNextPage(!data.isLastPage);

    dispatch({ type: 'fetched', payload: newData });

    onSuccess?.(data);
  }
  function rejectPromise(error: Error) {
    dispatch({ type: 'error', payload: error });

    onError?.(error);
  }

  function fetchMore() {
    if (!hasNextPage) return;

    const newPage = page !== null ? page + 1 : 0;

    dispatch({
      type: 'pending',
      payload: fetcher({ page: newPage, size }).then(resolvePromise, rejectPromise),
    });
  }

  useEffect(() => {
    if (!fetcher) return;
    if (!hasNextPage) return;

    dispatch({ type: 'loading' });

    const cachedData = getCachedData<BasePagination<T>[]>(cacheKey);

    if (cachedData && !isOverCacheTime(cacheKey)) {
      dispatch({ type: 'fetched', payload: cachedData });

      setPage(cachedData[cachedData.length - 1].pageNumber);
      setHasNextPage(!cachedData[cachedData.length - 1].isLastPage);

      return;
    }

    fetchMore();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher, shouldRefetch]);

  if (state.status === 'pending' && state.promise) {
    throw state.promise;
  }

  if (state.status === 'error') {
    throw state.error;
  }

  return {
    ...state,
    refetch,
    fetchMore,
    hasNextPage,
    isLoading: state.status === 'loading',
  };
}

export default useInfiniteFetch;
