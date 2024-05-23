import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { QUERY_KEY as cartQueryKey } from "./useCartListQuery";

import { BASE_URL } from "../components/constant";

import { ProductDetail } from "../types";

const fetcher = (product: ProductDetail) =>
  axios.post(`${BASE_URL}/carts`, { product });

const useCartListMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(fetcher, {
    onSuccess: () => queryClient.invalidateQueries(cartQueryKey),
  });
};

export default useCartListMutation;
