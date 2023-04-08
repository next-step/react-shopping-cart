import { useEffect } from 'react';
import useFetchCartData from './useFetchCartData';
import { useMutation } from '@/hooks';

function useDelete(id: number) {
  const { refetchCartData } = useFetchCartData();

  const [deleteProduct, { fetchStatus, error }] = useMutation(`/carts/${id}`, 'DELETE');

  const onDelete = () => {
    deleteProduct({});
  };

  useEffect(() => {
    if (fetchStatus === 'SUCCESS') {
      refetchCartData();
    }
    if (fetchStatus === 'FAIL') {
      window.alert(`Error: ${error?.response?.data.message}`);
    }
  }, [fetchStatus]);

  return {
    onDelete,
    fetchStatus,
  };
}

export default useDelete;
