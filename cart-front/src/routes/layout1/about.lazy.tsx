import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/layout1/")({
  component: Test,
});

function Test() {
  return <div className="p-2">Hello from About!</div>;
}
