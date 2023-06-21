import { useMutation, useQueryClient } from "react-query";
import { ICartItem } from "../domain/types";
import { requestDeleteItems, requestToggleItem, requestUpdateQuantity } from "../apis";
import { convertToViewError } from "../hooks/utils";
import { IResponseError } from "../domain/types/response";
import { useMemo } from "react";

type TProp =
  | {
      setError?: React.Dispatch<React.SetStateAction<string | null>>;
    }
  | undefined
  | null;

const useCartMutations = (prop: TProp) => {
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
    deleteItems: useMutation({
      mutationFn: (items: ICartItem[]) => requestDeleteItems(items),
      ...commonRequestEventHandler,
    }),
    toggleCheck: useMutation({
      mutationFn: ({ items, checked }: { items: ICartItem[]; checked: boolean }) => requestToggleItem(items, checked),
      ...commonRequestEventHandler,
    }),
    updateQuantity: useMutation({
      mutationFn: (item: ICartItem) => requestUpdateQuantity(item),
      ...commonRequestEventHandler,
    }),
  };
};

export default useCartMutations;
