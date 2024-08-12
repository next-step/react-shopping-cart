import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "../../Pages/ProductDetail/ProductDetail";
import { ProductDetailQueryOptions } from "../../Apis/QueryOptions/QueryOptions";
export const Route = createFileRoute("/_ProductDetail/Products/$ParamsId")({
  component: ProductDetail,
  loader: ({ context: { queryClient }, params: { ParamsId } }) => {
    return queryClient.ensureQueryData(ProductDetailQueryOptions(ParamsId));
  },
});
