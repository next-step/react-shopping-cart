import useFetch from '@hooks/useFetch';
import { ProductList } from '@/types';
import ProductCards from './components/ProductCards';

function ProductListPage() {
  const { state, loading, error } = useFetch<ProductList>('/products');

  if (loading) return <>loading...</>;
  if (error) return <>error...</>;

  return (
    <div className="pt-4 grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-5 ">
      <ProductCards products={state?.data} />
    </div>
  );
}

export default ProductListPage;
