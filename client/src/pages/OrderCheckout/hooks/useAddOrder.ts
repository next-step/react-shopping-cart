import { useMutation, useRouter } from 'hooks';
import { addOrder } from 'api';
import { PATHS } from 'constants/router';

function useAddOrder() {
  const { navigate } = useRouter();

  return useMutation({
    mutation: addOrder,
    onSuccess: () => {
      navigate(PATHS.ORDER);
    },
  });
}

export default useAddOrder;
