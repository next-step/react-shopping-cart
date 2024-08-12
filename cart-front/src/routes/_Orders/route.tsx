import { Outlet, createFileRoute } from "@tanstack/react-router";
import Flex from "../../ComponentsPrototype/Layout/Flex";
import Box from "../../ComponentsPrototype/Layout/Box";
export const Route = createFileRoute("/_Orders")({
  component: () => (
    <Box className="bg-gray-100">
      <Flex className="gap-5 p-12 px-60 ">
        <Outlet />
      </Flex>
    </Box>
  ),
});
