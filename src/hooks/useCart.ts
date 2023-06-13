import { ICart, ICartItem } from "../domain/shopping-cart/types";
import { CART } from "../domain/shopping-cart/constants";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../recoil/atoms";
import { allCheckedProductsSelector, checkedProductsSelector, estimatedPriceSelector } from "../recoil/selector";
import fetcher from "../utils/fetcher";
import { ICartResponse } from "../domain/shopping-cart/types/response";

export type TCartDataHandlers = {
  insertItems: (items: ICartItem[]) => void;
  updateItems: (items: ICartItem[]) => void;
  deleteItems: (items: ICartItem[]) => void;

  insertItem: (item: ICartItem) => void;
  updateItem: (item: ICartItem) => void;
  deleteItem: (item: ICartItem) => void;
};

type THookCartDataHandlers = () => {
  cart: ICart;
  cartDataHandlers: TCartDataHandlers;
  checkedProducts: ICartItem[];
  allChecked: boolean;
  estimatedPrice: number;
  fetchCartItems: () => void;
};

const {
  PRODUCTS: { QUANTITY_UNIT },
} = CART;

const sortItems = (items: ICartItem[]) => items.sort((a, b) => (b.product.createdAt || 0) - (a.product.createdAt || 0));

const insertAndUpdateItems = (oldItems: ICartItem[], newItems: ICartItem[], isIncreasingQuantity = false) => {
  const currentTime = Date.now();
  const newProductIds = newItems.map(({ id }) => id);

  return [
    ...newItems.map((item) => {
      const oldItem = oldItems.find(({ id }) => id === item.id);
      if (oldItem) {
        return {
          ...item,
          product: {
            ...item.product,
            quantity: isIncreasingQuantity ? (oldItem?.product.quantity || 0) + QUANTITY_UNIT : item.product.quantity,
            updatedAt: currentTime,
          },
        };
      }
      return {
        ...item,
        product: {
          ...item.product,
          amount: 1,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
      };
    }),
    ...oldItems.filter(({ id }) => !newProductIds.includes(id)),
  ];
};

const useCartDataHandlers: THookCartDataHandlers = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const insertItems = (newItems: ICartItem[]) => {
    const items = insertAndUpdateItems(cart.items, newItems, true);
    sortItems(items);
    deleteItems;
    setCart({
      ...cart,
      items,
    });
  };

  const updateItems = (newItems: ICartItem[]) => {
    const items = insertAndUpdateItems(cart.items, newItems);

    deleteItems(items);

    setCart({
      ...cart,
      items,
    });
  };

  const deleteItems = (items: ICartItem[]) => {
    const { items: oldItems } = cart;
    const ids = items.map(({ id }) => id);

    setCart({
      ...cart,
      items: oldItems.filter(({ id }) => !ids.includes(id)),
    });
  };

  const insertItem = (item: ICartItem) => insertItems([item]);
  const updateItem = (item: ICartItem) => updateItems([item]);
  const deleteItem = (item: ICartItem) => deleteItems([item]);

  const fetchCartItems = async () => {
    const response = await fetcher.get<ICartResponse>("/api/cart");
    setCart(response.cart);
  };

  const cartDataHandlers = {
    insertItems,
    updateItems,
    deleteItems,

    insertItem,
    updateItem,
    deleteItem,
  };

  const checkedProducts = useRecoilValue(checkedProductsSelector);
  const allChecked = useRecoilValue(allCheckedProductsSelector);
  const estimatedPrice = useRecoilValue(estimatedPriceSelector);

  return { cart, cartDataHandlers, checkedProducts, allChecked, estimatedPrice, fetchCartItems };
};

export default useCartDataHandlers;
