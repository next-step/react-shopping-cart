import { useRecoilState } from "recoil";
import { ICartItemUI } from "../../components";
import { CART } from "../../domain/constants";
import { cartState } from "../../recoil/atoms";

export type TCartItemsHandler = (items: ICartItemUI[]) => void;
export type TCartItemHandler = (item: ICartItemUI) => void;

export type TCartDataHandlers = {
  insertItems: TCartItemsHandler;
  updateItems: TCartItemsHandler;
  deleteItems: TCartItemsHandler;

  insertItem: TCartItemHandler;
  updateItem: TCartItemHandler;
  deleteItem: TCartItemHandler;
};

const useDataHandlers = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const insertItems = (newItems: ICartItemUI[]) => {
    const items = insertAndUpdateItems(cart.items, newItems, true);

    setCart({ ...cart, items });
  };

  const updateItems = (newItems: ICartItemUI[]) => {
    const items = insertAndUpdateItems(cart.items, newItems);

    setCart({ ...cart, items });
  };

  const deleteItems = (items: ICartItemUI[]) => {
    const { items: oldItems } = cart;
    const ids = items.map(({ id }) => id);

    setCart({ ...cart, items: oldItems.filter(({ id }) => !ids.includes(id)) });
  };

  const insertItem = (item: ICartItemUI) => insertItems([item]);
  const updateItem = (item: ICartItemUI) => updateItems([item]);
  const deleteItem = (item: ICartItemUI) => deleteItems([item]);

  return {
    insertItems,
    updateItems,
    deleteItems,

    insertItem,
    updateItem,
    deleteItem,
  };
};

export default useDataHandlers;

function sortItems(items: ICartItemUI[]) {
  return items.sort((a, b) => (b.product.createdAt || 0) - (a.product.createdAt || 0));
}

function insertAndUpdateItems(oldItems: ICartItemUI[], newItems: ICartItemUI[], isIncreasingQuantity = false) {
  const newProductIds = newItems.map(({ id }) => id);

  const items = [
    ...newItems.map((item) => {
      const oldItem = oldItems.find(({ id }) => id === item.id);
      if (oldItem) {
        return {
          ...item,
          product: {
            ...item.product,
            quantity: isIncreasingQuantity
              ? (oldItem?.product.quantity || 0) + CART.PRODUCTS.QUANTITY_UNIT
              : item.product.quantity,
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
}
