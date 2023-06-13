import { useCallback, useMemo } from "react";
import { ICartItem } from "../../../domain/shopping-cart/types";
import { CART } from "../../../domain/shopping-cart/constants";
import useCartDataHandlers from "../../../hooks/useCart";

const {
  PRODUCTS: { QUANTITY_UNIT },
} = CART;

const useCartItem = (item: ICartItem) => {
  const {
    cart,
    cartDataHandlers: { updateItem, deleteItem },
  } = useCartDataHandlers();

  const { product } = item;
  const { price, checked, quantity = 1 } = product;

  const totalPrice = useMemo(() => price * quantity, [quantity]);

  const handleToggleChecked = useCallback(() => {
    updateItem({ ...item, product: { ...product, checked: !checked } });
  }, [cart]);

  const handleRemovingItem = useCallback(() => {
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

  return { cart, totalPrice, handleToggleChecked, handleRemovingItem, handleIncrement, handleDecrement };
};

export default useCartItem;
