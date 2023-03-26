import { useCallback, useReducer } from 'react';

type RequestFunction<T> = (payload: unknown) => Promise<T>;

type HttpActionType<Data> =
  | { type: 'SEND' }
  | {
      type: 'SUCCESS';
      responseData?: Awaited<ReturnType<RequestFunction<Data>>>;
    }
  | { type: 'ERROR'; errorMessage: string };

type State<Data> = {
  status: 'ready' | 'pending' | 'completed';
  data?: Awaited<ReturnType<RequestFunction<Data>>>;
  error: null | string;
};

const initialState: State<any> = {
  status: 'ready',
  data: undefined,
  error: null,
};

const httpReducer = <Data>(
  state: State<Data>,
  action: HttpActionType<Data>
): State<Data> => {
  switch (action.type) {
    case 'SEND':
      return {
        data: undefined,
        error: null,
        status: 'pending',
      };
    case 'SUCCESS':
      return {
        data: action.responseData,
        error: null,
        status: 'completed',
      };
    case 'ERROR':
      return {
        data: undefined,
        error: action.errorMessage,
        status: 'completed',
      };
    default:
      return state;
  }
};

function useHttp<ResponseData>(requestFunction: RequestFunction<ResponseData>) {
  const [httpState, dispatch] = useReducer<typeof httpReducer<ResponseData>>(
    httpReducer,
    initialState
  );
  const loading = httpState.status === 'pending';

  const sendRequest = useCallback(
    async function (requestData?: unknown) {
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFunction(requestData);

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
