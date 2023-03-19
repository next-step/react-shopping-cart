import { useReducer, useCallback, useMemo } from 'react';

type RequestFunction<T extends any> = (payload: unknown) => Promise<T | void>;

type HttpActionType<Data> =
  | { type: 'SEND' }
  | {
      type: 'SUCCESS';
      responseData?: Awaited<ReturnType<RequestFunction<Data>>>;
    }
  | { type: 'ERROR'; errorMessage: string };

type State<Data> = {
  status: 'pending' | 'completed';
  data?: Awaited<ReturnType<RequestFunction<Data>>>;
  error: null | string;
};

const initialState: State<null> = {
  status: 'pending',
  data: undefined,
  error: null,
};

function httpReducer<Data>(
  state: State<Data>,
  action: HttpActionType<Data>
): State<Data> {
  if (action.type === 'SEND') {
    return {
      data: undefined,
      error: null,
      status: 'pending',
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed',
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: undefined,
      error: action.errorMessage,
      status: 'completed',
    };
  }

  return state;
}

function useHttp<ResponseData>(requestFunction: RequestFunction<ResponseData>) {
  const [httpState, dispatch] = useReducer(httpReducer, initialState);
  const loading = useMemo(
    () => httpState.status !== 'completed',
    [httpState.status]
  );

  const sendRequest = useCallback(
    async function (requestData?: unknown) {
      dispatch({ type: 'SEND' });
      try {
        const responseData = (await requestFunction(
          requestData
        )) as ResponseData;
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error: Error | unknown) {
        if (!(error instanceof Error)) {
          dispatch({
            type: 'ERROR',
            errorMessage: 'Something went wrong!',
          });
          return;
        }
        dispatch({
          type: 'ERROR',
          errorMessage: error.message,
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    loading,
    ...httpState,
  };
}

export default useHttp;
