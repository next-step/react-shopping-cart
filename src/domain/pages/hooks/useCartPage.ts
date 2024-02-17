import { useState, useEffect } from 'react';
import { useDialog } from 'common/hooks';
import { useCart } from 'domain/hooks';
import { useAppSelector } from 'store';
const useCartPage = () => {
  const errorMessage = useAppSelector((state) => state.cartReducer.errorMessage);

  const [checkbox, setcheckBox] = useState(false);
  const { getCartItems, updateOrderedCartItem, cartList, totalAmount, totalPrice, status } = useCart();
  const { setDialogMessage } = useDialog();

  const handleSelectAllCheckBox = () => {
    setcheckBox(!checkbox);
    updateOrderedCartItem(checkbox);
  };
  const handleRemoveButton = () => {
    setDialogMessage('deleteCartItem');
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return {
    checkbox,
    handleSelectAllCheckBox,
    handleRemoveButton,
    cartList,
    totalAmount,
    totalPrice,
    status,
    errorMessage,
  };
};

export default useCartPage;
