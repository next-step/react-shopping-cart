import { useQuery } from "react-query";
import { API_URL, requestCartItems } from "../apis";

export const QUERY_KEY = API_URL.CART;

const fetcher = () => requestCartItems({ page: 1 }).then(({ data }) => data);

const useCartQuery = () => {
  return useQuery(QUERY_KEY, fetcher);
};

export default useCartQuery;
