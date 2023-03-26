import { useReducer } from 'react';

type Status = 'init' | 'loading' | 'mutated' | 'error';

interface State<T> {
  data?: T;
  status: Status;
  error?: Error;
}

type Action<T> =
  | { type: 'loading' }
  | { type: 'mutated'; payload: T }
  | { type: 'error'; payload: Error };

interface UseMutationProps<T, P> {
  mutation: (params: P) => Promise<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: unknown) => void;
}

function useMutation<T = unknown, P = unknown>({
  mutation,
  onSuccess,
  onError,
}: UseMutationProps<T, P>) {
  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    status: 'init',
  };

  const mutateReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, status: 'loading' };
      case 'mutated':
        return { ...initialState, status: 'mutated', data: action.payload };
      case 'error':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(mutateReducer, initialState);

  const mutate = async (params: P) => {
    dispatch({ type: 'loading' });

    try {
      const data = await mutation(params);

      dispatch({ type: 'mutated', payload: data });
      onSuccess?.(data);
    } catch (error: unknown) {
      if (isError(error) && error.name === 'AbortError') {
        return;
      }

      dispatch({ type: 'error', payload: error as Error });
      onError?.(error);
    }
  };

  return { ...state, mutate, isLoading: state.status === 'loading' };
}

const isError = (args: any): args is Error => args !== undefined;

export default useMutation;
