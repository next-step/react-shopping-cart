import { useMemo } from "react";
import { CART } from "../../domain/constants";
import useCartMutations from "../../mutations/useCartMutations";
import useCartQuery from "../../queries/useCartQuery";
import { convertToViewError } from "../utils";
import { IResponseError } from "../../domain/types/response";

const useCart = () => {
  const { status, data, error: queryError, refetch } = useCartQuery();
  const { deleteItems, toggleCheck, updateQuantity } = useCartMutations(null);
  const error = convertToViewError(queryError as IResponseError);

  const cart = useMemo(() => data?.cart || { items: [] }, [data]);

  const allChecked = useMemo(() => cart.items?.every(({ checked }) => !!checked) || false, [cart]);
  const checkedItems = useMemo(() => cart.items?.filter(({ checked }) => checked) || [], [cart]);
  const estimatedPrice = useMemo(
    () =>
      checkedItems.reduce(
        (result, current) =>
          result + current.product.price * (current.product.quantity ?? CART.PRODUCTS.DEFAULT_INITIAL_QUANTITY),
        0
      ) || 0,
    [checkedItems]
  );

  return {
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
  };
};

export default useCart;
