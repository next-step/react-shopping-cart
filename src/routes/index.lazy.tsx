import ProductCardList from '@/components/ProductCardList';
import ProductSkeletonCardList from '@/components/ProductSkeletonCardList';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-5 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-4 gap-5">
        <Suspense fallback={<ProductSkeletonCardList />}>
          <ProductCardList />
        </Suspense>
      </div>
    </div>
  );
}
