import { useEffect } from 'react';
import useFetchCartData from './useFetchCartData';
import { useMutation } from '@/hooks';

function useSelectedDelete(ids: number[]) {
  const { refetchCartData } = useFetchCartData();

  const [deleteProductSelected, { fetchStatus, error }] = useMutation(
    `/carts?${ids.map(id => `cartId=${id}`).join('&')}`,
    'DELETE',
  );

  const onSelectedDelete = () => {
    deleteProductSelected({});
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
    onSelectedDelete,
    fetchStatus,
  };
}

export default useSelectedDelete;
