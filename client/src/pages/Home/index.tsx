import { Suspense } from 'react';
import { ProductList, ProductListFallback } from './components';

function Home() {
  return (
    <div className="container">
      <Suspense fallback={<ProductListFallback />}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export default Home;
