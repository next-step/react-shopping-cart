import { useMemo } from "react";
import { useMutation, useQueryClient } from "react-query";
import { convertToViewError } from "../hooks/utils";
import { IResponseError } from "../domain/types/response";
import { ICartItem } from "../domain/types";
import { requestCheckout } from "../apis/checkout";

type TProp =
  | {
      setError?: React.Dispatch<React.SetStateAction<string | null>>;
    }
  | undefined
  | null;

const useCheckoutMutations = (prop: TProp) => {
  const setError = prop?.setError;

  const queryClient = useQueryClient();

  const commonRequestEventHandler = useMemo(
    () => ({
      onSuccess() {
        queryClient.invalidateQueries();
      },
      onError(error: IResponseError) {
        setError?.(convertToViewError(error).message);
      },
    }),
    [queryClient]
  );

  return {
    checkoutItems: useMutation({
      mutationFn: (items: ICartItem[]) => requestCheckout(items),
      ...commonRequestEventHandler,
    }),
  };
};

export default useCheckoutMutations;
