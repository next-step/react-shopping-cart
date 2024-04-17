import { createLazyFileRoute } from "@tanstack/react-router";
import MyOrdersPage from "../../domains/myorders/MyOrdersPage";

export const Route = createLazyFileRoute("/myorders/")({
  component: Index,
});

function Index() {
  return <MyOrdersPage />;
}
