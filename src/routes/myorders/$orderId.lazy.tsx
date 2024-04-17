import { createLazyFileRoute } from "@tanstack/react-router";
import MyOrderPage from "../../domains/myorder/MyOrderPage/MyOrderPage";

export const Route = createLazyFileRoute("/myorders/$orderId")({
  component: () => <MyOrderPage />,
});
