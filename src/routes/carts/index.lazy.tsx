import { createLazyFileRoute } from "@tanstack/react-router";
import CartsPage from "../../domains/carts/CartsPage/CartsPage";

export const Route = createLazyFileRoute("/carts/")({
  component: CartsPage,
});
