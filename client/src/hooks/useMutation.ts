import { useReducer } from 'react';
import { useCallbackRef } from 'hooks';

interface State<T> {
  data?: T;
  isLoading: boolean;
  error?: Error;
}

type Action<T> =
  | { type: 'loading' }
  | { type: 'mutated'; payload: T }
  | { type: 'error'; payload: Error };

interface UseMutationProps<T> {
  url: string;
  options?: RequestInit;
  onSuccess?: (data: T) => void;
  onError?: (error: unknown) => void;
}

function useMutation<T = unknown, P = unknown>({
  url,
  options,
  onSuccess: onSuccessProp,
  onError: onErrorProp,
}: UseMutationProps<T>) {
  const handleSuccess = useCallbackRef(onSuccessProp);
  const handleError = useCallbackRef(onErrorProp);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    isLoading: false,
  };

  const mutateReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, isLoading: true };
      case 'mutated':
        return { ...initialState, data: action.payload };
      case 'error':
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(mutateReducer, initialState);

  const mutate = async (requestBody: P) => {
    dispatch({ type: 'loading' });

    try {
      const response = await fetch(url, { ...options, body: JSON.stringify(requestBody) });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = (await response.json()) as T;

      dispatch({ type: 'mutated', payload: data });
      handleSuccess?.(data);
    } catch (error: unknown) {
      if (isError(error) && error.name === 'AbortError') {
        return;
      }

      dispatch({ type: 'error', payload: error as Error });
      handleError?.(error);
    }
  };

  return { ...state, mutate };
}

const isError = (args: any): args is Error => args !== undefined;

export default useMutation;
