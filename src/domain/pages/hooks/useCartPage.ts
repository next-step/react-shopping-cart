import { useState, useEffect } from 'react';
import { useDialog } from 'common/hooks';
import { useCart } from 'domain/hooks';

const useCartPage = () => {
  const [checkbox, setcheckBox] = useState(false);
  const { getCartItems, updateOrderCartItem, cartList, totalAmount, totalPrice, status } = useCart();
  const { setDialogMessage } = useDialog();

  const handleSelectAllCheckBox = () => {
    setcheckBox(!checkbox);
    updateOrderCartItem(checkbox);
  };
  const handleRemoveButton = () => {
    setDialogMessage('deleteCartItem');
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return { checkbox, handleSelectAllCheckBox, handleRemoveButton, cartList, totalAmount, totalPrice, status };
};

export default useCartPage;
