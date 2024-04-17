import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/orders/")({
  component: () => <div>Hello /orders/!</div>,
});
