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

  function resolvePromise(data: T) {
    dispatch({ type: 'mutated', payload: data });
    onSuccess?.(data);
  }
  function rejectPromise(error: Error) {
    dispatch({ type: 'error', payload: error });
    onError?.(error);
  }

  const mutate = (params: P) => {
    if (!mutation) return;

    dispatch({ type: 'loading' });

    mutation(params).then(resolvePromise, rejectPromise);
  };

  const mutateAsync = async (params: P) => {
    dispatch({ type: 'loading' });

    return mutation(params).then((data) => {
      resolvePromise(data);

      return data;
    });
  };

  return { ...state, mutate, mutateAsync, isLoading: state.status === 'loading' };
}

export default useMutation;
