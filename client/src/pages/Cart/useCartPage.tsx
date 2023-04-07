import { useState, useEffect } from 'react';
import { useCartStore, useDialog } from 'hooks';
const useCartPage = () => {
  const [check, setCheck] = useState(false);
  const { GetCart, checkAllCartItem, cartList, totalAmount, totalPrice } = useCartStore();
  const { showDialogUI } = useDialog();

  const handleCheckBox = () => {
    setCheck(!check);
    checkAllCartItem(check);
  };
  const handleDeleteButton = () => {
    showDialogUI('deleteCheckedCartItem');
  };

  useEffect(() => {
    GetCart();
  }, []);

  return { check, handleCheckBox, handleDeleteButton, cartList, totalAmount, totalPrice };
};

export default useCartPage;
