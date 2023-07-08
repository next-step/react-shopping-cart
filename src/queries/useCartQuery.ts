import { useInfiniteQuery } from "react-query";
import { API_URL, requestCartItems } from "../apis";

export const QUERY_KEY = API_URL.CART;
export const FETCHING_UNIT = 3;

const useCartQuery = () => {
  return useInfiniteQuery(
    QUERY_KEY,
    async ({ pageParam = 0 }) => {
      const res = await requestCartItems({
        page: pageParam + 1,
        unit: FETCHING_UNIT,
      });
      return res.data;
    },
    {
      getNextPageParam: (lastPage) => lastPage.page < lastPage.endOfPage,
      suspense: true,
      useErrorBoundary: true,
    },
  );
};

export default useCartQuery;
