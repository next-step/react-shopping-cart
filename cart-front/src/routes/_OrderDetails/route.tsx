import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_OrderDetails")({
  component: () => (
    <div className="bg-gray-100">
      <Outlet />
    </div>
  ),
});
