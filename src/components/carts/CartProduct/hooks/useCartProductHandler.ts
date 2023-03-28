import { useEffect, useMemo, useReducer } from "react";

import { Cart, deleteCart, deleteCarts } from "@/api/carts";
import type { Product } from "@/api/products";
import { withAsync } from "@/helpers";
import { useItemSelector } from "@/hooks";
import { useFetchCartProducts } from "@/hooks/api";

export interface CartGroup extends Omit<Product, "id"> {
  id: number;
  productId: Product["id"];
  count: number;
}

type CartProductsAction =
  | ((
      | {
          type: "INCREASE_CART_PRODUCT_COUNT";
        }
      | {
          type: "DECREASE_CART_PRODUCT_COUNT";
        }
      | {
          type: "DELETE_CART_PRODUCT";
        }
    ) & { id: number })
  | {
      type: "DELETE_CART_PRODUCTS";
      selectedCartIds: Set<string>;
    }
  | {
      type: "INITIATE_CART_PRODUCTS";
      payload: CartGroup[];
    };

const cartProductsReducer = (states: CartGroup[], action: CartProductsAction) => {
  switch (action.type) {
    case "INCREASE_CART_PRODUCT_COUNT": {
      const findIdx = states.findIndex((state) => state.id === action.id);
      const increasedProduct = states[findIdx];

      if (increasedProduct.count >= 20) {
        return states;
      }

      increasedProduct.count += 1;

      return [...states.slice(0, findIdx), increasedProduct, ...states.slice(findIdx + 1)];
    }

    case "DECREASE_CART_PRODUCT_COUNT": {
      const findIdx = states.findIndex((state) => state.id === action.id);
      const decreasedProduct = states[findIdx];

      if (decreasedProduct.count <= 0) {
        return states;
      }

      decreasedProduct.count -= 1;

      return [...states.slice(0, findIdx), decreasedProduct, ...states.slice(findIdx + 1)];
    }

    case "DELETE_CART_PRODUCT": {
      return states.filter((state) => state.productId !== action.id);
    }

    case "DELETE_CART_PRODUCTS": {
      return states.filter((state) => !action.selectedCartIds.has(state.id.toString()));
    }

    case "INITIATE_CART_PRODUCTS": {
      return action.payload;
    }

    default:
      return states;
  }
};

const useCartProductHandler = () => {
  const { cartProducts: initialCartProducts } = useFetchCartProducts();

  const cartProductsGroup = useMemo(() => {
    return initialCartProducts.reduce((acc, { product }, index) => {
      const { id, ...restProductKey } = product;
      const curCartProductIndex = acc.findIndex((prevCartProduct) => prevCartProduct.productId === id);

      if (curCartProductIndex === -1) {
        return [...acc, { id: Date.now() + index, productId: id, ...restProductKey, count: 1 }];
      } else {
        const updatedProduct = { ...acc[curCartProductIndex], count: acc[curCartProductIndex].count + 1 };
        return [...acc.slice(0, curCartProductIndex), updatedProduct, ...acc.slice(curCartProductIndex + 1)];
      }
    }, [] as CartGroup[]);
  }, [initialCartProducts]);

  const { selectedItems, ...rest } = useItemSelector(cartProductsGroup);
  const [cartProducts, dispatch] = useReducer(cartProductsReducer, cartProductsGroup);

  useEffect(() => {
    dispatch({ type: "INITIATE_CART_PRODUCTS", payload: cartProductsGroup });
  }, [cartProductsGroup]);

  const checkedTotalPrice = useMemo(() => {
    return cartProducts.reduce((prevTotalPrice, { id, price, count }) => {
      if (selectedItems.has(id.toString())) {
        return prevTotalPrice + price * count;
      }
      return prevTotalPrice;
    }, 0);
  }, [cartProducts, selectedItems]);

  const onIncreaseCartProductCount = (id: number) => () => {
    dispatch({ type: "INCREASE_CART_PRODUCT_COUNT", id });
  };

  const onDecreaseCartProductCount = (id: number) => () => {
    dispatch({ type: "DECREASE_CART_PRODUCT_COUNT", id });
  };

  const onDeleteCartProduct = (productId: number) => async () => {
    const { error } = await withAsync(() => deleteCart(productId));

    if (!error) {
      dispatch({ type: "DELETE_CART_PRODUCT", id: productId });
    }
  };

  const onDeleteCartProducts = async () => {
    const selectedProductIds = cartProducts.reduce((acc, { id, productId }) => {
      if (selectedItems.has(id.toString())) {
        return [...acc, productId];
      }
      return acc;
    }, [] as number[]);

    const { error } = await withAsync(() => deleteCarts(selectedProductIds));

    if (!error) {
      dispatch({ type: "DELETE_CART_PRODUCTS", selectedCartIds: selectedItems });
    }

    console.log(error);
  };

  return {
    cartProducts,
    selectedItems,
    onIncreaseCartProductCount,
    onDecreaseCartProductCount,
    onDeleteCartProduct,
    onDeleteCartProducts,
    checkedTotalPrice,
    ...rest,
  };
};

export default useCartProductHandler;
