import { useMutation, useRouter } from 'hooks';
import { useCartActions, useIdsOfCheckedCarts } from 'store/cart';
import { addOrder } from 'api';
import { PATHS } from 'constants/router';

function useAddOrder() {
  const { navigate } = useRouter();
  const { remove: removeCarts } = useCartActions();
  const checkedCartIds = useIdsOfCheckedCarts();

  return useMutation({
    mutation: addOrder,
    onSuccess: () => {
      removeCarts(checkedCartIds);
      navigate(PATHS.ORDER_CHECKOUT);
    },
  });
}

export default useAddOrder;
