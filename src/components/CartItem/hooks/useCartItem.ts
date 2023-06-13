import { useCallback, useMemo } from "react";
import { CART } from "../../../domain/constants";
import { useCart } from "../../../hooks";
import { ICartItemUI } from "../../types";

const {
  PRODUCTS: { QUANTITY_UNIT },
} = CART;

const useCartItem = (item: ICartItemUI) => {
  const {
    cart,
    cartDataHandlers: { updateItem, deleteItem },
  } = useCart();

  const { product } = item;
  const { price, checked, quantity = 1 } = product;

  const totalPrice = useMemo(() => price * quantity, [quantity]);

  const toggleChecked = useCallback(() => {
    updateItem({ ...item, product: { ...product, checked: !checked } });
  }, [cart]);

  const removeItem = useCallback(() => {
    if (!confirm("장바구니에서 선택한 상품을 삭제하시겠습니까?")) return;

    deleteItem(item);
  }, [cart]);

  const handleIncrement = useCallback(() => {
    updateItem({ ...item, product: { ...product, quantity: quantity + QUANTITY_UNIT } });
  }, [cart]);

  const handleDecrement = useCallback(() => {
    if (quantity - 1 === 0) return;

    updateItem({ ...item, product: { ...product, quantity: quantity - QUANTITY_UNIT } });
  }, [cart]);

  return {
    totalPrice,
    handlers: {
      toggleChecked,
      removeItem,
      handleIncrement,
      handleDecrement,
    },
  };
};

export default useCartItem;
