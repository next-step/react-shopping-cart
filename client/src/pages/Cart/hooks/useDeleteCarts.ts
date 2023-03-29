import { useMutation } from 'hooks';
import { deleteCarts } from 'api';

import { Carts } from 'types/cart';

interface UseDeleteCartsProps {
  onSuccess: () => void;
}

function useDeleteCarts({ onSuccess }: UseDeleteCartsProps) {
  const handleError = () => {
    window.alert('장바구니에서 상품을 삭제하는데 실패했습니다.');
  };

  return useMutation<Carts, number[]>({
    mutation: deleteCarts,
    onSuccess,
    onError: handleError,
  });
}

export default useDeleteCarts;
