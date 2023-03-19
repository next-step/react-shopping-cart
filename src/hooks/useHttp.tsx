import { useReducer, useCallback } from 'react';

type HttpActionType =
  | { type: 'SEND' }
  | { type: 'SUCCESS'; responseData: unknown }
  | { type: 'ERROR'; errorMessage: string };

type State = {
  status: 'pending' | 'completed';
  data: null | any;
  error: null | string;
};
const initialState: State = {
  status: 'pending',
  data: null,
  error: null,
};

function httpReducer(state: State, action: HttpActionType): State {
  if (action.type === 'SEND') {
    return {
      data: null,
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
      data: null,
      error: action.errorMessage,
      status: 'completed',
    };
  }

  return state;
}

function useHttp<T>(
  requestFunction: (payload: unknown) => Promise<T>,
  startWithPending = false
) {
  const [httpState, dispatch] = useReducer(httpReducer, initialState);

  const sendRequest = useCallback(
    async function (requestData: unknown) {
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
    ...httpState,
  };
}

export default useHttp;
