import { createLazyFileRoute } from "@tanstack/react-router";
import ShopsPage from "../../domains/shops/ShopsPage";
import { Suspense } from "react";
import Loader from "../../domains/shared/components/primitive/Loader/Loader";

export const Route = createLazyFileRoute("/shops/")({
  component: Shops,
});

function Shops() {
  return (
    <Suspense fallback={<Loader />}>
      <ShopsPage />
    </Suspense>
  );
}
