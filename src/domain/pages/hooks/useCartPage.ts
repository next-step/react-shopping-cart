import { useState, useEffect } from 'react';
import { useCart, useDialog } from 'common/hooks';
const useCartPage = () => {
  const [check, setCheck] = useState(false);
  const { getCartItems, updateOrderCartItem, cartList, totalAmount, totalPrice, status } = useCart();
  const { setDialogUI } = useDialog();

  const handleSelectAllCheckBox = () => {
    setCheck(!check);
    updateOrderCartItem(check);
  };
  const handleRemoveButton = () => {
    setDialogUI('deleteCartItem');
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return { check, handleSelectAllCheckBox, handleRemoveButton, cartList, totalAmount, totalPrice, status };
};

export default useCartPage;
