import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { QUERY_KEY as cartQueryKey } from "./useCartListQuery";

const BASE_URL = "http://localhost:3003";

const fetcher = (cardId: number) => axios.delete(`${BASE_URL}/carts/${cardId}`);

const useCartListMutationDelete = () => {
  const queryClient = useQueryClient();

  return useMutation(fetcher, {
    onSuccess: () => queryClient.invalidateQueries(cartQueryKey),
  });
};

export default useCartListMutationDelete;
