import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';

export default function useAddProductToCart() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleClickModal = useCallback((status: boolean) => {
    if (!status) {
      setOpenModal(false);
      return;
    }

    navigate('/cart');
  }, []);

  return {
    openModal,
    setOpenModal,
    handleClickModal
  };
}
