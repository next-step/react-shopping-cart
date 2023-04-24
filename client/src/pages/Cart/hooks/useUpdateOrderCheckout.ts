import { useMutation, useRouter } from 'hooks';
import { PATHS } from 'constants/router';
import { updateOrderCheckout } from 'api';

function useUpdateOrderCheckout() {
  const { navigate } = useRouter();

  return useMutation({
    mutation: updateOrderCheckout,
    onSuccess: () => {
      navigate(PATHS.ORDER_CHECKOUT);
    },
  });
}

export default useUpdateOrderCheckout;
