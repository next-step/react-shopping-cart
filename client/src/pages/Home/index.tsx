import { Suspense } from 'react';

import { ErrorBoundary } from 'components';

import { ProductList, ProductListFallback } from './components';

function Home() {
  return (
    <div className="container">
      <ErrorBoundary>
        <Suspense fallback={<ProductListFallback />}>
          <ProductList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Home;
