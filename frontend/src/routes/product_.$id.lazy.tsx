import { createLazyFileRoute } from "@tanstack/react-router";
import Detail from "../pages/product/detail/Detail";
import { ROUTE_PATH } from "../domain/route";

export const Route = createLazyFileRoute(ROUTE_PATH.PRODUCT_DETAIL)({
  component: PostComponent,
});

function PostComponent() {
  const { id } = Route.useParams();
  return <Detail id={Number(id)} />;
}
