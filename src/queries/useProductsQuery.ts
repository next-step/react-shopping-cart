import { useInfiniteQuery } from "react-query";
import { API_URL, requestProducts } from "../apis";

export const QUERY_KEY = API_URL.PRODUCTS;
export const FETCHING_UNIT = 12;

const useProductsQuery = () => {
  return useInfiniteQuery(
    QUERY_KEY,
    async ({ pageParam = 0 }) => {
      const res = await requestProducts({
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

export default useProductsQuery;
