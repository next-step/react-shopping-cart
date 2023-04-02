import { useMutation, useRouter } from 'hooks';
import { useCartActions, useCheckedCartIds } from 'store/cart';
import { addOrder } from 'api';
import { PATHS } from 'constants/router';

function useAddOrder() {
  const { navigate } = useRouter();
  const { remove: removeCarts } = useCartActions();
  const checkedCartIds = useCheckedCartIds();

  return useMutation({
    mutation: addOrder,
    onSuccess: () => {
      removeCarts(Array.from(checkedCartIds));
      navigate(PATHS.ORDER_CHECKOUT);
    },
  });
}

export default useAddOrder;
