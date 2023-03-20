import PageContainer from 'components/PageContainer';
import useAxios from 'hooks/useAxios';
import { Product } from 'types/products';
import VerticalProductCard from '../../components/VerticalProductCard';
import * as StyledProductsList from './ProductsList.styled';

const url = { url: '/products' };
const ProductsList = () => {
  const { isLoading, data } = useAxios<Product[]>(url);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <PageContainer>
      <StyledProductsList.GridContainer>
        {data?.map((product: Product) => (
          <VerticalProductCard key={product.id} product={product} />
        ))}
      </StyledProductsList.GridContainer>
    </PageContainer>
  );
};

export default ProductsList;
