import { ChangeEvent, useMemo, useReducer } from "react";

import type { Product } from "@/api/products";
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
      type: "DELETE_ALL_CART_PRODUCTS";
    };

const cartProductsReducer = (states: CartGroup[], action: CartProductsAction) => {
  switch (action.type) {
    case "INCREASE_CART_PRODUCT_COUNT": {
      const findIdx = states.findIndex((state) => state.id === action.id);
      const increasedProduct = states[findIdx];
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
      return states.filter((state) => state.id !== action.id);
    }

    case "DELETE_ALL_CART_PRODUCTS": {
      return [];
    }
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

  const [cartProducts, dispatch] = useReducer(cartProductsReducer, cartProductsGroup);

  const { selectedItems, ...rest } = useItemSelector(cartProductsGroup);

  const onIncreaseCartProductCount = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    dispatch({ type: "INCREASE_CART_PRODUCT_COUNT", id: parseInt(target.id) });
  };

  return {
    cartProducts,
    selectedItems,
    onIncreaseCartProductCount,
    ...rest,
  };
};

export default useCartProductHandler;
