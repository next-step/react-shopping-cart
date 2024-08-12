import { createFileRoute } from "@tanstack/react-router";
import { Products } from "../../Pages/Products/Products";
export const Route = createFileRoute("/Products")({
  component: Products,
});
