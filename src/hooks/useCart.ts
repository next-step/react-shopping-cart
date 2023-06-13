import { ICart } from "../domain/types";
import { CART } from "../domain/constants";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../recoil/atoms";
import { allCheckedProductsSelector, checkedItemsSelector, estimatedPriceSelector } from "../recoil/selector";
import fetcher from "../utils/fetcher";
import { ICartResponse } from "../domain/types/response";
import { ICartItemUI } from "../components";

export type TCartDataHandlers = {
  insertItems: (items: ICartItemUI[]) => void;
  updateItems: (items: ICartItemUI[]) => void;
  deleteItems: (items: ICartItemUI[]) => void;

  insertItem: (item: ICartItemUI) => void;
  updateItem: (item: ICartItemUI) => void;
  deleteItem: (item: ICartItemUI) => void;
};

type THookCartDataHandlers = () => {
  cart: ICart;
  cartDataHandlers: TCartDataHandlers;
  checkedItems: ICartItemUI[];
  allChecked: boolean;
  estimatedPrice: number;
  fetchCartItems: () => void;
};

const {
  PRODUCTS: { QUANTITY_UNIT },
} = CART;

const sortItems = (items: ICartItemUI[]) =>
  items.sort((a, b) => (b.product.createdAt || 0) - (a.product.createdAt || 0));

const insertAndUpdateItems = (oldItems: ICartItemUI[], newItems: ICartItemUI[], isIncreasingQuantity = false) => {
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

  const insertItems = (newItems: ICartItemUI[]) => {
    const items = insertAndUpdateItems(cart.items, newItems, true);

    setCart({
      ...cart,
      items,
    });
  };

  const updateItems = (newItems: ICartItemUI[]) => {
    const items = insertAndUpdateItems(cart.items, newItems);

    setCart({
      ...cart,
      items,
    });
  };

  const deleteItems = (items: ICartItemUI[]) => {
    const { items: oldItems } = cart;
    const ids = items.map(({ id }) => id);

    setCart({
      ...cart,
      items: oldItems.filter(({ id }) => !ids.includes(id)),
    });
  };

  const insertItem = (item: ICartItemUI) => insertItems([item]);
  const updateItem = (item: ICartItemUI) => updateItems([item]);
  const deleteItem = (item: ICartItemUI) => deleteItems([item]);

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
