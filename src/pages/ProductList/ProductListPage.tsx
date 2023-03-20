import useFetch from '@hooks/useFetch';
import { ProductList } from '@/types';

function ProductListPage() {
  const { state, loading, error } = useFetch<{
    ok: boolean;
    data: ProductList;
  }>('/products');

  if (loading) return <>loading...</>;
  if (error) return <>error...</>;

  return (
    <div>
      {state?.data.map(product => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
}

export default ProductListPage;
