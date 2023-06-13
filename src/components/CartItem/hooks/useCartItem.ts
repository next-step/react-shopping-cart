import { useCallback, useMemo } from "react";
import { IProduct } from "../../../domain/shopping-cart/types";
import { CART } from "../../../domain/shopping-cart/constants";
import useCartDataHandlers from "../../../hooks/useCart";

const {
  PRODUCTS: { AMOUNT_UNIT },
} = CART;

const useCartItem = (product: IProduct) => {
  const {
    cart,
    cartDataHandlers: { updateProduct, deleteProduct },
  } = useCartDataHandlers();

  const { price, checked, amount = 1 } = product;

  const totalPrice = useMemo(() => price * amount, [amount]);

  const handleToggleChecked = useCallback(() => {
    updateProduct({ ...product, checked: !checked });
  }, [cart]);

  const handleRemovingProduct = useCallback(() => {
    if (!confirm("장바구니에서 선택한 상품을 삭제하시겠습니까?")) return;

    deleteProduct(product);
  }, [cart]);

  const handleIncrement = useCallback(() => {
    updateProduct({ ...product, amount: amount + AMOUNT_UNIT });
  }, [cart]);

  const handleDecrement = useCallback(() => {
    if (amount - 1 === 0) return;

    updateProduct({ ...product, amount: amount - AMOUNT_UNIT });
  }, [cart]);

  return { cart, totalPrice, handleToggleChecked, handleRemovingProduct, handleIncrement, handleDecrement };
};

export default useCartItem;
