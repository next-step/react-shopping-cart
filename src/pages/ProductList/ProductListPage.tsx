import useFetch from '@hooks/useFetch';
import { ProductList } from '@/types';
import ProductItem from './components/ProductItem';
import { Link } from 'react-router-dom';
import { ROUTES_URL } from '@/RootRouter';

function ProductListPage() {
  const { state, loading, error } = useFetch<{
    ok: boolean;
    data: ProductList;
  }>('/products');

  if (loading) return <>loading...</>;
  if (error) return <>error...</>;

  return (
    <div className="pt-4 grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-5 ">
      {state?.data.map(product => {
        return (
          <Link className="mx-auto" to={`${ROUTES_URL.PRODUCT}/${product.id}`} key={product.id}>
            <ProductItem product={product} />
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
