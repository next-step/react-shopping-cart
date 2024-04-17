import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import Loader from "../../domains/shared/components/primitive/Loader/Loader";
import ShopPage from "../../domains/shop/ShopPage";

export const Route = createLazyFileRoute("/shops/$id")({
  component: () => (
    <Suspense fallback={<Loader />}>
      <ShopPage />
    </Suspense>
  ),
});
