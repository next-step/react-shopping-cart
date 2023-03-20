import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { CartService } from '../service';
import { IProduct } from '../types/shoppingCart';

export default function useAddProductToCart() {
  const { addCart } = CartService();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const addProductWithModal = useCallback((item: IProduct) => {
    addCart(item);
    setModal(true);
  }, []);

  const handleClickModal = useCallback((status: boolean) => {
    if (!status) {
      setModal(false);
      return;
    }

    navigate('/cart');
  }, []);

  return {
    modal,
    addProductWithModal,
    handleClickModal
  };
}
