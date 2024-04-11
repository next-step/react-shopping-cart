import { createLazyFileRoute } from "@tanstack/react-router";

import List from "../pages/product/list/List";
import { ROUTE_PATH } from "../domain/route";

export const Route = createLazyFileRoute(ROUTE_PATH.PRODUCT)({
  component: List,
});
