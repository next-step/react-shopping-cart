import { useState, useEffect } from 'react';
import { useCart, useDialog } from 'common/hooks';
const useCartPage = () => {
  const [check, setCheck] = useState(false);
  const { getCartFromServer, updateCheckAllServerCartItem, cartList, totalAmount, totalPrice, status } = useCart();
  const { showDialogUI } = useDialog();

  const handleCheckBox = () => {
    setCheck(!check);
    updateCheckAllServerCartItem(check);
  };
  const handleDeleteButton = () => {
    showDialogUI('deleteCartItem');
  };

  useEffect(() => {
    getCartFromServer();
  }, []);

  return { check, handleCheckBox, handleDeleteButton, cartList, totalAmount, totalPrice, status };
};

export default useCartPage;
