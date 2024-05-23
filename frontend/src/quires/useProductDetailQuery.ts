import axios from "axios";
import { useQuery } from "react-query";

import { ProductDetail } from "../types";

export const QUERY_KEY = "/products";

const BASE_URL = "http://localhost:3003";

const fetcher = (id: number) =>
  axios.get<ProductDetail>(`${BASE_URL}/products/${id}`).then(({ data }) => {
    return data;
  });

const useProductDetailQuery = (id: number) => {
  return useQuery([QUERY_KEY, id], () => fetcher(id));
};

export default useProductDetailQuery;
