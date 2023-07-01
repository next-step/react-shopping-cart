import { useInfiniteQuery } from "react-query";
import { API_URL, requestMyOrders } from "../apis";

export const QUERY_KEY = API_URL.ORDERS;
export const FETCHING_UNIT = 2;

const useOrdersQuery = () => {
  return useInfiniteQuery(
    QUERY_KEY,
    async ({ pageParam = 0 }) => {
      const res = await requestMyOrders({
        page: pageParam + 1,
        unit: FETCHING_UNIT,
      });
      return res.data;
    },

    {
      getNextPageParam: (lastPage) => lastPage.page < lastPage.endOfPage,
    },
  );
};

export default useOrdersQuery;
