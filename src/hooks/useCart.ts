import { ICart, ICartItem } from "../domain/shopping-cart/types";
import { CART } from "../domain/shopping-cart/constants";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../recoil/atoms";
import { allCheckedProductsSelector, checkedItemsSelector, estimatedPriceSelector } from "../recoil/selector";
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
  checkedItems: ICartItem[];
  allChecked: boolean;
  estimatedPrice: number;
  fetchCartItems: () => void;
};

const {
  PRODUCTS: { QUANTITY_UNIT },
} = CART;

const sortItems = (items: ICartItem[]) => items.sort((a, b) => (b.product.createdAt || 0) - (a.product.createdAt || 0));

const insertAndUpdateItems = (oldItems: ICartItem[], newItems: ICartItem[], isIncreasingQuantity = false) => {
  const newProductIds = newItems.map(({ id }) => id);

  const items = [
    ...newItems.map((item) => {
      const oldItem = oldItems.find(({ id }) => id === item.id);
      if (oldItem) {
        return {
          ...item,
          product: {
            ...item.product,
            quantity: isIncreasingQuantity ? (oldItem?.product.quantity || 0) + QUANTITY_UNIT : item.product.quantity,
          },
        };
      }

      return {
        ...item,
        product: {
          ...item.product,
          quantity: item.product?.quantity || CART.PRODUCTS.MIN_QUANTITY,
        },
      };
    }),

    ...oldItems.filter(({ id }) => !newProductIds.includes(id)),
  ];

  return sortItems(items);
};

const useCartDataHandlers: THookCartDataHandlers = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const insertItems = (newItems: ICartItem[]) => {
    const items = insertAndUpdateItems(cart.items, newItems, true);

    setCart({
      ...cart,
      items,
    });
  };

  const updateItems = (newItems: ICartItem[]) => {
    const items = insertAndUpdateItems(cart.items, newItems);

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

  const checkedItems = useRecoilValue(checkedItemsSelector);
  const allChecked = useRecoilValue(allCheckedProductsSelector);
  const estimatedPrice = useRecoilValue(estimatedPriceSelector);

  return { cart, cartDataHandlers, checkedItems, allChecked, estimatedPrice, fetchCartItems };
};

export default useCartDataHandlers;
