import { useMemo, useRef } from "react";
import { CART } from "../../domain/constants";
import { ICartItem } from "../../domain/types";
import { IResponseError } from "../../domain/types/response";
import { convertToViewError } from "../utils";
import useCartMutations from "../../mutations/useCartMutations";
import useCartQuery from "../../queries/useCartQuery";

const useCart = () => {
  const pageRef = useRef(0);

  const { status, data, error: queryError, refetch, fetchNextPage, hasNextPage } = useCartQuery();

  const { deleteItems, toggleCheck, updateQuantity } = useCartMutations(null);
  const error = convertToViewError(queryError as IResponseError);

  const cart = useMemo(
    () => ({
      items:
        data?.pages.reduce((result, current) => {
          return [...result, ...current.items];
        }, [] as ICartItem[]) ?? [],
    }),
    [data],
  );

  const allChecked = useMemo(() => cart.items?.every(({ checked }) => !!checked) || false, [cart]);
  const checkedItems = useMemo(() => cart.items?.filter(({ checked }) => checked) || [], [cart]);
  const estimatedPrice = useMemo(
    () =>
      checkedItems.reduce(
        (result, current) =>
          result + current.product.price * (current.product.quantity ?? CART.PRODUCTS.DEFAULT_INITIAL_QUANTITY),
        0,
      ) || 0,
    [checkedItems],
  );

  return {
    pageRef,

    status,
    error,
    refetch,
    cart,

    values: {
      checkedItems,
      allChecked,
      estimatedPrice,
    },

    mutations: {
      deleteItems,
      toggleCheck,
      updateQuantity,
    },

    queries: {
      fetchNextPage,
      hasNextPage,
    },
  };
};

export default useCart;
