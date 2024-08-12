import { useQuery } from "@tanstack/react-query";
import { getQueryOptions } from "../../Apis/QueryOptions/QueryOptions";

export const useProductsQuery = ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  return useQuery(getQueryOptions({ page: page, limit: limit }));
};
