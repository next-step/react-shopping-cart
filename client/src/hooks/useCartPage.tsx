import { useState, useEffect } from 'react';
import useCart from './useCart';

const useCartPage = () => {
  const [check, setCheck] = useState(false);
  const { GetCart, CheckAllCart, DeleteCheckedCart, cartList, totalAmount, totalPrice } = useCart();

  useEffect(() => {
    GetCart();
  }, []);

  const handleCheckBox = () => {
    setCheck(!check);
    CheckAllCart(check);
  };
  const handleDeleteButton = () => {
    DeleteCheckedCart();
  };

  return { check, handleCheckBox, handleDeleteButton, cartList, totalAmount, totalPrice };
};

export default useCartPage;
