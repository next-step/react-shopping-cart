import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
});
