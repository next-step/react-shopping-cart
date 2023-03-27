import { useState, useEffect } from 'react';
import { useCart, useDialog } from 'hooks';
const useCartPage = () => {
  const [check, setCheck] = useState(false);
  const { GetCart, CheckAllCart, cartList, totalAmount, totalPrice } = useCart();
  const { handleDialogUIMessage } = useDialog();

  useEffect(() => {
    GetCart();
  }, []);

  const handleCheckBox = () => {
    setCheck(!check);
    CheckAllCart(check);
  };
  const handleDeleteButton = () => {
    handleDialogUIMessage('deleteCheckCart');
  };

  return { check, handleCheckBox, handleDeleteButton, cartList, totalAmount, totalPrice };
};

export default useCartPage;
